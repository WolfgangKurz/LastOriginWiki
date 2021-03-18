import { Fragment, FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import { AssetsRoot, CurrentEvent, EventFrom, EventTo, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { CurrentLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import HomeConfigSelector from "@/components/home-config-selector";

import BuildInfo from "@/buildtime";

import style from "./style.scss";
import Icon from "@/components/bootstrap-icon";

const Home: FunctionalComponent = () => {
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
			: <Fragment />
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
		<hr />

		{ ImageExtension() === "png" ? <div class="alert alert-danger">
			<Locale k="HOME_WEBP_UNAVAILABLE" />
		</div> : <Fragment /> }

		<div class="alert alert-success">
			모든 전투원의 대사 입력이 완료되었습니다. 참여해주신 모든 분들께 감사드립니다.<br />
			<a
				href="https://docs.google.com/spreadsheets/d/1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00"
				target="_blank"
				rel="noreferrer"
			>전투원 대사 DB</a>는 항상 열려있습니다.<br />
			대사가 잘못되었거나 오타가 있는 경우 얼마든지 수정해주셔도 됩니다.
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
