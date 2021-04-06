import { Fragment, FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import Decimal from "decimal.js";

import { SelectOption } from "@/types/Helper";
import { ACTOR_GRADE } from "@/types/Enums";
import { LinkBonusType, Unit, UnitSkin } from "@/types/DB/Unit";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { UnitDialogueDataType } from "@/types/DB/Dialogue";

import { ObjectState, objState } from "@/libs/State";
import { AssetsRoot, ImageExtension, RarityDisplay, UnitClassDisplay, UnitRoleDisplay } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
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
import SourceBadge from "@/components/source-badge";

import SkinView from "../components/skin-view";
import SkillTable from "../components/skill-table";
import UnitDialogue, { VoiceItem } from "../components/unit-dialogue";

import "./style.scss";

type TabTypes = "basic" | "skills" | "dialogue";

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

	const CurrentSkinPostfix = ((): string => {
		const skin = SkinList[skinIndex.value];
		if (!skin || skin.isDef) return "N";
		if (skin.isPro) return "PS1";
		return `NS${skin.sid}`;
	})();

	const ExclusiveEquip = FilterableEquipDB
		.filter(x => x.limit && x.limit.some(y => y === unit.uid))
		.map(x => ({
			equip: x,
			url: `/equips/${x.fullKey}`,
		}));

	const CraftTime = ((): string => {
		const duration = unit.craft;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return `${(`0${h}`).substr(-2)}:${(`0${m}`).substr(-2)}:${(`0${s}`).substr(-2)}`;
	})();

	const Favor = {
		clear: Decimal.mul(unit.favor.clear, 5)
			.floor()
			.div(100)
			.toNumber(),
		death: Decimal.mul(unit.favor.death, 2).toNumber(),
		assistant: Decimal.mul(unit.favor.assistant, 1).toNumber(),
	};

	return <div style={ { display: display ? "" : "none" } }>
		{/* 스킨, 번호, 소속, 등급, 승급, 유형, 역할 */ }
		<ul class="nav nav-tabs unit-display-tabs justify-content-start">
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
					{ skin.isPro
						? index === skinIndex.value
							? <span class="badge bg-light text-dark me-1">
								<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
							</span>
							: <RarityBadge rarity="SS" class="me-1">
								<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
							</RarityBadge>
						: <Fragment /> }

					<span>
						{ skin.sid === null
							? <Locale k={ `UNIT_${unit.uid}` } />
							: <Locale k={ `UNIT_SKIN_${unit.uid}_${skin.sid}` } /> }
					</span>
				</a>
			</li>) }
		</ul>

		<div class="row">
			<div class="col-12 col-md-3">
				{ SkinList[skinIndex.value]
					? <SkinView unit={ unit } skin={ SkinList[skinIndex.value] } collapsed detailable />
					: <Fragment /> }
			</div>
			<div class="mt-3 col-md-9 col-12">
				<div class="row">
					<div class="col" />
					<div class="col-auto">
						<UnitFace uid={ unit.uid } skin={ SkinList[skinIndex.value].sid || 0 } size="88" />
					</div>
					<div class="col-auto">
						<UnitFace
							uid={ `TbarIcon_${unit.uid}_${CurrentSkinPostfix}` }
							skin={ SkinList[skinIndex.value].sid || 0 }
							sd
							size="88"
						/>
					</div>
					<div class="col" />
				</div>

				<div class="card bg-dark text-light introduce-text mx-3 mt-3 p-3">
					<Locale k={ `UNIT_INTRO_${unit.uid}` } />
				</div>

				{ ExclusiveEquip.length > 0
					? <div class="alert alert-primary mt-3">
						<div>
							<Locale k="UNIT_VIEW_PRIVATE_EQUIP" />
						</div>
						{ ExclusiveEquip.map(limited => <a
							href={ limited.url }
							onClick={ (e): void => {
								e.preventDefault();
								route(limited.url);
							} }
						>
							{/* <drop-equip class="limited-item-card" :equip="limited.equip" /> */ }
						</a>) }
					</div>
					: <Fragment />
				}

				<div class="container table-unit-modal my-3">
					<div class="row text-center row-cols-2 row-cols-md-4">
						<div class="col bg-dark text-light"><Locale k="UNIT_VIEW_DICTNO" /></div>
						<div class="col">
							<small>No.&nbsp;</small>
							<strong>{ unit.id }</strong>
						</div>
						<div class="col bg-dark text-light"><Locale k="UNIT_VIEW_FACTION" /></div>
						<div class="col">
							<span class="break-keep">
								<Locale k={ `UNIT_GROUP_${unit.group}` } />
							</span>
						</div>
						<div class="col bg-dark text-light"><Locale k="UNIT_VIEW_GRADE" /></div>
						<div class="col">
							<RarityBadge rarity={ unit.rarity } size="medium">
								<Locale k="COMMON_UNIT_GRADE_FORMAT" p={ [RarityDisplay[unit.rarity]] } />
							</RarityBadge>
						</div>
						<div class="col bg-dark text-light"><Locale k="UNIT_VIEW_PROMOTION" /></div>
						<div class="col">
							{ unit.promotions
								? unit.promotions.map(pro => <RarityBadge rarity={ pro } size="medium">
									<Locale k="UNIT_VIEW_PROMOTION_BADGE" p={ [RarityDisplay[pro]] } />
								</RarityBadge>)
								: <span class="text-secondary"><Locale k="UNIT_VIEW_PROMOTION_BADGE_EMPTY" /></span>
							}
						</div>
						<div class="col bg-dark text-light"><Locale k="UNIT_VIEW_TYPE" /></div>
						<div class="col">
							<UnitBadge type={ unit.type } size="large" transparent black />
						</div>
						<div class="col bg-dark text-light"><Locale k="UNIT_VIEW_ROLE" /></div>
						<div class="col">
							<UnitBadge role={ unit.role } size="large" transparent black />
						</div>
						<div class="col bg-dark text-light"><Locale k="UNIT_VIEW_HEIGHT" /></div>
						<div class="col">{ unit.height }</div>
						<div class="col bg-dark text-white"><Locale k="UNIT_VIEW_WEIGHT" /></div>
						<div class="col">{ unit.weight }</div>
						<div class="col bg-dark text-white"><Locale k="UNIT_VIEW_BATTLESTYLE" /></div>
						<div class="col">{ unit.weapon1 }</div>
						<div class="col bg-dark text-white"><Locale k="UNIT_VIEW_WEAPON" /></div>
						<div class="col">{ unit.weapon2 }</div>
					</div>
				</div>

				<table class="table table-bordered table-fixed text-center table-unit-modal">
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
									? <span class="text-secondary">
										<Locale k="UNIT_VIEW_DROPS_EMPTY" />
									</span>
									: <Fragment>
										{ unit.craft
											? <span class="badge bg-dark my-1">
												<Icon icon="hammer" class="me-1" />
												<Locale k="UNIT_VIEW_DROPS_CREATIONTIME" />
												<span class="ms-1">{ CraftTime }</span>
											</span>
											: <Fragment />
										}

										{ unit.source.map((area, aindex) => <div>
											{ unit.craft || aindex > 0 ? <hr class="my-1" /> : <Fragment /> }
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
														: <Fragment />
											}

											{ area.map(source => <SourceBadge class="my-1" source={ source } linked />) }
										</div>) }
									</Fragment>
								}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>;
};

const SkillTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	const CurrentResists = unit.stat[0].Resist;

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
									: <Fragment />
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
	const dialogueLang = objState<keyof UnitDialogueDataType>("ko");

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
		<div class="btn-group">
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueLang.value === "ko")}` }
				onClick={ (): void => dialogueLang.set("ko") }
			>한국어</button>
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueLang.value === "jp")}` }
				onClick={ (): void => dialogueLang.set("jp") }
			>日本語</button>
		</div>

		{ VoiceList.map(voice => <UnitDialogue
			unit={ unit }
			voice={ voice }
			id={ voice.id }
			lang={ dialogueLang.value }
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

	return <Loader json={ [StaticDB.FilterableEquip, `unit/${props.uid}`] } content={ ((): preact.VNode => {
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
			`${AssetsRoot}/${ImageExtension()}/full/${(`00${unit.id}`).substr(-3)}.${ImageExtension()}`,
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
			<SkillTab display={ DisplayTab.value === "skills" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } />
			<DialogueTab display={ DisplayTab.value === "dialogue" } unit={ unit } skinIndex={ skinIndex } SkinList={ SkinList } />
		</div>;
	}) } />;
};
export default View;
