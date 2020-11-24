<template>
	<div class="chars">
		<div class="mb-2">
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-success" :pressed="Filters.Type[0]" @click="Filters.Type[0] = !Filters.Type[0]">경장형</b-button>
				<b-button variant="outline-success" :pressed="Filters.Type[2]" @click="Filters.Type[2] = !Filters.Type[2]">기동형</b-button>
				<b-button variant="outline-success" :pressed="Filters.Type[1]" @click="Filters.Type[1] = !Filters.Type[1]">중장형</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-primary" :pressed="Filters.Role[1]" @click="Filters.Role[1] = !Filters.Role[1]">공격기</b-button>
				<b-button variant="outline-primary" :pressed="Filters.Role[0]" @click="Filters.Role[0] = !Filters.Role[0]">보호기</b-button>
				<b-button variant="outline-primary" :pressed="Filters.Role[2]" @click="Filters.Role[2] = !Filters.Role[2]">지원기</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-warning" :pressed="Filters.BossOnly" @click="Filters.BossOnly = !Filters.BossOnly">보스만 표시</b-button>
				<b-button variant="outline-warning" :pressed="Filters.UsedOnly" @click="Filters.UsedOnly = !Filters.UsedOnly"
					>사용된 적만 표시</b-button
				>
			</b-btn-group>
		</div>

		<div class="mb-4 mx-4">
			<b-input-group>
				<b-input v-model="searchKeyword" placeholder="적 검색" />
				<b-input-group-append>
					<b-button variant="danger" @click="searchKeyword = ''">지우기</b-button>
				</b-input-group-append>
			</b-input-group>
		</div>

		<b-alert v-if="Filters.UsedOnly" variant="success" show>
			영원한 전장에서 사용되는 적은 실제 사용 여부와 상관 없이 사용된 적 표시에 나타납니다.
		</b-alert>

		<b-row cols="2" cols-lg="5" :cols-xl="6" :cols-md="4" :cols-sm="3">
			<b-col v-for="enemy in EnemyList" :key="`enemy-${enemy.id}`" class="mt-3">
				<enemy-card :enemy="enemy" @click="modalEnemyRequest" />
			</b-col>
		</b-row>

		<enemy-modal :enemy="selectedEnemy" :display.sync="enemyModalDisplay" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";

import StoreModule, { EnemyFilters } from "@/libs/Store";

import EnemyCard from "./Enemy/EnemyCard.vue";
import EnemyModal from "./Enemy/EnemyModal.vue";

import EnemyData, { Enemy } from "@/libs/DB/Enemy";
import MapData from "@/libs/DB/Map";

import { UpdateTitle } from "@/libs/Functions";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { ACTOR_CLASS, ROLE_TYPE } from "@/libs/Types/Enums";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		EnemyCard,
		EnemyModal,
	},
})
export default class EnemyPage extends Vue {
	private enemyModalDisplay: boolean = false;

	private selectedEnemy: Enemy | null = null;

	private searchKeyword: string = "";

	// Vuex -----
	private get Filters () {
		return StoreModule.EnemyFilter;
	}

	private set Filters (value: EnemyFilters) {
		StoreModule.setEnemyFilter(value);
	}
	// Vuex -----

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get UsedEnemies () {
		const ret: Record<string, null> = {};
		Object.keys(MapData).forEach(x =>
			Object.keys(MapData[x]).forEach(y =>
				MapData[x][y].list.forEach(z =>
					z.enemy && z.enemy.forEach(w => w.filter(e => e).forEach(e => e && (ret[e.id] = null))),
				),
			),
		);
		EnemyData.forEach(e => {
			if (/_EW[0-9]*/.test(e.id))
				ret[e.id] = null;
		});
		return Object.keys(ret);
	}

	private get EnemyList () {
		return EnemyData
			.filter(x => {
				if (!this.Filters.Type[ACTOR_CLASS.LIGHT] && x.type === ACTOR_CLASS.LIGHT) return false;
				if (!this.Filters.Type[ACTOR_CLASS.AIR] && x.type === ACTOR_CLASS.AIR) return false;
				if (!this.Filters.Type[ACTOR_CLASS.HEAVY] && x.type === ACTOR_CLASS.HEAVY) return false;

				if (!this.Filters.Role[ROLE_TYPE.ATTACKER] && x.role === ROLE_TYPE.ATTACKER) return false;
				if (!this.Filters.Role[ROLE_TYPE.DEFENDER] && x.role === ROLE_TYPE.DEFENDER) return false;
				if (!this.Filters.Role[ROLE_TYPE.SUPPORTER] && x.role === ROLE_TYPE.SUPPORTER) return false;

				if (this.Filters.BossOnly && !x.isBoss) return false;
				if (this.Filters.UsedOnly && !this.UsedEnemies.includes(x.id)) return false;

				if (this.searchKeyword && !x.name.includes(this.searchKeyword)) return false;
				return true;
			})
			.reduce((p, c) => {
				if (p.some(x => x.name === c.name)) return p;
				return [...p, c];
			}, [] as Enemy[])
			.sort((a, b) => {
				return a.isBoss === b.isBoss
					? a.name.localeCompare(b.name)
					: a.isBoss && !b.isBoss ? 1 : -1;
			});
	}

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private modalEnemyRequest (id: string) {
		if (id)
			this.$router.push({ path: `/enemy/${id}` });
	}

	private modalEnemy (id: string) {
		this.selectedEnemy = EnemyData.find(x => x.id === id) || null;
		this.enemyModalDisplay = !!this.selectedEnemy;
	}

	@Watch("enemyModalDisplay")
	private enemyModalDisplayWatch (value: boolean, prev: boolean) {
		if (prev && !value)
			this.$router.push({ path: "/enemy/" });
	}

	private checkParams () {
		const params = this.$route.params;

		if ("id" in params) {
			this.modalEnemy(params.id);

			if (this.selectedEnemy) {
				const en = this.selectedEnemy;
				SetMeta(["description", "twitter:description"], `${en.name}의 정보입니다. 스테이터스와 스킬, 등장 스테이지를 확인할 수 있습니다.`);
				SetMeta("keywords", `,${en.name}`, true);
				SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/${ImageExtension()}/tbar/${en.icon}.${ImageExtension()}`);
			}

			UpdateTitle("적 정보", `${this.selectedEnemy ? this.selectedEnemy.name : "???"}`);
		} else {
			this.enemyModalDisplay = false;

			SetMeta(["description", "twitter:description"], "적의 목록을 표시합니다. 원하는 적을 찾기 위해 검색할 수 있습니다.");
			SetMeta(["twitter:image", "og:image"], null);

			UpdateTitle("적 정보");
		}
	}

	private mounted () {
		this.checkParams();
	}
}
</script>

<style lang="scss">
</style>
