import { FunctionalComponent } from "preact";
import { useLayoutEffect } from "preact/hooks";
import { Link, route } from "preact-router";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import { AssetsRoot, CurrentEvent, EventFrom, EventTo, Host, ImageExtension, IsAprilFool } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { CurrentLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import IconLink45deg from "@/components/bootstrap-icon/icons/Link45deg";
import IconCalendar3 from "@/components/bootstrap-icon/icons/Calendar3";
import IconGithub from "@/components/bootstrap-icon/icons/Github";
import HomeConfigSelector from "@/components/home-config-selector";
import Changelog from "./changelog";

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
	const BuildTime = ((): string => {
		const dt = new Date(BuildInfo.time);
		const y = dt.getFullYear();
		const m = dt.getMonth() + 1;
		const d = dt.getDate();
		const h = dt.getHours();
		const i = dt.getMinutes();
		const s = dt.getSeconds();
		return `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)} ${pad(h, 2)}:${pad(i, 2)}:${pad(s, 2)}`;
	})();

	function DateText (date: Date): string {
		if (CurrentLocale === "EN")
			return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
		return `${date.getFullYear()}-${pad(date.getMonth() + 1, 2)}-${pad(date.getDate(), 2)}`;
	}

	const BuildVersion = BuildInfo.build;

	SetMeta(["description", "twitter:description"], null);
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle();

	useLayoutEffect(() => {
		SwiperCore.use([Autoplay, Pagination]);
	}, []);

	return <div class={ `${style.home} home` }>
		<div class="alert alert-primary">
			사이트 개발자가 더 이상 게임을 하지 않기 때문에 정보에 오류가 있을 수 있습니다.
		</div>

		<div>
			{ CurrentEvent && (new Date() < EventTo)
				? <Link href={ `/worlds/${CurrentEvent}` } class="text-dark" style={ { textDecoration: "none" } }>
					<div class="alert alert-danger d-inline-block px-4 text-dark mx-1 align-top" role="alert">
						<div>
							<img
								src={ `${AssetsRoot}/world/event-${CurrentLocale}.png` }
								height="24"
								style={ { verticalAlign: "text-bottom" } }
							/>
						</div>
						<img
							src={ `${AssetsRoot}/world/banner/${CurrentEvent}.png` }
							class="mb-1"
							height="120"
							style={ { verticalAlign: "middle" } }
						/>
						<div>
							<span>
								<img class="me-2" src={ `${AssetsRoot}/flags/KR.png` } alt="[KR]" />
								<IconCalendar3 class="me-1 mb-1" />
								{ DateText(EventFrom) } ~ { DateText(EventTo) }
							</span>
						</div>
					</div>
				</Link>
				: <></>
			}
		</div>

		<h2>
			<img
				class={ `${style["heading-icon"]} heading-icon` }
				src={ `${AssetsRoot}/${IsAprilFool ? "icon2" : "icon"}.png` }
			/>
			<span class={ style["home-title"] }>
				<i class={ style.subtitle }>
					<Locale
						k="COMMON_TITLE_SUB"
						preprocessor={ (x) => x
							.replace(/\$\~\//g, `${Host}/`)
							.replace(/!!icon!!/g, "50")
							.replace(/!!iconm!!/g, "1em")
						}
						fallback=""
					/>
				</i>
				<span class="font-ibm">
					<Locale k={ IsAprilFool ? "CONSUMABLE_Consumable_TacticRecord_T3" : "COMMON_TITLE" } />
				</span>
			</span>
		</h2>
		<div class="mb-4 text-secondary">
			<div>
				<Locale k="HOME_BUILD_INFO" p={ [
					BuildVersion,
					BuildTime,
				] } />
			</div>
		</div>

		<HomeConfigSelector />

		<div class={ style.MenuBox }>
			<div class={ style["home-nav"] }>
				<div class="btn-group">
					<NavItem href="/units" text="MENU_UNITS" />
					<NavItem href="/equips" text="MENU_EQUIPS" />
					<NavItem href="/facilities" text="MENU_FACILITIES" />

					<NavItem href="/enemies" text="MENU_ENEMIES" />
					<NavItem href="/worlds" text="MENU_WORLDS" />

					<NavItem href="/eternalwar" text="MENU_ETERNALWAR" />
					<NavItem href="/infinitewar" text="MENU_INFINITEWAR" />

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
		</div>

		<Swiper
			className={ style.SkinBannerSwiper }
			modules={ [Autoplay, Pagination] }
			loop
			autoplay
			pagination
		>
			{ ["3P_Amphitrite_1", "3P_Salacia_1"].map(skin => {
				const r = /^(.+)_([0-9]+)$/.exec(skin)!;
				const key = r[1];
				const sid = parseInt(r[2], 10);
				return <SwiperSlide>
					<Link href={ `/units/${key}/s${sid}` }>
						<img class={ style.SkinBanner } src={ `${AssetsRoot}/skin/banners_G/${skin}.jpg` } />
					</Link>
				</SwiperSlide>;
			}) }
		</Swiper>

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

		{ ext === "png" ? <div class="alert alert-danger">
			<Locale k="HOME_WEBP_UNAVAILABLE" />
		</div> : <></> }

		<div>
			<IconGithub class="me-2" />
			<a href="https://github.com/WolfgangKurz/LastOriginWiki" target="_blank" rel="noopener noreferrer">
				Github
			</a>
		</div>
		<Locale k="HOME_DEVELOPER" />
		<hr />

		<p>
			<Locale k="HOME_COPYRIGHT" />
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
