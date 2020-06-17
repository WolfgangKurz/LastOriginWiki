export interface CharFilterFlag {
	rarity: {
		ss: boolean;
		s: boolean;
		a: boolean;
		b: boolean;
	};
	type: {
		light: boolean;
		air: boolean;
		heavy: boolean;
	};
	role: {
		attacker: boolean;
		defender: boolean;
		supporter: boolean;
	};
	body: {
		bioroid: boolean;
		ags: boolean;
	};
}
