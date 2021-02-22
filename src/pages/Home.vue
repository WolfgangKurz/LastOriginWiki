<template>
	<div class="home">
		<b-alert variant="primary" show>
			<locale v-if="IsEW" k="HOME_EW_REMAIN">
				<template #p0>
					<b-badge variant="light" style="font-size: 100%"><locale k="HOME_EW" :p0="EWNo" /></b-badge>
				</template>
				<template #p1>
					<b-badge variant="danger" style="font-size: 100%"><locale k="HOME_EW_DAYS" :p0="LeftEW" /></b-badge>
				</template>
			</locale>
			<locale v-else k="HOME_EW_ENDED">
				<template #p0>
					<b-badge variant="light" style="font-size: 100%"><locale k="HOME_EW" :p0="EWNo - 1" /></b-badge>
				</template>
				<template #p1>
					<b-badge variant="light" style="font-size: 100%"><locale k="HOME_EW" :p0="EWNo" /></b-badge>
				</template>
				<template #p2>
					<b-badge variant="danger" style="font-size: 100%"><locale k="HOME_EW_DAYS" :p0="LeftEW - 14 + 1" /></b-badge>
				</template>
			</locale>
		</b-alert>

		<h2>
			<img class="heading-icon" :src="`${AssetsRoot}/icon.png`" />
			<locale k="COMMON_TITLE" />
		</h2>
		<div class="mb-4 text-secondary">
			<div>
				<locale k="HOME_BUILD_INFO">
					<template #p0>{{ BuildVersion }}</template>
					<template #p1>{{ BuildTime }}</template>
				</locale>
			</div>
		</div>

		<h4 class="my-4">
			<b-badge variant="danger"><locale k="HOME_TARGET_SERVER" /></b-badge>
		</h4>
		<p>
			<locale k="HOME_DESCRIPTION" />
		</p>
		<hr />

		<b-alert v-if="imageExt === 'png'" variant="danger" show>
			<locale k="HOME_WEBP_UNAVAILABLE" />
		</b-alert>

		<b-alert variant="success" show>
			모든 전투원의 대사 입력이 완료되었습니다. 참여해주신 모든 분들께 감사드립니다.<br />
			<a href="https://docs.google.com/spreadsheets/d/1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00" target="_blank">전투원 대사 DB</a>는 항상
			열려있습니다.<br />
			대사가 잘못되었거나 오타가 있는 경우 얼마든지 수정해주셔도 됩니다.
		</b-alert>
		<hr />

		<locale k="HOME_DEVELOPER" />
		<hr />

		<p>
			<locale k="HOME_COPYRIGHT" />
		</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import BuildInfo from "@/buildtime";
import { SetMeta } from "@/libs/Meta";

@Component({})
export default class Home extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get BuildTime () {
		const pad = (x: number, y: number) => x.toString().padStart(y, "0");
		const dt = new Date(BuildInfo.time);
		const y = dt.getFullYear();
		const m = dt.getMonth() + 1;
		const d = dt.getDate();
		const h = dt.getHours();
		const i = dt.getMinutes();
		const s = dt.getSeconds();
		return `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)} ${pad(h, 2)}:${pad(i, 2)}:${pad(s, 2)}`;
	}

	private get BuildVersion () {
		return BuildInfo.build;
	}

	private get EWCount () {
		return Math.floor(Date.now() / (24 * 60 * 60 * 1000) + 3) % 28;
	}

	private get EWNo () {
		return Math.floor((Date.now() / (24 * 60 * 60 * 1000) + 3) / 28) - 648;
	}

	private get IsEW () {
		return this.EWCount >= 14;
	}

	private get LeftEW () {
		return 27 - this.EWCount;
	}

	private get NextEW () {
		const date = new Date();
		date.setDate(date.getDate() - this.EWCount + 14 - 1);
		return `${date.getMonth() + 1}월 ${date.getDate()}일`;
	}

	private mounted () {
		SetMeta(["description", "twitter:description"], null);
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle();
	}
}
</script>

<style lang="scss">
#app > .container > .home {
	img.heading-icon {
		width: 80px;
		height: 80px;
	}
	i {
		padding: 1px 4px;
		border-radius: 3px;
		background-color: #eee;
	}
}
</style>
