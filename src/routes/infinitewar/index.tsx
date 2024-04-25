import { FunctionalComponent } from "preact";
import { route } from "preact-router";

import { IWSeason } from "@/types/DB/IW";

import { BuildClass } from "@/libs/Class";
import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Locale from "@/components/locale";
import Loader, { GetJson, StaticDB } from "@/libs/Loader";

import style from "./style.module.scss";

const InfiniteWar: FunctionalComponent = () => {
	const imgExt = ImageExtension();

	return <div class={ style.IWPage }>
		<h1 class={ `font-ibm ${style.IWHead}` }>
			<Locale k="MENU_INFINITEWAR" />
		</h1>

		<Loader
			json={ StaticDB.IWSeason }
			content={ () => {
				const db = GetJson<IWSeason[]>(StaticDB.IWSeason)
					.sort((a, b) => Date.parse(b.date[0]) - Date.parse(a.date[0]));

				const now = new Date();
				const current = (() => {
					const list = db.filter(r => {
						const end = new Date(r.date[1]);
						return end > now; // not ended
					})
						.sort((a, b) => Date.parse(a.date[0]) - Date.parse(b.date[0])); // Sort by start date

					return list[0] || false;
				})();

				return <>
					<h2 class={ BuildClass(style.IWSubhead, "font-ibm") }>
						<Locale k="IW_IWCurrent" />
					</h2>
					<div class={ style.IWSeasons }>
						{ current
							? <div
								class={ style.IWSeason }
								onClick={ e => {
									e.preventDefault();
									route(`/infinitewar/${current.key}`);
								} }
							>
								<img class={ style.BG } src={ `${AssetsRoot}/${imgExt}/iw/${current.monster}.${imgExt}` } />
								<div class={ style.BGFade } />

								<div class={ style.Content }>
									<h3>
										<Locale plain k={ `IWSEASON_${current.key}_TITLE` } />
									</h3>
									<h4>
										<Locale plain k={ `IWSEASON_${current.key}_SUBTITLE` } />
										・
										<Locale plain k={ `IWSEASON_${current.key}_MOB` } />
									</h4>

									<div class={ BuildClass(style.Date, "font-exo2") }>
										<span>{ current.date[0] }</span>
										~
										<span>{ current.date[1] }</span>
									</div>
								</div>
							</div>
							: <div class={ style.IWSeasonEmpty }>
								<Locale k="IW_IWCurrentNone" />
							</div>
						}
					</div>

					<h2 class={ BuildClass(style.IWSubhead, "font-ibm") }>
						<Locale k="IW_IWList" />
					</h2>
					<div class={ style.IWSeasons }>
						{ db.map(season => {
							return <div
								class={ BuildClass(style.IWSeason, new Date(season.date[1]) < now && style.Ended) }
								onClick={ e => {
									e.preventDefault();
									route(`/infinitewar/${season.key}`);
								} }
							>
								<img class={ style.BG } src={ `${AssetsRoot}/${imgExt}/iw/${season.monster}.${imgExt}` } />
								<div class={ style.BGFade } />

								<div class={ style.Content }>
									<h3>
										<Locale plain k={ `IWSEASON_${season.key}_TITLE` } />
									</h3>
									<h4>
										<Locale plain k={ `IWSEASON_${season.key}_SUBTITLE` } />
										・
										<Locale plain k={ `IWSEASON_${season.key}_MOB` } />
									</h4>

									<div class={ BuildClass(style.Date, "font-exo2") }>
										<span>{ season.date[0] }</span>
										~
										<span>{ season.date[1] }</span>
									</div>
								</div>
							</div>;
						}) }
					</div>
				</>;
			} }
		/>
	</div>;
};
export default InfiniteWar;
