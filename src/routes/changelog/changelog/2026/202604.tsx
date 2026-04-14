import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13117" date="2026-04-15"
		site={ <>
			<li>
				모든 전투원의 스킬 설명이 이제 사이트에서 제공 중인 모든 언어로 지원됩니다.<br />
				이제 각 전투원의 스킬 정보를 한국어를 포함한 사이트 지원 언어로 확인하실 수 있습니다.<br />
				본 언어 지원은 한국어 데이터를 기반으로 AI 번역을 이용했습니다.
				<hr />
				Skill descriptions for all Units are now available in every language supported on the site.<br />
				You can now view each Unit’s skill information in all site-supported languages, including English.<br />
				Language support for this content was provided using AI translation based on Korean data.
				<hr />
				すべての戦闘員のスキル説明が、サイトで提供中のすべての対応言語で利用可能になりました。<br />
				これにより、各戦闘員のスキル情報をサイト対応言語で確認できます。<br />
				本言語サポートは、韓国語データを基にAI翻訳を利用しています。
				<hr />
				所有戰鬥員的技能說明現在已支援網站目前提供的所有語言。<br />
				您現在可以使用網站支援的各種語言查看每位戰鬥員的技能資訊。<br />
				本語言支援是以韓文資料為基礎，透過 AI 翻譯提供。
			</li>
			<li>Locale 파일 분리를 최적화했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13111" date="2026-04-11"
		new={ <>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li><BY>스킨 뷰어</BY>가 이제 두 종류의 소품 표시/비표시 기능을 지원합니다.</li>
		</> }
		bugfix={ <>
			<li><BY>스킨 뷰어</BY>에서 <BR>Download+</BR>로 다운로드 받을 경우, 해상도가 낮던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>오르카의 신부</BY>가 종료되었습니다.</li>
			<li>이벤트 <BY>우주에서 온 황금</BY> 복각이 시작되었습니다.</li>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>X-00 티아멧</BY>의 스킨 <BR>Pure Seduction : 하늘하늘 란제리</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>프랭스터 머큐리</BY>의 스킨 <BR>Pure Seduction : 반짝반짝 슬립웨어</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-04-11 01:00:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
