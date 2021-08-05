import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { AssetsRoot, CurrentEvent, EventFrom, EventTo, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { CurrentLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import HomeConfigSelector from "@/components/home-config-selector";
import Icon from "@/components/bootstrap-icon";

import BuildInfo from "@/buildtime";

import style from "./style.scss";

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

	const now = Date.now();
	const EWCount = Math.floor(now / (24 * 60 * 60 * 1000) + 3) % 28;
	const EWNo = Math.floor((now / (24 * 60 * 60 * 1000) + 3) / 28) - 648;
	const IsEW = EWCount >= 14;
	const LeftEW = 27 - EWCount;

	SetMeta(["description", "twitter:description"], null);
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle();

	return <div class={ `${style.home} home` }>
		<div class="alert alert-primary" role="alert">
			<span class="pe-3">
				<img src={ `${AssetsRoot}/flags/KR.png` } alt="[KR]" />
			</span>

			{ IsEW
				? <Locale k="HOME_EW_REMAIN" p={ [
					<span class="badge bg-light text-dark" style="font-size: 100%">
						<Locale k="HOME_EW" p={ [EWNo] } />
					</span>,
					<span class="badge bg-danger" style="font-size: 100%">
						<Locale k="HOME_EW_DAYS" p={ [LeftEW] } />
					</span>,
				] } />
				: <Locale k="HOME_EW_ENDED" p={ [
					<span class="badge bg-light text-dark" style="font-size: 100%">
						<Locale k="HOME_EW" p={ [EWNo - 1] } />
					</span>,
					<span class="badge bg-light text-dark" style="font-size: 100%">
						<Locale k="HOME_EW" p={ [EWNo] } />
					</span>,
					<span class="badge bg-danger" style="font-size: 100%">
						<Locale k="HOME_EW_DAYS" p={ [LeftEW - 14 + 1] } />
					</span>,
				] } /> }
		</div>

		{ CurrentEvent
			? <div class="alert alert-danger" role="alert">
				<span class="pe-3">
					<img src={ `${AssetsRoot}/flags/KR.png` } alt="[KR]" />
				</span>

				<Link href={ `/worlds/${CurrentEvent}` } class="text-dark" style={ { textDecoration: "none" } }>
					<img
						src={ `${AssetsRoot}/world/event-${CurrentLocale}.png` }
						class="me-3"
						height="24"
						style={ { verticalAlign: "text-bottom" } }
					/>
					<strong>
						<Locale k={ `WORLD_${CurrentEvent}` } />
					</strong>
					<span class="ps-3">
						<Icon icon="calendar3" class="me-1 mb-1" />
						{ DateText(EventFrom) } ~ { DateText(EventTo) }
					</span>
				</Link>
			</div>
			: <></>
		}

		<h2>
			<img class={ `${style["heading-icon"]} heading-icon` } src={ `${AssetsRoot}/icon.png` } />
			<Locale k="COMMON_TITLE" />
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
		<p>
			<Locale k="HOME_DESCRIPTION" />
		</p>
		<p>
			<a href="https://docs.google.com/spreadsheets/d/1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4" target="_blank" rel="noreferrer">
				<Icon icon="link-45deg" class="me-1" />
				<span>Database SpreadSheet</span>
			</a>
		</p>
		<hr />

		{ ext === "png" ? <div class="alert alert-danger">
			<Locale k="HOME_WEBP_UNAVAILABLE" />
		</div> : <></> }

		<div class="alert alert-warning">
			<p class="mb-1">Translation support needed!</p>
			<p class="mb-1">翻訳サポートがひつようです！</p>
			<p class="mb-0">
				<a href="https://docs.google.com/spreadsheets/d/1Q2tpfQntZxmI0Xbx9HZo0vjBY7kQGZGmH1MBGTzrnvo" target="_blank" rel="noreferrer">
					<Icon icon="link-45deg" class="me-1" />
					<span>Locale SpreadSheet</span>
				</a>
			</p>
		</div>
		<hr />

		<Locale k="HOME_DEVELOPER" />
		<hr />

		<p>
			<Locale k="HOME_COPYRIGHT" />
		</p>
	</div>;
};

export default Home;
