import { FunctionalComponent } from "preact";

import { PermanentEvents, AssetsRoot, CurrentEvent, WorldIds } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { useLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import WorldItem from "@/routes/worlds/components/WorldItem";

import style from "./style.module.scss";

const Worlds: FunctionalComponent = () => {
	const [loc] = useLocale();

	const Subs = ["Sub", "Cha", "Daily"];
	const List = WorldIds.filter(x =>
		!x.startsWith("EvA") &&
		x !== "Story" &&
		x !== CurrentEvent &&
		!Subs.includes(x) &&
		!PermanentEvents.includes(x)
	);

	SetMeta(["description", "twitter:description"], "세계 목록을 표시합니다. 현재 진행중이거나 진행될 예정인 이벤트도 확인할 수 있습니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(loc["MENU_WORLDS"]);

	return <div class="worlds text-start">
		<h2>
			<Locale raw k="MENU_WORLDS" />
		</h2>
		<hr />

		<div class="row">
			{ CurrentEvent && <div class="col">
				<WorldItem large linked wid={ CurrentEvent } />
			</div> }
		</div>
		<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
			<div class="col">
				<WorldItem linked wid="Story" />
			</div>

			<div class="col">
				<WorldItem
					linked
					link="/eternalwar"
					wid=""
					image="EW"
					title={ <Locale raw k="WORLDS_ETERNALWAR" /> }
				/>
			</div>
			<div class="col">
				<WorldItem
					linked
					link="/infinitewar"
					wid=""
					image="IW"
					title={ <Locale k="WORLDS_INFINITEWAR" /> }
				/>
			</div>
		</div>
		<hr />

		<h4>
			<Locale raw k="WORLDS_SUBSTORY_CHALLENGE" components={ { IconDot: Icons.Dot } } />
		</h4>
		<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
			{ Subs.map(item => <div class="col">
				<WorldItem linked wid={ item } />
			</div>) }
		</div>
		<hr />

		<h4>
			<Locale k="WORLDS_PERMANENT_EVENT" components={ { IconDot: Icons.Dot } } />
		</h4>
		<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 text-center">
			{ PermanentEvents.map(item => <div class={ `col mb-2 font-ibm ${style.PermanentBanner}` }>
				<a href={ `/worlds/${item}` }>
					<img src={ `${AssetsRoot}/world/banner/${item}.png` } />
					<span class={ `${style.Title} ${style.TitleStroked}` }>
						<Locale k={ `WORLD_${item}` } />
					</span>
					<span class={ style.Title }>
						<Locale k={ `WORLD_${item}` } />
					</span>
				</a>
			</div>) }
		</div>
		<hr />

		<h4>
			<Locale k="WORLDS_PAST_EVENT" components={ { IconDot: Icons.Dot } } />
		</h4>
		<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
			{ List.map(item => <div class="col">
				<WorldItem linked wid={ item } />
			</div>) }
		</div>
	</div>;
};
export default Worlds;
