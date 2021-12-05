import { FunctionalComponent } from "preact";
import { Router } from "preact-router";
import AsyncRoute from "preact-async-route";

import { CurrentLocale } from "@/libs/Locale";
import { Host } from "@/libs/Const";

// import DynamicRoute from "@/components/dynamic-route";
import Loader from "@/components/loader";
import { LocaleGet } from "@/components/locale";
import Header from "@/components/header";

import NotFoundPage from "@/routes/notfound";

import Store from "@/store";

// import AIList from "@/components/ai-list/new.index";

interface RouteProps {
	path: string;
	component: () => Promise<any>;
}
const Route: FunctionalComponent<RouteProps> = (props) => <AsyncRoute
	loading={ () => <span class="text-secondary">Loading page</span> }
	path={ props.path }
	getComponent={ () => props.component().then(x => x.default) }
/>;

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
						<Route path="/" component={ () => import("@/routes/home") } />

						<Route path="/units" component={ () => import("@/routes/units") } />
						<Route path="/units/:uid" component={ () => import("@/routes/units/view") } />

						<Route path="/equips/:uid?" component={ () => import("@/routes/equips") } />

						<Route path="/facilities" component={ () => import("@/routes/facilities") } />
						<Route path="/facilities/:uid" component={ () => import("@/routes/facilities/view") } />

						<Route path="/enemies" component={ () => import("@/routes/enemies") } />
						<Route path="/enemies/list/:uid?/:level?" component={ () => import("@/routes/enemies/list") } />
						<Route path="/enemies/group" component={ () => import("@/routes/enemies/group") } />

						<Route path="/worlds" component={ () => import("@/routes/worlds") } />
						<Route path="/worlds/:wid" component={ () => import("@/routes/worlds/world-view") } />
						<Route path="/worlds/:wid/:mid/:node?" component={ () => import("@/routes/worlds/map-view") } />

						<Route path="/eternalwar" component={ () => import("@/routes/eternalwar") } />
						<Route path="/eternalwar/:mid" component={ () => import("@/routes/eternalwar") } />

						<Route path="/simulator" component={ () => import("@/routes/simulator") } />

						<Route path="/changelog" component={ () => import("@/routes/changelog") } />
						<Route path="/calc/exp" component={ () => import("@/routes/calc/exp") } />
						{/* <Route  path="/roguelike" component={() => Roguelike } /> */ }
						<Route path="/bgm" component={ () => import("@/routes/bgm") } />

						{/* <Route  path="/test" component={() => AIList } /> */ }

						<NotFoundPage default />
					</Router>
				</div>
			</Loader>
		</div>
	</Store.Provider>;
};
export default App;
