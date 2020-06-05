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
		range: "UnitTable!A2:K",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const id = row[0];
				const rarity = row[1];
				const type = row[2];
				const role = row[3];
				const name = row[4];
				const shortname = row[5];
				const group = row[6];
				const shortgroup = row[7];
				const groupkey = row[8];
				const body = row[9];
				const pro = row[10];

				const x = {
					id: parseInt(id, 10),
					rarity,
					type,
					role,
					name,
					shortname,
					group,
					shortgroup,
					groupkey,
					body,
				};
				if (pro)
					x.promotions = pro.split(",");

				ret.push(x);
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit.json"),
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
