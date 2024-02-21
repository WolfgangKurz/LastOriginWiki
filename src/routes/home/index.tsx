import { FunctionalComponent } from "preact";
import { useLayoutEffect, useMemo } from "preact/hooks";
import { Link, route } from "preact-router";

import TimeAgo from "javascript-time-ago";

import { AssetsRoot, CurrentEvent, EventTo, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { CurrentLocale } from "@/libs/Locale";
import { GetTimeAgoLocale } from "@/libs/Setup";
import { cn } from "@/libs/Class";

import Locale from "@/components/locale";
import IconLink45deg from "@/components/bootstrap-icon/icons/Link45deg";
import IconHourglassSplit from "@/components/bootstrap-icon/icons/HourglassSplit";
import IconGithub from "@/components/bootstrap-icon/icons/Github";
import IconEnvelope from "@/components/bootstrap-icon/icons/Envelope";
import Countdown from "@/routes/home/Countdown";
import Changelog from "./changelog";

import ConfigSelector from "./components/ConfigSelector";

import BuildInfo from "@/buildtime";

import style from "./style.module.scss";

interface LinkData {
	href: string;
	text?: string;
}

const NavItem: FunctionalComponent<LinkData> = (props) => (
	<button
		class="btn btn-rarity-A"
		onClick={ e => {
			e.preventDefault();
			route(props.href);
		} }
	>
		{ props.children ? props.children : <Locale k={ props.text || "" } /> }
	</button>
);

const NavItemExternal: FunctionalComponent<LinkData> = (props) => (
	<button
		class="btn btn-rarity-A"
		onClick={ e => {
			e.preventDefault();

			const _a = document.createElement("a");
			_a.target = "_blank";
			_a.href = props.href;
			_a.rel = "noopener noreferrer";
			_a.click();
		} }
	>
		{ props.children ? props.children : <Locale k={ props.text || "" } /> }
		<IconLink45deg class="ms-1" />
	</button>
);

const Home: FunctionalComponent = () => {
	const ext = ImageExtension();

	const pad = (x: number, y: number): string => x.toString().padStart(y, "0");
	const BuildTime = useMemo((): string => {
		const dt = new Date(BuildInfo.time);
		const y = dt.getFullYear();
		const m = dt.getMonth() + 1;
		const d = dt.getDate();
		const h = dt.getHours();
		const i = dt.getMinutes();
		const s = dt.getSeconds();
		return `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)} ${pad(h, 2)}:${pad(i, 2)}:${pad(s, 2)}`;
	}, []);
	const BuildTimeAgo = useMemo(() => new TimeAgo(GetTimeAgoLocale(CurrentLocale.value)).format(BuildInfo.time), []);
	const BuildVersion = BuildInfo.build;

	const eventAvailable = useMemo(() => CurrentEvent && (new Date() < EventTo), [CurrentEvent, EventTo]);

	SetMeta(["description", "twitter:description"], null);
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle();

	return <div class={ style.Home }>
		<div class={ cn(style.Header) }>
			{ eventAvailable && <Link
				class={ style.EventBanner }
				href={ `/worlds/${CurrentEvent}` }
			>
				<img
					src={ `${AssetsRoot}/world/banner/${CurrentEvent}.png` }
					class="mb-1"
					height="120"
					style={ { verticalAlign: "middle" } }
				/>
				<div>
					<img class="me-2" src={ `${AssetsRoot}/flags/KR.png` } alt="[KR]" />

					<IconHourglassSplit class="me-1 mb-1" />
					<Countdown to={ EventTo } />
				</div>
			</Link> }
		</div>

		<div class={ style.BrandContainer }>
			<div class={ style.BrandBox }>
				<img
					class={ `${style.BrandIcon} heading-icon` }
					src={ `${AssetsRoot}/icon.png` }
				/>

				<div class={ cn(style.Title, "font-ibm") }>
					<Locale k="COMMON_TITLE" />
				</div>
				<div class={ style.BuildInfo }>
					<Locale k="HOME_BUILD_INFO" p={ [
						BuildVersion,
						<span
							class={ style.BuildTime }
							title={ BuildTime }
							style={ { cursor: "help" } }
						>{ BuildTimeAgo }</span>,
					] } />
				</div>
			</div>

			<div class={ style.Links }>
				<span>
					<IconGithub class="me-1" />
					<a href="https://github.com/WolfgangKurz/LastOriginWiki" target="_blank" rel="noopener noreferrer">
						Source Code
					</a>
				</span>
				<span>
					<IconEnvelope class="me-1" />
					<a href="mailto:wolfgangkurzdev@gmail.com">wolfgangkurzdev@gmail.com</a>
				</span>
			</div>

			<div class={ style.Description }>
				<Locale raw={ false } k="HOME_DEVELOPER" />
			</div>

			<div class={ style.Caution }>
				<Locale raw={ false } k="COMMON_NSFW_CAUTION" />
			</div>
		</div>

		<ConfigSelector />

		<hr />

		{/*
		<div class={ style.MenuBox }>
			<div class={ style["home-nav"] }>
				<div class="btn-group">
					<NavItem href="/units" text="MENU_UNITS" />
					<NavItem href="/equips" text="MENU_EQUIPS" />
					<NavItem href="/facilities" text="MENU_FACILITIES" />

					<NavItem href="/enemies" text="MENU_ENEMIES" />
					<NavItem href="/worlds" text="MENU_WORLDS" />
					<NavItem href="/story" text="MENU_STORY" />

					<NavItem href="/simulator" text="MENU_SIMULATOR" />
				</div>
			</div>

			<div class={ style.GroupName }>
				<Locale k="MENU_ETC" />
			</div>

			<div class={ style["home-nav"] }>
				<NavItem href="/changelog">
					<Locale k="MENU_CHANGELOG" />
				</NavItem>

				<span class={ style.divider } />

				<NavItem href="/calc/exp">
					<Locale k="MENU_ETC_EXPCALC" />
				</NavItem>


				<span class={ style.divider } />

				<div class="btn-group">
					<NavItem href="/bg">
						<Locale k="MENU_ETC_BG" />
					</NavItem>
					<NavItem href="/bgm">
						<Locale k="MENU_ETC_BGM" />
					</NavItem>
					<NavItem href="/consumable">
						<Locale k="MENU_ETC_CONSUMABLE" />
					</NavItem>
					<NavItem href="/sticker">
						<Locale k="MENU_ETC_STICKER" />
					</NavItem>
				</div>

				<span class={ style.divider } />

				<NavItem href="/gacha">
					<Locale k="MENU_ETC_GACHA" />
				</NavItem>

				<span class={ style.divider } />

				<NavItemExternal href="https://loeq.swaytwig.com/">
					<Locale k="MENU_ETC_LOEQ" />
				</NavItemExternal>

				<span class={ style.divider } />

				<div class="btn-group">
					<NavItemExternal href="https://arca.live/b/lastorigin/4474753">
						<Locale k="MENU_ETC_EX01" />
					</NavItemExternal>
					<NavItemExternal href="https://arca.live/b/lastorigin/10674899">
						<Locale k="MENU_ETC_EX03" />
					</NavItemExternal>
					<NavItemExternal href="https://wolfgangkurz.github.io/lo-grid/">
						<Locale k="MENU_ETC_EX04" />
					</NavItemExternal>
				</div>
			</div>

			<hr />
		</div> */}

		<Changelog />

		<p class="mt-4">
			<Locale k="HOME_DESCRIPTION" />
		</p>
		{/* <p>
			<a href="https://docs.google.com/spreadsheets/d/1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4" target="_blank" rel="noreferrer">
				<IconLink45deg class="me-1" />
				<span>Database SpreadSheet</span>
			</a>
		</p> */}
		<hr />

		{ ext === "png" && <div class="alert alert-danger">
			<Locale k="HOME_WEBP_UNAVAILABLE" />
		</div> }

		<p>
			<Locale k="HOME_COPYRIGHT" />
		</p>
		<p>
			<small>
				<Locale
					k="COMMON_PROJECT_SINCE"
					p={ [
						Math.floor(
							new Date(Date.now() - new Date(2020, 5 - 1, 16).getTime())
								.getTime() / 100 / 86400
						).toLocaleString(),
					] }
				/>
			</small>
		</p>

		{/* <div class="mt-4">
			<a href="https://toon.at/donate/wolfgangkurzdev" target="_blank">
				<img
					src={ `${AssetsRoot}/btn-toonation.png` }
					style={ { height: "40px" } }
				/>
			</a>
		</div> */}
	</div>;
};

export default Home;
