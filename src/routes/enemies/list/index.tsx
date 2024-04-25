import { FunctionalComponent } from "preact";
import Store from "@/store";

import { ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { CurrentDB } from "@/libs/DB";
import { useUpdate } from "@/libs/hooks";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { DecomposeHangulSyllable, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/libs/Loader";
import Locale, { LocaleGet } from "@/components/locale";
import Loading from "@/components/loading";
import EnemyCard from "@/routes/enemies/components/enemy-card";
import EnemyPopup from "@/components/popup/enemy-popup";

import deepmerge from "deepmerge";

interface EnemiesListProps {
	uid?: string;
	level?: string;
}

const EnemiesList: FunctionalComponent<EnemiesListProps> = (props) => {
	const update = useUpdate();

	if (!props || !props.uid) {
		SetMeta(["description", "twitter:description"], "적의 목록을 표시합니다. 원하는 적을 찾기 위해 검색할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle(LocaleGet("ENEMIES_LIST"));
	}

	const FilterableEnemyDB = GetJson<FilterableEnemy[] | null>(StaticDB.FilterableEnemy);
	if (!FilterableEnemyDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableEnemy).then(_ => update());

	const selectedEnemy = props.uid && FilterableEnemyDB && FilterableEnemyDB.find(x => x.id === props.uid) || null;

	const EnemyList = FilterableEnemyDB
		? FilterableEnemyDB
			.map(x => ({
				...x,
				localeName: LocaleGet(`ENEMY_${x.id}`),
			}))
			.filter(x => {
				if (!Store.Enemies.Type[ACTOR_CLASS.LIGHT].value && x.type === ACTOR_CLASS.LIGHT) return false;
				if (!Store.Enemies.Type[ACTOR_CLASS.AIR].value && x.type === ACTOR_CLASS.AIR) return false;
				if (!Store.Enemies.Type[ACTOR_CLASS.HEAVY].value && x.type === ACTOR_CLASS.HEAVY) return false;

				if (!Store.Enemies.Role[ROLE_TYPE.ATTACKER].value && x.role === ROLE_TYPE.ATTACKER) return false;
				if (!Store.Enemies.Role[ROLE_TYPE.DEFENDER].value && x.role === ROLE_TYPE.DEFENDER) return false;
				if (!Store.Enemies.Role[ROLE_TYPE.SUPPORTER].value && x.role === ROLE_TYPE.SUPPORTER) return false;

				const filters: Record<string, boolean> = {
					Normal: (x.category & 3) === 0,
					Boss: (x.category & 1) === 1,
					IW: (x.category & 2) === 2,
					Unused: (x.category & 2) === 0 && Object.keys(x.used).length === 0,
					NEW: "NEW" in x.used,
				};
				if (!Store.Enemies.Normal.value) delete filters.Normal;
				if (!Store.Enemies.Boss.value) delete filters.Boss;
				if (!Store.Enemies.IW.value) delete filters.IW;
				if (!Store.Enemies.Unused.value) delete filters.Unused;
				if (!Store.Enemies.NEW.value) delete filters.NEW;
				if (Object.values(filters).every(x => !x)) return false;

				if (Store.Enemies.SearchText.value) {
					const name = x.localeName;
					const firstName = name
						.split("")
						.map(x => DecomposeHangulSyllable(x) || x)
						.map(x => typeof x === "object" ? x.initial || "" : x)
						.join("");

					if (!(new RegExp(Store.Enemies.SearchText.value, "i").test(x.id) ||
						new RegExp(Store.Enemies.SearchText.value, "i").test(name) ||
						new RegExp(Store.Enemies.SearchText.value, "i").test(firstName))) return false;
				}
				return true;
			})
			.reduce((p, c) => {
				const idx = p.findIndex(x => x.localeName === c.localeName);
				if (idx >= 0) {
					p[idx].used = deepmerge(p[idx].used, c.used);
					return p;
				}
				return [...p, c];
			}, [] as Array<FilterableEnemy & { localeName: string; }>)
			.sort((a, b) => {
				const bossA = a.category & 1;
				const bossB = b.category & 1;

				if (bossA && !bossB)
					return -1;
				else if (!bossA && bossB)
					return 1;
				else {
					const IWA = a.category & 2;
					const IWB = b.category & 2;

					if (IWA && !IWB)
						return -1;
					else if (!IWA && IWB)
						return 1;
				}
				return a.localeName.localeCompare(b.localeName);
			})
		: undefined;

	if (props.uid) {
		if (selectedEnemy) {
			const en = selectedEnemy;
			const ename = LocaleGet(`ENEMY_${en.id}`);
			SetMeta(["description", "twitter:description"], `적 ${ename}의 정보입니다. 스테이터스와 스킬, 등장 스테이지를 확인할 수 있습니다.`);
			SetMeta("keywords", `,${ename}`, true);
			SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/${ImageExtension()}/tbar/${en.icon}.${ImageExtension()}`);

			UpdateTitle(LocaleGet("MENU_ENEMIES"), ename);
		} else
			UpdateTitle(LocaleGet("MENU_ENEMIES"), "???");
	}

	return <div class="enemies">
		<div class="mb-2">
			<div class="btn-group mx-2 mb-2">
				<button
					class={ `btn btn-outline-success ${isActive(Store.Enemies.Type[0])}` }
					onClick={ () => Store.Enemies.Type[0].value = !Store.Enemies.Type[0].value }
				>
					<Locale k="COMMON_UNIT_TYPE_LIGHT" />
				</button>
				<button
					class={ `btn btn-outline-success ${isActive(Store.Enemies.Type[2])}` }
					onClick={ () => Store.Enemies.Type[2].value = !Store.Enemies.Type[2].value }
				>
					<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
				</button>
				<button
					class={ `btn btn-outline-success ${isActive(Store.Enemies.Type[1])}` }
					onClick={ () => Store.Enemies.Type[1].value = !Store.Enemies.Type[1].value }
				>
					<Locale k="COMMON_UNIT_TYPE_HEAVY" />
				</button>
			</div>
			<div class="btn-group mx-2 mb-2">
				<button
					class={ `btn btn-outline-primary ${isActive(Store.Enemies.Role[1])}` }
					onClick={ () => Store.Enemies.Role[1].value = !Store.Enemies.Role[1].value }
				>
					<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
				</button>
				<button
					class={ `btn btn-outline-primary ${isActive(Store.Enemies.Role[0])}` }
					onClick={ () => Store.Enemies.Role[0].value = !Store.Enemies.Role[0].value }
				>
					<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
				</button>
				<button
					class={ `btn btn-outline-primary ${isActive(Store.Enemies.Role[2])}` }
					onClick={ () => Store.Enemies.Role[2].value = !Store.Enemies.Role[2].value }
				>
					<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
				</button>
			</div>
			<div class="btn-group mx-2 mb-2">
				<button
					class={ `btn btn-outline-danger ${isActive(Store.Enemies.Boss)}` }
					onClick={ () => Store.Enemies.Boss.value = !Store.Enemies.Boss.value }
				>
					<Locale k="ENEMY_DISPLAY_BOSS" />
				</button>
				<button
					class={ `btn btn-outline-danger ${isActive(Store.Enemies.IW)}` }
					onClick={ () => Store.Enemies.IW.value = !Store.Enemies.IW.value }
				>
					<Locale k="ENEMY_DISPLAY_IW" />
				</button>
				<button
					class={ `btn btn-outline-danger ${isActive(Store.Enemies.Normal)}` }
					onClick={ () => Store.Enemies.Normal.value = !Store.Enemies.Normal.value }
				>
					<Locale k="ENEMY_DISPLAY_NORMAL" />
				</button>
				<button
					class={ `btn btn-outline-danger ${isActive(Store.Enemies.Unused)}` }
					onClick={ () => Store.Enemies.Unused.value = !Store.Enemies.Unused.value }
				>
					<Locale k="ENEMY_DISPLAY_UNUSED" />
				</button>
				<button
					class={ `btn btn-outline-danger ${isActive(Store.Enemies.NEW)}` }
					onClick={ () => Store.Enemies.NEW.value = !Store.Enemies.NEW.value }
				>
					<Locale k="ENEMY_DISPLAY_NEW" />
				</button>
			</div>
		</div>

		<div class="mb-4 mx-4">
			<div class="input-group">
				<input
					class="form-control"
					value={ Store.Enemies.SearchText }
					onInput={ (e) => Store.Enemies.SearchText.value = (e.target as HTMLInputElement).value as string }
					placeholder={ LocaleGet("ENEMY_DISPLAY_SEARCH") } />

				<button class="btn btn-danger" onClick={ () => Store.Enemies.SearchText.value = "" }>
					<Locale k="ENEMY_SEARCH_RESET" />
				</button>
			</div>
		</div>

		<EnemyPopup
			key="enemies-list-enemypopup"
			enemy={ selectedEnemy }
			level={ props.level ? parseInt(props.level, 10) : 1 }
			display
		/>

		{ EnemyList
			? <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-7">
				{ EnemyList.map(enemy => <div key={ `enemy_list_${enemy.id}` } class="col mt-3">
					<EnemyCard enemy={ enemy } />
				</div>) }
			</div>
			: <Loading.Data />
		}
	</div>;
};
export default EnemiesList;
