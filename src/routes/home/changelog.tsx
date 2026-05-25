import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13153" date="2026-05-26"
		bugfix={ <>
			<li>전투원 <BY>시저스 리제</BY>의 스킬 정보 일부가 올바르지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13150" date="2026-05-22"
		bugfix={ <>
			<li>일부 전투원의 스킨에 장식품 숨기기가 표시되지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13148" date="2026-05-22"
		new={ <>
			<li>신규 전투원 <BY>암루의 사와메</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>휴대용 제구「이미아케」</BY>의 정보가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>두근두근 러브 스케쥴</BY>이 시작되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원 <BY>헤스티아</BY>의 스킬 설명이 누락된 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>암루의 사와메</BY>의 스킨 <BR>피안화가 피고 지는 학교 : 흑세라복</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>LRL</BY>의 스킨 <BR>아쿠아 랜드 물놀이의 사명 : 권속이 선물해준 수영복</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>살라시아</BY>의 스킨 <BR>Sexie Honey♡ : 흑의의 섹시 데빌 란제리</BR>이 잘못 표시되던 점을 수정했습니다.</li>
			<li>전투원 <BY>엠피트리테</BY>의 스킨 <BR>Cutie Honey♡ : 백의의 큐티 데빌 란제리</BR>이 잘못 표시되던 점을 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-05-22 06:13:19</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13143" date="2026-05-21"
		bugfix={ <>
			<li>
				전투원 <BY>익스프레스 76</BY>의 스킨 <BR>특급 배송 당일 출고 서비스 : 스키니 데이트 룩</BR>의
				로비 애니메이션이 재생되지 않는 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 13142" date="2026-05-20"
		update={ <>
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
		</> }
	/>
</>;
export default Changelog;
