import { FunctionalComponent } from "preact";

import { Unit } from "@/types/DB/Unit";
import { SkillEntity, SkillGroup, SkillValueData } from "@/types/DB/Skill";
import { ACTOR_GRADE } from "@/types/Enums";
import { BuffStat } from "@/types/Buffs";

import Session from "@/libs/Session";
import { isActive } from "@/libs/Functions";
import { objState } from "@/libs/State";
import { ImageExtension, RarityDisplay } from "@/libs/Const";
import { GetSkillDescription } from "@/libs/SkillDescription";

import Locale, { LocaleExists, LocaleGet } from "@/components/locale";
import ElemIcon from "@/components/elem-icon";
import RarityBadge from "@/components/rarity-badge";
import SkillBound from "@/components/skill-bound";
import SkillDescription, { SkillDescriptionValueData } from "@/components/skill-description";
import SummonBadge from "../../components/summon-badge";
import BuffList from "@/components/buff-list";
import SkillIcon from "@/components/skill-icon";

import style from "./style.module.scss";

interface SkillItem extends SkillEntity {
	slot: string;
	index: number;
	isPassive: boolean;
}
type SkillTableType = Record<string, SkillItem>;

type LevelType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface SkillTableProps {
	unit: Unit;
	buffBonus: boolean;
	skillBonus: number;
	rangeBonus: boolean;
}

const SkillTable: FunctionalComponent<SkillTableProps> = (props) => {
	const imageExt = ImageExtension();

	const unit = props.unit;
	const skills = ((): Record<string, SkillItem> => {
		const table: SkillTableType = {};

		const db = unit.skills;
		Object.keys(db)
			.forEach(x => {
				const t = db[x as keyof SkillGroup]!;

				const y = /(F?)([0-9]+)/.exec(t.key);
				if (!y) return;

				const idx = parseInt(y[2], 10);
				table[x] = {
					...t,
					index: idx,
					isPassive: t.icon.startsWith("P."),
					icon: t.icon.startsWith("P.") ? t.icon.substring(2) : t.icon,
					slot: t.key.replace(/^F/, "CH_"),
				};
			});
		return table;
	})();
	if (!skills) return <></>;

	const formState = objState<"normal" | "change">("normal");
	const skillLevel = objState<LevelType>(9);

	const favorBonus = objState<boolean>(Session.get("unit.skill-table.favorBonus", "0") === "1");
	const displayBuffList = objState<boolean>(Session.get("unit.skill-table.displayBuffList", "0") === "1");
	const displayBuffDummy = objState<boolean>(Session.get("unit.skill-table.displayBuffDummy", "0") === "1");
	const displayFlavor = objState<boolean>(Session.get("unit.skill-table.displayFlavor", "1") === "1");

	const HasFormChange = ((): boolean => {
		const raw = skills;
		if (!raw) return false;

		return Object.keys(raw).some(x => x.startsWith("F"));
	})();

	const Skills = ((): SkillItem[] => {
		const keys = Object.keys(skills);
		return keys
			.filter(x => !x.startsWith("F"))
			.map(x => {
				const keyf = `F${x}`;
				if (formState.value === "change" && keys.includes(keyf))
					return skills[keyf];
				return skills[x];
			});
	})();

	const finalSkillLevel = skillLevel.value + (favorBonus.value ? 1 : 0) + (props.buffBonus ? 2 : 0);

	const buffList = ((): Record<string, BuffStat[]> => {
		const output: Record<string, BuffStat[]> = {};

		Object.keys(skills)
			.forEach(key => {
				const skill = skills[key];
				if (!skill) return null;

				const stat = skill.buffs.data[skill.buffs.index[skillLevel.value]].buffs;
				output[key] = stat;
			});

		return output;
	})();

	const BuffRates = ((): Record<string, number[]> => {
		const output: Record<string, number[]> = {};
		Object.keys(skills)
			.forEach(key => {
				const skill = skills[key];
				if (!skill) return null;
				output[key] = skill.buffs.index.map(x => skill.buffs.data[x].buff_rate);
			});
		return output;
	})();

	function GetSkillDescriptions(skill: SkillItem, values: Record<string, SkillDescriptionValueData[]>) {
		const rates = GetRates(skill);

		const key = `UNIT_SKILL_DESC_${unit.uid}_${skill.key}`;
		const orig = LocaleExists(key) ? LocaleGet(key) : "";

		return GetSkillDescription(orig, skill.slot, values);
	}
	function GetRates (skill: SkillItem): number[] {
		return skill.buffs.index
			.map(x => skill.buffs.data[x].rate);
	}

	const Values: Record<string, SkillDescriptionValueData[]> = {};
	Object.keys(skills)
		.forEach(_ => {
			const rkey = _.startsWith("F")
				? `CH_${_.substr(1)}`
				: _;

			const src = skills[_].values.data[skills[_].values.index[skillLevel.value]];
			Values[rkey] = src
				.map(v => ({
					base: v.base,
					per: v.per,
					chance: parseFloat(v.chance),
				}) as SkillDescriptionValueData);
		});

	const skillHeader = <>
		<Locale k="UNIT_SKILL_DESCRIPTION" />
		<select
			class="form-select form-select-sm table-unit-level-select font-exo2"
			value={ skillLevel.value }
			onChange={ (e): void => {
				skillLevel.set(
					parseInt((e.target as HTMLSelectElement).value, 10) as LevelType,
				);
			} }
		>
			{ new Array(10)
				.fill(0)
				.map((_, i) => <option value={ i }>Lv. { i + 1 }</option>)
			}
		</select>
		<span class="text-secondary ps-2">|</span>
		<div class="d-inline-block ms-2">
			<div class="form-check d-inline-block me-2">
				<label>
					<input
						class="form-check-input"
						type="checkbox"
						checked={ favorBonus.value }
						onChange={ (): void => {
							const v = !favorBonus.value;
							favorBonus.set(v);
							Session.set("unit.skill-table.favorBonus", v ? "1" : "0");
						} }
					/>
					<Locale k="UNIT_SKILL_FAVOR_200" />
				</label>
			</div>
			<span class="text-secondary pe-2">|</span>
			<div class="form-check d-inline-block me-2">
				<label>
					<input
						class="form-check-input"
						type="checkbox"
						checked={ displayBuffList.value }
						onChange={ (): void => {
							const v = !displayBuffList.value;
							displayBuffList.set(v);
							Session.set("unit.skill-table.displayBuffList", v ? "1" : "0");
						} }
					/>
					<Locale k="UNIT_SKILL_DISPLAY_BUFF" />
				</label>
			</div>
			<span class="text-secondary pe-2">|</span>
			<div class="form-check d-inline-block me-2">
				<label>
					<input
						class="form-check-input"
						type="checkbox"
						disabled={ !displayBuffList.value }
						checked={ displayBuffDummy.value }
						onChange={ (): void => {
							const v = !displayBuffDummy.value;
							displayBuffDummy.set(v);
							Session.set("unit.skill-table.displayBuffDummy", v ? "1" : "0");
						} }
					/>
					<Locale k="UNIT_SKILL_DISPLAY_DUMMY" />
				</label>
			</div>
			<span class="text-secondary pe-2">|</span>
			<div class="form-check d-inline-block me-2">
				<label>
					<input
						class="form-check-input"
						type="checkbox"
						checked={ displayFlavor.value }
						onChange={ (): void => {
							const v = !displayFlavor.value;
							displayFlavor.set(v);
							Session.set("unit.skill-table.displayFlavor", v ? "1" : "0");
						} }
					/>
					<Locale k="UNIT_SKILL_DISPLAY_FLAVOR" />
				</label>
			</div>
		</div>
	</>;

	const tableContent = (skill: SkillItem): preact.VNode => {
		const flavorKey = `UNIT_SKILL_FLAVOR_${props.unit.uid}_${skill.key}`;
		const flavorStr = LocaleGet(flavorKey);
		const flavor = !displayFlavor.value || (flavorStr === flavorKey)
			? <></>
			: <div class={ style.SkillFlavor }>
				{ flavorStr.startsWith("<div>")
					? <Locale k={ flavorKey } />
					: <Locale k={ flavorKey } plain />
				}
			</div>;

		const descList = GetSkillDescriptions(skill, Values);
		return <>
			<div class="unit-modal-skill">
				{ skill.buffs.data[skill.buffs.index[skillLevel.value]].dismiss_guard
					? <span class="badge bg-warning text-dark me-1">
						<Locale k="UNIT_SKILL_DISMISS_GUARD" />
					</span>
					: <></>
				}

				{ skill.buffs.data[skill.buffs.index[skillLevel.value]].target_ground && !skill.isPassive
					? <span class="badge bg-danger me-1"
						title={ LocaleGet("UNIT_SKILL_GRID_TARGET_TIP") }
					>
						<Locale k="UNIT_SKILL_GRID_TARGET" />
					</span>
					: <></>
				}

				{ skill.buffs.data[skill.buffs.index[skillLevel.value]].acc_bonus
					? <span class="badge bg-success me-1">
						<Locale k="UNIT_SKILL_ACC_BONUS" />
						{
							(skill.buffs.data[skill.buffs.index[skillLevel.value]].acc_bonus > 0 ? "+" : "") +
							skill.buffs.data[skill.buffs.index[skillLevel.value]].acc_bonus
						}%
					</span>
					: <></>
				}

				{ skill.delayed
					? <span class="badge bg-substory me-1">
						<Locale k="UNIT_SKILL_DELAYED" />
					</span>
					: <></>
				}
				{ !skill.buffs.data[skill.buffs.index[skillLevel.value]].enabled
					? <span class="badge bg-secondary me-1">
						<Locale k="UNIT_SKILL_DISABLED" />
					</span>
					: <></>
				}

				<SummonBadge summon={ skill.buffs.data[skill.buffs.index[skillLevel.value]].summon } class="me-1" />
			</div>

			<div>
				{ descList.lines.map((line) => <div class="unit-modal-skill">
					{ !line
						? descList.lines.length === 1
							? <span class="text-secondary">
								<Locale k="UNIT_SKILL_NO_DESCRIPTION" />
							</span>
							: <div style="padding:0.75em" />
						: <SkillDescription
							text={ line }
							sections={ descList.sections }
							rates={ GetRates(skill) }
							level={ skillLevel.value }
							values={ Values }
							slot={ skill.slot }
							buffBonus={ props.buffBonus }
							skillBonus={ props.skillBonus }
							favorBonus={ favorBonus.value }
						/>
					}
				</div>) }

				{ flavor }
			</div>

			{ BuffRates[skill.key].some((x) => x !== 100)
				? <div>
					<span class="badge bg-danger">
						<Locale k="UNIT_SKILL_BUFF_RATE" p={ [BuffRates[skill.key][skillLevel.value]] } />
					</span>
					<small class="text-secondary ms-1">
						<Locale k="UNIT_SKILL_BUFF_RATE_DESC" />
					</small>
				</div>
				: <></>
			}

			{ displayBuffList.value && buffList[skill.key].length > 0
				? <BuffList list={ buffList[skill.key] } level={ finalSkillLevel } dummy={ displayBuffDummy.value } />
				: <></>
			}
		</>;
	};

	const endRarity = unit.promotions
		? Math.max(unit.rarity, ...unit.promotions)
		: unit.rarity;

	return <table class="table table-bordered table-unit-modal">
		<thead class="thead-dark">
			<tr>
				<th colSpan={ 3 }>
					<Locale k="UNIT_SKILL" />
					{ HasFormChange
						? <div class="btn-group ms-2">
							<button
								class={ `btn btn-sm btn-outline-warning ${isActive(formState.value === "normal")}` }
								onClick={ (): void => formState.set("normal") }
							>Normal</button>
							<button
								class={ `btn btn-sm btn-outline-warning ${isActive(formState.value === "change")}` }
								onClick={ (): void => formState.set("change") }
							>F.Change</button>
						</div>
						: <></>
					}
				</th>
			</tr>
			<tr>
				<th><Locale k="UNIT_SKILL_NAME" /></th>
				<th class="d-md-table-cell d-none">{ skillHeader }</th>
				<th><Locale k="UNIT_SKILL_RANGE" /></th>
			</tr>
			<tr class="d-md-none d-table-row">
				<th colSpan={ 2 }>{ skillHeader }</th>
			</tr>
		</thead>
		<tbody>
			{ Skills.map(skill => <>
				<tr class={ skill.key.startsWith("F") ? style.SkillTableFChange : "" }>
					<td>
						<SkillIcon icon={ skill.icon } passive={ skill.isPassive } />
						<div class="text-bold">
							<Locale k={ `UNIT_SKILL_${unit.uid}_${skill.key}` } />
						</div>

						<ElemIcon elem={ skill.buffs.data[skill.buffs.index[skillLevel.value]].type } class="mx-0" />
						{ skill.index > endRarity
							? <span class="ms-2 badge bg-substory"><Locale k="UNIT_SKILL_DUMMY" /></span>
							: skill.isPassive && skill.index > unit.rarity
								? <RarityBadge class="ms-2" rarity={ skill.index }>
									{ RarityDisplay[skill.index as ACTOR_GRADE] }
									&nbsp;
									<Locale k="UNIT_SKILL_PROMOTION_SKILL" />
								</RarityBadge>
								: <></>
						}
					</td>
					<td class="text-start d-none d-md-table-cell">{ tableContent(skill) }</td>
					<th class="bg-dark text-light text-center">
						<SkillBound
							passive={ skill.isPassive }
							buffs={ skill.buffs }
							target={ skill.target }
							level={ skillLevel.value + 1 }
							rangeBonus={ props.rangeBonus }
						/>
					</th>
				</tr>
				<tr class="d-table-row d-md-none">
					<td class="text-start" colSpan={ 2 }>{ tableContent(skill) }</td>
				</tr>
			</>) }
		</tbody>
	</table>;
};
export default SkillTable;
