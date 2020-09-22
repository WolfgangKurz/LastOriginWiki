const fs = require("fs");
const path = require("path");

const readline = require("readline");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const TOKEN_PATH = path.join(__dirname, "token.json");

function getNewToken (oAuth2Client, callback) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: "offline",
		scope: SCOPES,
	});
	console.log("Authorize this app by visiting this url:", authUrl);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	rl.question("Enter the code from that page here: ", (code) => {
		rl.close();
		oAuth2Client.getToken(code, (err, token) => {
			if (err) return console.error("Error while trying to retrieve access token", err);
			oAuth2Client.setCredentials(token);

			fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
				if (err) return console.error(err);
				console.log("Token stored to", TOKEN_PATH);
			});
			callback(oAuth2Client);
		});
	});
}

function authorize (credentials, callback) {
	const {
		client_secret: clientSecret,
		client_id: clientId,
		redirect_uris: redirectURIs,
	} = credentials.installed;

	const oAuth2Client = new google.auth.OAuth2(
		clientId, clientSecret, redirectURIs[0]);

	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getNewToken(oAuth2Client, callback);
		oAuth2Client.setCredentials(JSON.parse(token));
		callback(oAuth2Client);
	});
}

module.exports = (func) => {
	fs.readFile(path.join(__dirname, "credentials.json"), (err, content) => {
		if (err) return console.log("Error loading client secret file:", err);
		authorize(JSON.parse(content), func);
	});
};
