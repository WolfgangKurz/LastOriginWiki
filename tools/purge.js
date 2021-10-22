const fs = require("fs");
const path = require("path");
const https = require("https");

const base = path.resolve(__dirname, "..", "external", "json");
function travel (dir, callback) {
	const dirs = [];
	fs.readdirSync(dir)
		.forEach(x => {
			const p = path.resolve(dir, x);
			if (fs.statSync(p).isDirectory())
				dirs.push(p);
			else
				callback(p);
		});

	dirs.forEach(p => travel(p, callback));
}

const locales = ["korea"];
const target = ["locale", "unit", "world", "map", "consumable", "enemy", "skill", "skin", "dialogue", "quote"];

const lists = [];
const list = [];
travel(base, (p) => {
	const prefix = "https://lo.swaytwig.com/json/";
	const m = p.substr(base.length + 1).replace(/\\/g, "/");
	if (target.some(t => (locales.length === 0 || locales.some(locale => m.includes(`${locale}/`))) && m.includes(t)))
		list.push(prefix + m);

	if (list.length >= 30) {
		lists.push([...list]);
		list.splice(0, list.length);
	}
});
if (list.length > 0)
	lists.push([...list]);

function request (list, callback) {
	if (!list || list.length === 0) return;
	console.log(list);

	const req = https.request({
		method: "POST",
		port: 443,
		hostname: "api.cloudflare.com",
		path: "/client/v4/zones/3689925f1363f3f4ace7116b4ff7039d/purge_cache",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer AypURrrMLw96jFVzWiF1_QrxlR51q1DjaS6RIShh",
			// "X-Auth-Email": "wolfgangkurzdev@gmail.com",
			// "X-Auth-Key": "0aab35b62eec99d73af0f0b1b3e1c7de",
		},
	}, res => {
		console.log(`statusCode: ${res.statusCode}`);
		res.on("data", d => {
			process.stdout.write(d);
			callback();
		});
	});
	req.write(JSON.stringify({
		files: list,
	}));
	req.end();
}

const requestLine = () => {
	if (lists.length === 0) return;

	const list = lists[0];
	lists.splice(0, 1);
	setTimeout(() => {
		request(list, requestLine);
	}, 1500);
};
requestLine();
