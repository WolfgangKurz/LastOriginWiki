import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12898" date="2025-02-14"
		bugfix={ <>
			<li>스킨 뷰어에서 <BY>로비 애니메이션</BY>을 꺼도 애니메이션이 표시되던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 장비 <BY>BR 아드레날린 회로</BY>의 정보가 추가되었습니다.</li>
			<li>메인스토리 13지역 3구역 정보가 추가되었습니다.</li>
			<li><BY>전투원정보</BY>의 전투원 기본 정보에 <BR>서약 가능 여부</BR> 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 장비비의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>에이다 Type-G</BY>의 스킨 <BR>문명 재건 사업: 자가 업데이트 커스텀 팩</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-02-14 00:19:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
		site={ <>
			<li>사이트 내 일부 CSS 스타일이 잘못 적용된 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12896" date="2025-02-13"
		bugfix={ <>
			<li>
				스킨 뷰어에서 <BY>로비 애니메이션</BY>을 끈 상태로 구 로비 애니메이션 스킨을 다운로드 받을 때,
				정지 이미지가 아닌 영상이 다운로드 되던 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12895" date="2025-02-02"
		dialogue={ <>
			<li>누락된 일본어 음성이 추가되었습니다.</li>
			<li>일본어 음성을 <BY>日本語 R</BY>을 기준으로 통합하였습니다.</li>
		</> }
	/>
</>;
export default Changelog;
