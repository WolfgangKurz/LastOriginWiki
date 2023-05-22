import { FunctionalComponent } from "preact";
import { useLayoutEffect } from "preact/hooks";
import { Router } from "preact-router";
import AsyncRoute from "preact-async-route";
import Store from "@/store";

import { CurrentLocale } from "@/libs/Locale";
import { Host, IsAprilFool } from "@/libs/Const";

// import DynamicRoute from "@/components/dynamic-route";
import Loader, { StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Redirect from "@/components/redirect";
import Header from "@/components/header";

import NotFoundPage from "@/routes/notfound";
import PopupBase from "@/components/popup/base";
import Icon from "@/components/bootstrap-icon";

import "./style.scss";

const App: FunctionalComponent = () => {
	if (typeof window !== "undefined") {
		["pageonloading", "pageonerror"].forEach(e => {
			const el = document.querySelector(`#${e}`);
			if (el) {
				const parent = el.parentNode;
				if (parent)
					parent.removeChild(el);
			}
		});
	}

	const TitleChanger = (): void => {
		if (LocaleGet("COMMON_TITLE") !== "COMMON_TITLE")
			document.title = LocaleGet(IsAprilFool ? "CONSUMABLE_Consumable_TacticRecord_T3" : "COMMON_TITLE");
		else
			setTimeout(TitleChanger, 10);
	};
	TitleChanger();

	const pRoute = (component: () => Promise<any>): Partial<AsyncRoute["props"]> => ({
		loading: () => <span class="text-secondary">Loading page</span>,
		getComponent: () => component().then(x => x.default),
	});

	return <div id="app">
		<link href={ `${Host}/assets/font/SpoqaHanSans-kr.css` } rel="stylesheet" />
		<link href={ `${Host}/assets/font/SpoqaHanSans-jp.css` } rel="stylesheet" />

		<Loader json={ StaticDB.Locale[CurrentLocale] }>
			<Header />

			<div class="container p-4">
				<Router>
					<AsyncRoute path="/" { ...pRoute(() => import("@/routes/home")) } />

					<AsyncRoute path="/units" { ...pRoute(() => import("@/routes/units")) } />
					<AsyncRoute path="/units/:uid/:sub?" { ...pRoute(() => import("@/routes/units/view")) } />
					{/* <AsyncRoute path="/units/:uid/s:sid" { ...pRoute(() => import("@/routes/units/view")) } /> */ }

					<AsyncRoute path="/equips/:uid?" { ...pRoute(() => import("@/routes/equips")) } />

					<AsyncRoute path="/facilities" { ...pRoute(() => import("@/routes/facilities")) } />
					<AsyncRoute path="/facilities/:uid" { ...pRoute(() => import("@/routes/facilities/view")) } />

					<AsyncRoute path="/enemies/:uid?/:level?" { ...pRoute(() => import("@/routes/enemies")) } />
					<Redirect path="/enemies/list/:uid?/:level?" to={ ({ uid, level }) => {
						if (uid && level)
							return `/enemies/${uid}/${level}`;
						else if (uid)
							return `/enemies/${uid}`;
						else
							return `/enemies`;
					} } />
					<Redirect path="/enemies/group" to="/enemies" />

					<AsyncRoute path="/worlds" { ...pRoute(() => import("@/routes/worlds")) } />
					<AsyncRoute path="/worlds/:wid" { ...pRoute(() => import("@/routes/worlds/world-view")) } />
					<AsyncRoute path="/worlds/:wid/:mid/drop" { ...pRoute(() => import("@/routes/worlds/drop-table")) } />
					<AsyncRoute path="/worlds/:wid/:mid/:node?" { ...pRoute(() => import("@/routes/worlds/map-view")) } />

					<AsyncRoute path="/eternalwar" { ...pRoute(() => import("@/routes/eternalwar")) } />
					<AsyncRoute path="/eternalwar/:mid" { ...pRoute(() => import("@/routes/eternalwar")) } />

					<AsyncRoute path="/infinitewar" { ...pRoute(() => import("@/routes/infinitewar")) } />
					<AsyncRoute path="/infinitewar/:season/:stage?" { ...pRoute(() => import("@/routes/infinitewar/season")) } />

					<AsyncRoute path="/simulator" { ...pRoute(() => import("@/routes/simulator")) } />

					<AsyncRoute path="/changelog" { ...pRoute(() => import("@/routes/changelog")) } />
					<AsyncRoute path="/calc/exp" { ...pRoute(() => import("@/routes/calc/exp")) } />
					{/* <AsyncRoute {...p}  path="/roguelike" component={() => Roguelike } /> */ }

					<AsyncRoute path="/bg" { ...pRoute(() => import("@/routes/bg")) } />
					<AsyncRoute path="/bgm" { ...pRoute(() => import("@/routes/bgm")) } />
					<AsyncRoute path="/consumable" { ...pRoute(() => import("@/routes/consumable")) } />
					<AsyncRoute path="/sticker" { ...pRoute(() => import("@/routes/sticker")) } />

					<AsyncRoute path="/gacha" { ...pRoute(() => import("@/routes/gacha")) } />

					{/* <AsyncRoute path="/test/:uid?" { ...pRoute(() => import("@/routes/test")) } /> */ }

					<NotFoundPage default />
				</Router>
			</div>

			{ Store.requireReload.value
				? <PopupBase display>
					<div class="text-center m-0" style={ { lineHeight: "1.3", fontSize: "5rem" } }>
						<Icon class="align-top" icon="chat-dots" />
					</div>
					<div style={ { whiteSpace: "pre-wrap" } }>
						<Locale plain k="COMMON_REQUIRE_RELOAD" />
						{ Store.requireReload.value ? "Y" : "N" }
					</div>
				</PopupBase>
				: <></>
			}
		</Loader>
	</div>;
};
export default App;
