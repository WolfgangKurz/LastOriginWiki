import { WorldNames, SupplementaryUnit } from "@/libs/Const";

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
		return this.Parts[1];
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
			case "PositiveClue": return "결정적인 단서";
			case "Battery4FM": return "대형 배터리";
			case "BatteryFC-1": return "중형 배터리";
			case "BatteryAA": return "소형 배터리";
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

		if (this.Parts.length === 4) {
			const part = this.Parts[2];
			if (part) return `${this.EventName} (${part}부)`;
			return this.EventName; // 부수가 없으면 이벤트 이름 그대로
		} else
			return this.EventName;
	}
	// -------------- 이벤트

	// -------------- 외부 통신 요청
	/** 외부 통신 요청의 보상 여부 */
	public get IsChallenge () {
		return this.Parts[0].startsWith("Cha") || this.Parts[0].startsWith("*Cha");
	}

	/** 외부 통신 요청의 챌린지 Id */
	public get ChallengeId () {
		if (!this.IsChallenge) return "";

		return this.Parts[0].replace(/^\*?Cha([0-9]+)-.+$/, "$1");
	}

	/** 외부 통신 요청의 챌린지 이름 */
	public get ChallengeName () {
		switch (this.ChallengeId) {
			case "1": return "밀고, 당기고, 불질러!";
			case "2": return "피조물과 설계자";
			case "3": return "실패작의 폭주";
			case "4": return "레모네이드 VR";
			case "5": return "바다의 소녀들";
		}
		return this.ChallengeId;
	}

	/** 외부 통신 요청의 챌린지 난이도 (1~4) */
	public get ChallengeDifficulty () {
		if (!this.IsChallenge) return 0;
		const difficulty = ["", "NORMAL", "HARD", "VERY HARD", "EXETREAM"];
		return difficulty[parseInt(this.Parts[0].replace(/^\*?Cha[0-9]+-(.+)$/, "$1"), 10)];
	}
	// -------------- 외부 통신 요청

	// -------------- 맵
	/** 사이드 스테이지 여부 */
	public get IsSideMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) { // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts.length === 4
				? this.Parts[3].includes("B") || this.Parts[3].includes("s")
				: this.Parts[2].includes("B") || this.Parts[2].includes("s");
		} else
			return this.Parts[0].includes("B") || this.Parts[0].includes("s");
	}

	/** Ex 스테이지 여부 */
	public get IsExMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) { // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts.length === 4
				? this.Parts[3].includes("Ex")
				: this.Parts[2].includes("Ex");
		} else
			return this.Parts[0].includes("Ex");
	}

	/** 맵 보상 여부 */
	public get IsMap () {
		return ![
			this.IsEndlessWar, this.IsSupplementary, this.IsExchange,
			this.IsLimited, this.IsPrivateItem, this.IsChallenge,
			this.IsUninstalled,
		].some(x => x);
	}

	/** 클리어 보상 여부 */
	public get IsReward () {
		if (this.IsEvent) {
			return this.Parts.length === 4
				? this.Parts[3][0] === "*"
				: this.Parts[2][0] === "*";
		} else if (this.IsChallenge)
			return this.Parts[0][0] === "*";

		return this.Parts[0][0] === "*";
	}

	/** 맵 이름 */
	public get Map () {
		const index = this.IsEvent ? this.Parts.length - 1 : 0;
		return this.IsReward ? this.Parts[index].substr(1) : this.Parts[index];
	}
	// -------------- 맵

	// -------------- 외전
	/** 외전 획득 여부 */
	public get IsSupplementary () {
		return this.Parts[0].startsWith("S") || this.Parts[0].startsWith("*S");
	}

	/** 외전 대상 전투원 */
	public get SupplementaryUnit () {
		if (!this.IsSupplementary) return 0;

		if (this.Parts[0][0] === "*")
			return SupplementaryUnit[this.Parts[0].substr(1)];
		else
			return SupplementaryUnit[this.Parts[0]];
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

	// -------------- 미실장
	public get IsUninstalled () {
		return this.Parts[0] === "Uninstalled";
	}
	// -------------- 미실장

	public toShort () {
		const output: string[] = [];

		if (this.IsUninstalled)
			output.push("Uninstalled");

		if (this.IsPrivateItem)
			output.push("Private");

		if (this.IsUninstalled)
			output.push("Uninstalled");

		if (this.IsLimited)
			output.push("Limit");

		if (this.IsChallenge)
			output.push("Challenge");
		else if (this.IsEndlessWar)
			output.push("EW");
		else if (this.IsSupplementary)
			output.push("Supplementary");
		else if (this.IsExchange) {
			if (this.IsMonthly)
				output.push("MExc");
			else if (this.IsEvent)
				output.push("EExc");
			else
				output.push("Exc");
		} else if (this.IsEvent)
			output.push("Ev");
		else
			output.push(this.Map);

		return output.join(",");
	}

	public toString () {
		const output: string[] = [];

		if (this.IsUninstalled)
			output.push("Uninstalled");

		if (this.IsPrivateItem)
			output.push("Private:" + this.PrivateId);

		if (this.IsLimited)
			output.push("Limit");

		if (this.IsChallenge) {
			if (this.IsReward)
				output.push("*Challenge:" + this.ChallengeId + ":" + this.ChallengeDifficulty);
			else
				output.push("Challenge:" + this.ChallengeId + ":" + this.ChallengeDifficulty);
		} else if (this.IsEndlessWar)
			output.push("EW");
		else if (this.IsSupplementary)
			output.push("Supplementary:" + this.SupplementaryUnit);
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
