import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12905" date="2025-02-28"
		bugfix={ <>
			<li>전투원 기본 정보에서 호감도 아이콘이 작게 표시되던 점을 수정했습니다.</li>
			<li>서약 가능 AGS 전투원의 호감도 정보가 표시되지 않던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <BY>칼립소</BY>의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>칼립소</BY>의 스킨 <BR>남국의 수국 : 아오자이</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>아크로바틱 써니</BY>의 스킨 <BR>외줄 위의 천사</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-02-28 02:07:06</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12903" date="2025-02-14"
		bugfix={ <>
			<li>이벤트 <BY>오르카 AGS여 단결하라!</BY>의 기간이 연장된 것이 반영되지 않았던 점을 수정했습니다.</li>
			<li>이벤트 <BY>누군가 바랐던 소원</BY>이 상시 이벤트로 분류되지 않던 점을 수정했습니다.</li>
			<li>메인스토리 13지역 3구역의 지도가 잘못 표시되던 점을 수정했습니다.</li>
		</> }
	/>
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
			<li>일부 장비의 정보가 갱신되었습니다.</li>
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
	<ChangelogItem title="Build 12893" date="2025-02-02"
		bugfix={ <>
			<li><BY>세계정보</BY> 페이지가 표시되지 않던 문제를 수정했습니다.</li>
			<li><BY>Changelog</BY> 페이지지가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12891" date="2025-02-02"
		bugfix={ <>
			<li>전투원 <BY>T-10 님프</BY>의 스킬 정보가 잘못된 점을 수정했습니다. (패시브 1)</li>
		</> }
		site={ <>
			<li>삭제했던 구 로비 애니메이션 스킨의 다운로드 버튼을 되돌렸습니다.</li>
			<li>
				스킨 뷰어의 "상세 보기" 팝업을 삭제했습니다.<br />
				해당 기능은 간소화 상태와 상세 보기 상태가 제공하는 기능이 동일하여 삭제되었습니다.<br />
				로비 애니메이션 표시 옵션은 뷰어 옆/상단으로 이동되었습니다.
			</li>
			<li>일부 코드 정리</li>
		</> }
	/>
</>;
export default Changelog;
