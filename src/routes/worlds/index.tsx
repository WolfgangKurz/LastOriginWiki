import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { PermanentEvents, AssetsRoot, CurrentEvent, WorldIds } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale, { LocaleGet } from "@/components/locale";
import WorldItem from "@/routes/worlds/components/world-item";
import Icon from "@/components/bootstrap-icon";

import style from "./style.module.scss";

const Worlds: FunctionalComponent = () => {
	const Tops = ["Story", CurrentEvent].filter(x => x);
	const Subs = ["Sub", "Cha", "Daily"];
	const List = WorldIds.filter(x => !x.startsWith("EvA") && !Tops.includes(x) && !Subs.includes(x) && !PermanentEvents.includes(x));

	SetMeta(["description", "twitter:description"], "세계 목록을 표시합니다. 현재 진행중이거나 진행될 예정인 이벤트도 확인할 수 있습니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(LocaleGet("MENU_WORLDS"));

	return <div class="worlds text-start">
		<h2>
			<Locale k="MENU_WORLDS" />
		</h2>
		<hr />

		<h4>
			<Locale k="WORLDS_MAINSTORY_EVENT" components={ { Icon } } />
		</h4>
		<div class="row row-cols-1 row-cols-lg-2">
			{ Tops.map(item => <div class="col">
				<WorldItem linked wid={ item } />
			</div>) }
		</div>
		<hr />

		<h4>
			<Locale k="WORLDS_PERMANENT_EVENT" components={ { Icon } } />
		</h4>
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-center">
			{ PermanentEvents.map(item => <div class={ `col mb-2 ${style.PermanentBanner}` }>
				<Link href={ `/worlds/${item}` }>
					<img src={ `${AssetsRoot}/world/banner/${item}.png` } />
					<span class={ `${style.Title} ${style.TitleStroked}` }>
						<Locale k={ `WORLD_${item}` } />
					</span>
					<span class={ style.Title }>
						<Locale k={ `WORLD_${item}` } />
					</span>
				</Link>
			</div>) }
		</div>
		<hr />

		<h4>
			<Locale k="WORLDS_SUBSTORY_CHALLENGE" components={ { Icon } } />
		</h4>
		<div class="row row-cols-1 row-cols-lg-2">
			{ Subs.map(item => <div class="col">
				<WorldItem linked wid={ item } />
			</div>) }
		</div>
		<hr />

		<h4>
			<Locale k="WORLDS_PAST_EVENT" components={ { Icon } } />
		</h4>
		<div class="row row-cols-1 row-cols-lg-2">
			{ List.map(item => <div class="col">
				<WorldItem linked wid={ item } />
			</div>) }
		</div>
	</div>;
};
export default Worlds;
