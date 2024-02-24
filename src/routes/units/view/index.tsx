import { createElement, FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { route, useRouter } from "preact-router";

import { Unit, UnitSkin } from "@/types/DB/Unit";

import { useDBData } from "@/libs/Loader";
import { useLocale } from "@/libs/Locale";
import { AssetsRoot, ImageExtension, IsDev, RarityDisplay, UnitClassDisplay, UnitRoleDisplay } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { cn } from "@/libs/Class";
import EntitySource from "@/libs/EntitySource";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale from "@/components/locale";
import Button from "@/components/Button";
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

import style from "./style.module.scss";

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
	const [loc] = useLocale();
	const [router] = useRouter();

	const [DisplayTab, setDisplayTab] = useState<TabTypes>(
		props.sub && props.sub.startsWith("s")
			? "skin"
			: "basic"
	);

	const [skinIndex, setSkinIndex] = useState<number>(
		props.sub && props.sub.startsWith("s")
			? -parseInt(props.sub.substring(1), 10)
			: 0
	);

	if (!IsDev) {
		if (props.sub)
			route(`/units/${props.uid}`, true);
	}

	const _unit = useDBData<Unit>(`unit/${props.uid}`);

	const unit = useMemo(() => {
		if (!_unit) return null;
		return {
			..._unit,
			source: _unit.source
				.map(x => (x as unknown as string[]).map(y => new EntitySource(y))),
		};
	}, [_unit]);
	const SkinList = useMemo((): SkinItem[] => {
		if (!unit) return [];

		const skin = unit.skins;
		if (!skin) return [];

		const list: SkinItem[] = [];

		// Default skin
		list.push({
			...skin,
			isDef: true,
			isPro: false,
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
	}, [unit]);

	useEffect(() => {
		if (skinIndex < 0)
			setSkinIndex(SkinList.findIndex(s => s.sid === -skinIndex) || 0);
	}, [skinIndex, SkinList]);

	useEffect(() => {
		if (unit) {
			SetMeta(
				["description", "twitter:description"],
				`${RarityDisplay[unit.rarity]}급 ${UnitClassDisplay[unit.type]} ${UnitRoleDisplay[unit.role]} ` +
				`${loc[`UNIT_${unit.uid}`]}의 정보입니다. ` +
				"기본 정보, 링크/풀링크 보너스, 스킬 정보, 대사를 확인할 수 있으며, 스테이터스 계산기를 이용할 수 있습니다.",
			);
			SetMeta(
				["twitter:image", "og:image"],
				`${AssetsRoot}/${ImageExtension()}/full/${(`00${unit.id}`).substring(-3)}.${ImageExtension()}`,
			);
			SetMeta(
				"keywords",
				`,${[loc[`UNIT_${unit.uid}`], loc[`UNIT_SHORT_${unit.uid}`]].unique().join(",")}`,
				true,
			);
			UpdateTitle(loc["MENU_UNITS"], loc[`UNIT_${unit.uid}`]);
		}
	}, [loc, unit]);

	if (!unit) return <></>;

	const TabContents: Record<Exclude<TabTypes, "dialogue">, FunctionalComponent<SubpageProps>> = {
		basic: BasicTab,
		skin: SkinTab,
		lvlimit: LvLimitTab,
		promo: PromoTab,
		skills: SkillTab,
	};

	return <div class={ style.UnitView }>
		<div class={ style.Header }>
			<div class={ style.BackButton }>
				<Button variant="dark" onClick={ () => {
					const href = window.location.href;
					window.history.back();
					setTimeout(() => {
						if (window.location.href === href) // not moved?
							route("/units");
					}, 500);
					// if (router.previous)
					// 	window.history.back();
					// else
					// 	route("/units");
				} }>
					<Locale k="COMMON_BACK" />
				</Button>
			</div>

			<ul class={ cn(style.Tabs, "nav nav-tabs unit-display-tabs") }>
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

		{/* { Object.keys(TabContents).map(k =>
				createElement(TabContents[k as TabTypes], {
					display: DisplayTab === k,
					unit,
					skinIndex,
					SkinList,

					onSkinIndexChange: v => setSkinIndex(v),
				}))
			} */}
		{ DisplayTab !== "dialogue" && createElement(TabContents[DisplayTab], {
			key: "tab-" + DisplayTab,
			display: true,
			unit,
			skinIndex,
			SkinList,

			onSkinIndexChange: v => setSkinIndex(v),
		}) }

		<DialogueTab // DialogueTab should be rendered always (background audio playing)
			display={ DisplayTab === "dialogue" }
			unit={ unit }
			skinIndex={ skinIndex }
			SkinList={ SkinList }
			onSkinIndexChange={ v => setSkinIndex(v) }
		/>
	</div>;
};
export default View;
