import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";
// import { Dropdown } from "bootstrap";
import Store from "@/store";

import { LocaleList } from "@/types/Locale";

import { AssetsRoot, Host, IsDev } from "@/libs/Const";
import { ChangeLanguage, CurrentLocale, ReloadLocale } from "@/libs/Locale";
import { ChangeDB, CurrentDB, DBList, DBTypes } from "@/libs/DB";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";

import style from "./style.module.scss";

interface LinkData {
	href: string;
	text?: string;
}

const NavItem: FunctionalComponent<LinkData> = (props) => (
	<li class={ `${style["nav-item"]} nav-item` }>
		<Link
			class="nav-link"
			activeClassName="active"
			href={ props.href }
			path={ props.href === "/" ? "/" : `${props.href}/:*` }
		>
			{ props.children ? props.children : <Locale k={ props.text || "" } /> }
		</Link>
	</li>
);

const DropdownItem: FunctionalComponent<LinkData> = (props) => (
	<li>
		<Link class="dropdown-item" href={ props.href }>
			{ props.children ? props.children : <Locale k={ props.text || "" } /> }
		</Link>
	</li>
);

const DropdownExternal: FunctionalComponent<LinkData> = (props) => (
	<li>
		<a href={ props.href } target="_blank" rel="noreferrer" class="dropdown-item">
			{ props.children ? props.children : <Locale k={ props.text || "" } /> }
			<Icons.Link45deg class="ms-1" />
		</a>
	</li>
);

const DBDisp: Record<DBTypes, string> = {
	korea: "KR",
	// japan: "JP",
};

const Header: FunctionalComponent = (): preact.VNode => {
	return <nav class={ `${style.navbar} navbar navbar-expand-lg navbar-dark bg-dark px-3` }>
		<div class="container-fluid">
			<div class={ `${style["navbar-brand"]} navbar-brand` }>
				<img
					src={ `${AssetsRoot}/icon.png` }
				/>
				<span>
					<i class={ style.subtitle } data-locale={ CurrentLocale }>
						<Locale
							k="COMMON_TITLE_SUB"
							preprocessor={ (x) => x
								.replace(/\$\~\//g, `${Host}/`)
								.replace(/!!icon!!/g, "30")
								.replace(/!!iconm!!/g, "2.5em")
							}
							fallback=""
						/>
					</i>
					<span class="font-ibm">
						<Locale k="MENU_TITLE" />
					</span>
				</span>
			</div>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#topNavbarList"
				aria-controls="topNavbarList"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<Icons.List />
				{/* <span class="navbar-toggler-icon" /> */ }
			</button>

			<div class="collapse navbar-collapse" id="topNavbarList">
				<ul class={ `${style["navbar-nav"]} navbar-nav me-auto mb-2 mb-lg-0` }>
					<NavItem href="/" text="MENU_HOME" />
					<NavItem href="/units" text="MENU_UNITS" />
					<NavItem href="/equips" text="MENU_EQUIPS" />
					<NavItem href="/facilities" text="MENU_FACILITIES" />

					<NavItem href="/enemies" text="MENU_ENEMIES" />
					<NavItem href="/worlds" text="MENU_WORLDS" />
					<NavItem href="/story" text="MENU_STORY" />

					<NavItem href="/simulator" text="MENU_SIMULATOR" />

					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="topNavbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<Locale k="MENU_ETC" />
						</a>
						<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="topNavbarDropdown">
							<DropdownItem href="/changelog">
								<Locale k="MENU_CHANGELOG" />
							</DropdownItem>

							<li><hr class="dropdown-divider" /></li>

							<DropdownItem href="/calc/exp">
								<Locale k="MENU_ETC_EXPCALC" />
							</DropdownItem>

							<li><hr class="dropdown-divider" /></li>

							{/* <DropdownItem href="/roguelike">
								<Locale k="MENU_ROGUELIKE" />
							</DropdownItem> */}
							{/* <DropdownItem href="/exchange">
								<Locale k="MENU_EXCHANGES" />
								<span class="badge bg-secondary ms-2">TBA</span>
							</DropdownItem> */}
							<DropdownItem href="/bg">
								<Locale k="MENU_ETC_BG" />
							</DropdownItem>
							<DropdownItem href="/bgm">
								<Locale k="MENU_ETC_BGM" />
							</DropdownItem>
							<DropdownItem href="/consumable">
								<Locale k="MENU_ETC_CONSUMABLE" />
							</DropdownItem>
							<DropdownItem href="/sticker">
								<Locale k="MENU_ETC_STICKER" />
							</DropdownItem>
							{/* <DropdownItem href="/eapi">
								<Locale k="MENU_ETC_API" />
								<span class="badge bg-secondary ms-2">TBA</span>
							</DropdownItem> */}

							<li><hr class="dropdown-divider" /></li>

							<DropdownItem href="/gacha">
								<Locale k="MENU_ETC_GACHA" />
							</DropdownItem>

							<li><hr class="dropdown-divider" /></li>

							<DropdownExternal href="https://loeq.swaytwig.com/">
								<Locale k="MENU_ETC_LOEQ" />
							</DropdownExternal>

							<li><hr class="dropdown-divider" /></li>

							<DropdownExternal href="https://arca.live/b/lastorigin/4474753">
								<Locale k="MENU_ETC_EX01" />
							</DropdownExternal>
							{/* <DropdownExternal href="https://lastoriginmap.github.io/">
								<Locale k="MENU_ETC_EX02" />
							</DropdownExternal> */}
							<DropdownExternal href="https://arca.live/b/lastorigin/10674899">
								<Locale k="MENU_ETC_EX03" />
							</DropdownExternal>
							<DropdownExternal href="https://wolfgangkurz.github.io/lo-grid/">
								<Locale k="MENU_ETC_EX04" />
							</DropdownExternal>
						</ul>
					</li>
				</ul>
				<div class="d-flex">
					<ul class={ `${style["navbar-nav"]} navbar-nav me-auto mb-2 mb-lg-0` }>
						{ DBList.length > 1
							? <li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="topNavbarDropdown2"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<Icons.Server class="me-1" />
									<img class="mx-1" src={ `${AssetsRoot}/flags/${DBDisp[CurrentDB]}.png` } alt={ DBDisp[CurrentDB] } />
									{ DBDisp[CurrentDB] }
								</a>
								<ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="topNavbarDropdown2">
									{ DBList.map(db => <li>
										<a href="#" class="dropdown-item" onClick={ (e): void => {
											e.preventDefault();
											ChangeDB(db);
										} }>
											<img class="me-3" src={ `${AssetsRoot}/flags/${DBDisp[db]}.png` } alt={ DBDisp[db] } />
											{ DBDisp[db] }
										</a>
									</li>) }
								</ul>
							</li>
							: <></>
						}

						{ IsDev
							?
							<li class={ `${style["nav-item"]} nav-item` }>
								<a
									href="#"
									class="nav-link"
									onClick={ e => {
										e.preventDefault();
										ReloadLocale(CurrentLocale.value);
									} }
								>
									Re-locale
								</a>
							</li>
							: <></>
						}

						{ LocaleList.length > 1
							? <li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="topNavbarDropdown2"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<Icons.Translate class="me-1" />
									<img
										class="mx-2"
										src={ `${AssetsRoot}/flags/${CurrentLocale.value}.png` }
										alt={ CurrentLocale.value }
									/>
								</a>
								<ul
									class="dropdown-menu dropdown-menu-end dropdown-menu-dark text-center"
									aria-labelledby="topNavbarDropdown2"
									style={ {
										"--bs-dropdown-min-width": "initial"
									} }
								>
									{ LocaleList.map(lang => <li>
										<a href="#" class="dropdown-item" onClick={ (e): void => {
											e.preventDefault();
											ChangeLanguage(lang);
										} }>
											<img src={ `${AssetsRoot}/flags/${lang}.png` } alt={ lang } />
										</a>
									</li>) }
								</ul>
							</li>
							: <></>
						}
					</ul>
				</div>
			</div>
		</div>
	</nav>;
};
export default Header;
