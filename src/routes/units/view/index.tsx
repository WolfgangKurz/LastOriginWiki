import { createElement, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { route } from "preact-router";

import { Unit, UnitSkin } from "@/types/DB/Unit";

import { AssetsRoot, ImageExtension, IsDev, RarityDisplay, UnitClassDisplay, UnitRoleDisplay } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import EntitySource from "@/libs/EntitySource";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconPersonSquare from "@/components/bootstrap-icon/icons/PersonSquare";
import IconLightningFill from "@/components/bootstrap-icon/icons/LightningFill";
import IconCapslockFill from "@/components/bootstrap-icon/icons/CapslockFill";
import IconHandThumbsUpFill from "@/components/bootstrap-icon/icons/HandThumbsUpFill";
import IconChatTextFill from "@/components/bootstrap-icon/icons/ChatTextFill";
import IconHanger from "@/components/Icons/IconHanger";

import BasicTab from "./sub-tab/Basic";
import DialogueTab from "./sub-tab/Dialogue";
import LvLimitTab from "./sub-tab/LvLimit";
import PromoTab from "./sub-tab/Promo";
import SkillTab from "./sub-tab/Skill";
import SkinTab from "./sub-tab/Skin";

type TabTypes = "basic" | "skin" | "lvlimit" | "promo" | "skills" | "dialogue";

interface SkinItem extends UnitSkin {
	isDef: boolean;
	isPro: boolean;
}

export interface SubpageProps {
	display: boolean;
	unit: Unit;
	skinIndex: number;
	SkinList: SkinItem[];

	onSkinIndexChange: (index: number) => void;
}

interface UnitsViewProps {
	uid: string;
	sub?: string;
}

const View: FunctionalComponent<UnitsViewProps> = (props) => {
	const [DisplayTab, setDisplayTab] = useState<TabTypes>(
		props.sub && props.sub.startsWith("s")
			? "skin"
			: "basic"
	);

	function GoBack (): void {
		window.history.back();
	}

	const [skinIndex, setSkinIndex] = useState<number>(
		props.sub && props.sub.startsWith("s")
			? -parseInt(props.sub.substring(1), 10)
			: 0
	);

	if (!IsDev) {
		if (props.sub)
			route(`/units/${props.uid}`, true);
	}

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

		if (skinIndex < 0)
			setSkinIndex(SkinList.findIndex(s => s.sid === -skinIndex) || 0);

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

		const TabContents: Record<TabTypes, FunctionalComponent<SubpageProps>> = {
			basic: BasicTab,
			skin: SkinTab,
			lvlimit: LvLimitTab,
			promo: PromoTab,
			skills: SkillTab,
			dialogue: DialogueTab,
		};

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
								class={ `nav-link text-dark ${isActive(DisplayTab === "basic")}` }
								onClick={ (e): void => {
									e.preventDefault();
									setDisplayTab("basic");
								} }
							>
								<IconPersonSquare class="me-1" />
								<Locale k="UNIT_VIEW_TAB_BASICINFO" />
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab === "skin")}` }
								onClick={ (e): void => {
									e.preventDefault();
									setDisplayTab("skin");
								} }
							>
								<IconHanger class="me-1" />
								<Locale k="UNIT_VIEW_TAB_SKININFO" />
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab === "skills")}` }
								onClick={ (e): void => {
									e.preventDefault();
									setDisplayTab("skills");
								} }
							>
								<IconLightningFill class="me-1" />
								<Locale k="UNIT_VIEW_TAB_SKILLS" />
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab === "lvlimit")}` }
								onClick={ (e): void => {
									e.preventDefault();
									setDisplayTab("lvlimit");
								} }
							>
								<IconCapslockFill class="me-1" />
								<Locale k="UNIT_VIEW_TAB_LVLIMIT" />
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab === "promo")}` }
								onClick={ (e): void => {
									e.preventDefault();
									setDisplayTab("promo");
								} }
							>
								<IconHandThumbsUpFill class="me-1" />
								<Locale k="UNIT_VIEW_TAB_PROMOTION" />
							</a>
						</li>
						{/* <li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab === "roguelike")}` }
								onClick={ (e): void => {
									e.preventDefault();
									setDisplayTab("roguelike");
								} }
							>
								<IconController class="me-1" />
								<Locale k="UNIT_VIEW_TAB_ROGUELIKE" />
							</a>
						</li> */}
						<li class="nav-item">
							<a
								href="#"
								class={ `nav-link text-dark ${isActive(DisplayTab === "dialogue")}` }
								onClick={ (e): void => {
									e.preventDefault();
									setDisplayTab("dialogue");
								} }
							>
								<IconChatTextFill class="me-1" />
								<Locale k="UNIT_VIEW_TAB_DIALOGUE" />
							</a>
						</li>
					</ul>
				</div>
			</div>

			{ Object.keys(TabContents).map(k =>
				createElement(TabContents[k as TabTypes], {
					display: DisplayTab === k,
					unit,
					skinIndex,
					SkinList,

					onSkinIndexChange: v => setSkinIndex(v),
				}))
			}
		</div>;
	}) } />;
};
export default View;
