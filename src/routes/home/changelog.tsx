import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12962" date="2025-05-23"
		new={ <>
			<li>신규 전투원 <BY>쿠노이치 시덴</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 스킬의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>총력전 정보가 갱신되었습니다.</li>
			<li>이벤트 <BY>연꽃 위에 피는 장미</BY>가 상시 이벤트로 변경되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>뮤즈</BY>의 스킨 <BR>오르카 바니 : encore!☆바니걸 의상</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>에라토</BY>의 스킨 <BR>오르카 바니 : onlyfanz♡</BR>의 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>쿠노이치 시덴</BY>의 스킨 <BR>단골 손님, 당신의 시간을 내가 사겠어요 : 호화로운 기모노</BR>의 정보가 추가되었습니다.</li>
		</> }
		site={ <>
			<li>
				<BY>세계정보</BY> 페이지의 <BG>상시 이벤트</BG> 항목과 <BG>외전・외부 통신 요청・일일 훈련</BG> 항목의 순서를 변경했습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-05-23 05:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
