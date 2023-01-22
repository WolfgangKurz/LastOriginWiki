const input = `[00:00.00]Title - Singer
[00:00.00]
`
	.split(/[\r\n]/).filter(x => x)
	.map(r => {
		const reg = /^\[([0-9]{2}):([0-9]{2})\.([0-9]{2})\](.*)$/;
		const v = reg.exec(r);
		if(!v) console.log(r);
		const t = parseInt(v[1], 10) * 60 + parseInt(v[2], 10) + parseFloat(`0.${v[3]}`);
		const ly = v[4];

		return { time: t, text: ly };
	});

console.log(input);
