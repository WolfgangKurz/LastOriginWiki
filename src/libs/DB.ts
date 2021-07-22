import { getCookie } from "@/libs/Functions";

export function ChangeDB (db: DBTypes): void {
	document.cookie = `LO_DB=${db}; path=/`;
	window.location.reload(true);
}

export type DBTypes = "korea" | "japan";
export const DBList: DBTypes[] = ["korea", "japan"];

function DBValidation (name: string | undefined): DBTypes {
	const list = DBList as string[];
	if (!name || !list.includes(name)) return "korea";
	return name as DBTypes;
}

export const CurrentDB = DBValidation(getCookie("LO_DB", "korea"));
