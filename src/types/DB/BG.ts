export interface BGSimple {
	key: string;
	image: string;
	price: "default" | "-" | number;
}

export interface BGWithRequirements extends BGSimple {
	req: string[];
	reqType: "&" | "|";
}

type BG = BGSimple | BGWithRequirements;
export default BG;
