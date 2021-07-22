// import * as fs from "fs";
// import * as path from "path";
const fs = require("fs");
const path = require("path");

// import input from "../../src/json/unit";
// import skill from "../../src/json/unit-skill";

// import { SkillEntity } from "../../src/libs/DB/Skill";
// import { BuffEffect, BuffEffectValue, BUFFEFFECT_TYPE } from "../../src/libs/Buffs/BuffEffect";
// import { TARGET_TYPE } from "../../src/libs/Types/Enums";

const targetDBs = require("../targets");
targetDBs.forEach(targetDB => {
	const targetDir = path.resolve(__dirname, "..", "..", "external", "json", targetDB);

	const input = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, "..", "..", "db", targetDB, "facility.json"), { encoding: "utf-8" })
			.replace(/export default /, "")
			.replace(/;$/, ""),
	);

	const typeGroup = {
		WoodMaking1: "FacilityResource",
		StoneMaking1: "FacilityResource",
		IronMaking1: "FacilityResource",
		WoodMaking2: "FacilityResource",
		IronMaking2: "FacilityResource",
		StoneMaking2: "FacilityResource",
		WoodMaking3: "FacilityResource",
		StoneMaking3: "FacilityResource",
		IronMaking3: "FacilityResource",

		NutrientMaking1: "Resource",
		MetalMaking1: "Resource",
		PowerMaking1: "Resource",
		NutrientMaking2: "Resource",
		MetalMaking2: "Resource",
		PowerMaking2: "Resource",
		NutrientMaking3: "Resource",
		MetalMaking3: "Resource",
		PowerMaking3: "Resource",

		TrainingSupport1: "EXP",
		TrainingSupport2: "EXP",
		TrainingSupport3: "EXP",
		TrainingSupport4: "EXP",

		TankerMaking1: "BioroidMaking",
		NukerMaking1: "BioroidMaking",
		SupporterMaking1: "BioroidMaking",
		TankerMaking2: "BioroidMaking",
		NukerMaking2: "BioroidMaking",
		SupporterMaking2: "BioroidMaking",

		EquipRein: "Equipment",
		EquipDisassemble: "Equipment",

		Cafeteria: "Cafeteria",

		FacilityPartsMaking: "FacilityUpgrade",
		MaterialMaking: "WorkshopResource",
	};

	const reta = [];
	Object.entries(input).forEach(([id, x]) => {
		reta.push({
			uid: id,
			type: typeGroup[id] || "Unknown",

			name: x.name,
			image: x.image,
			size: x.size,
		});
	});

	fs.mkdirSync(targetDir, { recursive: true });
	fs.writeFileSync(
		path.join(targetDir, "filterable.facility.json"),
		JSON.stringify(reta),
		{ encoding: "utf-8" },
	);
});
