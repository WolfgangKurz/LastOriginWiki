import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { ROGUE_CELL_TYPE } from "@/types/Enums";
import { RawReward, RewardTypeBase } from "@/types/Reward";
import RoguelikeNode from "@/types/DB/Roguelike.Node";
import { Consumable } from "@/types/DB/Consumable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { objState } from "@/libs/State";
import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { isActive } from "@/libs/Functions";

import Loader, { StaticDB, GetJson } from "@/libs/Loader";
import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import TextBadge from "@/components/text-badge";
import RoguelikeEffectBadge from "@/components/roguelike-effect-badge";
import RoguelikeItemBadge from "@/components/roguelike-item-badge";
import DropItem from "@/components/drop-item";
import DropEquip from "@/components/drop-equip";
import DropRes from "@/components/drop-res";
import DropUnit from "@/components/drop-unit";
import EquipPopup from "@/components/popup/equip-popup";
import EssenceBadge from "../essence-badge";

import style from "./style.module.scss";

const RoguelikeNodeContent: FunctionalComponent = () => {
	const nodeDropdownIndex = objState<number>(2);

	const selectedEquip = objState<FilterableEquip | null>(null);
	const equipModalDisplay = objState<boolean>(false);

	const ext = ImageExtension();

	return <Loader
		json={ [
			StaticDB.RoguelikeNode,
			StaticDB.RoguelikeLimitEffects,
			StaticDB.Consumable,
			StaticDB.FilterableUnit,
			StaticDB.FilterableEquip,
		] }
		content={ ((): preact.VNode => {
			const Nodes = GetJson<RoguelikeNode[]>(StaticDB.RoguelikeNode);

			const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);

			const nodeTypes = Nodes
				.map(x => x.type)
				.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as number[]);

			const nodeIcons = Nodes
				.reduce((p, c) => {
					p[c.type] = c.icon;
					return p;
				}, [] as string[]);

			const elems: Partial<Record<ROGUE_CELL_TYPE, string>> = {
				8: "PHYSICS",
				18: "FIRE",
				19: "ICE",
				20: "ELECTRIC",
			};
			const refundType: ROGUE_CELL_TYPE[] = [
				ROGUE_CELL_TYPE.EFFECT,
				ROGUE_CELL_TYPE.OBSERVE,
				ROGUE_CELL_TYPE.RECOVERY,
				ROGUE_CELL_TYPE.SHOP,
				ROGUE_CELL_TYPE.QUEST,
			];
			const optionalType: ROGUE_CELL_TYPE[] = [
				ROGUE_CELL_TYPE.EFFECT,
				ROGUE_CELL_TYPE.RECOVERY,
				ROGUE_CELL_TYPE.SHOP,
			];
			const randomType: ROGUE_CELL_TYPE[] = [
				ROGUE_CELL_TYPE.ACTOR,
			];

			const getItemCache: Record<string, Consumable | undefined> = {};
			function GetItem (item: string): Consumable | undefined {
				if (item in getItemCache) return getItemCache[item];
				getItemCache[item] = ConsumableDB.find(x => x.key === item);
				return getItemCache[item];
			}

			const dropdownContent = <>
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<img
						class={ style["node-tabicon"] }
						data-icon={ nodeIcons[nodeDropdownIndex.value] }
						src={ `${AssetsRoot}/${ext}/rogue/${nodeIcons[nodeDropdownIndex.value]}.${ext}` }
					/>
					<Locale k={ `ROGUELIKE_NODE_${nodeDropdownIndex.value}` } />
				</button>
				<ul class="dropdown-menu">
					{ nodeTypes.map(n => <li>
						<a
							href="#"
							class={ `dropdown-item ${isActive(nodeDropdownIndex.value === n)}` }
							onClick={ (e): void => {
								e.preventDefault();
								nodeDropdownIndex.set(n);
							} }
						>
							<img
								class={ style["node-tabicon"] }
								data-icon={ nodeIcons[n] }
								src={ `${AssetsRoot}/${ext}/rogue/${nodeIcons[n]}.${ext}` }
							/>
							<Locale k={ `ROGUELIKE_NODE_${n}` } />
						</a>
					</li>) }
				</ul>
			</>;

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
				Nodes.forEach(x => {
					ret[x.key] = x.rewardItem.map(y => f(y)).filter(y => y) as RewardTypeBase[];
				});
				return ret;
			})();

			return <div>
				<EquipPopup
					asSub
					equip={ selectedEquip.value }
					display={ equipModalDisplay.value }
					onHidden={ (): void => equipModalDisplay.set(false) }
				/>

				<div class="text-start mb-3">
					<div class="btn-group dropend d-none d-md-block">{ dropdownContent }</div>
					<div class="btn-group d-md-none">{ dropdownContent }</div>
				</div>

				{ Nodes.filter(n => n.type === nodeDropdownIndex.value)
					.map((x, i) => {
						const requirements = [
							x.reqEssences > 0
								? <EssenceBadge count={ x.reqEssences } />
								: false,
							x.reqItem && GetItem(x.reqItem)
								? <DropItem item={ GetItem(x.reqItem)! } />
								: false,
							x.reqRogueItem
								? <RoguelikeItemBadge item={ x.reqRogueItem } optional={ optionalType.includes(x.type) } />
								: false,
						]
							.filter(x => x)
							.map(x => <div class="col">{ x }</div>);
						const rewards = [
							x.rewardEssences > 0
								? <EssenceBadge count={ x.rewardEssences } refund={ refundType.includes(x.type) } />
								: false,
							...(QuestRewards[x.key].length > 0
								? QuestRewards[x.key].map((reward, i) => {
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
										return <Link class="drop-equip"
											href={ `/equips/${reward.equip.fullKey}` }
											onClick={ (e: Event): void => {
												e.preventDefault();
												e.stopPropagation();
												selectedEquip.set(reward.equip);
												equipModalDisplay.set(true);
											} }
										>
											<DropEquip equip={ reward.equip } />
											{ reward.count > 1
												? `x${reward.count}`
												: <></>
											}
										</Link>;
									}
									return <DropItem item={ reward.consumable } count={ reward.count } />;
								})
								: []
							),
							x.rewardRogueItem
								? <RoguelikeItemBadge item={ x.rewardRogueItem } />
								: false,
							x.hp > 0
								? <TextBadge bg="success">
									<Locale k="ROGUELIKE_NODE_HP_RECOVERY" p={ [`${x.hp * 100}%`] } />
								</TextBadge>
								: false,
							x.trapCount > 0 || x.trapDamage > 0
								? <TextBadge bg="danger">
									<Locale
										k="ROGUELIKE_NODE_TRAP_DAMAGE"
										p={ [x.trapCount, x.trapDamage, <Locale k={ `COMMON_ELEM_${elems[x.type]}` } />] }
									/>
								</TextBadge>
								: false,
							x.type === ROGUE_CELL_TYPE.ACTOR
								? <TextBadge bg="stat-hp" color="dark">
									<Locale k="ROGUELIKE_NODE_ACTOR" />
								</TextBadge>
								: false,
						]
							.filter(x => x)
							.map(x => <div class="col">{ x }</div>);

						const buffs = x.effects.map(y => <RoguelikeEffectBadge effect={ y } />);

						return <div class="container table-node mb-3 text-center">
							<div class="row row-cols-1 row-cols-md-2">
								<div class="col icon-container bg-light">
									{ x.icon
										? <img class={ style["node-icon"] } src={ `${AssetsRoot}/${ext}/rogue/${x.icon}.${ext}` } />
										: <></>
									}
								</div>
								<div class="col nested">
									<div class="row row-cols-2">
										<div class="col bg-dark text-light"><Locale k="ROGUELIKE_NODE_NAME" /></div>
										<div class="col bg-light">
											<Locale k={ x.key } />
										</div>
										<div class="col bg-dark text-light"><Locale k="ROGUELIKE_NODE_TYPE" /></div>
										<div class="col bg-light">
											<Locale k={ `ROGUELIKE_CELL_${x.type}` } />
										</div>
										<div class="col bg-dark text-light"><Locale k="ROGUELIKE_NODE_GRADE" /></div>
										<div class="col bg-light">
											{ x.grade }
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col bg-light break-keep white-pre-line">
									<Locale k={ `${x.key}_DESC` } />
								</div>
							</div>

							<div class="row">
								<div class="col bg-light">
									{ requirements.length === 0
										? <span class="text-secondary">
											<Locale k="ROGUELIKE_NODE_REQUIRED_EMPTY" />
										</span>
										: <div class="row row-cols-1 row-cols-md-2">{ requirements }</div>
									}
								</div>
								<div class="col-auto d-flex align-items-center border-start-0 border-end-0 bg-light">
									<Icons.ArrowRight />
								</div>
								<div class="col bg-light">
									{ rewards.length === 0 && buffs.length === 0
										? <span class="text-secondary">
											<Locale k="ROGUELIKE_NODE_REWARD_EMPTY" />
										</span>
										: <></>
									}

									{ rewards.length === 0
										? <></>
										: <>
											{ randomType.includes(x.type)
												? <Locale k="ROGUELIKE_NODE_REWARD_RANDOM_DESC" />
												: <></>
											}
											<div class="row row-cols-1 row-cols-md-2">{ rewards }</div>
										</>
									}
									{ rewards.length > 0 && buffs.length > 0 ? <hr /> : <></> }
									{ buffs.length > 0
										? <>
											<Locale k="ROGUELIKE_NODE_EFFECTS_DESC" />
											<div class="row row-cols-1 row-cols-md-2">{ buffs }</div>
										</>
										: <></>
									}
								</div>
							</div>
						</div>;
					})
					.gap(<hr class="my-4" />)
				}
			</div>;
		}) }
	/>;
};
export default RoguelikeNodeContent;
