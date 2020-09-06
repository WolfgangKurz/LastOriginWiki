import { WorldNames } from "@/libs/Const";

export default class EntitySource {
	public readonly source: string;

	public constructor (source: string) {
		this.source = source;
	}

	private get Parts () {
		return this.source.split(":");
	}

	// -------------- SourceBadge 컴포넌트 사용
	/** 전용 장비 여부 */
	public get IsPrivateItem () {
		return this.Parts[0] === "Private";
	}

	/** 전용 장비 사용 가능 전투원 */
	public get PrivateId () {
		return parseInt(this.Parts[1], 10);
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

	public get ExchangeDate () {
		if (!this.IsExchange || this.IsEvent) return "";

		return `${this.Parts[1]}/${this.Parts[2]}`;
	}
	// -------------- 교환소

	// -------------- 이벤트
	/** 이벤트 획득 여부 */
	public get IsEvent () {
		return this.Parts[0] === "Ev";
	}

	/** 이벤트 Id */
	public get EventId () {
		if (this.IsEvent)
			return this.Parts[1];
		return "Story";
	}

	/** 이벤트 이름 */
	public get EventName () {
		if (!this.IsEvent) return "";

		return (this.Parts[1] in WorldNames) ? WorldNames[this.Parts[1]] : this.Parts[1];
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
	/** 사이드 스테이지 여부 */
	public get IsSideMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts[3].includes("B") || this.Parts[3].includes("s");
		else
			return this.Parts[0].includes("B") || this.Parts[0].includes("s");
	}

	/** Ex 스테이지 여부 */
	public get IsExMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts[3].includes("Ex");
		else
			return this.Parts[0].includes("Ex");
	}

	/** 맵 보상 여부 */
	public get IsMap () {
		return !this.IsEndlessWar && !this.IsApocrypha && !this.IsExchange && !this.IsLimited && !this.IsPrivateItem;
	}

	/** 클리어 보상 여부 */
	public get IsReward () {
		if (this.IsEvent)
			return this.Parts[3][0] === "*";
		return this.Parts[0][0] === "*";
	}

	/** 맵 이름 */
	public get Map () {
		const index = this.IsEvent ? 3 : 0;
		return this.IsReward ? this.Parts[index].substr(1) : this.Parts[index];
	}
	// -------------- 맵

	// -------------- 외전
	/** 외전 획득 여부 */
	public get IsApocrypha () {
		return this.Parts[0] === "Apo";
	}

	/** 외전 대상 전투원 */
	public get ApocryphaUnit () {
		if (!this.IsApocrypha) return 0;
		return parseInt(this.Parts[1], 10);
	}

	/** n 번째 외전 */
	public get ApocryphaNumber () {
		if (!this.IsApocrypha) return 0;
		if (!this.Parts[2]) return 0;
		return parseInt(this.Parts[2], 10);
	}
	// -------------- 외전

	// -------------- 영전
	/** 영전 획득 여부 */
	public get IsEndlessWar () {
		return this.Parts[0] === "EndlessWar";
	}

	/** 광물 가격 */
	public get EndlessWarPrice () {
		if (!this.IsEndlessWar) return 0;
		return parseInt(this.Parts[1], 10);
	}
	// -------------- 영전

	// -------------- 한정
	public get IsLimited () {
		return this.Parts[0] === "Limited";
	}
	// -------------- 한정

	public toString () {
		const output: string[] = [];

		if (this.IsPrivateItem)
			output.push("Private:" + this.PrivateId);

		if (this.IsLimited)
			output.push("Limit");

		if (this.IsEndlessWar)
			output.push("EW");
		else if (this.IsApocrypha)
			output.push("Apo:" + this.ApocryphaUnit + ":" + this.ApocryphaNumber);
		else if (this.IsExchange) {
			if (this.IsMonthly)
				output.push("MExc:" + this.ExchangeDate);
			else if (this.IsEvent)
				output.push("EExc:" + this.EventName);
			else
				output.push("Exc");
		} else if (this.IsEvent) {
			if (this.IsReward)
				output.push(`*Ev:${this.EventName}:${this.Map}`);
			else
				output.push(`Ev:${this.EventName}:${this.Map}`);
		} else
			output.push(this.Map);

		return output.join(",");
	}
}
