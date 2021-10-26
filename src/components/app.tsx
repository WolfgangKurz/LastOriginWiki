import { FunctionalComponent } from "preact";
import { Route, Router } from "preact-router";
import Redirect from "@/components/redirect";

import { CurrentLocale } from "@/libs/Locale";
import { Host } from "@/libs/Const";

import Loader from "@/components/loader";
import Header from "@/components/header";

import NotFoundPage from "@/routes/notfound";
import Home from "@/routes/home";

import Units from "@/routes/units";
import UnitsView from "@/routes/units/view";

import Equips from "@/routes/equips";

import Facilities from "@/routes/facilities";
import FacilitiesView from "@/routes/facilities/view";

import Enemies from "@/routes/enemies";
import EnemiesList from "@/routes/enemies/list";
import EnemiesGroup from "@/routes/enemies/group";

import Worlds from "@/routes/worlds";
import WorldView from "@/routes/worlds/world-view";
import WorldMapView from "@/routes/worlds/map-view";

import EternalWar from "@/routes/eternalwar";

import Simulator from "@/routes/simulator";

import Changelog from "@/routes/changelog";
import EXPCalc from "@/routes/calc/exp";
import Roguelike from "@/routes/roguelike";
import BGM from "@/routes/bgm";

import Store from "@/store";
import { LocaleGet } from "@/components/locale";

const App: FunctionalComponent = () => {
	if (typeof window !== "undefined") {
		const pageonloading = document.querySelector("#pageonloading");
		if (pageonloading) {
			const parent = pageonloading.parentNode;
			if (parent)
				parent.removeChild(pageonloading);
		}
	}

	const TitleChanger = (): void => {
		if (LocaleGet("COMMON_TITLE") !== "COMMON_TITLE")
			document.title = LocaleGet("COMMON_TITLE");
		else
			setTimeout(TitleChanger, 10);
	};
	TitleChanger();

	return <Store.Provider>
		<div id="app">
			<link href={ `${Host}/assets/font/SpoqaHanSans-kr.css` } rel="stylesheet" />
			<link href={ `${Host}/assets/font/SpoqaHanSans-jp.css` } rel="stylesheet" />

			<Loader db="!" json={ `locale/${CurrentLocale}` }>
				<Header />

				<div class="container p-4">
					<Router>
						<Home path="/" />

						<Route path="/units" component={ Units } />
						<Route path="/units/:uid" component={ UnitsView } />

						<Route path="/equips/:uid?" component={ Equips } />

						<Route path="/facilities" component={ Facilities } />
						<Route path="/facilities/:uid" component={ FacilitiesView } />

						<Route path="/enemies" component={ Enemies } />
						<Route path="/enemies/list/:uid?/:level?" component={ EnemiesList } />
						<Route path="/enemies/group" component={ EnemiesGroup } />

						<Route path="/worlds" component={ Worlds } />
						<Route path="/worlds/:wid" component={ WorldView } />
						<Route path="/worlds/:wid/:mid/:node?" component={ WorldMapView } />

						<Route path="/eternalwar" component={ EternalWar } />
						<Route path="/eternalwar/:mid" component={ EternalWar } />

						<Route path="/simulator" component={ Simulator } />

						<Route path="/changelog" component={ Changelog } />
						<Route path="/calc/exp" component={ EXPCalc } />
						<Route path="/roguelike" component={ Roguelike } />
						<Route path="/bgm" component={ BGM } />

						<NotFoundPage default />
					</Router>
				</div>
			</Loader>
		</div>
	</Store.Provider>;
};
export default App;
