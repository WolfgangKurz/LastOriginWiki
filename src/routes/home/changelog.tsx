import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
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
	<ChangelogItem title="Build 13044" date="2025-12-22"
		new={ <>
			<li>신규 전투원 <BY>이미르</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>레트로 언어 모듈</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>드리아드</BY>의 스킨 <BR>대지의 풍요 : 디른들</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>이미르</BY>의 스킨 <BR>레트로 엔지니어 : 스팀펑크 모델</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-12-21 20:37:35</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
