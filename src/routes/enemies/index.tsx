import { FunctionalComponent } from "preact";

import { ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import EnemyCard from "@/routes/enemies/components/enemy-card";
import EnemyPopup from "@/components/popup/enemy-popup";

interface EnemiesProps {
	uid?: string;
	level?: string;
}

const Enemies: FunctionalComponent<EnemiesProps> = (props) => {
	const Filters = {
		Type: {
			[ACTOR_CLASS.LIGHT]: objState<boolean>(true),
			[ACTOR_CLASS.MOBILITY]: objState<boolean>(true),
			[ACTOR_CLASS.HEAVY]: objState<boolean>(true),
		},
		Role: {
			[ROLE_TYPE.ATTACKER]: objState<boolean>(true),
			[ROLE_TYPE.DEFENDER]: objState<boolean>(true),
			[ROLE_TYPE.SUPPORTER]: objState<boolean>(true),
		},
		BossOnly: objState<boolean>(false),
		UsedOnly: objState<boolean>(true),
	};

	const SearchText = objState<string>("");

	if (!props.uid) {
		SetMeta(["description", "twitter:description"], "적의 목록을 표시합니다. 원하는 적을 찾기 위해 검색할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle(LocaleGet("MENU_ENEMIES"));
	}

	return <Loader json={ StaticDB.FilterableEnemy } content={ ((): preact.VNode => {
		const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

		const selectedEnemy = props.uid
			? FilterableEnemyDB.find(x => x.id === props.uid) || null
			: null;

		if (props.uid) {
			if (selectedEnemy) {
				const en = selectedEnemy;
				SetMeta(["description", "twitter:description"], `적 ${LocaleGet(`ENEMY_${en.id}`)}의 정보입니다. 스테이터스와 스킬, 등장 스테이지를 확인할 수 있습니다.`);
				SetMeta("keywords", `,${LocaleGet(`ENEMY_${en.id}`)}`, true);
				SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/${ImageExtension()}/tbar/${en.icon}.${ImageExtension()}`);
			}

			UpdateTitle(LocaleGet("MENU_ENEMIES"), `${selectedEnemy ? LocaleGet(`ENEMY_${selectedEnemy.id}`) : "???"}`);
		}

		const UsedEnemies = ((): string[] => {
			const ret = FilterableEnemyDB.filter(x => Object.keys(x.used).length > 0).map(x => x.id);

			FilterableEnemyDB.forEach(e => {
				if (/_EW[0-9]*/.test(e.id))
					ret.push(e.id);
			});
			return ret;
		})();

		const EnemyList = FilterableEnemyDB
			.filter(x => {
				if (!Filters.Type[ACTOR_CLASS.LIGHT].value && x.type === ACTOR_CLASS.LIGHT) return false;
				if (!Filters.Type[ACTOR_CLASS.AIR].value && x.type === ACTOR_CLASS.AIR) return false;
				if (!Filters.Type[ACTOR_CLASS.HEAVY].value && x.type === ACTOR_CLASS.HEAVY) return false;

				if (!Filters.Role[ROLE_TYPE.ATTACKER].value && x.role === ROLE_TYPE.ATTACKER) return false;
				if (!Filters.Role[ROLE_TYPE.DEFENDER].value && x.role === ROLE_TYPE.DEFENDER) return false;
				if (!Filters.Role[ROLE_TYPE.SUPPORTER].value && x.role === ROLE_TYPE.SUPPORTER) return false;

				if (Filters.BossOnly.value && !x.isBoss) return false;
				if (Filters.UsedOnly.value && !UsedEnemies.includes(x.id)) return false;

				if (SearchText.value && !LocaleGet(`ENEMY_${x.id}`).includes(SearchText.value)) return false;
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

		return <div class="enemies">
			<div class="mb-2">
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-success ${isActive(Filters.Type[0].value)}` }
						onClick={ (): void => Filters.Type[0].set(!Filters.Type[0].value) }
					>
						<Locale k="COMMON_UNIT_TYPE_LIGHT" />
					</button>
					<button
						class={ `btn btn-outline-success ${isActive(Filters.Type[2].value)}` }
						onClick={ (): void => Filters.Type[2].set(!Filters.Type[2].value) }
					>
						<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
					</button>
					<button
						class={ `btn btn-outline-success ${isActive(Filters.Type[1].value)}` }
						onClick={ (): void => Filters.Type[1].set(!Filters.Type[1].value) }
					>
						<Locale k="COMMON_UNIT_TYPE_HEAVY" />
					</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-primary ${isActive(Filters.Role[1].value)}` }
						onClick={ (): void => Filters.Role[1].set(!Filters.Role[1].value) }
					>
						<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
					</button>
					<button
						class={ `btn btn-outline-primary ${isActive(Filters.Role[0].value)}` }
						onClick={ (): void => Filters.Role[0].set(!Filters.Role[0].value) }
					>
						<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
					</button>
					<button
						class={ `btn btn-outline-primary ${isActive(Filters.Role[2].value)}` }
						onClick={ (): void => Filters.Role[2].set(!Filters.Role[2].value) }
					>
						<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
					</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-danger ${isActive(Filters.BossOnly.value)}` }
						onClick={ (): void => Filters.BossOnly.set(!Filters.BossOnly.value) }
					>
						<Locale k="ENEMY_DISPLAY_BOSS_ONLY" />
					</button>
					<button
						class={ `btn btn-outline-danger ${isActive(Filters.UsedOnly.value)}` }
						onClick={ (): void => Filters.UsedOnly.set(!Filters.UsedOnly.value) }
					>
						<Locale k="ENEMY_DISPLAY_USED_ONLY" />
					</button>
				</div>
			</div>

			<div class="mb-4 mx-4">
				<div class="input-group">
					<input
						class="form-control"
						value={ SearchText.value }
						onInput={ (e): void => SearchText.set((e.target as any).value) }
						placeholder={ LocaleGet("ENEMY_DISPLAY_SEARCH") } />

					<button class="btn btn-danger" onClick={ (): void => SearchText.set("") }>
						<Locale k="ENEMY_SEARCH_RESET" />
					</button>
				</div>
			</div>

			{ Filters.UsedOnly.value
				? <div class="alert alert-success">
					<Locale k="ENEMY_EW_TIP" />
				</div>
				: <></>
			}

			<EnemyPopup enemy={ selectedEnemy } level={ props.level ? parseInt(props.level, 10) : 1 } display />

			<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-7">
				{ EnemyList.map(enemy => <div class="col mt-3">
					<EnemyCard enemy={ enemy } />
				</div>) }
			</div>
		</div>;
	}) } />;
};
export default Enemies;
