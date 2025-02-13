import { FunctionalComponent } from "preact";
import { useMemo, useState } from "preact/hooks";
import { Link } from "preact-router";
import Decimal from "decimal.js";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, CHARTYPE_GIFTITEM_DAMAGE_TYPE, ITEM_TYPE, ROLE_TYPE } from "@/types/Enums";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Consumable } from "@/types/DB/Consumable";
import { UnitDialogueAudioType } from "@/types/DB/Dialogue";
import { Unit } from "@/types/DB/Unit";

import { CurrentLocale, useLocale } from "@/libs/Locale";
import { StaticDB, useDBData } from "@/libs/Loader";
import { cn } from "@/libs/Class";
import { AssetsRoot, ImageExtension, RarityDisplay } from "@/libs/Const";
import { DecomposeHangulSyllable, FormatDate, FormatNumber } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";
import EntitySource from "@/libs/EntitySource";

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import UnitTypeIcon from "@/components/UnitTypeIcon";
import UnitRoleIcon from "@/components/UnitRoleIcon";
import Locale from "@/components/locale";
import UnitFace from "@/components/unit-face";
import EquipIcon from "@/components/equip-icon";
import PopupBase from "@/components/popup/base";
import EquipPopup from "@/components/popup/equip-popup";

import Icons from "@/components/bootstrap-icon";
import ItemIcon from "@/components/item-icon";

import ResearchTree from "../../components/research-tree";
import UnitStatChart from "../../components/UnitStatChart";
import SourceTable from "../../../../components/SourceTable";

import { SubpageProps } from "..";

import style from "./Basic.module.scss";

const BasicTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	const [loc] = useLocale();

	const FilterableEquipDB = useDBData<FilterableEquip[]>(StaticDB.FilterableEquip)
		?.map(r => ({
			...r,
			source: r.source.map(a => a.map(b => new EntitySource(b as unknown as string))),
		}));
	const ConsumableDB = useDBData<Consumable[]>(StaticDB.Consumable);

	const [selectedEquip, setSelectedEquip] = useState<FilterableEquip | null>(null);
	const [equipPopupDisplay, setEquipPopupDisplay] = useState<boolean>(false);
	const [researchTreeDisplay, setResearchTreeDisplay] = useState<boolean>(false);
	const [introAudioLang, setIntroAudioLang] = useState<Unit["introVoice"][0]>(
		unit.introVoice.includes("ko")
			? "ko"
			: unit.introVoice[0] || "ko"
	);

	const imageExt = ImageExtension();

	const ExclusiveEquip = useMemo(() =>
		FilterableEquipDB
			?.filter(x => x.limit && x.limit.some(y => y === unit.uid)) ?? [],
		[FilterableEquipDB],
	);

	const CraftTime = useMemo((): string => {
		const duration = unit.craft;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return [h, m, s].map(x => x.toString().padStart(2, "0")).join(":");
	}, [unit]);

	const Favor = useMemo(() => ({
		clear: Decimal.mul(unit.favor.clear, 5)
			.floor()
			.div(100)
			.toNumber(),
		death: Decimal.mul(unit.favor.death, 2).toNumber(),
		assistant: Decimal.mul(unit.favor.assistant, 1).toNumber(),
	}), [unit]);

	function getIntroVoice (voices: Unit["introVoice"], target: UnitDialogueAudioType) {
		return voices.find(r => Array.isArray(r) ? r[0] === target : r === target);
	}

	function convWeapon (inp: string): preact.ComponentChildren {
		return inp.split(" / ")
			.map(r => <span>{ r }</span>)
			.gap(<div class={ style.WeaponSeparator } />);
	}

	function IsDefaultSecretRoomType (type: CHARTYPE_GIFTITEM_DAMAGE_TYPE): boolean {
		return ["Adult", "Loli", "AGS"].includes(type);
	}

	function PreprocessUnitIntro (uid: string): preact.VNode {
		const src = loc[`UNIT_INTRO_${uid}`] || "";
		const ret: Array<string | preact.VNode> = [];

		if (uid === "PECS_Olivia") {
			const para = src.split("\n\n");
			const words = para[0].split(/(\s)/g);
			for (const word of words) {
				const cc = DecomposeHangulSyllable(word);

				const emp = !!cc && cc.initial === "ㅇ"; // is Hangul and ㅇ character
				if (emp) {
					ret.push(
						<span class="text-warning">{ word[0] }</span>,
						word.slice(1),
					);
				} else
					ret.push(word);
			}
			ret.push("\n\n");
			ret.push(para[1]);

			return <>{ ret.filter(x => !!x) }</>;
		}

		return <>{ src }</>;
	}

	const introVoiceUrl = useMemo(() => {
		const v = introAudioLang;
		if (Array.isArray(v))
			return `${AssetsRoot}/audio/voice-${v[0]}/${unit.uid}_${v[1]}.mp3`;
		return `${AssetsRoot}/audio/voice-${v}/${unit.uid}_Intro.mp3`;
	}, [unit, introAudioLang]);

	const introVoiceTable: Record<UnitDialogueAudioType, string> = {
		"ko": "한국어",
		"jp": "日本語",
	};
	const introVoiceTableKeys = useMemo(() => Object.keys(introVoiceTable) as UnitDialogueAudioType[], [introVoiceTable]);

	const promoRarity = useMemo(() => {
		return unit.promotions && unit.promotions[unit.promotions.length - 1].to;
	}, [unit]);

	const typeKey = useMemo(() => {
		switch (unit.type) {
			case ACTOR_CLASS.LIGHT: return "LIGHT";
			case ACTOR_CLASS.FLYING: return "MOBILITY";
			case ACTOR_CLASS.HEAVY: return "HEAVY";
		}
	}, [unit]);
	const roleKey = useMemo(() => {
		switch (unit.role) {
			case ROLE_TYPE.ATTACKER: return "ATTACKER";
			case ROLE_TYPE.DEFENDER: return "DEFENDER";
			case ROLE_TYPE.SUPPORTER: return "SUPPORTER";
		}
	}, [unit]);

	const aliasNames = useMemo(() => {
		return (loc[`UNIT_ALIAS_${unit.uid}`] || "")
			.split(",")
			.filter(x => !!x);
	}, [CurrentLocale.value, loc, unit]);

	const ITEM_TYPE_TABLE = {
		[ITEM_TYPE.CHIP]: "CHIP",
		[ITEM_TYPE.SUBEQ]: "ITEM",
		[ITEM_TYPE.SPCHIP]: "OS",
	};

	return <div style={ { display: display ? "" : "none" } }>
		{/* 번호, 소속, 등급, 승급, 유형, 역할 */ }

		<div>
			<div class={ style.UnitHeader }>
				<div class={ style.BasicInfo }>
					<UnitFace class={ style.UnitFace } uid={ unit.uid } raw />

					<span class={ style.UnitNumber }>
						No. <span>{ unit.id }</span>
					</span>
					<span class={ style.UnitName }>
						<Locale plain k={ `UNIT_${unit.uid}` } />
					</span>
					<span class={ style.UnitType }>
						<span>
							<Badge variant={ `rarity-${RarityDisplay[unit.rarity]}` }>
								{ RarityDisplay[unit.rarity] }
							</Badge>

							{ promoRarity && <>
								<Icons.ArrowRightShort />

								<Badge variant={ `rarity-${RarityDisplay[promoRarity]}` }>
									{ RarityDisplay[promoRarity] }
								</Badge>
							</> }
						</span>

						<i />

						<UnitTypeIcon variant="bs-dark" type={ unit.type } />
						<Locale k={ `COMMON_UNIT_TYPE_${typeKey}` } />

						<i />

						<UnitRoleIcon variant="bs-dark" role={ unit.role } />
						<Locale k={ `COMMON_UNIT_ROLE_${roleKey}` } />
					</span>
				</div>
				<div class={ style.AdditionalInfo }>
					<div class={ style.UnitReleaseDate }>
						<span>
							<Locale k="UNIT_VIEW_RELEASEDATE" /> :
						</span>
						<Badge class={ style.ReleaseDate } variant="danger">
							{ FormatDate(new Date(unit.releaseDate)) }
						</Badge>
					</div>
					{ aliasNames.length > 0 && <div class={ style.UnitAlias }>
						<span>
							<Locale k="UNIT_VIEW_ALIAS" /> :
						</span>
						{ aliasNames.map(r => <Badge variant="primary">{ r }</Badge>) }
					</div> }
				</div>
			</div>
		</div>

		<div class={ style.IntroChart }>
			<div class={ style.Intro }>
				<div class={ style.Controls }>
					{ unit.introVoice.length > 0
						? <div class={ style.IntroduceVoice }>
							<Icons.MicFill />

							<Button.Tab>
								{ introVoiceTableKeys.map(vk => <Button
									class={ cn(introAudioLang === vk && style.Active) }
									variant="primary"
									active={ introAudioLang === vk }
									disabled={ !getIntroVoice(unit.introVoice, vk) }
									onClick={ (): void => setIntroAudioLang(getIntroVoice(unit.introVoice, vk)!) }
								>
									{ introVoiceTable[vk] }
								</Button>) }
							</Button.Tab>

							<audio src={ introVoiceUrl } type="audio/mp3" controls preload="none" volume="0.5" />
						</div>
						: <></>
					}
				</div>

				<div class={ style.IntroText }>
					{ unit.uid === "PECS_Olivia" && CurrentLocale.value === "KR"
						? PreprocessUnitIntro(unit.uid)
						: <Locale plain k={ `UNIT_INTRO_${unit.uid}` } />
					}
				</div>
			</div>

			<i />

			<div class={ style.Chart }>
				<UnitStatChart
					attack={ unit.chart[0] }
					atkRate={ unit.chart[1] }
					speed={ unit.chart[2] }
					hp={ unit.chart[3] }
					defence={ unit.chart[4] }
					assist={ unit.chart[5] }
				/>
			</div>
		</div >

		<div class={ style.InfoTable }>
			<div class={ style.Card }>
				<div class={ style.Summary } style={ { gridRow: "1 / 4" } }>
					<img src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` } />

					<Locale k={ `UNIT_GROUP_${unit.group}` } />
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_COMPANY" />
				</div>
				<div class={ style.Body }>
					{ unit.company
						? <Locale
							raw={ false }
							k={ `UNIT_COMPANY_${unit.company}` }
							fallback={ unit.company }
						/>
						: <span class="text-secondary">
							<Locale plain k="UNIT_COMPANY_Undefined" />
						</span>
					}
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_MAKER" />
				</div>
				<div class={ style.Body }>
					{ unit.maker
						? <Locale
							raw={ false }
							k={ `UNIT_MAKER_${unit.maker}` }
							fallback={ unit.maker }
						/>
						: <span class="text-secondary">
							<Locale plain k="UNIT_MAKER_Undefined" />
						</span>
					}
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_COUNTRY" />
				</div>
				<div class={ style.Body }>
					{ unit.country
						? <>
							<img
								class={ `me-2 ${style.UnitCountry}` }
								src={ `${AssetsRoot}/flags/unit_country/${unit.country}.png` }
							/>
							<Locale
								raw={ false }
								k={ `UNIT_COUNTRY_${unit.country}` }
								fallback={ unit.country }
							/>
						</>
						: <span class="text-secondary">
							<Locale plain k="UNIT_COUNTRY_Undefined" />
						</span>
					}
				</div>
				{ unit.body === ACTOR_BODY_TYPE.BIOROID && <>
					<div class={ style.Summary } style={ { gridRow: "4 / 8" } }>
						<Icons.HeartFill />
						<Locale k="UNIT_VIEW_FAVOR" />
					</div>

					<div class={ style.Header }>
						<Locale k="UNIT_VIEW_FAVOR_PRESENT" />
					</div>
					<div class={ cn(style.Body, style.Numeric) }>
						<Icons.X />
						{ unit.favor.present.toFixed(2) }
					</div>

					<div class={ style.Header }>
						<Locale k="UNIT_VIEW_FAVOR_VICTORY" />
					</div>
					<div class={ cn(style.Body, style.Numeric) }>
						+ { Favor.clear.toFixed(2) }
					</div>

					<div class={ style.Header }>
						<Locale k="UNIT_VIEW_FAVOR_RETIRE" />
					</div>
					<div class={ cn(style.Body, style.Numeric) }>
						- { Favor.death.toFixed(2) }
					</div>

					<div class={ style.Header }>
						<Locale k="UNIT_VIEW_FAVOR_ASSISTANT" />
					</div>
					<div class={ cn(style.Body, style.Numeric) }>
						+ { Favor.assistant.toFixed(2) }
					</div>
				</> }

				<div class={ style.Summary } style={ {
					gridRow: unit.body === ACTOR_BODY_TYPE.BIOROID
						? "8 / 13"
						: "4 / 9"
				} }>
					<img src={ `${AssetsRoot}/ui/icon_unit.png` } />
					<Locale k="UNIT_VIEW_BODY_INFO" />
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_AGE" />
				</div>
				<div class={ cn(style.Body, style.Numeric) }>
					{ unit.body === ACTOR_BODY_TYPE.BIOROID
						? unit.age
							? <Locale plain k="UNIT_AGE" p={ [unit.age] } />
							: <span class="text-secondary">
								<Locale plain k="UNIT_AGE_Undefined" />
							</span>
						: <span class="text-secondary">-</span>
					}
				</div>

				<div class={ style.Header }>
					<span class="text-danger">
						<Icons.HeartFill class="me-1" />
					</span>
					<Locale k="UNIT_VIEW_OATHABLE" />
				</div>
				<div class={ style.Body }>
					{ unit.oathable
						? <strong class="text-danger">
							<Locale raw={ false } k="UNIT_VIEW_ABLE" />
						</strong>
						: <span class="text-secondary">
							<Locale raw={ false } k="UNIT_VIEW_UNABLE" />
						</span>
					}
				</div>

				<div class={ style.Header }>
					<EquipIcon image="UI_Icon_Consumable_GiftItem_Damage" size="small" />
					<Locale k="UNIT_VIEW_SECRETROOM_TYPE" />
				</div>
				<div class={ cn(style.Body, style.Numeric) }>
					<span class={ cn(!IsDefaultSecretRoomType(unit.secretRoomType) && "text-danger fw-bold") }>
						<Locale k={ `UNIT_VIEW_SECRETROOM_TYPE_${unit.secretRoomType.toUpperCase()}` } />
					</span>
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_HEIGHT" />
				</div>
				<div class={ cn(style.Body, style.Numeric) }>
					{ unit.height }
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_WEIGHT" />
				</div>
				<div class={ cn(style.Body, style.Numeric) }>
					{ ParseDescriptionText(unit.weight) }
				</div>

				<div class={ style.Summary } style={ {
					gridRow: unit.body === ACTOR_BODY_TYPE.BIOROID
						? "13 / 15"
						: "9 / 11"
				} }>
					<img src={ `${AssetsRoot}/ui/icon_battle.png` } />
					<Locale k="UNIT_VIEW_BATTLE_INFO" />
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_BATTLESTYLE" />
				</div>
				<div class={ cn(style.Body, style.Numeric) }>
					<div class={ style.Weapon }>{ convWeapon(unit.weapon1) }</div>
				</div>

				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_WEAPON" />
				</div>
				<div class={ cn(style.Body, style.Numeric) }>
					<div class={ style.Weapon }>{ convWeapon(unit.weapon2) }</div>
				</div>
			</div>

			{ unit.oneoff && <div class={ style.Window }>
				<div class={ cn(style.Header, "bg-primary") }>
					<Locale k="UNIT_VIEW_ONEOFF" />
				</div>

				<div class={ style.OneOff }>
					<Locale k="UNIT_VIEW_ONEOFF_DESCRIPTION" />
				</div>
			</div> }

			{ unit.entryReqMap.length > 0 && <div class={ style.Window }>
				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_ENTRY_REQMAP" />
				</div>

				<div class={ style.EntryReqMap }>
					<SourceTable source={ [unit.entryReqMap.map(r => new EntitySource(r))] } />
				</div>
			</div> }

			<div class={ cn(style.Window, style.ExclusiveEquips) }>
				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_EXCLUSIVE_EQUIP" />
				</div>

				<EquipPopup
					asSub
					equip={ selectedEquip }
					display={ equipPopupDisplay }
					onHidden={ (): void => {
						setEquipPopupDisplay(false);
						setSelectedEquip(null);
					} }
				/>
				{ ExclusiveEquip.length > 0
					? <div class={ style.Equips }>
						{ ExclusiveEquip.map(limited => <Link
							href={ `/equips/${limited.fullKey}` }
							onClick={ (e): void => {
								e.preventDefault();
								e.stopImmediatePropagation();

								setSelectedEquip(limited);
								setEquipPopupDisplay(true);
							} }
						>
							<ItemIcon class={ style.Icon } item={ limited.icon } />

							<Badge variant="warning">
								<Locale k={ `COMMON_EQUIP_TYPE_${ITEM_TYPE_TABLE[limited.type]}` } />
							</Badge>

							<div class={ style.Name }>
								<Locale k={ `EQUIP_${limited.fullKey}` } />
							</div>
						</Link>) }
					</div>
					: <div class={ style.Empty }>
						<Locale k="UNIT_VIEW_EXCLUSIVE_EQUIP_EMPTY" />
					</div>
				}
			</div>

			<div class={ cn(style.Window, style.Drops) }>
				<div class={ style.Header }>
					<Locale k="UNIT_VIEW_DROPS" />
				</div>

				{ unit.craft && (
					unit.cost // ags
						? <>
							<div class={ style.Craftable }>
								<Icons.PersonCheckFill />
								<Locale k="UNIT_VIEW_DROPS_CRAFTABLE" />

								<Icons.ThreeDots class={ style.Dots } />

								<span>{ CraftTime }</span>
							</div>

							<div class={ style.CostInfo }>
								<div class={ style.AGSCost }>
									<span>
										<img src={ `${AssetsRoot}/res-component.png` } />
										{ FormatNumber(unit.cost.res[0]) }
									</span>
									<span>
										<img src={ `${AssetsRoot}/res-nutrition.png` } />
										{ FormatNumber(unit.cost.res[1]) }
									</span>
									<span>
										<img src={ `${AssetsRoot}/res-power.png` } />
										{ FormatNumber(unit.cost.res[2]) }
									</span>

									{ unit.research && <span>
										<PopupBase
											display={ researchTreeDisplay }
											size="lg"
											footerVariant="dark"
											footerText="white"
											footerClass="justify-content-start"
											header={ <div class="text-start">
												<Locale k="UNIT_RESEARCH_TREE" />
											</div> }
											onHidden={ (): void => setResearchTreeDisplay(false) }
										>
											<div class="bg-dark">
												<ResearchTree unit={ unit } />
											</div>
										</PopupBase>

										<Button
											variant="dark"
											onClick={ () => setResearchTreeDisplay(true) }
										>
											<Locale k="UNIT_RESEARCH_TREE" />
										</Button>
									</span> }
								</div>

								<div class={ style.AGSCostItems }>
									{ unit.cost.aicore > 0 && <Badge pill variant="success">
										<EquipIcon class="me-2 vertical-align-middle" image="UI_Icon_Consumable_AICore" size="24" />
										<Locale k="CONSUMABLE_TestItem_4" />
										<span class={ style.CostItemCount }>
											<Icons.X />
											{ FormatNumber(unit.cost.aicore) }
										</span>
									</Badge> }

									{ unit.cost.items
										.map(e => [e, ConsumableDB?.find(c => c.key === e.item)] as [typeof e, Consumable | undefined])
										.filter(r => !!r[1])
										.map(([e, item]) => {
											return <Badge pill variant="success">
												<EquipIcon class="me-2 vertical-align-middle" image={ item!.icon } size="24" />
												<Locale k={ `CONSUMABLE_${item!.key}` } />
												<span class={ style.CostItemCount }>
													<Icons.X />
													{ FormatNumber(e.count) }
												</span>
											</Badge>;
										})
									}
								</div>
							</div>
						</>
						: <div class={ style.Craftable }>
							<Icons.PersonCheckFill />
							<Locale k="UNIT_VIEW_DROPS_CRAFTABLE" />

							<Icons.ThreeDots class={ style.Dots } />

							<span>{ CraftTime }</span>
						</div>
				) }

				{ unit.source.length === 0
					? <div class={ style.Empty }>
						<Locale k="UNIT_VIEW_DROPS_EMPTY" />
					</div>
					: <div class={ style.DropTable }>
						<SourceTable source={ unit.source } />
					</div>
				}
			</div>
		</div>
	</div >;
};
export default BasicTab;
