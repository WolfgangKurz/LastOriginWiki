import { FunctionalComponent, h } from "preact";
import { MutableRef, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";
import Store from "@/store";

import { CurrentLocale, useLocale } from "@/libs/Locale";
import { hasCookie, setCookie } from "@/libs/Cookie";
import { UpdateTitle } from "@/libs/Site";

// import DynamicRoute from "@/components/dynamic-route";
import Locale from "@/components/locale";
import Loading from "@/components/loading";
import Redirect from "@/components/redirect";
import Header from "@/components/header";
import Icons from "@/components/bootstrap-icon";

import NotFoundPage from "@/routes/notfound";
import PopupBase from "@/components/popup/base";

import "./style.scss";

const Tint: FunctionalComponent<{ color: Tuple<number, 4>; }> = (props) => {
	const r = useMemo(() => props.color[0], [props.color]);
	const g = useMemo(() => props.color[1], [props.color]);
	const b = useMemo(() => props.color[2], [props.color]);
	const a = useMemo(() => props.color[3], [props.color]);
	const id = useMemo(() =>
		[r, g, b, a]
			.map(r => Math.floor(r * 255).toString(16).padStart(2, "0"))
			.join(""),
		[r, g, b, a],
	);

	return <svg
		width="1"
		height="1"
		viewBox="0 0 1 1"
		xmlns="http://www.w3.org/2000/svg"
		style={ {
			position: "fixed",
			left: "-10px",
			top: "-10px",
			opacity: "0",
			pointerEvents: "none",
		} }
	>
		<defs>
			<filter id={ `filter_tint_${id}` }>
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values={ `${r} 0 0 0 0  0 ${g} 0 0 0  0 0 ${b} 0 0  0 0 0 ${a} 0` }
					color-interpolation-filters="sRGB"
				/>
			</filter>
		</defs>
	</svg>;
};
// lazy components
function lazy<T> (loader: () => Promise<T>): FunctionalComponent {
	type R = string | preact.ComponentType;
	let c: R | undefined = undefined;
	let p: Promise<R> | undefined = undefined;

	function loadModule () {
		return loader()
			.then(m => (c = (m && (m as any).default) || m))
			.catch(e => {
				console.error(e);
				c = () => <>Failed to load, try again</>;
			});
	}

	const LazyComponent: FunctionalComponent = props => {
		const [, update] = useState(0);
		const r: MutableRef<Promise<R> | undefined> = useRef(undefined);
		if (!p) p = loadModule();
		if (c !== undefined) return h(c, props);
		if (!r.current) r.current = p.finally(() => update(v => v + 1));
		return <Loading.Page />;
	};
	return LazyComponent;
}

const App: FunctionalComponent = () => {
	const [locale] = useLocale();

	useEffect(() => UpdateTitle(), [locale]);

	return <div id="app">
		<LocationProvider>
			<Header />

			<Tint color={ [0, 0, 0, 1] } />

			<div class="container p-4">
				<ErrorBoundary>
					<Router>
						<Route path="/" component={ lazy(() => import("@/routes/home")) } />

						<Route path="/units" component={ lazy(() => import("@/routes/units")) } />
						<Route path="/units/:uid/:sub?" component={ lazy(() => import("@/routes/units/view")) } />
						{/* <Route path="/units/:uid/s:sid" component={ lazy(() => import("@/routes/units/view")) } /> */ }

						<Route path="/equips/:uid?" component={ lazy(() => import("@/routes/equips")) } />

						<Route path="/facilities" component={ lazy(() => import("@/routes/facilities")) } />
						<Route path="/facilities/:uid" component={ lazy(() => import("@/routes/facilities/view")) } />

						<Route path="/enemies/:uid?/:level?" component={ lazy(() => import("@/routes/enemies")) } />
						<Redirect
							path="/enemies/list/:uid?/:level?"
							to={ ({ uid, level }) => {
								if (uid && level)
									return `/enemies/${uid}/${level}`;
								else if (uid)
									return `/enemies/${uid}`;
								else
									return `/enemies`;
							} }
						/>
						<Redirect path="/enemies/group" to="/enemies" />

						<Route path="/worlds" component={ lazy(() => import("@/routes/worlds")) } />
						<Route path="/worlds/Story" component={ lazy(() => import("@/routes/worlds/MainStoryView")) } />
						<Route path="/worlds/Sub" component={ lazy(() => import("@/routes/worlds/SubStoryView")) } />
						<Route path="/worlds/:wid" component={ lazy(() => import("@/routes/worlds/world-view")) } />
						<Route path="/worlds/:wid/:mid/drop" component={ lazy(() => import("@/routes/worlds/drop-table")) } />
						<Route path="/worlds/:wid/:mid/:node?" component={ lazy(() => import("@/routes/worlds/map-view")) } />

						<Route path="/eternalwar/:mid?" component={ lazy(() => import("@/routes/eternalwar")) } />

						<Route path="/infinitewar" component={ lazy(() => import("@/routes/infinitewar")) } />
						<Route path="/infinitewar/:season/:stage?" component={ lazy(() => import("@/routes/infinitewar/season")) } />

						<Route path="/simulator" component={ lazy(() => import("@/routes/simulator")) } />

						<Route path="/changelog" component={ lazy(() => import("@/routes/changelog")) } />
						<Route path="/calc/exp" component={ lazy(() => import("@/routes/calc/exp")) } />
						{/* <Route {...p}  path="/roguelike" component={() => Roguelike } /> */ }

						<Route path="/bg" component={ lazy(() => import("@/routes/bg")) } />
						<Route path="/bgm" component={ lazy(() => import("@/routes/bgm")) } />
						<Route path="/consumable" component={ lazy(() => import("@/routes/consumable")) } />
						<Route path="/sticker" component={ lazy(() => import("@/routes/sticker")) } />

						<Route path="/gacha" component={ lazy(() => import("@/routes/gacha")) } />

						<Route path="/story/:chapter?" component={ lazy(() => import("@/routes/story")) } />
						<Route path="/story/:id/:type" component={ lazy(() => import("@/routes/story/Viewer")) } />

						{ import.meta.env.DEV
							? <Route path="/test/:uid?" component={ lazy(() => import("@/routes/test")) } />
							: <></>
						}

						<Route default component={ NotFoundPage } />
					</Router>
				</ErrorBoundary>
			</div>

			{ Store.requireReload.value
				? <PopupBase display>
					<div class="text-center m-0" style={ { lineHeight: "1.3", fontSize: "5rem" } }>
						<Icons.ChatDots class="align-top" />
					</div>
					<div style={ { whiteSpace: "pre-wrap" } }>
						<Locale k="COMMON_REQUIRE_RELOAD" />
					</div>
				</PopupBase>
				: <></>
			}

			<div class="toast-container">
				{ false && !hasCookie("swaytwig:toast:jp-locale-message-20231213") && CurrentLocale.value === "JP" /* temporary */
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
		</LocationProvider>
	</div>;
};
export default App;
