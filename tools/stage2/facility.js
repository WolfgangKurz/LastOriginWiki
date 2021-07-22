const fs = require("fs");
const path = require("path");

const targetDBs = require("../targets");
targetDBs.forEach(targetDB => {
	const targetDir = path.resolve(__dirname, "..", "..", "external", "json", targetDB, "facility");

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

	Object.entries(input).forEach(([id, x]) => {
		const dat = {
			uid: id,
			type: typeGroup[id] || "Unknown",

			// name: x.name,
			image: x.image,
			size: x.size,

			duration: x.duration,
			list: x.list,
		};

		fs.mkdirSync(targetDir, { recursive: true });
		fs.writeFileSync(
			path.join(targetDir, `${id}.json`),
			JSON.stringify(dat),
			{ encoding: "utf-8" },
		);
	});
});
