import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useLayoutEffect } from "preact/hooks";
import { Router } from "preact-router";
import AsyncRoute from "preact-async-route";
import Store from "@/store";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { CurrentLocale } from "@/libs/Locale";
import { Host, IsAprilFool } from "@/libs/Const";
import { hasCookie, setCookie } from "@/libs/Cookie";

// import DynamicRoute from "@/components/dynamic-route";
import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Loading from "@/components/loading";
import Redirect from "@/components/redirect";
import Header from "@/components/header";

import NotFoundPage from "@/routes/notfound";
import IconChatDots from "@/components/bootstrap-icon/icons/ChatDots";
import PopupBase from "@/components/popup/base";

import "./style.scss";

const App: FunctionalComponent = () => {
	const update = useUpdate();

	const loc = GetJson(StaticDB.Locale[CurrentLocale]);
	if (!loc) JsonLoaderCore(CurrentDB, StaticDB.Locale[CurrentLocale]).then(_ => update());

	useLayoutEffect(() => {
		if (typeof window !== "undefined") {
			["pageonloading", "pageonerror", "pagemayexpired"].forEach(e => {
				const el = document.querySelector(`#${e}`);
				if (el) {
					const parent = el.parentNode;
					if (parent)
						parent.removeChild(el);
				}
			});
		}
	}, []);

	useEffect(() => {
		if (loc)
			document.title = LocaleGet(IsAprilFool ? "CONSUMABLE_Consumable_TacticRecord_T3" : "COMMON_TITLE");
	}, [loc]);

	const pRoute = useCallback((component: () => Promise<any>): Partial<AsyncRoute["props"]> => {
		return {
			loading: () => <Loading.Page />,
			getComponent: () => component().then(x => x.default),
		};
	}, [loc]);

	return <div id="app">
		{ loc
			? <>
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

						<AsyncRoute path="/story/:id/:type" { ...pRoute(() => import("@/routes/story")) } />

						{/* <AsyncRoute path="/test/:uid?" { ...pRoute(() => import("@/routes/test")) } /> */ }

						<NotFoundPage default />
					</Router>
				</div>

				{ Store.requireReload.value
					? <PopupBase display>
						<div class="text-center m-0" style={ { lineHeight: "1.3", fontSize: "5rem" } }>
							<IconChatDots class="align-top" />
						</div>
						<div style={ { whiteSpace: "pre-wrap" } }>
							<Locale plain k="COMMON_REQUIRE_RELOAD" />
						</div>
					</PopupBase>
					: <></>
				}
			</>
			: <Loading.Data />
		}

		<div class="toast-container">
			{ false && !hasCookie("swaytwig:toast:jp-locale-message-20231213") && CurrentLocale === "JP" /* temporary */
				? <div class="toast show align-items-center text-bg-danger border-1 shadow" role="alert">
					<div class="d-flex">
						<div class="toast-body">
							このサイトの日本語テキストはKRゲームデータから取得しています。<br />
							現在、KRゲームデータの日本語テキストが間違って入力されており、多くの日本語テキストが壊れています。<br />
							サイトの利用に参考してください。
						</div>
						<button
							type="button"
							class="btn-close btn-close-white me-2 m-auto"
							data-bs-dismiss="toast"
							onClick={ _ => {
								setCookie("swaytwig:toast:jp-locale-message-20231213", "1");
							} }
						/>
					</div>
				</div>
				: <></>
			}
		</div>
	</div>;
};
export default App;
