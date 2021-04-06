import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import Redirect from "@/components/redirect";

import { CurrentLocale, LocaleTypes } from "@/libs/Locale";
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

import Worlds from "@/routes/worlds";
import WorldView from "@/routes/worlds/world-view";
import WorldMapView from "@/routes/worlds/map-view";

import Simulator from "@/routes/simulator";

import Changelog from "@/routes/changelog";

import BGM from "@/routes/bgm";

const App: FunctionalComponent = () => {
	if (typeof window !== "undefined") {
		const html = document.querySelector("html");
		if (html) {
			const langTable: Record<LocaleTypes, string> = {
				EN: "en",
				JP: "ja",
				KR: "ko",
			};
			html.setAttribute("lang", langTable[CurrentLocale]);
		}

		const pageonloading = document.querySelector("#pageonloading");
		if (pageonloading) {
			const parent = pageonloading.parentNode;
			if (parent)
				parent.removeChild(pageonloading);
		}
	}

	return <div id="app">
		<link href={ `${Host}/assets/font/SpoqaHanSans-kr.css` } rel="stylesheet" />
		<Loader json={ `locale/${CurrentLocale}` }>
			<Header />

			<div class="container p-4">
				<Router>
					<Route path="/" component={ Home } />

					<Route path="/units" component={ Units } />
					<Route path="/units/:uid" component={ UnitsView } />

					<Route path="/equips/:uid?" component={ Equips } />

					<Route path="/facilities" component={ Facilities } />
					<Route path="/facilities/:uid" component={ FacilitiesView } />

					<Route path="/enemies/:uid?/:level?" component={ Enemies } />
					<Redirect
						path="/enemy/:uid?/:level?"
						to={ (p): string => p.uid
							? p.level
								? `/enemies/${p.uid}/${p.level}`
								: `/enemies/${p.uid}`
							: "/enemies" }
					/>

					<Route path="/worlds" component={ Worlds } />
					<Route path="/worlds/:wid" component={ WorldView } />
					<Route path="/worlds/:wid/:mid/:node?" component={ WorldMapView } />

					<Route path="/simulator" component={ Simulator } />

					<Route path="/changelog" component={ Changelog } />

					<Route path="/bgm" component={ BGM } />

					<NotFoundPage default />
				</Router>
			</div>
		</Loader>
	</div>;
};
export default App;
