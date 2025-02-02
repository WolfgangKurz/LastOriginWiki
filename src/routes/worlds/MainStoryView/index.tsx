import { FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";
import { route } from "preact-router";

import { Maps } from "@/types/DB/Map";

import { useLocale } from "@/libs/Locale";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { cn } from "@/libs/Class";

import { StaticDB, useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import WorldItem from "../components/WorldItem";

import style from "./style.module.scss";
import Button from "@/components/Button";

interface WORLDViewProps {
	wid: string;
}

const MainStoryView: FunctionalComponent<WORLDViewProps> = (props) => {
	const [loc] = useLocale();
	const imgExt = ImageExtension();

	useEffect(() => {
		SetMeta(["description", "twitter:description"], "서브스토리 목록을 표시합니다. 이야기를 선택하여 확인할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/Story_1.png`);
		SetMeta("keywords", `${loc["WORLD_Story"]}`, true);
		UpdateTitle(loc["MENU_WORLDS"], loc["WORLD_Story"]);
	}, []);

	const MapsDB = useDBData<Maps>(StaticDB.Maps);
	if (!MapsDB) return <></>;

	const Worlds = Object.keys(MapsDB)
		.filter(x => /^[0-9]+$/.test(x));

	return <div class={ style.MainStory }>
		<div class={ style.PageHeader }>
			<Button variant="dark" onClick={ () => void (route("/worlds")) }>
				<Icons.ArrowLeft class="me-1" />
				<Locale k="WORLDS_BACK_TO_WORLDS" />
			</Button>
		</div>

		<hr />

		<WorldItem wid="Story" imageless center>
			<div class={ style.MainStoryGrid }>
				{ Worlds.map((world, i) => <div class="col">
					<div class={ style.StoryWorld }>
						<img class={ style.MapBack } src={ `${AssetsRoot}/${imgExt}/mapback/${world}.${imgExt}` } />

						<div class={ style.Body }>
							<div>
								<div>
									<div class={ cn(style.WorldNumber, "text-warning") }>
										<Locale k="WORLDS_WORLD_TITLE" p={ [i + 1] } />
									</div>
									<div class={ cn(style.WorldName, "font-ibm") }>
										<Locale k={ `WORLD_WORLD_${world}_1` } />
									</div>
								</div>

								<Button.Group class={ style.WorldButtons }>
									<Button variant="warning" textVariant="dark" onClick={ () => route(`/worlds/${world}/1`) }>
										<Icons.Compass class="me-1" />
										<span class="d-inline-block">
											<Locale k="WORLDS_WORLD_MAP" />
										</span>
									</Button>
									<Button variant="primary" onClick={ () => route(`/worlds/${world}/1/drop`) }>
										<Icons.Table class="me-2" />
										<span class="d-inline-block">
											<Locale k="WORLDS_DROP_TABLE" />
										</span>
									</Button>
								</Button.Group>
							</div>
						</div>
					</div>
				</div>) }
			</div>
		</WorldItem>
	</div>;

};
export default MainStoryView;
