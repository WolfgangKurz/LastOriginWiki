import { FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";
import { route } from "preact-router";

import { World } from "@/types/DB/Map";

import { useLocale } from "@/libs/Locale";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import WorldItem from "../components/WorldItem";

import style from "./style.module.scss";

interface WORLDViewProps {
	wid: string;
}

const WORLDView: FunctionalComponent<WORLDViewProps> = (props) => {
	const [loc] = useLocale();
	const imgExt = ImageExtension();

	const ImagelessEv: string[] = [];

	const wid = props.wid;

	useEffect(() => {
		SetMeta(["description", "twitter:description"], `${loc[`WORLD_${wid}`]}의 구역 목록을 표시합니다. 구역의 지도 정보와 이야기를 선택하여 확인할 수 있습니다.`);
		SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${wid}_1.png`);
		SetMeta("keywords", `,${loc[`WORLD_${wid}`]}`, true);
		UpdateTitle(loc["MENU_WORLDS"], loc[`WORLD_${wid}`]);
	}, [wid]);

	const MapDB = useDBData<World>(`map/${wid}`);
	if (!MapDB) return <></>;

	const Worlds = Object.keys(MapDB);
	const evPost = wid === "Ev14" ? "a" : "";

	return <div class="worlds-world text-start">
		<div class="row">
			<div class="col-auto">
				<button class="btn btn-dark" onClick={ (): void => void (route("/worlds")) }>
					<Icons.ArrowLeft class="me-1" />
					<Locale k="WORLDS_BACK_TO_WORLDS" />
				</button>
			</div>
		</div>
		<hr />

		{ wid.startsWith("Ev") && !ImagelessEv.includes(wid)
			? <div class={ `mb-4 ${style.EventBanner}` }>
				<img src={ `${AssetsRoot}/${imgExt}/eventbanner/${wid}${evPost}_O.${imgExt}` } />
			</div>
			: <></>
		}

		<WorldItem wid={ wid } imageless center>
			<div class="mt-3 row row-cols-1 row-cols-lg-2 row-cols-xl-3 justify-content-center">
				{ Worlds.map((world, i) => <div class="col">
					<div class="card worlds-world text-center mb-2">
						<div class="card-body">
							<div class="row gx-0">
								<div class="col-12">
									<img class={ style.WorldIcon } src={ `${AssetsRoot}/world/icons/${wid}_${world}.png` } />
								</div>
								<div class="col">
									<div>
										<div class="worlds-world-number text-warning">
											<Locale k="WORLDS_WORLD_TITLE" p={ [i + 1] } />
										</div>
										<div class="worlds-world-name font-ibm">
											<Locale k={ `WORLD_WORLD_${wid}_${world}` } />
										</div>
									</div>

									<div class="btn-group mt-2">
										<button class="btn btn-warning" onClick={ (): void => void (route(`/worlds/${wid}/${world}`)) }>
											<Icons.Compass class="me-1" />
											<span class="d-inline-block">
												<Locale k="WORLDS_WORLD_MAP" />
											</span>
										</button>
										<button class="btn btn-primary" onClick={ (): void => void (route(`/worlds/${wid}/${world}/drop`)) }>
											<Icons.Table class="me-2" />
											<span class="d-inline-block">
												<Locale k="WORLDS_DROP_TABLE" />
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>) }
			</div>
		</WorldItem>
	</div>;

};
export default WORLDView;
