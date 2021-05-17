import { Fragment, FunctionalComponent, h } from "preact";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

import RoguelikeQuestContent from "./components/roguelike-quest-content";
import RoguelikeNodeContent from "./components/roguelike-node-content";
import RoguelikePassiveContent from "./components/roguelike-passive-content";

import "./style.scss";

const Roguelike: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "철의 탑(로그라이크)에 대한 정보를 제공합니다.");
	SetMeta("keywords", ",철의 탑,Iron Tower,IronTower,鉄の塔,로그라이크,Roguelike,ローグライク", true);
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(LocaleGet("MENU_ROGUELIKE"));

	const tabIndex = objState<number>(0);

	return <Loader
		json={ [
			StaticDB.RoguelikeQuest,
			StaticDB.RoguelikeNode,
			StaticDB.RoguelikeLimitEffects,
			StaticDB.Consumable,
			StaticDB.FilterableUnit,
			StaticDB.FilterableEquip,
		] }
		content={ ((): preact.VNode => {
			return <div class="roguelike">
				<h2 class="text-center">
					<Locale k="MENU_ROGUELIKE" />
				</h2>

				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a
							href="#"
							class={ `nav-link text-dark ${isActive(tabIndex.value === 0)}` }
							onClick={ (e): void => {
								e.preventDefault();
								tabIndex.set(0);
							} }
						>
							<Icon icon="card-checklist" class="me-2" />
							<Locale k="ROGUELIKE_QUEST" />
						</a>
					</li>
					<li class="nav-item">
						<a
							href="#"
							class={ `nav-link text-dark ${isActive(tabIndex.value === 1)}` }
							onClick={ (e): void => {
								e.preventDefault();
								tabIndex.set(1);
							} }
						>
							<Icon icon="geo-fill" class="me-2" />
							<Locale k="ROGUELIKE_NODE" />
						</a>
					</li>
					<li class="nav-item">
						<a
							href="#"
							class={ `nav-link text-dark ${isActive(tabIndex.value === 2)}` }
							onClick={ (e): void => {
								e.preventDefault();
								tabIndex.set(2);
							} }
						>
							<Icon icon="building" class="me-2" />
							<Locale k="ROGUELIKE_PASSIVE" />
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link text-dark"
							href="https://lomap.swaytwig.com/"
							target="_blank"
							rel="noreferrer"
						>
							<Icon icon="compass" class="me-2" />
							<Locale k="ROGUELIKE_MAP" />
							<span class="badge bg-secondary ms-1" style="font-size: 0.7em;">KR only</span>
						</a>
					</li>
				</ul>
				<div class="border border-top-0 p-3">
					{ tabIndex.value === 0
						? <RoguelikeQuestContent />
						: <Fragment />
					}
					{ tabIndex.value === 1
						? <RoguelikeNodeContent />
						: <Fragment />
					}
					{ tabIndex.value === 2
						? <RoguelikePassiveContent />
						: <Fragment />
					}
				</div>
			</div >;
		}) }
	/>;
};
export default Roguelike;
