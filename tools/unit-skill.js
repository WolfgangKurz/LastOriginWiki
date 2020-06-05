const fs = require("fs");
const path = require("path");

const readline = require("readline");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const TOKEN_PATH = "token.json";

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

function listMajors (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitSkill!A2:K",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.some(x => !x || x.length === 0)) return;

				const unit = row[0];
				const slot = row[1];
				const type = row[3];

				const key = `${type}${slot}`;
				if (!(unit in ret)) ret[unit] = {};

				ret[unit][key] = {
					key,
					name: row[2],
					icon: row[4],
					range: parseInt(row[5], 10),
					ap: parseInt(row[6], 10),
					target: row[7],
					bound: row[8],
					desc: row[9].split("\n"),
					// effect: row[10].split("\n"),
				};
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-skill.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

fs.readFile("credentials.json", (err, content) => {
	if (err) return console.log("Error loading client secret file:", err);
	authorize(JSON.parse(content), listMajors);
});
