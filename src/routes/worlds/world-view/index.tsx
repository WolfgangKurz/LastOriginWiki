import { FunctionalComponent } from "preact";
import { Link, route } from "preact-router";

import { World } from "@/types/DB/Map";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconArrowLeft from "@/components/bootstrap-icon/icons/ArrowLeft";
import IconCompass from "@/components/bootstrap-icon/icons/Compass";
import IconTable from "@/components/bootstrap-icon/icons/Table";
import IconChatLeftQuote from "@/components/bootstrap-icon/icons/ChatLeftQuote";
import WorldItem from "../components/world-item";

import style from "./style.module.scss";

interface WORLDViewProps {
	wid: string;
}

const WORLDView: FunctionalComponent<WORLDViewProps> = (props) => {
	const imgExt = ImageExtension();

	const ImagelessEv: string[] = [];

	SetMeta(["description", "twitter:description"], `${LocaleGet(`WORLD_${props.wid}`)}의 구역 목록을 표시합니다. 구역의 지도 정보와 이야기를 선택하여 확인할 수 있습니다.`);
	SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${props.wid}_1.png`);
	SetMeta("keywords", `,${LocaleGet(`WORLD_${props.wid}`)}`, true);
	UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${props.wid}`));

	return <Loader json={ `map/${props.wid}` } content={ ((): preact.VNode => {
		// const nonStory = ["Sub", "Cha", "Daily"].includes(props.wid);
		const nonStory = true;

		const MapDB = GetJson<World>(`map/${props.wid}`);
		const Worlds = Object.keys(MapDB);

		const rows = nonStory
			? "row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
			: "row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4";

		const evPost = props.wid === "Ev14"
			? "a"
			: "";

		return <div class="worlds-world text-start">
			<div class="row">
				<div class="col-auto">
					<button class="btn btn-dark" onClick={ (): void => void (route("/worlds")) }>
						<IconArrowLeft class="me-1" />
						<Locale k="WORLDS_BACK_TO_WORLDS" />
					</button>
				</div>
			</div>
			<hr />

			{ props.wid.startsWith("Ev") && !ImagelessEv.includes(props.wid)
				? <div class={ `mb-4 ${style.EventBanner}` }>
					<img src={ `${AssetsRoot}/${imgExt}/eventbanner/${props.wid}${evPost}_O.${imgExt}` } />
				</div>
				: <></>
			}

			<WorldItem wid={ props.wid } imageless center>
				<div class="mt-3 row row-cols-1 row-cols-lg-2 row-cols-xl-3 justify-content-center">
					{ Worlds.map((world, i) => <div class="col">
						<div class={ `card worlds-world text-center mb-2 ${props.wid === "Story" ? style.StoryWorld : ""}` }>
							{ props.wid === "Story"
								? <img class={ style.MapBack } src={ `${AssetsRoot}/${imgExt}/mapback/${props.wid}_${world}.${imgExt}` } />
								: <></>
							}

							<div class="card-body">
								<div class="row gx-0">
									<div class="col-auto me-3">
										<img src={ `${AssetsRoot}/world/icons/${props.wid}_${world}.png` } />
									</div>
									<div class="col">
										<div>
											<div class="worlds-world-number text-warning">
												<Locale k="WORLDS_WORLD_TITLE" p={ [i + 1] } />
											</div>
											<div class="worlds-world-name font-ibm">
												<Locale k={ `WORLD_WORLD_${props.wid}_${world}` } />
											</div>
										</div>

										<div class="btn-group mt-2">
											<button class="btn btn-warning" onClick={ (): void => void (route(`/worlds/${props.wid}/${world}`)) }>
												<IconCompass class="me-1" />
												<span class="d-inline-block">
													<Locale k="WORLDS_WORLD_MAP" />
												</span>
											</button>
											<button class="btn btn-primary" onClick={ (): void => void (route(`/worlds/${props.wid}/${world}/drop`)) }>
												<IconTable class="me-2" />
												<span class="d-inline-block">
													<Locale k="WORLDS_DROP_TABLE" />
												</span>
											</button>
											{ nonStory
												? <></>
												: <button class="btn btn-light" disabled>
													{/* onClick={ (): void => void (route(`/story/${props.wid}/${world}`)) } */ }
													<IconChatLeftQuote class="me-1" />
													<span class="d-inline-block">
														<Locale k="WORLDS_WORLD_STORY" />
													</span>
												</button>
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>) }
				</div>
			</WorldItem>
		</div>;
	}) } />;
};
export default WORLDView;
