const fs = require("fs");
const glob = require("glob");

glob.sync("./external/assets/models/**/*.png")
	.forEach(x => fs.unlinkSync(x));
