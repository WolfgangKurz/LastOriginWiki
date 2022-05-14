import { FunctionalComponent } from "preact";
import { Link, route } from "preact-router";

import { World } from "@/types/DB/Map";

import { AssetsRoot } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import WorldItem from "../components/world-item";

import "./style.module.scss";

interface WORLDViewProps {
	wid: string;
}

const WORLDView: FunctionalComponent<WORLDViewProps> = (props) => {
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

		return <div class="worlds-world text-start">
			<div class="row">
				<div class="col-auto">
					<button class="btn btn-dark" onClick={ (): void => void (route("/worlds")) }>
						<Icon icon="arrow-left" class="me-1" />
						<Locale k="WORLDS_BACK_TO_WORLDS" />
					</button>
				</div>
			</div>
			<hr />

			<WorldItem wid={ props.wid } />

			<div class={ `row justify-content-center ${rows}` }>
				{ Worlds.map((world, i) => <div class="col">
					<div class="card worlds-world text-center mt-4 bg-dark text-light">
						<div class="card-body">
							<img src={ `${AssetsRoot}/world/icons/${props.wid}_${world}.png` } />
							<div class="worlds-world-number text-warning">
								<Locale k="WORLDS_WORLD_TITLE" p={ [i + 1] } />
							</div>
							<div class="worlds-world-name font-ibm">
								<Locale k={ `WORLD_WORLD_${props.wid}_${world}` } />
							</div>

							<div class="btn-group mt-2">
								<button class="btn btn-warning" onClick={ (): void => void (route(`/worlds/${props.wid}/${world}`)) }>
									<Icon icon="compass" class="me-1" />
									<Locale k="WORLDS_WORLD_MAP" />
								</button>
								{ nonStory
									? <></>
									: <button class="btn btn-light" disabled>
										{/* onClick={ (): void => void (route(`/story/${props.wid}/${world}`)) } */ }
										<Icon icon="chat-left-quote" class="me-1" />
										<Locale k="WORLDS_WORLD_STORY" />
									</button>
								}
							</div>
							<div class="btn-group mt-1">
								<button class="btn btn-success" onClick={ (): void => void (route(`/worlds/${props.wid}/${world}/drop`)) }>
									<Icon icon="table" class="me-2" />
									<Locale k="WORLDS_DROP_TABLE" />
								</button>
							</div>
						</div>
					</div>
				</div>) }
			</div>
		</div>;
	}) } />;
};
export default WORLDView;
