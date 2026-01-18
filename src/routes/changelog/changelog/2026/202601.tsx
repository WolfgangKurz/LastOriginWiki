import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13055" date="2026-01-19"
		new={ <>
			<li>신규 전투원 <BY>라일라 클라우디</BY>의 정보가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>별의 무대</BY>의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>코코 인 화이트셸</BY>의 스킨 <BR>STAR CHILD : 별의 수호자 스페이스 슈트</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>라일라 클라우디</BY>의 스킨 <BR>당신의 운명을 점쳐볼까요?​ : 운명을 바꾸는 무희의 옷​</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-01-19 02:13:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13048" date="2026-01-06"
		bugfix={ <>
			<li>일부 전투원의 스킨 배너가 누락된 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13047" date="2026-01-03"
		new={ <>
			<li>이벤트 <BY>오르카 크리스마스 엑스포</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		knownissue={ <>
			<li>일부 전투원의 대사 정보가 잘못 갱신되었습니다. (인게임에서 잘못되어 있습니다.)</li>
		</> }
		update={ <>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>S7 데스스토커</BY>의 스킨 <BR>언더그라운드 리버 메탈​ : 강화 전투 모델</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-01-03 19:51:55</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
