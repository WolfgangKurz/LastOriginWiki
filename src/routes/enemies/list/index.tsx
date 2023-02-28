import { Component, FunctionalComponent, RenderableProps } from "preact";
import OldStore, { Unsubscribe } from "@/oldstore";

import { ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { DecomposeHangulSyllable, diff2, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import EnemyCard from "@/routes/enemies/components/enemy-card";
import EnemyPopup from "@/components/popup/enemy-popup";

import deepmerge from "deepmerge";

interface EnemiesListProps {
	uid?: string;
	level?: string;
}
interface EnemiesListState {
	Filters: {
		Type: {
			[ACTOR_CLASS.LIGHT]: boolean;
			[ACTOR_CLASS.FLYING]: boolean;
			[ACTOR_CLASS.HEAVY]: boolean;
		},
		Role: {
			[ROLE_TYPE.ATTACKER]: boolean;
			[ROLE_TYPE.DEFENDER]: boolean;
			[ROLE_TYPE.SUPPORTER]: boolean;
		},

		Boss: boolean;
		Normal: boolean;
		Unused: boolean;
		NEW: boolean;

		SearchText: string;
	};
}
type CB = (...args: any[]) => void;

class EnemiesList extends Component<EnemiesListProps, EnemiesListState> {
	private filtersUnsubscribe: Unsubscribe;

	private toggleEnemiesFilterTypeLight: CB;
	private toggleEnemiesFilterTypeMobility: CB;
	private toggleEnemiesFilterTypeHeavy: CB;
	private toggleEnemiesFilterRoleAttacker: CB;
	private toggleEnemiesFilterRoleDefender: CB;
	private toggleEnemiesFilterRoleSupporter: CB;

	private toggleEnemiesFilterBoss: CB;
	private toggleEnemiesFilterNormal: CB;
	private toggleEnemiesFilterUnused: CB;
	private toggleEnemiesFilterNEW: CB;

	private setSearchText: CB;

	constructor (props?: Readonly<EnemiesListProps>) {
		super(props);

		if (!props || !props.uid) {
			SetMeta(["description", "twitter:description"], "적의 목록을 표시합니다. 원하는 적을 찾기 위해 검색할 수 있습니다.");
			SetMeta(["twitter:image", "og:image"], null);

			UpdateTitle(LocaleGet("ENEMIES_LIST"));
		}

		this.state = {
			Filters: {
				Type: {
					[ACTOR_CLASS.LIGHT]: true,
					[ACTOR_CLASS.FLYING]: true,
					[ACTOR_CLASS.HEAVY]: true,
				},
				Role: {
					[ROLE_TYPE.ATTACKER]: true,
					[ROLE_TYPE.DEFENDER]: true,
					[ROLE_TYPE.SUPPORTER]: true,
				},

				Boss: true,
				Normal: true,
				Unused: true,
				NEW: true,

				SearchText: "",
			},
		};

		this.filtersUnsubscribe = OldStore.Subscribe(state => {
			if (diff2(state.Enemies, this.state.Filters)) {
				this.setState(() => ({
					Filters: { ...state.Enemies },
				}));
			};
		}, true);

		const {
			toggleEnemiesFilterTypeLight,
			toggleEnemiesFilterTypeMobility,
			toggleEnemiesFilterTypeHeavy,
			toggleEnemiesFilterRoleAttacker,
			toggleEnemiesFilterRoleDefender,
			toggleEnemiesFilterRoleSupporter,
			toggleEnemiesFilterBoss,
			toggleEnemiesFilterNormal,
			toggleEnemiesFilterUnused,
			toggleEnemiesFilterNEW,
			setEnemiesSearchText,
		} = OldStore.Actions();
		this.toggleEnemiesFilterTypeLight = toggleEnemiesFilterTypeLight;
		this.toggleEnemiesFilterTypeMobility = toggleEnemiesFilterTypeMobility;
		this.toggleEnemiesFilterTypeHeavy = toggleEnemiesFilterTypeHeavy;
		this.toggleEnemiesFilterRoleAttacker = toggleEnemiesFilterRoleAttacker;
		this.toggleEnemiesFilterRoleDefender = toggleEnemiesFilterRoleDefender;
		this.toggleEnemiesFilterRoleSupporter = toggleEnemiesFilterRoleSupporter;
		this.toggleEnemiesFilterBoss = toggleEnemiesFilterBoss;
		this.toggleEnemiesFilterNormal = toggleEnemiesFilterNormal;
		this.toggleEnemiesFilterUnused = toggleEnemiesFilterUnused;
		this.toggleEnemiesFilterNEW = toggleEnemiesFilterNEW;
		this.setSearchText = setEnemiesSearchText;
	}

	componentWillUnmount () {
		this.filtersUnsubscribe();
	}

	render (props: RenderableProps<EnemiesListProps>, state: Readonly<EnemiesListState>) {
		return <Loader json={ StaticDB.FilterableEnemy } content={ ((): preact.VNode => {
			const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
			const selectedEnemy = props.uid && FilterableEnemyDB.find(x => x.id === props.uid) || null;

			const EnemyList = FilterableEnemyDB
				.map(x => ({
					...x,
					localeName: LocaleGet(`ENEMY_${x.id}`),
				}))
				.filter(x => {
					if (!state.Filters.Type[ACTOR_CLASS.LIGHT] && x.type === ACTOR_CLASS.LIGHT) return false;
					if (!state.Filters.Type[ACTOR_CLASS.AIR] && x.type === ACTOR_CLASS.AIR) return false;
					if (!state.Filters.Type[ACTOR_CLASS.HEAVY] && x.type === ACTOR_CLASS.HEAVY) return false;

					if (!state.Filters.Role[ROLE_TYPE.ATTACKER] && x.role === ROLE_TYPE.ATTACKER) return false;
					if (!state.Filters.Role[ROLE_TYPE.DEFENDER] && x.role === ROLE_TYPE.DEFENDER) return false;
					if (!state.Filters.Role[ROLE_TYPE.SUPPORTER] && x.role === ROLE_TYPE.SUPPORTER) return false;

					const filters: Record<string, boolean> = {
						Boss: x.isBoss,
						Normal: !x.isBoss,
						Unused: Object.keys(x.used).length === 0,
						NEW: "NEW" in x.used,
					};
					if (!state.Filters.Boss) delete filters.Boss;
					if (!state.Filters.Normal) delete filters.Normal;
					if (!state.Filters.Unused) delete filters.Unused;
					if (!state.Filters.NEW) delete filters.NEW;
					if (Object.values(filters).every(x => !x)) return false;

					if (state.Filters.SearchText) {
						const name = x.localeName;
						const firstName = name
							.split("")
							.map(x => DecomposeHangulSyllable(x) || x)
							.map(x => typeof x === "object" ? x.initial || "" : x)
							.join("");

						if (!(new RegExp(state.Filters.SearchText, "i").test(name) ||
							new RegExp(state.Filters.SearchText, "i").test(firstName))) return false;
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
					return a.isBoss === b.isBoss
						? a.localeName.localeCompare(b.localeName)
						: a.isBoss && !b.isBoss
							? -1
							: 1;
				});

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
							class={ `btn btn-outline-success ${isActive(state.Filters.Type[0])}` }
							onClick={ (): void => this.toggleEnemiesFilterTypeLight() }
						>
							<Locale k="COMMON_UNIT_TYPE_LIGHT" />
						</button>
						<button
							class={ `btn btn-outline-success ${isActive(state.Filters.Type[2])}` }
							onClick={ (): void => this.toggleEnemiesFilterTypeMobility() }
						>
							<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
						</button>
						<button
							class={ `btn btn-outline-success ${isActive(state.Filters.Type[1])}` }
							onClick={ (): void => this.toggleEnemiesFilterTypeHeavy() }
						>
							<Locale k="COMMON_UNIT_TYPE_HEAVY" />
						</button>
					</div>
					<div class="btn-group mx-2 mb-2">
						<button
							class={ `btn btn-outline-primary ${isActive(state.Filters.Role[1])}` }
							onClick={ (): void => this.toggleEnemiesFilterRoleAttacker() }
						>
							<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
						</button>
						<button
							class={ `btn btn-outline-primary ${isActive(state.Filters.Role[0])}` }
							onClick={ (): void => this.toggleEnemiesFilterRoleDefender() }
						>
							<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
						</button>
						<button
							class={ `btn btn-outline-primary ${isActive(state.Filters.Role[2])}` }
							onClick={ (): void => this.toggleEnemiesFilterRoleSupporter() }
						>
							<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
						</button>
					</div>
					<div class="btn-group mx-2 mb-2">
						<button
							class={ `btn btn-outline-danger ${isActive(state.Filters.Boss)}` }
							onClick={ (): void => this.toggleEnemiesFilterBoss() }
						>
							<Locale k="ENEMY_DISPLAY_BOSS" />
						</button>
						<button
							class={ `btn btn-outline-danger ${isActive(state.Filters.Normal)}` }
							onClick={ (): void => this.toggleEnemiesFilterNormal() }
						>
							<Locale k="ENEMY_DISPLAY_NORMAL" />
						</button>
						<button
							class={ `btn btn-outline-danger ${isActive(state.Filters.Unused)}` }
							onClick={ (): void => this.toggleEnemiesFilterUnused() }
						>
							<Locale k="ENEMY_DISPLAY_UNUSED" />
						</button>
						<button
							class={ `btn btn-outline-danger ${isActive(state.Filters.NEW)}` }
							onClick={ (): void => this.toggleEnemiesFilterNEW() }
						>
							<Locale k="ENEMY_DISPLAY_NEW" />
						</button>
					</div>
				</div>

				<div class="mb-4 mx-4">
					<div class="input-group">
						<input
							class="form-control"
							value={ state.Filters.SearchText }
							onInput={ (e): void => this.setSearchText((e.target as any).value) }
							placeholder={ LocaleGet("ENEMY_DISPLAY_SEARCH") } />

						<button class="btn btn-danger" onClick={ (): void => this.setSearchText("") }>
							<Locale k="ENEMY_SEARCH_RESET" />
						</button>
					</div>
				</div>

				<EnemyPopup
					enemy={ selectedEnemy }
					level={ props.level ? parseInt(props.level, 10) : 1 }
					display
				/>

				<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-7">
					{ EnemyList.map(enemy => <div key={ `enemy_list_${enemy.id}` } class="col mt-3">
						<EnemyCard enemy={ enemy } />
					</div>) }
				</div>
			</div>;
		}) } />;
	}
	// );
}
export default EnemiesList;
