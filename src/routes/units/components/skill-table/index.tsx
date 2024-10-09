import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import Decimal from "decimal.js";

import { Unit } from "@/types/DB/Unit";
import { SkillEntity, SkillGroup } from "@/types/DB/Skill";
import { ACTOR_BODY_TYPE, ACTOR_GRADE } from "@/types/Enums";
import { BuffStat } from "@/types/Buffs";

import { useLocale } from "@/libs/Locale";
import Session from "@/libs/Session";
import { isActive } from "@/libs/Functions";
import { objState } from "@/libs/State";
import { ImageExtension, RarityDisplay } from "@/libs/Const";
import { BuildClass, cn } from "@/libs/Class";
import { GetSkillDescription } from "@/libs/SkillDescription";

import Locale from "@/components/locale";
import ElemIcon from "@/components/elem-icon";
import RarityBadge from "@/components/rarity-badge";
import SkillBound from "@/components/skill-bound";
import SkillDescription, { SkillDescriptionValueData } from "@/components/skill-description";
import SummonBadge from "../../components/summon-badge";
import BuffList from "@/components/buff-list";
import SkillIcon from "@/components/skill-icon";

import style from "./style.module.scss";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

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
	const [loc] = useLocale();

	const unit = props.unit;
	const skills = useMemo((): Record<string, SkillItem> => {
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
	}, [unit]);
	if (!skills) return <></>;

	const [formState, setFormState] = useState<"normal" | "change">("normal");
	const [skillLevel, setSkillLevel] = useState<LevelType>(9);

	const [favorBonus, setFavorBonus] = useState<boolean>(Session.get("unit.skill-table.favorBonus", "0") === "1");
	const [displayBuffList, setDisplayBuffList] = useState<boolean>(Session.get("unit.skill-table.displayBuffList", "0") === "1");
	const [displayBuffDummy, setDisplayBuffDummy] = useState<boolean>(Session.get("unit.skill-table.displayBuffDummy", "0") === "1");
	const [displayFlavor, setDisplayFlavor] = useState<boolean>(Session.get("unit.skill-table.displayFlavor", "1") === "1");

	useEffect(() => {
		if (favorBonus && unit.body === ACTOR_BODY_TYPE.AGS)
			setFavorBonus(false);
	}, [unit, favorBonus]);

	const HasFormChange = useMemo(() => {
		const raw = skills;
		if (!raw) return false;

		return Object.keys(raw).some(x => x.startsWith("F"));
	}, [skills]);

	const Skills = useMemo((): SkillItem[] => {
		const keys = Object.keys(skills);
		return keys
			.filter(x => !x.startsWith("F"))
			.map(x => {
				const keyf = `F${x}`;
				if (formState === "change" && keys.includes(keyf))
					return skills[keyf];
				return skills[x];
			});
	}, [skills, formState]);

	const finalSkillLevel = useMemo(
		() => skillLevel + (favorBonus ? 1 : 0) + (props.buffBonus ? 2 : 0),
		[skillLevel, favorBonus, props.buffBonus],
	);

	const buffList = useMemo((): Record<string, BuffStat[]> => {
		const output: Record<string, BuffStat[]> = {};

		Object.keys(skills)
			.forEach(key => {
				const skill = skills[key];
				if (!skill) return null;

				const stat = skill.buffs.data[skill.buffs.index[skillLevel]].buffs;
				output[key] = stat;
			});

		return output;
	}, [skills, skillLevel]);

	const BuffRates = useMemo((): Record<string, number[]> => {
		const output: Record<string, number[]> = {};
		Object.keys(skills)
			.forEach(key => {
				const skill = skills[key];
				if (!skill) return null;
				output[key] = skill.buffs.index.map(x => skill.buffs.data[x].buff_rate);
			});
		return output;
	}, [skills]);

	const GetSkillDescriptions = useCallback((skill: SkillItem, values: Record<string, SkillDescriptionValueData[]>) => {
		const key = `UNIT_SKILL_DESC_${unit.uid}_${skill.key}`;
		const orig = loc[key] || "";

		return GetSkillDescription(orig, skill.slot, values);
	}, [loc, unit]);
	function GetRates (skill: SkillItem): number[] {
		return skill.buffs.index
			.map(x => skill.buffs.data[x].rate);
	}

	const Values = useMemo((): Record<string, SkillDescriptionValueData[]> => {
		const Values: Record<string, SkillDescriptionValueData[]> = {};
		Object.keys(skills)
			.forEach(_ => {
				const rkey = _.startsWith("F")
					? `CH_${_.substring(1)}`
					: _;

				const src = skills[_].values.data[skills[_].values.index[skillLevel]];
				Values[rkey] = src
					.map(v => ({
						base: v.base,
						per: v.per,
						chance: parseFloat(v.chance),
					}) as SkillDescriptionValueData);
			});

		return Values;
	}, [skills, skillLevel]);

	const skillHeader = useMemo(() => <>
		<Locale k="UNIT_SKILL_DESCRIPTION" />
		<select
			class="form-select form-select-sm table-unit-level-select font-exo2"
			value={ skillLevel }
			onChange={ (e): void => {
				setSkillLevel(
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
			<div class={ cn("form-check d-inline-block me-2", unit.body === ACTOR_BODY_TYPE.AGS && "text-secondary") }>
				<label>
					<input
						class="form-check-input"
						type="checkbox"
						checked={ favorBonus }
						disabled={ unit.body === ACTOR_BODY_TYPE.AGS }
						onChange={ (): void => {
							const v = !favorBonus;
							setFavorBonus(v);
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
						checked={ displayBuffList }
						onChange={ (): void => {
							const v = !displayBuffList;
							setDisplayBuffList(v);
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
						disabled={ !displayBuffList }
						checked={ displayBuffDummy }
						onChange={ (): void => {
							const v = !displayBuffDummy;
							setDisplayBuffDummy(v);
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
						checked={ displayFlavor }
						onChange={ (): void => {
							const v = !displayFlavor;
							setDisplayFlavor(v);
							Session.set("unit.skill-table.displayFlavor", v ? "1" : "0");
						} }
					/>
					<Locale k="UNIT_SKILL_DISPLAY_FLAVOR" />
				</label>
			</div>
		</div>
	</>, [skillLevel, favorBonus, displayBuffList, displayBuffList, displayBuffDummy, displayFlavor]);

	const tableContent = useCallback((skill: SkillItem): preact.VNode => {
		const flavorKey = `UNIT_SKILL_FLAVOR_${props.unit.uid}_${skill.key}`;
		const descList = GetSkillDescriptions(skill, Values);

		return <>
			<div class="unit-modal-skill mb-2">
				{ skill.buffs.data[skill.buffs.index[skillLevel]].dismiss_guard
					? <span class="badge bg-warning text-bg-warning me-1">
						<Locale k="UNIT_SKILL_DISMISS_GUARD" />
					</span>
					: <></>
				}

				{ skill.target_ground && !skill.isPassive
					? <span class="badge bg-danger text-bg-danger me-1"
						title={ loc["UNIT_SKILL_GRID_TARGET_TIP"] || "" }
					>
						<Locale k="UNIT_SKILL_GRID_TARGET" />
					</span>
					: <></>
				}

				{ skill.buffs.data[skill.buffs.index[skillLevel]].acc_bonus
					? <span class="badge bg-success text-bg-success me-1">
						<Locale k="UNIT_SKILL_ACC_BONUS" />
						{
							(skill.buffs.data[skill.buffs.index[skillLevel]].acc_bonus > 0 ? "+" : "") +
							skill.buffs.data[skill.buffs.index[skillLevel]].acc_bonus
						}%
					</span>
					: <></>
				}

				{ skill.delayed
					? <span class="badge bg-substory text-bg-substory me-1">
						<Locale k="UNIT_SKILL_DELAYED" />
					</span>
					: <></>
				}
				{ !skill.buffs.data[skill.buffs.index[skillLevel]].enabled
					? <span class="badge bg-secondary text-bg-secondary me-1">
						<Locale k="UNIT_SKILL_DISABLED" />
					</span>
					: <></>
				}

				<SummonBadge summon={ skill.buffs.data[skill.buffs.index[skillLevel]].summon } class="me-1" />
			</div>

			<div>
				<div class={ cn(style.SkillFlavor, !(displayFlavor && flavorKey in loc) && "d-none") }>
					{ flavorKey in loc
						? loc[flavorKey].startsWith("<div>")
							? <Locale k={ flavorKey } raw />
							: <Locale k={ flavorKey } raw={ false } />
						: <></>
					}
				</div>

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
							boxs={ descList.boxs }
							rates={ GetRates(skill) }
							level={ skillLevel }
							values={ Values }
							slot={ skill.slot }
							buffBonus={ props.buffBonus }
							skillBonus={ props.skillBonus }
							favorBonus={ favorBonus }
						/>
					}
				</div>) }
			</div>

			{ BuffRates[skill.key].some((x) => x !== 100)
				? <div>
					<span class="badge bg-danger text-bg-danger">
						<Locale k="UNIT_SKILL_BUFF_RATE" p={ [BuffRates[skill.key][skillLevel]] } />
					</span>
					<small class="text-secondary ms-1">
						<Locale k="UNIT_SKILL_BUFF_RATE_DESC" />
					</small>
				</div>
				: <></>
			}

			<div class={ cn(!(displayBuffList && buffList[skill.key].length > 0) && "d-none") }>
				<BuffList
					uid={ unit.uid }
					list={ buffList[skill.key] }
					level={ finalSkillLevel }
					dummy={ displayBuffDummy }
				/>
			</div>
		</>;
	}, [
		loc,
		displayFlavor, GetSkillDescriptions,
		skillLevel, favorBonus,
		props.buffBonus, props.skillBonus,
		displayBuffList, displayBuffDummy,
	]);

	const endRarity = useMemo(() => unit.promotions
		? Math.max(unit.rarity, ...unit.promotions.map(p => p.to))
		: unit.rarity,
		[unit],
	);

	const bonus = useMemo(() => Decimal.div(props.skillBonus || 0, 100), [props.skillBonus]);
	const valueHelp = useMemo(() => !bonus.isZero()
		? <span class="badge bg-success ms-1">
			▲ { bonus.toNumber() }
		</span>
		: undefined,
		[bonus],
	);

	const elDisp = {
		physics: <Locale k="COMMON_ELEM_PHYSICS" />,
		fire: <Locale k="COMMON_ELEM_FIRE" />,
		ice: <Locale k="COMMON_ELEM_ICE" />,
		lightning: <Locale k="COMMON_ELEM_ELECTRIC" />,
	};

	return <>
		<div class={ style.SkillTable }>
			<div class={ style.Title }>
				<Locale k="UNIT_SKILL" />

				{ HasFormChange && <Button.Group>
					<Button
						active={ formState === "normal" }
						variant="warning"
						outline
						onClick={ () => setFormState("normal") }
					>
						Normal
					</Button>
					<Button
						active={ formState === "change" }
						variant="warning"
						outline
						onClick={ () => setFormState("change") }
					>
						F.Change
					</Button>
				</Button.Group> }
			</div>
			<div class={ style.Table }>
				<div class={ style.Header }>
					<Locale k="UNIT_SKILL_NAME" />
				</div>
				<div class={ cn(style.Header, style.SkillController) }>
					{ skillHeader }
				</div>
				<div class={ style.Header }>
					<Locale k="UNIT_SKILL_RANGE" />
				</div>

				{ Skills.map(skill => {
					const rates = GetRates(skill);
					const el = skill.buffs.data[skill.buffs.index[skillLevel]].type;
					const v = Decimal.add(rates[skillLevel], bonus)
						.toFixed(10)
						.replace(/\.?0+$/, "");

					const isFChange = skill.key[0] === "F";

					return <>
						<div class={ cn(style.LeftSide, isFChange && style.SkillTableFChange) }>
							<SkillIcon icon={ skill.icon } passive={ skill.isPassive } />
							<div class="text-bold">
								<Locale plain k={ `UNIT_SKILL_${unit.uid}_${skill.key}` } />
							</div>

							<div>
								<span class="skill-info-badge badge bg-light text-bg-light border border-secondary">
									<ElemIcon elem={ el } class={ BuildClass("mb-0", skill.isPassive && "mx-0") } />

									{ !skill.isPassive && <Locale
										k="skill_description_damage"
										p={ [
											<span class={ style.Damage }>
												<span data-bonus={ bonus.toNumber() }>{ v }</span>
												{ valueHelp }
											</span>,
											elDisp[el],
										] }
									/> }
								</span>

								{ skill.index > endRarity
									? <Badge class={ cn("ms-2", style.DummyBadge) } variant="substory">
										<Locale k="UNIT_SKILL_DUMMY" />
									</Badge>
									: skill.isPassive && skill.index > unit.rarity
										? <RarityBadge class="ms-2" rarity={ skill.index }>
											{ RarityDisplay[skill.index as ACTOR_GRADE] }
											&nbsp;
											<Locale k="UNIT_SKILL_PROMOTION_SKILL" />
										</RarityBadge>
										: <></>
								}
							</div>
						</div>
						<div class={ cn(style.Content, isFChange && style.SkillTableFChange) }>
							{ tableContent(skill) }
						</div>
						<div class={ cn(style.Bound) }>
							<SkillBound
								passive={ skill.isPassive }
								buffs={ skill.buffs }
								target={ skill.target }
								level={ skillLevel + 1 }
								rangeBonus={ props.rangeBonus }
							/>
						</div>
					</>;
				}) }
			</div>
		</div >
	</>;
};
export default SkillTable;
