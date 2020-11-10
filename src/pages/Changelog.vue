<template>
	<div class="changelog text-left">
		<h2>변경 기록</h2>
		<p><i>멸망 전의 전술 교본</i> 사이트의 변경 기록을 작성한 문서입니다.</p>
		<hr />

		<div class="text-right">
			<b-form-select size="sm" v-model="displayDate" :options="DisplayDates" />
		</div>
		<hr />

		<component :is="`changelog-${displayDate}`" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import RarityBadge from "@/components/RarityBadge.vue";
import { UpdateTitle } from "@/libs/Functions";

import Changelog202011 from "@/pages/Changelog/Changelog_202011.vue";
import Changelog202010 from "@/pages/Changelog/Changelog_202010.vue";
import Changelog202009 from "@/pages/Changelog/Changelog_202009.vue";
import Changelog202008 from "@/pages/Changelog/Changelog_202008.vue";
import Changelog202007 from "@/pages/Changelog/Changelog_202007.vue";
import Changelog202006 from "@/pages/Changelog/Changelog_202006.vue";
import Changelog202005 from "@/pages/Changelog/Changelog_202005.vue";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		RarityBadge,
		"changelog-202011": Changelog202011,
		"changelog-202010": Changelog202010,
		"changelog-202009": Changelog202009,
		"changelog-202008": Changelog202008,
		"changelog-202007": Changelog202007,
		"changelog-202006": Changelog202006,
		"changelog-202005": Changelog202005,
	},
})
export default class Changelog extends Vue {
	private displayDate: string = "202011";

	private get DisplayDates () {
		return ["202011", "202010", "202009", "202008", "202007", "202006", "202005"]
			.map(x => ({
				value: x,
				text: x.replace(/([0-9]{4})([0-9]{2})/, "$1년 $2월"),
			}));
	}

	private mounted () {
		SetMeta(["description", "twitter:description"], "멸망 전의 전술 교본 사이트의 변경 내역입니다.");
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle("Changelog");
	}
}
</script>

<style lang="scss">
#app > .container > .changelog {
	.card-body > div {
		padding: 5px 5px 2px;
		border-bottom: 1px solid #d9d9d9;

		&:last-child {
			border-bottom: 0;
		}
		&:nth-child(2n) {
			background-color: rgba(0, 0, 0, 0.07);
		}
	}
	.badge {
		margin-right: 0.25em;
		margin-bottom: 5px;
		font-size: inherit;
	}
}
</style>
