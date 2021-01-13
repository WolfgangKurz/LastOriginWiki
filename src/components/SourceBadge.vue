<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import FilterableUnitDB from "@/libs/DB/Unit.Filterable";

import { CurrentEvent, CurrentDate } from "@/libs/Const";
import EntitySource from "@/libs/EntitySource";

@Component({})
export default class SourceBadge extends Vue {
	@Prop({
		type: [String, Object],
		required: true,
	})
	private source!: string | EntitySource;

	@Prop({
		type: Boolean,
		default: false,
	})
	private detail!: boolean;

	@Prop({
		type: Boolean,
		default: false,
	})
	private minimum!: boolean;

	@Prop({
		type: Boolean,
		default: false,
	})
	private linked!: boolean;

	private get Source () {
		return typeof this.source === "string"
			? new EntitySource(this.source)
			: this.source;
	}

	private Link (e: Event, link: string) {
		e.preventDefault();
		this.$router.push({ path: link });
	}

	private render () {
		const variant = (() => {
			if (this.Source.IsUninstalled) return this.minimum ? "black" : "light";
			if (this.Source.IsChallenge) return "primary";
			if (this.Source.IsPrivateItem) return "stat-acc";
			if (this.Source.IsLimited) return "secondary";
			if (this.Source.IsEndlessWar) return this.minimum ? "light" : "dark";
			if (this.Source.IsSideMap) return "success";
			if (this.Source.IsExMap) return "danger";
			if (this.Source.IsMap) return "warning";
			if (this.Source.IsSupplementary) return "supplementary";
			if (this.Source.IsExchange) {
				return this.Source.IsEvent
					? this.Source.EventId === CurrentEvent
						? "event-exchange"
						: "event-exchange-old"
					: this.Source.ExchangeDate === CurrentDate
						? "exchange"
						: "exchange-old";
			}
			return "info";
		})();

		const content = (() => {
			if (this.Source.IsUninstalled)
				return "미구현";
			else if (this.Source.IsPrivateItem) {
				const unit = FilterableUnitDB.find(x => x.uid === this.Source.PrivateId);
				if (unit) return `${unit.name}`;
				return this.Source.PrivateId;
			} else if (this.Source.IsLimited)
				return "획득처 없음";
			else if (this.Source.IsChallenge) {
				const text = this.Source.IsReward ? "최종 보상" : "클리어 보상";
				const ChallengeName: Record<string, string> = {
					1: "밀고, 당기고, 불질러!",
					2: "피조물과 설계자",
					3: "실패작의 폭주",
					4: "바다의 소녀들",
					5: "바다의 소녀들",
				};

				if (this.minimum)
					return "외부 통신 요청";
				else if (this.detail) {
					return (
						`외부 통신 요청 (${ChallengeName[this.Source.ChallengeId] || this.Source.ChallengeId}` +
						` ${this.Source.ChallengeDifficulty}) ${text}`
					).trim();
				} else
					return `${ChallengeName[this.Source.ChallengeId] || this.Source.ChallengeId} ${this.Source.ChallengeDifficulty}`;
			} else if (this.Source.IsEndlessWar) {
				if (this.detail)
					return `영원한 전장 (${this.Source.EndlessWarPrice} 광물)`;
				else
					return "영원한 전장";
			} else if (this.Source.IsSupplementary) {
				const text = this.Source.IsReward ? "클리어 보상" : "";
				if (!this.minimum) {
					const unit = FilterableUnitDB.find(x => x.uid === this.Source.SupplementaryUnit);
					return `${(unit && unit.name) || "???"} 외전 ${text}`.trim();
				} else
					return "외전";
			} else if (this.Source.IsExchange) {
				if (this.Source.IsEvent) {
					const event = this.Source.FullEventName;
					const data = this.Source.ExchangePrice || { item: "?", value: 0 };
					const item = this.Source.ExchangeItemName;

					if (this.detail) {
						return [
							event,
							` '${item}' `/* 아이템 아이콘 컴포넌트 */,
							`${data.value}개`,
						];
					} else if (this.minimum)
						return "이벤트 교환소";
					else
						return `${event} 교환소`;
				} else {
					const data = this.Source.MonthlyData || { year: "?", month: "?" };
					if (!this.minimum)
						return `${data.year}년 ${data.month}월 교환소`;
					else
						return "교환소";
				}
			} else {
				const text = this.Source.IsReward ? "클리어 보상" : "";
				if (this.Source.IsEvent) {
					const event = this.Source.FullEventName;

					if (this.detail)
						return `${event} ${this.Source.Map} ${text}`.trim();
					// else if (this.minimum && this.Source.IsExMap)
					// 	return "이벤트 Ex";
					// else if (this.minimum && this.Source.IsSideMap)
					// 	return "이벤트 B";
					else if (this.minimum)
						return "이벤트";
					else
						return `${this.Source.Map} ${text}`.trim();
				} else {
					if (!this.minimum)
						return `${this.Source.Map} ${text}`.trim();
					else
						return `${this.Source.Map}`;
				}
			}
		})();

		if ((typeof content === "string" && content) || (content.length > 0)) {
			if (this.linked && (this.Source.IsMap || this.Source.IsChallenge)) {
				const link = this.Source.IsChallenge
					? `/worlds/Cha/${this.Source.ChallengeId}/${this.Source.Map}`
					: `/worlds/${this.Source.EventId}/${((x) => {
						if (!x.includes("-")) return x;

						let ls = x.substr(0, x.indexOf("-"));
						if (!ls.startsWith("Ev")) return ls;
						ls = ls.substr(2);

						if (!ls) return 1;
						return ls;
					})(this.Source.Map)}/${this.Source.Map}`;

				return <a href={ link } onClick={ (e: Event) => this.Link(e, link) }>
					<b-badge class="source-badge mx-1" variant={ variant } data-source={ this.Source.toString() }>{ content } 🔗</b-badge>
				</a>;
			} else
				return <b-badge class="source-badge mx-1" variant={ variant } data-source={ this.Source.toString() }>{ content }</b-badge>;
		} else
			return <i />;
	}
}
</script>
