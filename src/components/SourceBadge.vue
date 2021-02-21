<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import FilterableUnitDB from "@/libs/DB/Unit.Filterable";

import { CurrentEvent, CurrentDate } from "@/libs/Const";
import EntitySource from "@/libs/EntitySource";
import { LocaleGet } from "@/libs/Locale";

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
				return LocaleGet("COMMON_SOURCE_NOT_IMPLEMENTED");
			else if (this.Source.IsPrivateItem) {
				const unit = FilterableUnitDB.find(x => x.uid === this.Source.PrivateId);
				if (unit) return LocaleGet(`UNIT_${unit.uid}`);
				return this.Source.PrivateId;
			} else if (this.Source.IsLimited)
				return LocaleGet("COMMON_SOURCE_LIMITED");
			else if (this.Source.IsChallenge) {
				const name = LocaleGet([`COMMON_CHALLENGE_${this.Source.ChallengeId}`, this.Source.ChallengeId]);
				const text = this.Source.IsReward
					? LocaleGet("COMMON_SOURCE_FINISH_REWARD")
					: LocaleGet("COMMON_SOURCE_CLEAR_REWARD");
				// const ChallengeName: Record<string, string> = {
				// 	1: "밀고, 당기고, 불질러!",
				// 	2: "피조물과 설계자",
				// 	3: "실패작의 폭주",
				// 	4: "레모네이드 VR",
				// 	5: "바다의 소녀들",
				// };

				if (this.minimum)
					return LocaleGet("COMMON_SOURCE_CHALLENGE");
				else if (this.detail)
					return `${LocaleGet("COMMON_SOURCE_CHALLENGE")} (${name} ${this.Source.ChallengeDifficulty}) ${text}`.trim();
				else
					return `${name} ${this.Source.ChallengeDifficulty}`;
			} else if (this.Source.IsEndlessWar) {
				if (this.detail)
					return LocaleGet("COMMON_SOURCE_EW_RESOURCES", this.Source.EndlessWarPrice);
				else
					return LocaleGet("COMMON_SOURCE_EW");
			} else if (this.Source.IsSupplementary) {
				const text = this.Source.IsReward ? LocaleGet("COMMON_SOURCE_CLEAR_REWARD") : "";
				if (!this.minimum) {
					const unit = FilterableUnitDB.find(x => x.uid === this.Source.SupplementaryUnit);
					return `${LocaleGet("COMMON_SOURCE_SUBSTORY", (unit && LocaleGet(`UNIT_${unit.uid}`)) || "???")} ${text}`.trim();
				} else
					return LocaleGet("COMMON_SOURCE_SUBSTORY_SINGLE");
			} else if (this.Source.IsExchange) {
				if (this.Source.IsEvent) {
					const event = this.Source.FullEventName;
					const data = this.Source.ExchangePrice || { item: "?", value: 0 };
					const item = this.Source.ExchangeItemName;

					if (this.detail) {
						return [
							event,
							` '${item}' `/* 아이템 아이콘 컴포넌트 */,
							LocaleGet("COMMON_SOURCE_EXCHANGE_COUNT", data.value),
						];
					} else if (this.minimum)
						return LocaleGet("COMMON_SOURCE_EXCHANGE_EVENT");
					else
						return `${event} ${LocaleGet("COMMON_SOURCE_EXCHANGE")}`;
				} else {
					const data = this.Source.MonthlyData || { year: "?", month: "?" };
					if (!this.minimum)
						return LocaleGet("COMMON_SOURCE_EXCHANGE_DATE", data.year, data.month);
					else
						return LocaleGet("COMMON_SOURCE_EXCHANGE");
				}
			} else {
				const text = this.Source.IsReward ? LocaleGet("COMMON_SOURCE_CLEAR_REWARD") : "";
				if (this.Source.IsEvent) {
					const event = this.Source.FullEventName;

					if (this.detail)
						return `${event} ${this.Source.Map} ${text}`.trim();
					// else if (this.minimum && this.Source.IsExMap)
					// 	return "이벤트 Ex";
					// else if (this.minimum && this.Source.IsSideMap)
					// 	return "이벤트 B";
					else if (this.minimum)
						return LocaleGet("COMMON_SOURCE_EVENT");
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
