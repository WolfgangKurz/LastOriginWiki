import { SubStoryUnit } from "@/libs/Const";
import { LocaleGet } from "@/components/locale";

interface EntitySourceMonthlyData {
	year: number;
	month: number;
}

interface EntitySourceExchangePrice {
	item: string;
	value: number;
}

export default class EntitySource {
	public readonly source: string;

	public constructor (source: string) {
		this.source = source;
	}

	private get Parts (): string[] {
		return this.source.split(":");
	}

	// -------------- SourceBadge 컴포넌트 사용
	/** 전용 장비 여부 */
	public get IsPrivateItem (): boolean {
		return this.Parts[0] === "Private";
	}

	/** 전용 장비 사용 가능 전투원 */
	public get PrivateId (): string {
		return this.Parts[1];
	}

	// -------------- 교환소
	/** 교환소 교환 획득 여부 */
	public get IsExchange (): boolean {
		return this.Parts.includes("Exc");
	}

	/** 월간 교환소 획득 여부 (전투원/장비 탭) */
	public get IsMonthly (): boolean {
		return this.IsExchange && this.Parts.length === 3;
	}

	/** 월간 교환소 정보 (전투원/장비 탭) */
	public get MonthlyData (): EntitySourceMonthlyData | null {
		if (!this.IsMonthly) return null;

		return {
			year: parseInt(this.Parts[1], 10),
			month: parseInt(this.Parts[2], 10),
		};
	}

	/** 이벤트 교환소 교환에 필요한 자원 및 수량 */
	public get ExchangePrice (): EntitySourceExchangePrice | null {
		if (!this.IsEvent || !this.IsExchange) return null;

		const offset = this.Parts.findIndex(x => x === "Exc");
		return {
			item: this.Parts[offset + 1],
			value: parseInt(this.Parts[offset + 2], 10),
		};
	}

	public get ExchangeItemName (): string {
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
			case "NewYearTalent": return "오르카 달란트";
			case "NewYearGoods": return "신년 행사 용품";
			case "NewYearFood": return "신년 떡 세트";
			case "SkyIdolGoods1": return "스카이나이츠 캔뱃지";
			case "SkyIdolGoods10": return "스카이나이츠 응원봉";
			case "SkyIdolGoods100": return "공연 입장 티켓";
		}
		return "???";
	}

	public get ExchangeDate (): string {
		if (!this.IsExchange || this.IsEvent) return "";
		return `${this.Parts[1]}/${this.Parts[2]}`;
	}
	// -------------- 교환소

	// -------------- 이벤트
	/** 이벤트 획득 여부 */
	public get IsEvent (): boolean {
		return this.Parts[0] === "Ev";
	}

	/** 이벤트 Id */
	public get EventId (): string {
		if (this.IsEvent)
			return this.Parts[1];
		return "Story";
	}

	/** 이벤트 이름 **Locale Key** */
	public get EventName (): string {
		if (!this.IsEvent) return "";
		return `WORLD_${this.Parts[1]}`;
	}

	/** 부수를 포함한 이벤트 이름 */
	public get FullEventName (): string {
		if (!this.IsEvent) return "";

		if (this.Parts.length === 4) {
			const part = this.Parts[2];
			if (part) return LocaleGet("COMMON_SOURCE_EVENT_PART", this.EventName, part);
			return this.EventName; // 부수가 없으면 이벤트 이름 그대로
		} return this.EventName;
	}
	// -------------- 이벤트

	// -------------- 외부 통신 요청
	/** 외부 통신 요청의 보상 여부 */
	public get IsChallenge (): boolean {
		return this.Parts[0].startsWith("Cha") || this.Parts[0].startsWith("*Cha");
	}

	/** 외부 통신 요청의 챌린지 Id */
	public get ChallengeId (): string {
		if (!this.IsChallenge) return "";
		return this.Parts[0].replace(/^\*?Cha([0-9]+)-.+$/, "$1");
	}

	/** 외부 통신 요청의 챌린지 이름 **Locale Key** */
	public get ChallengeName (): string {
		return `CHALLENGE_${this.ChallengeId}`;
		// switch (this.ChallengeId) {
		// 	case "1": return "밀고, 당기고, 불질러!";
		// 	case "2": return "피조물과 설계자";
		// 	case "3": return "실패작의 폭주";
		// 	case "4": return "레모네이드 VR";
		// 	case "5": return "바다의 소녀들";
		// }
		// return this.ChallengeId;
	}

	/** 외부 통신 요청의 챌린지 난이도 (1~4) */
	public get ChallengeDifficulty (): string {
		if (!this.IsChallenge) return "";
		const difficulty = ((): string[] => {
			switch (this.ChallengeId) {
				case "4":
					return ["", "TROOPER", "MOBILITY", "ARMORED", "MAX"];
				default:
					return ["", "NORMAL", "HARD", "VERY HARD", "EXTREME"];
			}
		})();
		return difficulty[parseInt(this.Parts[0].replace(/^\*?Cha[0-9]+-(.+)$/, "$1"), 10)];
	}
	// -------------- 외부 통신 요청

	// -------------- 맵
	/** 사이드 스테이지 여부 */
	public get IsSideMap (): boolean {
		if (!this.IsMap) return false;
		if (this.IsEvent) { // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts.length === 4
				? this.Parts[3].includes("B") || this.Parts[3].includes("s")
				: this.Parts[2].includes("B") || this.Parts[2].includes("s");
		} return this.Parts[0].includes("B") || this.Parts[0].includes("s");
	}

	/** Ex 스테이지 여부 */
	public get IsExMap (): boolean {
		if (!this.IsMap) return false;
		if (this.IsEvent) { // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts.length === 4
				? this.Parts[3].includes("Ex")
				: this.Parts[2].includes("Ex");
		} return this.Parts[0].includes("Ex");
	}

	/** 맵 보상 여부 */
	public get IsMap (): boolean {
		return ![
			this.IsEternalWarExchange, this.IsNewEternalWarExchange,
			this.IsNewEternalWar, this.IsInfiniteWar,
			this.IsSubStory, this.IsExchange, this.IsAltiteExchange,
			this.IsLimited, this.IsPrivateItem, this.IsChallenge,
			this.IsUninstalled, this.IsRoguelike,
		].some(x => x);
	}

	/** 클리어 보상 여부 */
	public get IsReward (): boolean {
		if (this.IsEvent) {
			return this.Parts.length === 4
				? this.Parts[3][0] === "*"
				: this.Parts[2][0] === "*";
		} else if (this.IsChallenge)
			return this.Parts[0][0] === "*";

		return this.Parts[0][0] === "*";
	}

	/** 맵 이름 */
	public get Map (): string {
		const index = this.IsEvent
			? this.Parts.length - 1
			: this.IsSubStory
				? 1
				: 0;
		return this.IsReward && !this.IsSubStory
			? this.Parts[index].substr(1)
			: this.Parts[index];
	}
	// -------------- 맵

	// -------------- 외전
	/** 외전 획득 여부 */
	public get IsSubStory (): boolean {
		return this.Parts[0].startsWith("Sub") || this.Parts[0].startsWith("*Sub");
	}

	/** 외전 그룹 */
	public get SubStoryGroup (): string {
		if (!this.IsSubStory) return "";
		if (this.Parts[0][0] === "*")
			return this.Parts[0].substr(1);
		return this.Parts[0];
	}

	/** 외전 대상 전투원 */
	public get SubStoryUnit (): string {
		if (!this.IsSubStory) return "";
		return SubStoryUnit[this.Parts[1]];
	}
	// -------------- 외전

	// -------------- 영전 / 변화의성소 / 총력전
	/** 영전 교환 여부 */
	public get IsEternalWarExchange (): boolean {
		return this.Parts[0] === "Alterium";
	}

	/** 총력전 교환 여부 */
	public get IsAltiteExchange (): boolean {
		return this.Parts[0] === "Altite";
	}

	/** 총력전 획득 여부 */
	public get IsInfiniteWar (): boolean {
		return this.Parts[0] === "InfiniteWar";
	}

	/** 변화의성소 교환 여부 */
	public get IsNewEternalWarExchange (): boolean {
		return this.Parts[0] === "RefinedAlterium";
	}

	/** 변화의성소 획득 여부 */
	public get IsNewEternalWar (): boolean {
		return this.Parts[0] === "NewEternalWar";
	}

	/** 광물 가격 */
	public get EternalWarPrice (): number {
		if (!this.IsEternalWarExchange && !this.IsNewEternalWarExchange && !this.IsAltiteExchange) return 0;
		return parseInt(this.Parts[1], 10);
	}
	public get NewEternalWarPrice (): number {
		return this.EternalWarPrice;
	}
	public get AltitePrice (): number {
		return this.EternalWarPrice;
	}

	/** 변화의성소 맵 */
	public get NewEternalWar (): string {
		if (!this.IsNewEternalWar) return "";
		return this.Parts[1];
	}

	/** 총력전 맵 */
	public get InfiniteWar (): string {
		if (!this.IsInfiniteWar) return "";
		return this.Parts[1];
	}
	// -------------- 영전

	// -------------- 한정
	public get IsLimited (): boolean {
		return this.Parts[0] === "Limited";
	}
	// -------------- 한정

	// -------------- 미실장
	public get IsUninstalled (): boolean {
		return this.Parts[0] === "Uninstalled";
	}
	// -------------- 미실장

	// -------------- 로그라이크
	public get IsRoguelike (): boolean {
		return this.Parts[0] === "Roguelike";
	}
	// -------------- 로그라이크

	public toShort (): string {
		const output: string[] = [];

		if (this.IsUninstalled)
			output.push("Uninstalled");

		if (this.IsRoguelike)
			output.push("Roguelike");

		if (this.IsPrivateItem)
			output.push("Private");

		if (this.IsUninstalled)
			output.push("Uninstalled");

		if (this.IsLimited)
			output.push("Limit");

		if (this.IsChallenge)
			output.push("Challenge");

		else if (this.IsEternalWarExchange)
			output.push("EWR");
		else if (this.IsNewEternalWarExchange)
			output.push("NEWR");
		else if (this.IsAltiteExchange)
			output.push("ALTR");
		else if (this.IsNewEternalWar)
			output.push("NEW");
		else if (this.IsInfiniteWar)
			output.push("IW");

		else if (this.IsSubStory)
			output.push("SubStory");
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

	public toString (): string {
		const output: string[] = [];

		if (this.IsUninstalled)
			output.push("Uninstalled");

		if (this.IsPrivateItem)
			output.push(`Private:${this.PrivateId}`);

		if (this.IsLimited)
			output.push("Limit");

		if (this.IsChallenge) {
			if (this.IsReward)
				output.push(`*Challenge:${this.ChallengeId}:${this.ChallengeDifficulty}`);
			else
				output.push(`Challenge:${this.ChallengeId}:${this.ChallengeDifficulty}`);

		} else if (this.IsEternalWarExchange)
			output.push("EWR");
		else if (this.IsNewEternalWarExchange)
			output.push("NEWR");
		else if (this.IsAltiteExchange)
			output.push("ALTR");
		else if (this.IsNewEternalWar)
			output.push(`NEW:${this.NewEternalWar}`);
		else if (this.IsInfiniteWar)
			output.push(`IW:${this.InfiniteWar}`);

		else if (this.IsSubStory)
			output.push(`SubStory:${this.SubStoryUnit}`);
		else if (this.IsExchange) {
			if (this.IsMonthly)
				output.push(`MExc:${this.ExchangeDate}`);
			else if (this.IsEvent)
				output.push(`EExc:${this.EventName}`);
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
