import { Component, FunctionalComponent, RenderableProps } from "preact";
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

	const pRoute = (component: () => Promise<any>): Partial<AsyncRoute["props"]> => ({
		loading: () => <span class="text-secondary">Loading page</span>,
		getComponent: () => component().then(x => x.default),
	});

	return <Store.Provider>
		<div id="app">
			<link href={ `${Host}/assets/font/SpoqaHanSans-kr.css` } rel="stylesheet" />
			<link href={ `${Host}/assets/font/SpoqaHanSans-jp.css` } rel="stylesheet" />

			<Loader db="!" json={ `locale/${CurrentLocale}` }>
				<Header />

				<div class="container p-4">
					<Router>
						<AsyncRoute path="/" { ...pRoute(() => import("@/routes/home")) } />

						<AsyncRoute path="/units" { ...pRoute(() => import("@/routes/units")) } />
						<AsyncRoute path="/units/:uid" { ...pRoute(() => import("@/routes/units/view")) } />

						<AsyncRoute path="/equips/:uid?" { ...pRoute(() => import("@/routes/equips")) } />

						<AsyncRoute path="/facilities" { ...pRoute(() => import("@/routes/facilities")) } />
						<AsyncRoute path="/facilities/:uid" { ...pRoute(() => import("@/routes/facilities/view")) } />

						<AsyncRoute path="/enemies" { ...pRoute(() => import("@/routes/enemies")) } />
						<AsyncRoute path="/enemies/list/:uid?/:level?" { ...pRoute(() => import("@/routes/enemies/list")) } />
						<AsyncRoute path="/enemies/group" { ...pRoute(() => import("@/routes/enemies/group")) } />

						<AsyncRoute path="/worlds" { ...pRoute(() => import("@/routes/worlds")) } />
						<AsyncRoute path="/worlds/:wid" { ...pRoute(() => import("@/routes/worlds/world-view")) } />
						<AsyncRoute path="/worlds/:wid/:mid/drop" { ...pRoute(() => import("@/routes/worlds/drop-table")) } />
						<AsyncRoute path="/worlds/:wid/:mid/:node?" { ...pRoute(() => import("@/routes/worlds/map-view")) } />

						<AsyncRoute path="/eternalwar" { ...pRoute(() => import("@/routes/eternalwar")) } />
						<AsyncRoute path="/eternalwar/:mid" { ...pRoute(() => import("@/routes/eternalwar")) } />

						<AsyncRoute path="/simulator" { ...pRoute(() => import("@/routes/simulator")) } />

						<AsyncRoute path="/changelog" { ...pRoute(() => import("@/routes/changelog")) } />
						<AsyncRoute path="/calc/exp" { ...pRoute(() => import("@/routes/calc/exp")) } />
						{/* <AsyncRoute {...p}  path="/roguelike" component={() => Roguelike } /> */ }
						<AsyncRoute path="/bgm" { ...pRoute(() => import("@/routes/bgm")) } />

						{/* <AsyncRoute {...p}  path="/test" component={() => AIList } /> */ }

						<NotFoundPage default />
					</Router>
				</div>
			</Loader>
		</div>
	</Store.Provider>;
};
export default App;
