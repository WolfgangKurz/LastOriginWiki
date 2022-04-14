import { FunctionalComponent, FunctionComponent } from "preact";
import { Link } from "preact-router";
import Decimal from "decimal.js";

import { SelectOption } from "@/types/Helper";
import { ACTOR_BODY_TYPE, ACTOR_GRADE, ITEM_TYPE } from "@/types/Enums";
import { LinkBonusType, Unit, UnitSkin } from "@/types/DB/Unit";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { UnitDialogueAudioType, UnitDialogueDataType } from "@/types/DB/Dialogue";
import { Consumable } from "@/types/DB/Consumable";

import { ObjectState, objState } from "@/libs/State";
import { AssetsRoot, ImageExtension, IsDev, RarityDisplay, UnitClassDisplay, UnitRoleDisplay } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";
import { GetRequireResource } from "@/libs/Cost";
import EntitySource from "@/libs/EntitySource";
import { GetLinkBonus } from "@/libs/LinkBonus";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { DBSourceConverter, GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import RarityBadge from "@/components/rarity-badge";
import UnitFace from "@/components/unit-face";
import UnitBadge from "@/components/unit-badge";
import ElemIcon from "@/components/elem-icon";
import EquipIcon from "@/components/equip-icon";
import SourceBadge from "@/components/source-badge";
import DropEquip from "@/components/drop-equip";
import EquipPopup from "@/components/popup/equip-popup";
// import RoguelikeEffectBadge from "@/components/roguelike-effect-badge";
// import RoguelikeItemBadge from "@/components/roguelike-item-badge";

import SkinView from "../components/skin-view";
import SkillTable from "../components/skill-table";
import UnitDialogue, { VoiceItem } from "../components/unit-dialogue";
import ResearchTree from "../components/research-tree";
import UnitFace2 from "../components/unit-face2";

import style from "./style.module.scss";

// type TabTypes = "basic" | "skills" | "roguelike" | "dialogue";
type TabTypes = "basic" | "skin" | "lvlimit" | "skills" | "dialogue";

interface SkinItem extends UnitSkin {
	isDef: boolean;
	isPro: boolean;
}

interface SubpageProps {
	display: boolean;
	unit: Unit;
	skinIndex: ObjectState<number>;
	SkinList: SkinItem[];
}

const BasicTab: FunctionalComponent<SubpageProps> = ({ display, unit, skinIndex, SkinList }) => {
	const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip, DBSourceConverter);
	const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

	const selectedEquip = objState<FilterableEquip | null>(null);
	const equipPopupDisplay = objState<boolean>(false);

	const imageExt = ImageExtension();

	// const CurrentSkinPostfix = ((): string => {
	// 	const skin = SkinList[skinIndex.value];
	// 	if (!skin || skin.isDef) return "N";
	// 	if (skin.isPro) return "PS1";
	// 	return `NS${skin.sid}`;
	// })();

	const ExclusiveEquip = FilterableEquipDB
		.filter(x => x.limit && x.limit.some(y => y === unit.uid));

	const CraftTime = ((): string => {
		const duration = unit.craft;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return [h, m, s].map(x => x.toString().padStart(2, "0")).join(":");
	})();

	const Favor = {
		clear: Decimal.mul(unit.favor.clear, 5)
			.floor()
			.div(100)
			.toNumber(),
		death: Decimal.mul(unit.favor.death, 2).toNumber(),
		assistant: Decimal.mul(unit.favor.assistant, 1).toNumber(),
	};

	const promotion = unit.promotions && unit.promotions[unit.promotions.length - 1];

	return <div style={ { display: display ? "" : "none" } }>
		{/* 번호, 소속, 등급, 승급, 유형, 역할 */ }

		<div class="row mb-3">
			<h2>
				<Locale k={ `UNIT_${unit.uid}` } />
			</h2>
			<h5 class="text-secondary">
				No. { unit.id }
			</h5>
		</div>

		<div class="row pt-2">
			<div class="col-12 col-lg-7">
				<div class={ `card bg-dark text-light mx-3 mt-3 p-3 ${style.IntroduceText}` }>
					<Locale k={ `UNIT_INTRO_${unit.uid}` } plain />
				</div>
			</div>

			<div class="col-12 col-lg-5">
				<div class="container table-unit-modal my-3">
					<table class={ `table ${style.InfoTable}` }>
						<tbody>
							<tr>
								<th class="bg-dark text-light"><Locale k="UNIT_VIEW_FACTION" /></th>
								<td>
									<img
										class={ style.GroupIcon }
										src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` }
									/>

									<span class="break-keep">
										<Locale k={ `UNIT_GROUP_${unit.group}` } />
									</span>
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-light"><Locale k="UNIT_VIEW_HEIGHT" /></th>
								<td>{ unit.height }</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_WEIGHT" /></th>
								<td>{ unit.weight }</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_BATTLESTYLE" /></th>
								<td class="text-break">{ unit.weapon1 }</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_WEAPON" /></th>
								<td class="text-break">{ unit.weapon2 }</td>
							</tr>

							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_GRADE" /></th>
								<td class="text-break">
									<RarityBadge rarity={ unit.rarity } size="medium">
										<Locale k="COMMON_UNIT_GRADE_FORMAT" p={ [RarityDisplay[unit.rarity]] } />
									</RarityBadge>
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_PROMOTION" /></th>
								<td class="text-break">
									{ promotion
										? <RarityBadge rarity={ promotion } size="medium">
											<Locale k="UNIT_VIEW_PROMOTION_BADGE" p={ [RarityDisplay[promotion]] } />
										</RarityBadge>
										: <span class="text-secondary"><Locale k="UNIT_VIEW_PROMOTION_BADGE_EMPTY" /></span>
									}
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_TYPE" /></th>
								<td class="text-break">
									<UnitBadge type={ unit.type } size="large" transparent black />
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_ROLE" /></th>
								<td class="text-break">
									<UnitBadge role={ unit.role } size="large" transparent black />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{ ExclusiveEquip.length > 0
				? <div class="alert alert-primary mt-3">
					<div>
						<Locale k="UNIT_VIEW_PRIVATE_EQUIP" />
					</div>
					<EquipPopup
						asSub
						equip={ selectedEquip.value }
						display={ equipPopupDisplay.value }
						onHidden={ (): void => {
							equipPopupDisplay.set(false);
							selectedEquip.set(null);
						} }
					/>
					{ ExclusiveEquip.map(limited => <Link
						href="#"
						onClick={ (e): void => {
							e.preventDefault();
							selectedEquip.set(limited);
							equipPopupDisplay.set(true);
						} }
					>
						<DropEquip class="limited-item-card" equip={ limited } />
					</Link>) }
				</div>
				: <></>
			}

			{ unit.body !== ACTOR_BODY_TYPE.AGS
				? <table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th><Locale k="UNIT_VIEW_FAVOR_PRESENT" /></th>
							<th><Locale k="UNIT_VIEW_FAVOR_VICTORY" /></th>
							<th class="d-none d-md-table-cell"><Locale k="UNIT_VIEW_FAVOR_RETIRE" /></th>
							<th class="d-none d-md-table-cell"><Locale k="UNIT_VIEW_FAVOR_ASSISTANT" /></th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center">
							<td>
								<Locale k="UNIT_VIEW_FAVOR_MULTIPLY" p={ [unit.favor.present.toFixed(2)] } />
							</td>
							<td>
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_P" p={ [Favor.clear] } /></span>
							</td>
							<td class="d-none d-md-table-cell">
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_M" p={ [Favor.death] } /></span>
							</td>
							<td class="d-none d-md-table-cell">
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_P" p={ [Favor.assistant] } /></span>
							</td>
						</tr>
						<tr class="d-md-none">
							<th class="bg-dark text-white"><Locale k="UNIT_VIEW_FAVOR_RETIRE" /></th>
							<th class="bg-dark text-white"><Locale k="UNIT_VIEW_FAVOR_ASSISTANT" /></th>
						</tr>
						<tr class="d-md-none text-center">
							<td>
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_M" p={ [Favor.death] } /></span>
							</td>
							<td>
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_P" p={ [Favor.assistant] } /></span>
							</td>
						</tr>
					</tbody>
				</table>
				: <></>
			}

			{ unit.research && <div class="container my-3">
				<div class="row bg-dark text-light gx-0 p-3">
					<ResearchTree unit={ unit } research={ unit.research } />
				</div>
			</div> }

			<div class="container">
				<table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th><Locale k="UNIT_VIEW_DROPS" /></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="px-0 py-1 drop-list">
								{ unit.source.length === 0 && !unit.craft
									? <div class="p-3">
										<span class="text-secondary">
											<Locale k="UNIT_VIEW_DROPS_EMPTY" />
										</span>
									</div>
									: <>
										{ unit.craft
											? <span class={ `badge bg-dark my-1 ${style.CreationBadge}` }>
												{ unit.cost
													? <div class={ style.CostInfo }>
														<span class="pe-3">
															<img class="res-icon" src={ `${AssetsRoot}/res-component.png` } />
															{ FormatNumber(unit.cost.res[0]) }
														</span>
														<span class="pe-3">
															<img class="res-icon" src={ `${AssetsRoot}/res-nutrition.png` } />
															{ FormatNumber(unit.cost.res[1]) }
														</span>
														<span class="pe-3">
															<img class="res-icon" src={ `${AssetsRoot}/res-power.png` } />
															{ FormatNumber(unit.cost.res[2]) }
														</span>
														<span>
															<Icon class="me-1" icon="hourglass-split" />
															{ CraftTime }
														</span>

														<hr class="my-1" />

														{ unit.cost.aicore > 0
															? <span class="badge bg-semilight me-1 mb-1">
																<EquipIcon class="me-2 vertical-align-middle" image="UI_Icon_Consumable_AICore" size="24" />
																<Locale k="CONSUMABLE_TestItem_4" />
																&nbsp;x{ FormatNumber(unit.cost.aicore) }
															</span>
															: <></>
														}
														{ unit.cost.items.map(e => {
															const item = ConsumableDB.find(c => c.key === e.item);
															if (!item) return <>-</>;

															return <span class="badge bg-semilight me-1 mb-1">
																<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
																<Locale k={ `CONSUMABLE_${item.key}` } />
																&nbsp;x{ FormatNumber(e.count) }
															</span>;
														}) }
													</div>
													: <h5 class="m-0 p-0">
														<Icon icon="hammer" />
														<strong>
															<span class="ps-1 pe-3">
																<Locale k="UNIT_VIEW_DROPS_CREATIONTIME" />
															</span>
															<span>{ CraftTime }</span>
														</strong>
													</h5>
												}
											</span>
											: <></>
										}

										{ unit.source.map((area, aindex) => <div>
											{ unit.craft || aindex > 0 ? <hr class="my-1" /> : <></> }
											{ area.length > 0 && area[0].IsEvent
												? <h6 style="font-weight: bold">
													<Locale k={ area[0].EventName } />
												</h6>
												: area.length > 0 && area[0].IsChallenge
													? <h6 style="font-weight: bold">
														<Locale k={ `COMMON_CHALLENGE_${area[0].ChallengeName}` } />
													</h6>
													: area.length > 0 && area[0].IsSubStory
														? <h6 style="font-weight: bold">
															<Locale k="COMMON_SOURCE_SUBSTORY_SINGLE" />
														</h6>
														: <></>
											}

											{ area.map(source => <SourceBadge class="my-1" source={ source } linked />) }
										</div>) }
									</>
								}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div >;
};

const SkinTab: FunctionComponent<SubpageProps> = ({ display, unit, skinIndex, SkinList }) => {
	const skin = SkinList[skinIndex.value];

	const ssid = skin && skin.sid
		? skin.sid >= 20
			? `S${skin.sid - 20}`
			: skin.sid?.toString()
		: "";

	const categories = skin.category.filter(x => x && x !== "ALL");

	return <div style={ { display: display ? "" : "none" } }>
		<div class={ `flex-nowrap ${style.SkinTabs}` }>
			<ul class="nav nav-tabs justify-content-start">
				{ SkinList.map((skin, index) => <li class="nav-item">
					<a
						href="#"
						class={ [
							"nav-link",
							isActive(skinIndex.value === index),
							skinIndex.value === index ? `rarity-${skin.isPro ? "SS" : unit.rarity}-force text-dark` : "text-dark",
						].join(" ") }
						onClick={ (e): void => {
							e.preventDefault();
							skinIndex.set(index);
						} }
					>
						<UnitFace uid={ unit.uid } skin={ skin.sid || 0 } size="64" />
						<br />

						<span>
							{ skin.sid === null
								? <Locale plain k={ `UNIT_${unit.uid}` } />
								: <Locale plain k={ `UNIT_SKIN_${unit.uid}_${skin.sid}` } /> }
						</span>

						<br />

						{ skin.isPro
							? index === skinIndex.value
								? <span class="badge bg-light text-dark me-1">
									<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
								</span>
								: <RarityBadge rarity="SS" class="me-1">
									<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
								</RarityBadge>
							: skin.sid === null
								? <span class="badge bg-success">
									<Locale k="UNIT_VIEW_SKIN_BADGE_DEFAULT" />
								</span>
								: <span class={ `badge bg-warning text-dark ${style.SkinPrice}` }>
									<img src={ `${AssetsRoot}/tuna.png` } />
									{ skin.price }
								</span>
						}
					</a>
				</li>) }
			</ul>
		</div>

		{ skin.sid && !skin.isPro
			? <div class={ `card mb-2 mt-3 ${style.SkinNameDesc}` }>
				<div class="card-header">
					<Locale plain k={ `CONSUMABLE_Skin_${unit.uid}_${ssid}` } />
				</div>
				<div class="card-body">
					<Locale plain k={ `CONSUMABLE_DESC_Skin_${unit.uid}_${skin.sid}` } />
				</div>
			</div>
			: <></>
		}
		<div class="row pt-3">
			<div class="col-12 col-lg-auto">
				<div class="p-2 d-inline-block d-lg-block">
					<UnitFace uid={ unit.uid } skin={ SkinList[skinIndex.value].sid || 0 } size="88" />
				</div>

				<div class="p-2 d-inline-block d-lg-block">
					<UnitFace
						uid={ unit.uid }
						skin={ SkinList[skinIndex.value].sid || 0 }
						sd
						size="88"
					/>
				</div>

				<div class="p-2">
					{ skin.artist || categories.length > 0
						? <div class="alert alert-primary py-2">
							{ categories.length > 0
								? <div class="mb-1">
									{ categories.map(x => <span class="badge bg-success me-1">
										<Locale plain k={ `SKIN_CATEGORY_${x}` } />
									</span>) }
								</div>
								: <></>
							}

							{ skin.artist
								? <>
									<Locale k="UNIT_VIEW_ILLUSTRATOR" /> : { skin.artist }
								</>
								: <></>
							}
						</div>
						: <></>
					}
				</div>
			</div>
			<div class="col">
				{ SkinList[skinIndex.value]
					? <SkinView unit={ unit } skin={ SkinList[skinIndex.value] } animate detailable />
					: <></> }

				<div class="p-2">
					{ SkinList[skinIndex.value].facelist.map(fid => <UnitFace2
						uid={ unit.uid }
						type={ fid }
						skin={ SkinList[skinIndex.value].sid || 0 }
						size="120"
					/>) }
				</div>
			</div>
		</div>
	</div>;
};

const LvLimitTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	return <Loader json={ StaticDB.Consumable } content={ () => {
		if (!display) return <></>;

		const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

		return <table class="table table-bordered text-center">
			<thead>
				<tr>
					<th class="bg-dark text-light">
						<Locale k="UNIT_VIEW_LVLIMIT_LEVEL" />
					</th>
					<th class="bg-dark text-light">
						<Locale k="UNIT_VIEW_LVLIMIT_ITEMS" />
					</th>
				</tr>
			</thead>
			<tbody>
				{ unit.lvLimits.map(e => <tr>
					<td class="p-3 table-medidark">
						<small>Lv.</small>
						{ e.level }
					</td>
					<td class="text-start">
						{ e.items.map(v => {
							const item = ConsumableDB.find(c => c.key === v.id);
							if (!item) return <>-</>;

							return <span class="badge bg-secondary me-2 mb-2">
								<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
								<Locale k={ `CONSUMABLE_${item.key}` } />
								&nbsp;x{ FormatNumber(v.count!) }
							</span>;
						}) }
					</td>
				</tr>) }
			</tbody>
		</table>;
	} } />;
};

const SkillTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	const CurrentResists = unit.stat[0].Resist;
	const ExLevel = objState<number>(9);

	const linkCount = objState<number>(5);
	const LinkBonus = unit.linkBonus
		.filter(x => x)
		.map(x => GetLinkBonus(x, linkCount.value));

	const FullLinkBonus = unit.fullLinkBonus.map(x => GetLinkBonus(x, 1));
	const fullLinkBonus = objState<LinkBonusType>("");

	const CostRarityList = ((): SelectOption<ACTOR_GRADE>[] => {
		const list = [{
			text: <Locale k="COMMON_UNIT_GRADE_FORMAT" p={ [RarityDisplay[unit.rarity]] } />,
			value: unit.rarity,
		}];

		if (unit.promotions) {
			list.push(...unit.promotions.map(x => ({
				text: <Locale k="UNIT_CARD_PROMOTION_BADGE" p={ [RarityDisplay[x]] } />,
				value: x,
			})));
		}

		return list;
	})();
	const costRarity = objState<ACTOR_GRADE>(unit.rarity);

	function CostClass (level: number, value: number): string {
		if (value === 0) return "text-secondary";
		if (fullLinkBonus.value.startsWith("Cost_") && level === 5)
			return "text-primary";
		return "";
	}

	const CostTable = GetRequireResource(
		costRarity.value,
		unit.type,
		unit.role,
		unit.body,
		fullLinkBonus.value,
	);

	const SkillPowerBonus = ((): number => {
		let bonus = new Decimal(0);

		if (linkCount.value === 5) {
			if (fullLinkBonus.value === "Skill_2") bonus = bonus.add(2);
			if (fullLinkBonus.value === "Skill_5") bonus = bonus.add(5);
			if (fullLinkBonus.value === "Skill_10") bonus = bonus.add(10);
			if (fullLinkBonus.value === "Skill_15") bonus = bonus.add(15);
			if (fullLinkBonus.value === "Skill_20") bonus = bonus.add(20);
			if (fullLinkBonus.value === "Skill_25") bonus = bonus.add(25);
			if (fullLinkBonus.value === "Skill_30") bonus = bonus.add(30);
			if (fullLinkBonus.value === "Skill_35") bonus = bonus.add(35);
		}

		if (unit.linkBonus.includes("Skill_2")) bonus = bonus.add(Decimal.mul(2, linkCount.value));
		if (unit.linkBonus.includes("Skill_5")) bonus = bonus.add(Decimal.mul(5, linkCount.value));
		if (unit.linkBonus.includes("Skill_10")) bonus = bonus.add(Decimal.mul(10, linkCount.value));
		if (unit.linkBonus.includes("Skill_15")) bonus = bonus.add(Decimal.mul(15, linkCount.value));
		if (unit.linkBonus.includes("Skill_20")) bonus = bonus.add(Decimal.mul(20, linkCount.value));
		if (unit.linkBonus.includes("Skill_25")) bonus = bonus.add(Decimal.mul(25, linkCount.value));
		if (unit.linkBonus.includes("Skill_30")) bonus = bonus.add(Decimal.mul(30, linkCount.value));
		if (unit.linkBonus.includes("Skill_35")) bonus = bonus.add(Decimal.mul(35, linkCount.value));

		return bonus.toNumber();
	})();

	return <div style={ { display: display ? "" : "none" } }>
		<div class="row justify-content-center">
			<div class="col col-12 col-sm-10 col-md-8 col-lg-6 equip-grid">
				{ unit.slots.map((equip, i) => {
					const type = {
						[ITEM_TYPE.CHIP]: "CHIP",
						[ITEM_TYPE.SPCHIP]: "OS",
						[ITEM_TYPE.SUBEQ]: "ITEM",
					}[equip] || "";

					return <div class="equip-slot" data-type={ equip }>
						<div>Lv. { (i + 1) * 20 }</div>
						<div class="equip-slot-icon" />
						<div><Locale k={ `COMMON_EQUIP_TYPE_${type}` } /></div>
					</div>;
				}) }
			</div>
		</div>

		<div class="row">
			<div class="col-12 col-md-4">
				<table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th class="text-center">
								<ElemIcon elem="fire" />
								{ CurrentResists.fire } %
							</th>
							<th class="text-center">
								<ElemIcon elem="ice" />
								{ CurrentResists.ice } %
							</th>
							<th class="text-center">
								<ElemIcon elem="lightning" />
								{ CurrentResists.lightning } %
							</th>
						</tr>
						<tr>
							<th colSpan={ 3 }>
								<Locale k="UNIT_VIEW_LINKBONUS" />
								<div class="btn-group btn-group-sm ms-3">
									{ new Array(6)
										.fill(0)
										.map((_, i) => <button
											class={ `btn btn-${linkCount.value === i ? "primary" : "light"}` }
											onClick={ (): void => linkCount.set(i) }
										>{ i }</button>) }
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{ LinkBonus.map((lb) => <tr>
							<td colSpan={ 3 }>
								<Locale k={ lb.Name } />
								<span class="d-inline-block ps-1">
									{ lb.Prefix }
									<b class="text-danger">{ lb.Value }</b>
									{ lb.Postfix }
								</span>
							</td>
						</tr>) }
					</tbody>
				</table>
			</div>

			<div class="col-12 col-md-4 fulllink-table">
				<table class="table table-bordered table-fixed text-start table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th class="text-center"><Locale k="UNIT_VIEW_FULL_LINKBONUS" /></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Locale k="LINKBONUS_NONE" />
								<div class="form-check float-end">
									<input
										class="form-check-input"
										type="radio"
										checked={ fullLinkBonus.value === "" }
										onChange={ (): void => fullLinkBonus.set("") }
									/>
								</div>
							</td>
						</tr>
						{ FullLinkBonus.map((fl) => <tr>
							<td>
								<Locale k={ fl.Name } />
								<span class="d-inline-block ps-1">
									{ fl.Prefix }
									<b class="text-danger">{ fl.Value }</b>
									{ fl.Postfix }
								</span>

								<div class="form-check float-end">
									<input
										class="form-check-input"
										type="radio"
										checked={ fullLinkBonus.value === fl.Key }
										onChange={ (): void => fullLinkBonus.set(fl.Key) }
									/>
								</div>
							</td>
						</tr>) }
					</tbody>
				</table>
			</div>

			<div class="col-12 col-md-4">
				<table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th colSpan={ 4 }>
								<Locale k="UNIT_VIEW_COST" />
								{ CostRarityList.length > 1
									? <select
										class="form-select form-select-sm table-unit-rarity-select"
										value={ costRarity.value }
										onChange={ (e): void => {
											costRarity.set(
												parseInt((e.target as HTMLSelectElement).value, 10) as ACTOR_GRADE,
											);
										} }
									>
										{ CostRarityList.map(option => <option value={ option.value }>
											{ option.text }
										</option>) }
									</select>
									: <></>
								}
							</th>
						</tr>
						<tr>
							<th><Locale k="UNIT_VIEW_COST_LINKS" /></th>
							<th><Locale k="COMMON_RES_PARTS" /></th>
							<th><Locale k="COMMON_RES_NUTRIENTS" /></th>
							<th><Locale k="COMMON_RES_POWER" /></th>
						</tr>
					</thead>
					<tbody>
						{ new Array(6)
							.fill(0)
							.map((_, i) => <tr class="text-center">
								<th class="bg-dark text-light">{ i }</th>
								<td class={ CostClass(i, CostTable.metal[i]) }>{ CostTable.metal[i] }</td>
								<td class={ CostClass(i, CostTable.nutrient[i]) }>{ CostTable.nutrient[i] }</td>
								<td class={ CostClass(i, CostTable.power[i]) }>{ CostTable.power[i] }</td>
							</tr>)
						}
					</tbody>
				</table>
			</div>
		</div>

		<SkillTable
			unit={ unit }
			buffBonus={ linkCount.value === 5 && fullLinkBonus.value.startsWith("Buff_") }
			skillBonus={ SkillPowerBonus }
			rangeBonus={ linkCount.value === 5 && fullLinkBonus.value.startsWith("Range_") }
		/>
	</div>;
};

const DialogueTab: FunctionalComponent<SubpageProps> = ({ display, unit, SkinList }) => {
	const dialogueLang = objState<keyof UnitDialogueDataType>("KR");
	const dialogueAudio = objState<UnitDialogueAudioType>("ko");

	const LangList: Array<keyof UnitDialogueDataType> = ["KR", "JP"];

	const VoiceList: VoiceItem[] = [
		{
			id: 0,
			...SkinList[0],
			isMarriage: false,
		},
		...(unit.marriageVoice
			? [{
				id: 0,
				...SkinList[0],
				isMarriage: true,
			}]
			: []),
		...SkinList
			.slice(1)
			.map((x, i) => ({
				id: i + 1,
				...x,
				isMarriage: false,
			})),
	];

	return <div style={ { display: display ? "" : "none" } }>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="translate" class="me-1" />
			</div>

			{ LangList.map(lang => <button
				class={ `btn btn-outline-primary ${isActive(dialogueLang.value === lang)}` }
				onClick={ (): void => dialogueLang.set(lang) }
			>
				<img src={ `${AssetsRoot}/flags/${lang}.png` } alt={ lang } />
			</button>) }
		</div>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="mic-fill" class="me-1" />
			</div>

			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio.value === "ko")}` }
				onClick={ (): void => dialogueAudio.set("ko") }
			>한국어</button>
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio.value === "jp")}` }
				onClick={ (): void => dialogueAudio.set("jp") }
			>日本語 N</button>
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio.value === "jpdmm")}` }
				onClick={ (): void => dialogueAudio.set("jpdmm") }
			>日本語 R</button>
		</div>

		{ VoiceList.map(voice => <UnitDialogue
			unit={ unit }
			voice={ voice }
			id={ voice.id }
			lang={ dialogueLang.value }
			audio={ dialogueAudio.value }
		/>) }
	</div>;
};

interface UnitsViewProps {
	uid: string;
}

const View: FunctionalComponent<UnitsViewProps> = (props) => {
	const DisplayTab = objState<TabTypes>("basic");

	function GoBack (): void {
		window.history.back();
	}

	const skinIndex = objState<number>(0);

	return <Loader json={ [StaticDB.FilterableEquip, StaticDB.Consumable, `unit/${props.uid}`] } content={ ((): preact.VNode => {
		const unit = ((): Unit => {
			const raw = GetJson<Unit>(`unit/${props.uid}`);
			return {
				...raw,
				source: raw.source
					.map(x => (x as unknown as string[]).map(y => new EntitySource(y))),
			};
		})();

		const SkinList = ((): SkinItem[] => {
			const list: SkinItem[] = [];

			const skin = unit.skins;
			if (!skin) return list;

			// 캐릭터 기본 스킨
			list.push({
				...skin,
				// t: unit.name,
				isDef: true,
				isPro: false,
				// name: "",
				// desc: "",
			});

			if (skin.skins) {
				list.push(...skin.skins.map((x) => {
					return {
						...x,
						isDef: false,
						isPro: false,
					};
				}));
			}

			if (skin.P) {
				list.push({
					...skin.P,
					isDef: false,
					isPro: true,
				});
			}

			return list;
		})();

		SetMeta(
			["description", "twitter:description"],
			`${RarityDisplay[unit.rarity]}급 ${UnitClassDisplay[unit.type]} ${UnitRoleDisplay[unit.role]} ` +
			`${LocaleGet(`UNIT_${unit.uid}`)}의 정보입니다. ` +
			"기본 정보, 링크/풀링크 보너스, 스킬 정보, 대사를 확인할 수 있으며, 스테이터스 계산기를 이용할 수 있습니다.",
		);
		SetMeta(
			["twitter:image", "og:image"],
			`${AssetsRoot}/${ImageExtension()}/full/${(`00${unit.id}`).substring(-3)}.${ImageExtension()}`,
		);
		SetMeta(
			"keywords",
			`,${[LocaleGet(`UNIT_${unit.uid}`), LocaleGet(`UNIT_SHORT_${unit.uid}`)].unique().join(",")}`,
			true,
		);
		UpdateTitle(LocaleGet("MENU_UNITS"), LocaleGet(`UNIT_${unit.uid}`));

		return <div class="unit-view">
			<div class="row">
				<div class="col-12 col-md-auto text-start">
					<button class="btn btn-dark" onClick={ (): void => GoBack() }>
						<Locale k="COMMON_BACK" />
					</button>
				</div>
				<div class="col">
					<ul class="nav nav-tabs unit-display-tabs mb-3 justify-content-end">
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab.value === "basic")}` }
								onClick={ (e): void => {
									e.preventDefault();
									DisplayTab.set("basic");
								} }
							>
								<Icon icon="person-square" class="me-1" />
								<Locale k="UNIT_VIEW_TAB_BASICINFO" />
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab.value === "skin")}` }
								onClick={ (e): void => {
									e.preventDefault();
									DisplayTab.set("skin");
								} }
							>
								<Icon icon="person-hearts" class="me-1" />
								<Locale k="UNIT_VIEW_TAB_SKININFO" />
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab.value === "skills")}` }
								onClick={ (e): void => {
									e.preventDefault();
									DisplayTab.set("skills");
								} }
							>
								<Icon icon="lightning-fill" class="me-1" />
								<Locale k="UNIT_VIEW_TAB_SKILLS" />
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab.value === "lvlimit")}` }
								onClick={ (e): void => {
									e.preventDefault();
									DisplayTab.set("lvlimit");
								} }
							>
								<Icon icon="capslock-fill" class="me-1" />
								<Locale k="UNIT_VIEW_TAB_LVLIMIT" />
							</a>
						</li>
						{/* <li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab.value === "roguelike")}` }
								onClick={ (e): void => {
									e.preventDefault();
									DisplayTab.set("roguelike");
								} }
							>
								<Icon icon="controller" class="me-1" />
								<Locale k="UNIT_VIEW_TAB_ROGUELIKE" />
							</a>
						</li> */}
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab.value === "dialogue")}` }
								onClick={ (e): void => {
									e.preventDefault();
									DisplayTab.set("dialogue");
								} }
							>
								<Icon icon="chat-text-fill" class="me-1" />
								<Locale k="UNIT_VIEW_TAB_DIALOGUE" />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<BasicTab display={ DisplayTab.value === "basic" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } />
			<SkinTab display={ DisplayTab.value === "skin" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } />
			<LvLimitTab display={ DisplayTab.value === "lvlimit" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } />
			<SkillTab display={ DisplayTab.value === "skills" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } />
			{/* <RoguelikeTab display={ DisplayTab.value === "roguelike" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } /> */ }
			<DialogueTab display={ DisplayTab.value === "dialogue" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } />
		</div>;
	}) } />;
};
export default View;
