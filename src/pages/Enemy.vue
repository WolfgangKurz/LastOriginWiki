<template>
	<div class="enemy">
		<div class="mb-2">
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-success" :pressed="Filters.Type[0]" @click="Filters.Type[0] = !Filters.Type[0]">
					<locale k="COMMON_UNIT_TYPE_LIGHT" />
				</b-button>
				<b-button variant="outline-success" :pressed="Filters.Type[2]" @click="Filters.Type[2] = !Filters.Type[2]">
					<locale k="COMMON_UNIT_TYPE_MOBILITY" />
				</b-button>
				<b-button variant="outline-success" :pressed="Filters.Type[1]" @click="Filters.Type[1] = !Filters.Type[1]">
					<locale k="COMMON_UNIT_TYPE_HEAVY" />
				</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-primary" :pressed="Filters.Role[1]" @click="Filters.Role[1] = !Filters.Role[1]">
					<locale k="COMMON_UNIT_ROLE_ATTACKER" />
				</b-button>
				<b-button variant="outline-primary" :pressed="Filters.Role[0]" @click="Filters.Role[0] = !Filters.Role[0]">
					<locale k="COMMON_UNIT_ROLE_DEFENDER" />
				</b-button>
				<b-button variant="outline-primary" :pressed="Filters.Role[2]" @click="Filters.Role[2] = !Filters.Role[2]">
					<locale k="COMMON_UNIT_ROLE_SUPPORTER" />
				</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-warning" :pressed="Filters.BossOnly" @click="Filters.BossOnly = !Filters.BossOnly">
					<locale k="ENEMY_DISPLAY_BOSS_ONLY" />
				</b-button>
				<b-button variant="outline-warning" :pressed="Filters.UsedOnly" @click="Filters.UsedOnly = !Filters.UsedOnly">
					<locale k="ENEMY_DISPLAY_USED_ONLY" />
				</b-button>
			</b-btn-group>
		</div>

		<div class="mb-4 mx-4">
			<b-input-group>
				<b-input v-model="searchKeyword" :placeholder="LocaleGet('ENEMY_DISPLAY_SEARCH')" />
				<b-input-group-append>
					<b-button variant="danger" @click="searchKeyword = ''"><locale k="ENEMY_SEARCH_RESET" /></b-button>
				</b-input-group-append>
			</b-input-group>
		</div>

		<b-alert v-if="Filters.UsedOnly" variant="success" show>
			<locale k="ENEMY_EW_TIP" />
		</b-alert>

		<b-row cols="2" cols-lg="5" :cols-xl="6" :cols-md="4" :cols-sm="3">
			<b-col v-for="enemy in EnemyList" :key="`enemy-${enemy.id}`" class="mt-3">
				<enemy-card :enemy="enemy" @click="modalEnemyRequest" />
			</b-col>
		</b-row>

		<enemy-modal :enemy="selectedEnemy" :level="level" :display.sync="enemyModalDisplay" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { LocaleGet } from "@/libs/Locale";

import StoreModule, { EnemyFilters } from "@/libs/Store";

import EnemyCard from "./Enemy/EnemyCard.vue";
import EnemyModal from "./Enemy/EnemyModal.vue";

import { FilterableEnemy } from "@/libs/Types/Enemy.Filterable";
import FilterableEnemyDB from "@/libs/DB/Enemy.Filterable";

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

	private selectedEnemy: FilterableEnemy | null = null;
	private level: number = 1;

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
		const ret = FilterableEnemyDB.filter(x => Object.keys(x.used).length > 0).map(x => x.id);

		FilterableEnemyDB.forEach(e => {
			if (/_EW[0-9]*/.test(e.id))
				ret.push(e.id);
		});
		return ret;
	}

	private get EnemyList () {
		return FilterableEnemyDB
			.filter(x => {
				if (!this.Filters.Type[ACTOR_CLASS.LIGHT] && x.type === ACTOR_CLASS.LIGHT) return false;
				if (!this.Filters.Type[ACTOR_CLASS.AIR] && x.type === ACTOR_CLASS.AIR) return false;
				if (!this.Filters.Type[ACTOR_CLASS.HEAVY] && x.type === ACTOR_CLASS.HEAVY) return false;

				if (!this.Filters.Role[ROLE_TYPE.ATTACKER] && x.role === ROLE_TYPE.ATTACKER) return false;
				if (!this.Filters.Role[ROLE_TYPE.DEFENDER] && x.role === ROLE_TYPE.DEFENDER) return false;
				if (!this.Filters.Role[ROLE_TYPE.SUPPORTER] && x.role === ROLE_TYPE.SUPPORTER) return false;

				if (this.Filters.BossOnly && !x.isBoss) return false;
				if (this.Filters.UsedOnly && !this.UsedEnemies.includes(x.id)) return false;

				if (this.searchKeyword && !LocaleGet(`ENEMY_${x.id}`).includes(this.searchKeyword)) return false;
				return true;
			})
			.reduce((p, c) => {
				if (p.some(x => LocaleGet(`ENEMY_${x.id}`) === LocaleGet(`ENEMY_${c.id}`))) return p;
				return [...p, c];
			}, [] as FilterableEnemy[])
			.sort((a, b) => {
				return a.isBoss === b.isBoss
					? LocaleGet(`ENEMY_${a.id}`).localeCompare(LocaleGet(`ENEMY_${b.id}`))
					: a.isBoss && !b.isBoss ? 1 : -1;
			});
	}

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private modalEnemyRequest (id: string) {
		if (id)
			this.$router.push({ path: `/enemy/${id}/1` });
	}

	private modalEnemy (id: string, level: number) {
		this.selectedEnemy = FilterableEnemyDB.find(x => x.id === id) || null;
		this.level = level;
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
			this.modalEnemy(params.id, parseInt(params.level || "1", 10));

			if (this.selectedEnemy) {
				const en = this.selectedEnemy;
				SetMeta(["description", "twitter:description"], `적 ${en.name}의 정보입니다. 스테이터스와 스킬, 등장 스테이지를 확인할 수 있습니다.`);
				SetMeta("keywords", `,${en.name}`, true);
				SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/${ImageExtension()}/tbar/${en.icon}.${ImageExtension()}`);
			}

			UpdateTitle(LocaleGet("MENU_ENEMIES"), `${this.selectedEnemy ? LocaleGet(`ENEMY_${this.selectedEnemy.id}`) : "???"}`);
		} else {
			this.enemyModalDisplay = false;

			SetMeta(["description", "twitter:description"], "적의 목록을 표시합니다. 원하는 적을 찾기 위해 검색할 수 있습니다.");
			SetMeta(["twitter:image", "og:image"], null);

			UpdateTitle(LocaleGet("MENU_ENEMIES"));
		}
	}

	private mounted () {
		this.checkParams();
	}
}
</script>

<style lang="scss">
</style>
