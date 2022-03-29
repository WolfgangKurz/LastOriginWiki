import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { AssetsRoot, CurrentEvent, EventFrom, EventTo, ImageExtension, IsAprilFool, IsStaging } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { CurrentLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import HomeConfigSelector from "@/components/home-config-selector";
import Icon from "@/components/bootstrap-icon";

import BuildInfo from "@/buildtime";

import style from "./style.module.scss";

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

	return <div class={ `${style.home} home` }>
		{ CurrentEvent && (new Date() < EventTo)
			? <div>
				<Link href={ `/worlds/${CurrentEvent}` } class="text-dark" style={ { textDecoration: "none" } }>
					<div class="alert alert-danger d-inline-block px-5 text-dark" role="alert">
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
								<Icon icon="calendar3" class="me-1 mb-1" />
								{ DateText(EventFrom) } ~ { DateText(EventTo) }
							</span>
						</div>
					</div>
				</Link>
			</div>
			: <></>
		}

		<h2>
			<img
				class={ `${style["heading-icon"]} heading-icon` }
				src={ `${AssetsRoot}/${IsAprilFool ? "icon2" : "icon"}.png` }
			/>
			<span class={ style["home-title"] }>
				<i class={ style["_official"] }>
					{ IsStaging
						? <>Staging</>
						: <Locale k="COMMON_TITLE_SUB" />
					}
				</i>
				<Locale k={ IsAprilFool ? "CONSUMABLE_Consumable_TacticRecord_T3" : "COMMON_TITLE" } />
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

		{/* <div class="alert alert-warning">
			<p class="mb-1">Translation support needed!</p>
			<p class="mb-1">翻訳サポートがひつようです！</p>
			<p class="mb-0">
				<a href="https://docs.google.com/spreadsheets/d/1Q2tpfQntZxmI0Xbx9HZo0vjBY7kQGZGmH1MBGTzrnvo" target="_blank" rel="noreferrer">
					<Icon icon="link-45deg" class="me-1" />
					<span>Locale SpreadSheet</span>
				</a>
				<span class="px-2">|</span>
				<a href="https://docs.google.com/spreadsheets/d/1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00" target="_blank" rel="noreferrer">
					<Icon icon="link-45deg" class="me-1" />
					<span>Quotes SpreadSheet</span>
				</a>
			</p>
		</div>
		<hr /> */}

		<Locale k="HOME_DEVELOPER" />
		<hr />

		<p>
			<Locale k="HOME_COPYRIGHT" />
		</p>

		<div class="mt-4">
			<a href="https://www.buymeacoffee.com/wolfgangkurzdev" target="_blank">
				<img
					src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer &amp;emoji=🍺&amp;slug=wolfgangkurzdev&amp;button_colour=5F7FFF&amp;font_colour=ffffff&amp;font_family=Inter&amp;outline_colour=000000&amp;coffee_colour=FFDD00"
					style={ { height: "40px" } }
				/>
			</a>
		</div>
	</div>;
};

export default Home;
