export default class EntitySource {
	public readonly source: string;

	public constructor (source: string) {
		this.source = source;
	}

	private get Parts () {
		return this.source.split(":");
	}

	// -------------- 교환소
	/** 교환소 교환 획득 여부 */
	public get IsExchange () {
		return this.Parts.includes("Exc");
	}

	/** 월간 교환소 획득 여부 (전투원/장비 탭) */
	public get IsMonthly () {
		return this.IsExchange && this.Parts.length === 3;
	}

	/** 월간 교환소 정보 (전투원/장비 탭) */
	public get MonthlyData () {
		if (!this.IsMonthly) return null;

		return {
			year: parseInt(this.Parts[1], 10),
			month: parseInt(this.Parts[2], 10),
		};
	}

	/** 이벤트 교환소 교환에 필요한 자원 및 수량 */
	public get ExchangePrice () {
		if (!this.IsEvent || !this.IsExchange) return null;

		const offset = this.Parts.findIndex(x => x === "Exc");
		return {
			item: this.Parts[offset + 1],
			value: parseInt(this.Parts[offset + 2], 10),
		};
	}

	public get ExchangeItemName () {
		const exc = this.ExchangePrice;
		if (!exc) return "";

		switch (exc.item) {
			case "FixMat": return "수복 자재";
			case "FixTool": return "수복 공구";
			case "WorldTreeSeed": return "세계수의 씨앗";
			case "WorldTreeTwig": return "세계수의 가지";
			case "WorldTreeLeaf": return "세계수의 잎";
		}
		return "???";
	}
	// -------------- 교환소

	// -------------- 이벤트
	/** 이벤트 획득 여부 */
	public get IsEvent () {
		return this.Parts[0] === "Ev";
	}

	/** 이벤트 이름 */
	public get EventName () {
		if (!this.IsEvent) return "";

		switch (this.Parts[1]) {
			case "OrcaFix":
				return "오르카호를 수복하라!";
			case "FairyAria":
				return "요정 마을의 아리아";
		}
		return this.Parts[1];
	}

	/** 부수를 포함한 이벤트 이름 */
	public get FullEventName () {
		if (!this.IsEvent) return "";

		const part = this.Parts[2];
		if (part) return `${this.EventName} (${part}부)`;
		return this.EventName; // 부수가 없으면 이벤트 이름 그대로
	}
	// -------------- 이벤트

	// -------------- 맵
	public get IsSideMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts[3].includes("B");
		else
			return this.Parts[0].includes("B");
	}

	public get IsExMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts[3].includes("Ex");
		else
			return this.Parts[0].includes("Ex");
	}

	public get IsMap () {
		return !this.IsEternalWar && !this.IsApocrypha && !this.IsExchange;
	}

	public get IsReward () {
		if (this.IsEvent)
			return this.Parts[3][0] === "*";
		return this.Parts[0][0] === "*";
	}

	public get Map () {
		const index = this.IsEvent ? 3 : 0;
		return this.IsReward ? this.Parts[index].substr(1) : this.Parts[index];
	}
	// -------------- 맵

	// -------------- 외전
	public get IsApocrypha () {
		return this.Parts[0] === "Apo";
	}

	public get ApocryphaUnit () {
		if (!this.IsApocrypha) return 0;
		return parseInt(this.Parts[1], 10);
	}

	public get ApocryphaNumber () {
		if (!this.IsApocrypha) return 0;
		if (!this.Parts[2]) return 0;
		return parseInt(this.Parts[2], 10);
	}
	// -------------- 외전

	// -------------- 영전
	public get IsEternalWar () {
		return this.Parts[0] === "EternalWar";
	}

	public get EternalWarPrice () {
		if (!this.IsEternalWar) return 0;
		return parseInt(this.Parts[1], 10);
	}
	// -------------- 영전

	// -------------- 한정
	public get IsLimited () {
		return this.Parts[0] === "Limited";
	}
	// -------------- 한정

	public toString () {
		let output = "";

		if (this.IsLimited)
			output += "Limit";

		if (this.IsEternalWar)
			output += "EW";
		else if (this.IsApocrypha)
			output += "Apo";
		else if (this.IsExchange) {
			if (this.IsMonthly)
				output += "MExc";
			else if (this.IsEvent)
				output += "EExc";
			else
				output = "Exc"; // ???
		} else if (this.IsEvent) {
			if (this.IsReward)
				output += "*Ev";
			else
				output += "Ev";

			output += this.Map;
		} else
			output += this.Map;

		return output;
	}
}
