import { FunctionalComponent, h } from "preact";

import { AssetsRoot } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale from "@/components/locale";

import style from "./style.scss";

const BGM: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "라스트오리진(LastOrigin)에 사용된 BGM 목록과 플레이어입니다.");
	SetMeta("keywords", ",BGM,OST", true);
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle("BGM");

	const BGMList = [
		"Title", "Lobby",
		"Talk_01", "Talk_02", "Talk_03", "Talk_04", "Talk_05", "Talk_06", "Talk_07",
		"Thrill_01",
		"Battle_01", "Battle_02", "Battle_03", "Battle_04",
		"Battle_Boss_01", "Battle_Boss_02", "Battle_Boss_03",
		"IronPrince",
		"Marriage_01", "Marriage_02",
		"Summer_01", "Summer_02",
		"Christmas_01", "Christmas_02",
		"Forest_of_Elves",
		"Valentine",
		"Mystic", "Noire_01", "Noire_02",
	];

	return <div class="bgm">
		<div class="card">
			<div class="card-header">
				<Locale k="BGM_LIST" />
			</div>
			<div class="card-body">
				<table class={ `table table-bordered table-striped table-bgm ${style["table-bgm"]}` }>
					<thead>
						<tr>
							<th class="bg-dark text-light">
								<Locale k="BGM_NAME" />
							</th>
							<th class="bg-dark text-light">
								<Locale k="BGM_DESC" />
							</th>
							<th class="bg-dark text-light">
								<Locale k="BGM_PLAYER" />
							</th>
						</tr>
					</thead>
					<tbody>
						{ BGMList.map(id => <tr >
							<th>{ id }</th>
							<td><Locale k={ `BGM_DESC_${id}` } /></td>
							<td class={ `player-cell ${style["player-cell"]}` }>
								<audio src={ `${AssetsRoot}/audio/bgm/${id}.mp3` } type="audio/mp3" controls loop preload="none" />
							</td>
						</tr>) }
					</tbody>
				</table>
			</div>
		</div>
	</div>;
};
export default BGM;