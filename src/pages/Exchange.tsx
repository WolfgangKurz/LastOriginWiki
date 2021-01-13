import Vue from "vue";
import Component from "vue-class-component";

import ExchangeCard from "@/pages/Exchange/ExchangeCard.vue";

import ExchangeData, { ExchangeInfo } from "@/libs/Types/Exchange";
import { ArrayUnique, UpdateTitle } from "@/libs/Functions";

import { SetMeta } from "@/libs/Meta";
import { WorldNames } from "@/libs/Const";

@Component({
	components: {
		ExchangeCard,
	},
})
export default class Exchange extends Vue {
	private internalDB: ExchangeInfo[] | null = null;
	private get DB () {
		if (this.internalDB) return this.internalDB;
		return ExchangeData((x) => {
			this.internalDB = x;

			if (this.MonthlyYears.length > 0)
				this.MonthlyYear = this.MonthlyYears[this.MonthlyYears.length - 1];

			if (this.MonthlyMonths.length > 0)
				this.MonthlyMonth = this.MonthlyMonths[this.MonthlyMonths.length - 1];

			if (this.Events.length > 0)
				this.EventId = this.Events[this.Events.length - 1].value;
		});
	}

	private CurrentTab: "monthly" | "event" = "monthly";

	private MonthlyMonth: number = 0;
	private MonthlyYear: number = 0;

	private EventId: string = "";

	private get MonthlyYears () {
		if (!this.DB) return [];

		const years = ArrayUnique(this.DB, (e) => e.group)
			.filter(x => x.category === "Montly")
			.map(x => parseInt(x.group.substr(0, 2), 10));
		return ArrayUnique(years);
	}

	private get MonthlyMonths () {
		if (!this.DB) return [];

		const months = ArrayUnique(this.DB, (e) => e.group)
			.filter(x => x.category === "Montly")
			.filter(x => {
				const year = parseInt(x.group.substr(0, 2), 10);
				return year === this.MonthlyYear;
			})
			.map(x => parseInt(x.group.substr(2, 2)));
		return ArrayUnique(months);
	}

	private get ExchangeGroup () {
		if (this.CurrentTab === "monthly")
			return `${this.MonthlyYear}${this.MonthlyMonth < 10 ? "0" + this.MonthlyMonth : this.MonthlyMonth}`;
		else if (this.CurrentTab === "event")
			return this.EventId;

		return "";
	}

	private get ExchangeInfo () {
		if (!this.ExchangeGroup || !this.DB) return [];

		return this.DB.filter(x => x.group === this.ExchangeGroup);
	}

	private get Events () {
		if (!this.DB) return [];

		const events = ArrayUnique(this.DB, (e) => e.group)
			.filter(x => x.category === "Event")
			.map(x => ({
				value: x.group,
				text: WorldNames[x.group] || x.group,
			}));
		return ArrayUnique(events);
	}

	private mounted () {
		SetMeta(["description", "twitter:description"], "라스트오리진(LastOrigin)의 현재/역대 교환소 정보입니다.");
		SetMeta("keywords", ",이벤트 교환소,전투원 교환소,장비 교환소,영원한 전장 교환소,영전 교환소,교환소", true);
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle("교환소");
	}

	private render () {
		return <div class="exchange">
			<b-card class="mt-2" no-body>
				<b-tabs card>
					<b-tab title-link-class="text-dark" active={ this.CurrentTab === "monthly" } onClick={ () => (this.CurrentTab = "monthly") }>
						<template slot="title">
							<b-icon-calendar-week-fill class="mr-2" />
							전투원/장비
						</template>

						<b-card-body class="p-0">
							<div>
								<b-btn-group class="my-1 text-center">
									{ this.MonthlyYears.map(x => <b-button
										variant="outline-dark"
										pressed={ this.MonthlyYear === x }
										onClick={ () => {
											this.MonthlyYear = x;
											this.MonthlyMonth = this.MonthlyMonths[this.MonthlyMonths.length - 1];
										} }
									>{ x + 2000 }</b-button>) }
								</b-btn-group>
							</div>

							<div>
								<b-btn-group class="my-1 text-center">
									{ this.MonthlyMonths.map(x => <b-button
										variant="outline-dark"
										pressed={ this.MonthlyMonth === x }
										onClick={ () => (this.MonthlyMonth = x) }
									>{ x < 10 ? "0" + x : x }</b-button>) }
								</b-btn-group>
							</div>

							<b-row cols="1" cols-sm="2" cols-mg="3" cols-lg="4">
								{ this.ExchangeInfo.map((exc, i) => <exchange-card reward={ exc } />) }
							</b-row>
						</b-card-body>
					</b-tab>
					<b-tab title-link-class="text-dark" active={ this.CurrentTab === "event" } onClick={ () => (this.CurrentTab = "event") }>
						<template slot="title">
							<b-icon-controller class="mr-2" />
							이벤트 교환
						</template>

						<b-card-body class="p-0">
							<div>
								{ this.Events.map(x => <b-button
									class="m-1"
									variant="outline-dark"
									pressed={ this.EventId === x.value }
									onClick={ () => (this.EventId = x.value) }
								>{ x.text }</b-button>) }
							</div>

							<b-row cols="1" cols-sm="2" cols-mg="3" cols-lg="4">
								{ this.ExchangeInfo.map((exc, i) => <exchange-card reward={ exc } />) }
							</b-row>
						</b-card-body>
					</b-tab>
				</b-tabs>
			</b-card>
		</div>;
	}
}
