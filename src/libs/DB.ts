import { getCookie, setCookie } from "@/libs/Cookie";

export function ChangeDB (db: DBTypes): void {
	setCookie("LO_DB", db);
	window.location.reload();
}

// export type DBTypes = "korea" | "japan";
// export const DBList: DBTypes[] = ["korea", "japan"];
export type DBTypes = "korea";
export const DBList: DBTypes[] = ["korea"];

function DBValidation (name: string | undefined): DBTypes {
	const list = DBList as string[];
	if (!name || !list.includes(name)) return "korea";
	return name as DBTypes;
}

export const CurrentDB = DBValidation(getCookie("LO_DB", "korea"));
