import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";

import { AssetsRoot } from "@/libs/Const";
import { ChangeLanguage, LocaleList } from "@/libs/Locale";

import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

import style from "./style.css";

interface LinkData {
	href: string;
	text?: string;
}

const NavItem: FunctionalComponent<LinkData> = (props) => (
	<li class={ `${style["nav-item"]} nav-item` }>
		<Link href={ props.href } class="nav-link" activeClassName="active">
			{ props.children ? props.children : <Locale k={ props.text || "" } /> }
		</Link>
	</li>
);

const DropdownItem: FunctionalComponent<LinkData> = (props) => (
	<li>
		<Link href={ props.href } class="dropdown-item">
			{ props.children ? props.children : <Locale k={ props.text || "" } /> }
		</Link>
	</li>
);

const Header: FunctionalComponent = () => {
	return (
		<nav class={ `${style.navbar} navbar navbar-expand-lg navbar-dark bg-dark px-3` }>
			<div class="container-fluid">
				<div class={ `${style["navbar-brand"]} navbar-brand` }>
					<img src={ `${AssetsRoot}/icon.png` } />
					<span>
						<Locale k="MENU_TITLE" />
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
					<span class="navbar-toggler-icon" />
				</button>

				<div class="collapse navbar-collapse" id="topNavbarList">
					<ul class={ `${style["navbar-nav"]} navbar-nav me-auto mb-2 mb-lg-0` }>
						<NavItem href="/" text="MENU_HOME" />
						<NavItem href="/units" text="MENU_UNITS" />
						<NavItem href="/equips" text="MENU_EQUIPS" />
						<NavItem href="/facilities" text="MENU_FACILITIES" />

						<NavItem href="/enemies" text="MENU_ENEMIES" />
						<NavItem href="/worlds" text="MENU_WORLDS" />

						<NavItem href="/simulator" text="MENU_SIMULATOR" />

						<NavItem href="/changelog" text="MENU_CHANGELOG" />

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
							<ul class="dropdown-menu" aria-labelledby="topNavbarDropdown">
								<DropdownItem href="/exp">
									<Locale k="MENU_ETC_EXPCALC" />
									<span class="badge bg-secondary ms-2">TBA</span>
								</DropdownItem>

								<li><hr class="dropdown-divider" /></li>

								<DropdownItem href="/exchange">
									<Locale k="MENU_EXCHANGES" />
									<span class="badge bg-secondary ms-2">TBA</span>
								</DropdownItem>
								<DropdownItem href="/bgm">
									<Locale k="MENU_ETC_BGM" />
								</DropdownItem>
								<DropdownItem href="/eapi">
									<Locale k="MENU_ETC_API" />
									<span class="badge bg-secondary ms-2">TBA</span>
								</DropdownItem>

								<li><hr class="dropdown-divider" /></li>

								<DropdownItem href="https://arca.live/b/lastorigin/4474753" text="MENU_ETC_BGM">
									<Locale k="MENU_ETC_EX01" />
									<Icon icon="link-45deg" class="ms-1" />
								</DropdownItem>
								<DropdownItem href="https://lastoriginmap.github.io/" text="MENU_ETC_BGM">
									<Locale k="MENU_ETC_EX02" />
									<Icon icon="link-45deg" class="ms-1" />
								</DropdownItem>
							</ul>
						</li>
					</ul>
					<div class="d-flex">
						<ul class={ `${style["navbar-nav"]} navbar-nav me-auto mb-2 mb-lg-0` }>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="topNavbarDropdown2"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<Icon icon="globe2" class="me-1" />
									<Locale k="COMMON_LANG" />
								</a>
								<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="topNavbarDropdown2">
									{ LocaleList.map(lang => <li>
										<a href="#" class="dropdown-item" onClick={ (e): void => {
											e.preventDefault();
											ChangeLanguage(lang);
										} }>{ lang }</a>
									</li>) }
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
