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

function GetDefault (path: string) {
	return import(`../routes/${path}/index.tsx`)
		.then(x => x.default);
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
						<AsyncRoute loading={ PageLoading } path="/" getComponent={ () => GetDefault("home") } />

						<AsyncRoute loading={ PageLoading } path="/units" getComponent={ () => GetDefault("units") } />
						<AsyncRoute loading={ PageLoading } path="/units/:uid" getComponent={ () => GetDefault("units/view") } />

						<AsyncRoute loading={ PageLoading } path="/equips/:uid?" getComponent={ () => GetDefault("equips") } />

						<AsyncRoute loading={ PageLoading } path="/facilities" getComponent={ () => GetDefault("facilities") } />
						<AsyncRoute loading={ PageLoading } path="/facilities/:uid" getComponent={ () => GetDefault("facilities/view") } />

						<AsyncRoute loading={ PageLoading } path="/enemies" getComponent={ () => GetDefault("enemies") } />
						<AsyncRoute loading={ PageLoading } path="/enemies/list/:uid?/:level?" getComponent={ () => GetDefault("enemies/list") } />
						<AsyncRoute loading={ PageLoading } path="/enemies/group" getComponent={ () => GetDefault("enemies/group") } />

						<AsyncRoute loading={ PageLoading } path="/worlds" getComponent={ () => GetDefault("worlds") } />
						<AsyncRoute loading={ PageLoading } path="/worlds/:wid" getComponent={ () => GetDefault("worlds/world-view") } />
						<AsyncRoute loading={ PageLoading } path="/worlds/:wid/:mid/:node?" getComponent={ () => GetDefault("worlds/map-view") } />

						<AsyncRoute loading={ PageLoading } path="/eternalwar" getComponent={ () => GetDefault("eternalwar") } />
						<AsyncRoute loading={ PageLoading } path="/eternalwar/:mid" getComponent={ () => GetDefault("eternalwar") } />

						<AsyncRoute loading={ PageLoading } path="/simulator" getComponent={ () => GetDefault("simulator") } />

						<AsyncRoute loading={ PageLoading } path="/changelog" getComponent={ () => GetDefault("changelog") } />
						<AsyncRoute loading={ PageLoading } path="/calc/exp" getComponent={ () => GetDefault("calc/exp") } />
						{/* <AsyncRoute loading={ PageLoading }  path="/roguelike" getComponent={() => Roguelike } /> */ }
						<AsyncRoute loading={ PageLoading } path="/bgm" getComponent={ () => GetDefault("bgm") } />

						{/* <AsyncRoute loading={ PageLoading }  path="/test" getComponent={() => AIList } /> */ }

						<NotFoundPage default />
					</Router>
				</div>
			</Loader>
		</div>
	</Store.Provider>;
};
export default App;
