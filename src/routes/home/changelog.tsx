import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<li>
		일부 스토리 정보가 갱신되었습니다.<br />
		<div class="alert alert-danger">
			인게임 데이터에서 한국어를 제외한 언어 데이터가 삭제되었습니다.<br />
			본 사이트의 데이터는 인게임 데이터를 직접 추출하여 제공하고 있기 때문에,
			게임에서 다시 제공될 때 까지 비 한국어 스토리의 제공이 불가능합니다.
			<hr />
			Language data other than Korean has been removed from the in-game data.<br />
			Since this site provides data by directly extracting it from the in-game data,
			non-Korean stories cannot be provided until they are made available in the game again.
			<hr />
			ゲーム内データから韓国語以外の言語データが削除されました。<br />
			本サイトのデータはゲーム内データを直接抽出して提供しているため、
			ゲーム内で再び提供されるまで、韓国語以外のストーリーを提供することはできません。
			<hr />
			遊戲內資料中已刪除韓文以外的語言資料。<br />
			本站資料是直接擷取遊戲內資料後提供，
			因此在遊戲再次提供之前，無法提供非韓文的劇情內容。
		</div>
	</li>
</>;
export default Changelog;
