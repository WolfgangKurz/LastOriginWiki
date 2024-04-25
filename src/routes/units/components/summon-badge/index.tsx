import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import { SkillEntity, SkillSummonInfo } from "@/types/DB/Skill";
import { Summon, SummonSkill } from "@/types/DB/Summon";
import { BuffStat } from "@/types/Buffs";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { UniqueID } from "@/libs/Functions";

import Loader, { GetJson } from "@/libs/Loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconDot from "@/components/bootstrap-icon/icons/Dot";
import IconLink45deg from "@/components/bootstrap-icon/icons/Link45deg";
import IconChevronDoubleDown from "@/components/bootstrap-icon/icons/ChevronDoubleDown";
import IconChevronDown from "@/components/bootstrap-icon/icons/ChevronDown";
import IconChevronUp from "@/components/bootstrap-icon/icons/ChevronUp";
import IconChevronDoubleUp from "@/components/bootstrap-icon/icons/ChevronDoubleUp";
import IconCpuFill from "@/components/bootstrap-icon/icons/CpuFill";
import PopupBase from "@/components/popup/base";
import StatIcon from "@/components/stat-icon";
import UnitBadge from "@/components/unit-badge";
import RarityBadge from "@/components/rarity-badge";
import ElemIcon from "@/components/elem-icon";
import SkillBound from "@/components/skill-bound";
import SkillDescription from "@/components/skill-description";
import BuffList from "@/components/buff-list";
import AIList from "@/components/ai-list";

import "./style.module.scss";

interface SummonBadgeProps {
	class?: string;
	summon: SkillSummonInfo | null;
}

const SummonBadge: FunctionalComponent<SummonBadgeProps> = (props) => {
	const summon = props.summon;
	if (!summon) return <></>;

	const display = objState<boolean>(false);
	const displayTab = objState<string>("skill1");

	return <Loader json={ `summon/${summon.char}` } content={ ((): preact.VNode => {
		const Summon = GetJson<Summon>(`summon/${summon.char}`);
		if (!Summon) return <></>;

		const uid = UniqueID("summon-badge-modal-");
		const imageExt = ImageExtension();

		const Skills = ((): Array<SummonSkill | undefined> => {
			const list: Array<SummonSkill | undefined> = Summon.skills;
			while (list.length < 5) list.push(undefined);
			return list;
		})();

		function StatValue (stat: [number, number]): number {
			return new Decimal(stat[0])
				.floor()
				.toNumber();
		}

		function Description (skill: SummonSkill): string {
			if (!Summon) return "";

			const v = Decimal.mul(
				StatValue(Summon.stat.atk),
				skill.buff.rate,
			)
				.floor()
				.toNumber();

			let t = skill.desc.toString();
			t = t.replace(/\{0\}/g, `[@::${v}~0: (${skill.buff.rate}배)]`);
			return t;
		}

		const GetRates = (skill: SummonSkill): number[] => new Array(10).fill(skill.buff.rate);

		const buffList = ((): Record<string, BuffStat[]> => {
			const output: Record<string, BuffStat[]> = {};
			Skills.forEach(skill => {
				if (!skill) return null;

				const stat = skill.buff.buffs;
				output[skill.key] = stat;
			});

			return output;
		})();

		return <div class={ `summon-badge ${props.class || ""}` }>
			<span class="badge bg-dark summon-badge" role="button" onClick={ (): void => display.set(true) }>
				<Locale k="UNIT_SKILL_SUMMON_BADGE" p={ [<Locale k={ Summon.uid } />] } />
				<IconDot />
				<Locale k="UNIT_SKILL_SUMMON_MAXIMUM" p={ [Summon.overlap] } />
				<IconDot />
				<Locale k="UNIT_SKILL_SUMMON_ROUNDS" p={ [Summon.lifecycle] } />
				<IconLink45deg class="ms-1" />
			</span>

			<PopupBase
				class="summon-modal text-center"
				bodyClass="pb-0"
				display={ display.value }
				size="xl"
				header={
					<h4>
						<div class="text-start">
							<Locale k={ Summon.uid } />
							<div style="font-size: 60%">{ Summon.uid }</div>
						</div>
					</h4>
				}
				onHidden={ (): void => display.set(false) }
			>
				<table class="table table-bordered table-fixed table-summon-modal mt-2 text-center">
					<tbody>
						<tr class="d-table-row d-lg-none">
							<td class="p-0">
								<div class="icon-container">
									<div class="summon-icon m-3">
										<img src={ `${AssetsRoot}/${imageExt}/tbar/${Summon.icon}.${imageExt}` } />
									</div>
									<div class="row row-cols-2">
										<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_TYPE" /></div>
										<div class="col">
											<UnitBadge type={ Summon.type } size="large" transparent black />
										</div>
										<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_ROLE" /></div>
										<div class="col">
											<UnitBadge role={ Summon.role } size="large" transparent black />
										</div>
										<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_GRADE" /></div>
										<div class="col">
											<RarityBadge rarity={ Summon.rarity } />
										</div>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td rowSpan={ 2 } class="p-0 d-lg-table-cell d-none">
								<div class="icon-container">
									<div class="summon-icon m-3">
										<img src={ `${AssetsRoot}/${imageExt}/tbar/${Summon.icon}.${imageExt}` } />
									</div>
									<div class="row row-cols-2">
										<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_TYPE" /></div>
										<div class="col">
											<UnitBadge type={ Summon.type } size="large" transparent black />
										</div>
										<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_ROLE" /></div>
										<div class="col">
											<UnitBadge role={ Summon.role } size="large" transparent black />
										</div>
										<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_GRADE" /></div>
										<div class="col">
											<RarityBadge rarity={ Summon.rarity } />
										</div>
									</div>
								</div>
							</td>
							<td class="bg-dark text-light">
								<div class="input-group">
									<button class="btn btn-secondary" disabled>
										<IconChevronDoubleDown />
									</button>
									<button class="btn btn-secondary" disabled>
										<IconChevronDown />
									</button>

									<div class="flex-1">
										<div class="input-prepend">Lv.</div>
										<input class="form-control ps-5" value="1" disabled />
									</div>

									<button class="btn btn-secondary" disabled>
										<IconChevronUp />
									</button>
									<button class="btn btn-secondary" disabled>
										<IconChevronDoubleUp />
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td class="bg-dark status-col p-0">
								<table class="table table-borderless mb-0" style="--bs-table-bg: var(--bs-dark)">
									<tbody>
										<tr class="text-center text-white resist-parent">
											<td data-type="fire">
												<ElemIcon inline elem="fire" />
												<strong class="ps-1">{ Summon.stat.res.fire }%</strong>
											</td>
											<td data-type="ice">
												<ElemIcon inline elem="ice" />
												<strong class="ps-1">{ Summon.stat.res.chill }%</strong>
											</td>
											<td data-type="lightning">
												<ElemIcon inline elem="lightning" />
												<strong class="ps-1">{ Summon.stat.res.thunder }%</strong>
											</td>
										</tr>
									</tbody>
								</table>
								<table class="table table-borderless mb-0" style="--bs-table-bg: var(--bs-dark)">
									<tbody>
										<tr>
											<td class="text-start">
												<StatIcon inline stat="HP" />
												<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_HP" /></span>
											</td>
											<td>
												<div class="status-col-value">{ StatValue(Summon.stat.hp) }</div>
											</td>
											<td class="text-start" />
											<td />
										</tr>

										<tr>
											<td class="text-start">
												<StatIcon inline stat="ATK" />
												<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_ATK" /></span>
											</td>
											<td>
												<div class="status-col-value">{ StatValue(Summon.stat.atk) }</div>
											</td>
											<td class="text-start">
												<StatIcon inline stat="ACC" />
												<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_ACC" /></span>
											</td>
											<td>
												<div class="status-col-value">{ Summon.stat.acc }%</div>
											</td>
										</tr>

										<tr>
											<td class="text-start">
												<StatIcon inline stat="CRI" />
												<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_CRIT" /></span>
											</td>
											<td>
												<div class="status-col-value">{ Summon.stat.cri }%</div>
											</td>
											<td class="text-start">
												<StatIcon inline stat="DEF" />
												<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_DEF" /></span>
											</td>
											<td>
												<div class="status-col-value">{ StatValue(Summon.stat.def) }</div>
											</td>
										</tr>

										<tr>
											<td class="text-start">
												<StatIcon inline stat="EVA" />
												<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_EVA" /></span>
											</td>
											<td>
												<div class="status-col-value">{ Summon.stat.eva }%</div>
											</td>
											<td class="text-start">
												<StatIcon inline stat="SPD" />
												<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_SPD" /></span>
											</td>
											<td>
												<div class="status-col-value">{ Summon.stat.spd }</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>

				<div class="container mb-3">
					<div class="row row-cols-6 summon-display-tabs mt-1">
						{ Skills.map((skill, idx) => <div
							class={ [
								"col",
								"mt-1",
								displayTab.value === `skill${idx + 1}` ? "border border-bottom-0" : "border-bottom",
							].join(" ") }
							role="button"
							onClick={ (e): void => {
								e.preventDefault();
								displayTab.set(`skill${idx + 1}`);
							} }
						>
							{ skill
								? <img
									class="skill-icon my-2"
									src={ [
										AssetsRoot,
										imageExt,
										"skill",
										`${skill.icon}_${skill.passive ? "passive" : "active"}.${imageExt}`,
									].join("/") }
								/>
								: <></>
							}
						</div>) }
						<div
							class={ `col mt-1 ${displayTab.value === "ai" ? "border border-bottom-0" : "border-bottom"}` }
							role="button"
							onClick={ (e): void => {
								e.preventDefault();
								displayTab.set("ai");
							} }
						>
							<IconCpuFill class="my-2" />
						</div>
					</div>

					{ Skills.map((skill, idx) => displayTab.value === `skill${idx + 1}` && skill
						? <div class="row">
							<div class="col border border-top-0 text-start p-3">
								<ElemIcon elem={ skill.type } />
								<strong>{ skill.name }</strong>
								<small class="ms-1">Lv.1</small>

								<div class="float-md-end bg-dark ms-md-2 mt-2 mt-md-0 p-2 text-center">
									<SkillBound
										target={ skill.target }
										buffs={ skill.buff }
										level={ 0 }
										passive={ skill.passive }
										rangeBonus={ false }
									/>
								</div>

								<div class="skill-desc">
									<div>
										<ElemIcon elem={ skill.buff.type } class="me-1" />

										{ skill.buff.dismiss_guard
											? <span class="badge bg-warning text-dark me-1">
												<Locale k="ENEMY_SKILL_DISMISS_GUARD" />
											</span>
											: <></>
										}
										{ skill.target_ground
											? <span class="badge bg-danger me-1" title={ LocaleGet("ENEMY_SKILL_GRID_TARGET_TIP") }>
												<Locale k="ENEMY_SKILL_GRID_TARGET" />
											</span>
											: <></>
										}
										{ skill.buff.acc_bonus
											? <span class="badge bg-success me-1">
												<Locale k="ENEMY_SKILL_ACC_BONUS" />
												{ (skill.buff.acc_bonus > 0 ? "+" : "") + skill.buff.acc_bonus }%
											</span>
											: <></>
										}
									</div>
									<hr class="my-1" />

									<div class="break-keep white-pre-line">
										<SkillDescription
											text={ Description(skill) }
											level={ 0 }
											rates={ GetRates(skill) }
											buffBonus={ false }
											favorBonus={ false }
											skillBonus={ 0 }
										/>
									</div>
								</div>

								<div class="clearfix" />
								<hr />

								{ buffList[skill.key].length > 0
									? <BuffList uid={ Summon.uid } list={ buffList[skill.key] } />
									: <></>
								}
							</div>
						</div>
						: <></>) }

					{ displayTab.value === "ai"
						? <div class="row">
							<div class="col border border-top-0 text-start p-3">
								<AIList
									uid={ Summon.uid }
									aiKey={ Summon.ai }
									// skills={ Skills.filter(x => x) as unknown as SkillEntity[] }
									enemy={ false }
								/>
							</div>
						</div>
						: <></>
					}
				</div>
			</PopupBase>
		</div>;
	}) } />;
};
export default SummonBadge;
