import { Fragment, FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import RoguelikeQuest from "@/types/DB/Roguelike.Quest";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Consumable } from "@/types/DB/Consumable";
import { RawReward, RewardTypeBase } from "@/types/Reward";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";

import Loader, { StaticDB, GetJson } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import DropEquip from "@/components/drop-equip";
import DropItem from "@/components/drop-item";
import DropRes from "@/components/drop-res";
import DropUnit from "@/components/drop-unit";

interface QuestGroup {
	titleBase: string;
	rarityBadge: preact.VNode[];
	rarityText: string;
}

type TitledQuest = RoguelikeQuest & QuestGroup;

const RoguelikeQuestContent: FunctionalComponent = () => {
	const selectedQuestGroup = objState<string>("");

	const RarityOrder = ["C", "B", "A", "S", "SS", "SSS"];

	return <Loader
		json={ [
			StaticDB.RoguelikeQuest,
			StaticDB.Consumable,
			StaticDB.FilterableUnit,
			StaticDB.FilterableEquip,
		] }
		content={ ((): preact.VNode => {
			const Quests = GetJson<RoguelikeQuest[]>(StaticDB.RoguelikeQuest);

			const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);

			const list: TitledQuest[] = Quests.map(x => {
				const titleBase = LocaleGet(x.key);
				const regex = /^(.+)(?: ([CBAS]+))$/.exec(titleBase);

				if (regex) {
					return {
						...x,
						titleBase: regex[1],
						rarityBadge: [<span class={ `badge bg-rarity-${regex[2]} text-dark ms-2` }>{ regex[2] }</span>],
						rarityText: regex[2],
					};
				}
				return {
					...x,
					titleBase: LocaleGet(x.key),
					rarityBadge: [<Fragment />],
					rarityText: "",
				};
			});

			const groups = ((): QuestGroup[] => {
				const ret: Record<string, QuestGroup> = {};

				list.map(x => ({
					titleBase: x.titleBase,
					rarityBadge: x.rarityBadge,
					rarityText: x.rarityText,
				}))
					.reduce((p, c) => {
						if (p.some(x => x.titleBase === c.titleBase && x.rarityText === c.rarityText))
							return p;
						return [...p, c];
					}, [] as QuestGroup[])
					.sort((a, b) => RarityOrder.indexOf(a.rarityText) - RarityOrder.indexOf(b.rarityText))
					.forEach(x => {
						if (!(x.titleBase in ret)) {
							ret[x.titleBase] = {
								titleBase: x.titleBase,
								rarityBadge: [...x.rarityBadge],
								rarityText: x.rarityText,
							};
						} else
							ret[x.titleBase].rarityBadge.push(...x.rarityBadge);
					});

				return Object.values(ret);
			})();

			if (!selectedQuestGroup.value && groups.length > 0)
				selectedQuestGroup.set(groups[0].titleBase);

			const selectedGroup = groups.find(x => x.titleBase === selectedQuestGroup.value);

			const QuestRewards = ((): Record<string, RewardTypeBase[]> => {
				const f = (x: RawReward): RewardTypeBase | null => {
					if (typeof x === "string") {
						const k = x.replace(/Char_(.+)_N/, "$1");
						const u = FilterableUnitDB.find(y => y.uid === k);
						if (u) return { unit: u };
						return null;
					}

					if (("cash" in x) || ("metal" in x) || ("nutrient" in x) || ("power" in x))
						return x;

					if ("count" in x) {
						const i = x.item;
						if (i.startsWith("Equip_")) {
							const k = i.substr(6);
							const eq = FilterableEquipDB.find(y => y.fullKey === k);
							if (eq) return { equip: eq, count: x.count };
						} else {
							const cs = ConsumableDB.find(y => y.key === i);
							if (cs) return { consumable: cs, count: x.count };
						}
						return null;
					}

					return null;
				};

				const ret: Record<string, RewardTypeBase[]> = {};
				Quests.forEach(x => {
					ret[x.key] = x.reward.map(y => f(y)).filter(y => y) as RewardTypeBase[];
				});
				return ret;
			})();

			const dropdownContent = <Fragment>
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{ selectedGroup
						? <Fragment>
							{ selectedGroup.titleBase }
							{ selectedGroup.rarityBadge }
						</Fragment>
						: selectedQuestGroup.value
					}
				</button>
				<ul class="dropdown-menu">
					{ groups.map(n => <li>
						<a
							href="#"
							class={ `dropdown-item ${isActive(selectedQuestGroup.value === n.titleBase)}` }
							onClick={ (e): void => {
								e.preventDefault();
								selectedQuestGroup.set(n.titleBase);
							} }
						>
							{ n.titleBase }
							{ n.rarityBadge }
						</a>
					</li>) }
				</ul>
			</Fragment>;

			return <div>
				<div class="text-start mb-3">
					<div class="btn-group dropend d-none d-md-block">{ dropdownContent }</div>
					<div class="btn-group d-md-none">{ dropdownContent }</div>
				</div>

				{ list
					.filter(x => x.titleBase === selectedQuestGroup.value)
					.map((x, i) => <div class={ `card ${i > 0 ? "mt-4" : ""}` }>
						<div class="card-header bg-dark text-light">
							<h5>
								<span class="pe-3">
									#{ x.no }
								</span>
								<strong>
									{ x.titleBase }
									{ x.rarityBadge }
								</strong>
							</h5>
							<div>
								<Locale k={ `${x.key}_DESC` } />
							</div>
						</div>
						<div class="card-body p-2">
							<div class="px-4">
								<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
									{ QuestRewards[x.key].map((reward, i) => {
										if ("cash" in reward)
											return <DropRes res="cash" count={ reward.cash } am />;
										if ("metal" in reward)
											return <DropRes res="metal" count={ reward.metal } am />;
										if ("nutrient" in reward)
											return <DropRes res="nutrient" count={ reward.nutrient } am />;
										if ("power" in reward)
											return <DropRes res="power" count={ reward.power } am />;
										if ("unit" in reward) {
											return <Link class="drop-unit" href={ `/units/${reward.unit.uid}` }>
												<DropUnit id={ reward.unit.uid } />
											</Link>;
										}
										if ("equip" in reward) {
											return <Fragment>
												<DropEquip equip={ reward.equip } />
												{ reward.count > 1
													? `x${reward.count}`
													: <Fragment />
												}
											</Fragment>;
										}
										return <DropItem item={ reward.consumable } count={ reward.count } />;
									}) }
								</div>
							</div>
						</div>
					</div>)
				}
			</div>;
		}) }
	/>;
};
export default RoguelikeQuestContent;
