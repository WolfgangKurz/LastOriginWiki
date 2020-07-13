<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { UnitData } from "@/libs/DB";
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

	private get Source () {
		return typeof this.source === "string"
			? new EntitySource(this.source)
			: this.source;
	}

	private render () {
		const variant = (() => {
			if (this.Source.IsLimited) return "secondary";
			if (this.Source.IsEternalWar) return "light";
			if (this.Source.IsSideMap) return "success";
			if (this.Source.IsExMap) return "danger";
			if (this.Source.IsMap) return "warning";
			if (this.Source.IsApocrypha) return "apocrypha";
			if (this.Source.IsExchange && this.Source.IsEvent) return "event-exchange";
			if (this.Source.IsExchange) return "exchange";
			return "info";
		})();

		const content = (() => {
			if (this.Source.IsLimited)
				return "드랍 없음";
			else if (this.Source.IsEternalWar) {
				if (this.detail)
					return `영원한 전장 (${this.Source.EternalWarPrice} 광물)`;
				else
					return "영원한 전장";
			} else if (this.Source.IsApocrypha) {
				if (this.detail) {
					if (this.Source.ApocryphaNumber)
						return `${UnitData[this.Source.ApocryphaUnit].name} 외전 ${this.Source.ApocryphaNumber}부`;
					else
						return `${UnitData[this.Source.ApocryphaUnit].name} 외전`;
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
							` ${item} `/* 아이템 아이콘 컴포넌트 */,
							`${data.value}개`,
						];
					} else if (this.minimum)
						return "이벤트 교환소";
					else
						return event;
				} else {
					const data = this.Source.MonthlyData || { year: "?", month: "?" };
					if (this.detail)
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
					else if (this.minimum)
						return "이벤트";
					else
						return event;
				} else {
					if (this.detail)
						return `${this.Source.Map} ${text}`.trim();
					else
						return `${this.Source.Map}`;
				}
			}
		})();

		return (typeof content === "string" && content) || (content.length > 0)
			? <b-badge class="source-badge mx-1" variant={variant}>{content}</b-badge>
			: <i />;
	}
}
</script>
