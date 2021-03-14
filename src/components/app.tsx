import { Fragment, FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import { Provider } from "unistore/preact";
import store from "@/store";

import Redirect from "@/components/redirect";

import JsonLoader from "@/libs/JsonLoader";
import { CurrentLocale } from "@/libs/Locale";

import Header from "@/components/header";

import NotFoundPage from "@/routes/notfound";
import Home from "@/routes/home";

import Units from "@/routes/units";
import UnitsView from "@/routes/units/view";

import Equips from "@/routes/equips";

import Enemies from "@/routes/enemies";

import Facilities from "@/routes/facilities";
import FacilitiesView from "@/routes/facilities/view";

import Worlds from "@/routes/worlds";
import WorldView from "@/routes/worlds/world-view";
import WorldMapView from "@/routes/worlds/map-view";

import Changelog from "@/routes/changelog";
import { Host } from "@/libs/Const";

const App: FunctionalComponent<{}> = () => (
	<Provider store={ store }>
		{JsonLoader(
			`locale/${CurrentLocale}`,
			() => <div id="app">
				<link href={ `${Host}/assets/font/SpoqaHanSans-kr.css` } rel="stylesheet" />
				<Header />

				<div class="container p-4">
					<Router>
						<Route path="/" component={ Home } />

						<Route path="/units" component={ Units } />
						<Route path="/units/:uid" component={ UnitsView } />

						<Route path="/equips/:uid?" component={ Equips } />

						<Route path="/enemies/:uid?/:level?" component={ Enemies } />
						<Redirect
							path="/enemy/:uid?/:level?"
							to={ (p): string => p.uid
								? p.level
									? `/enemies/${p.uid}/${p.level}`
									: `/enemies/${p.uid}`
								: "/enemies" }
						/>

						<Route path="/facilities" component={ Facilities } />
						<Route path="/facilities/:uid" component={ FacilitiesView } />

						<Route path="/worlds" component={ Worlds } />
						<Route path="/worlds/:wid" component={ WorldView } />
						<Route path="/worlds/:wid/:mid/:node?" component={ WorldMapView } />

						<Route path="/changelog" component={ Changelog } />

						<NotFoundPage default />
					</Router>
				</div>
			</div>,
			<Fragment />,
		) }
	</Provider>
);
export default App;
