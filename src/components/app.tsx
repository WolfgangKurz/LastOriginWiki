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

function def (imports: Promise<any>) {
	return imports.then(x => x.default);
}

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

	const PageLoading = () => <span class="text-secondary">Loading page</span>;

	return <Store.Provider>
		<div id="app">
			<link href={ `${Host}/assets/font/SpoqaHanSans-kr.css` } rel="stylesheet" />
			<link href={ `${Host}/assets/font/SpoqaHanSans-jp.css` } rel="stylesheet" />

			<Loader db="!" json={ `locale/${CurrentLocale}` }>
				<Header />

				<div class="container p-4">
					<Router>
						<AsyncRoute loading={ PageLoading } path="/" getComponent={ () => def(import("@/routes/home")) } />

						<AsyncRoute loading={ PageLoading } path="/units" getComponent={ () => def(import("@/routes/units")) } />
						<AsyncRoute loading={ PageLoading } path="/units/:uid" getComponent={ () => def(import("@/routes/units/view")) } />

						<AsyncRoute loading={ PageLoading } path="/equips/:uid?" getComponent={ () => def(import("@/routes/equips")) } />

						<AsyncRoute loading={ PageLoading } path="/facilities" getComponent={ () => def(import("@/routes/facilities")) } />
						<AsyncRoute loading={ PageLoading } path="/facilities/:uid" getComponent={ () => def(import("@/routes/facilities/view")) } />

						<AsyncRoute loading={ PageLoading } path="/enemies" getComponent={ () => def(import("@/routes/enemies")) } />
						<AsyncRoute loading={ PageLoading } path="/enemies/list/:uid?/:level?" getComponent={ () => def(import("@/routes/enemies/list")) } />
						<AsyncRoute loading={ PageLoading } path="/enemies/group" getComponent={ () => def(import("@/routes/enemies/group")) } />

						<AsyncRoute loading={ PageLoading } path="/worlds" getComponent={ () => def(import("@/routes/worlds")) } />
						<AsyncRoute loading={ PageLoading } path="/worlds/:wid" getComponent={ () => def(import("@/routes/worlds/world-view")) } />
						<AsyncRoute loading={ PageLoading } path="/worlds/:wid/:mid/:node?" getComponent={ () => def(import("@/routes/worlds/map-view")) } />

						<AsyncRoute loading={ PageLoading } path="/eternalwar" getComponent={ () => def(import("@/routes/eternalwar")) } />
						<AsyncRoute loading={ PageLoading } path="/eternalwar/:mid" getComponent={ () => def(import("@/routes/eternalwar")) } />

						<AsyncRoute loading={ PageLoading } path="/simulator" getComponent={ () => def(import("@/routes/simulator")) } />

						<AsyncRoute loading={ PageLoading } path="/changelog" getComponent={ () => def(import("@/routes/changelog")) } />
						<AsyncRoute loading={ PageLoading } path="/calc/exp" getComponent={ () => def(import("@/routes/calc/exp")) } />
						{/* <AsyncRoute loading={ PageLoading }  path="/roguelike" getComponent={() => Roguelike } /> */ }
						<AsyncRoute loading={ PageLoading } path="/bgm" getComponent={ () => def(import("@/routes/bgm")) } />

						{/* <AsyncRoute loading={ PageLoading }  path="/test" getComponent={() => AIList } /> */ }

						<NotFoundPage default />
					</Router>
				</div>
			</Loader>
		</div>
	</Store.Provider>;
};
export default App;
