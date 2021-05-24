const fs = require("fs");
const path = require("path");
const https = require("https");

const base = path.resolve(__dirname, "..", "external", "json");
function travel (dir, callback) {
	fs.readdirSync(dir)
		.forEach(x => {
			const p = path.resolve(dir, x);
			if (fs.statSync(p).isDirectory())
				travel(p, callback);
			else
				callback(p);
		});
}

const target = ["locale", "unit"];

const lists = [];
const list = [];
travel(base, (p) => {
	const prefix = "https://lo.swaytwig.com/json/";
	const m = p.substr(base.length + 1).replace(/\\/g, "/");
	if (target.some(t => m.includes(t)))
		list.push(prefix + m);

	if (list.length >= 20) {
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
	request(list, requestLine);
};
requestLine();
