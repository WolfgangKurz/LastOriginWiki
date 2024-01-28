import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12452" date="2024-01-28"
		update={ <>
			<li>전투원 및 장비 드랍처에 <BY>현재 이벤트</BY> 구분이 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12451" date="2024-01-28"
		update={ <>
			<li>전투원 및 장비 드랍처를 더 보기 쉽게 개선했습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>전투원정보</BY>의 <BY>스킨 보기</BY>에서 <BY>출시일</BY>이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12448" date="2024-01-25"
		bugfix={ <>
			<li>일부 지역의 세계정보가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12439" date="2024-01-25"
		new={ <>
			<li>신규 이벤트 <BY>우주에서 온 황금</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>파프니르</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>스텔러레이터</BY>의 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li>신규 스토리가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12425" date="2024-01-16"
		new={ <>
			<li>신규 장비<BY>강습형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>관측 장비 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>초정밀 조준기 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>망원 조준장치 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>니트로 SSS 3000</BY>의 정보가 추가되었습니다.</li>
			<li>신규 스토리가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>스토리 뷰어의 폰트 관련한 코드를 일부 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원의 얼굴이 올바르지 않게 표시되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12423" date="2024-01-15"
		bugfix={ <>
			<li>전투원 <BY>쿠노이치 엔라이</BY>의 외전 <BR>누군가의 손길이 닿아</BR>가 누락된 문제를 수정했습니다.</li>
			<li>전투원 <BY>생명의 세레스티아</BY>의 스킨 <BR>세레스티아 카우걸</BR>의 중파가 표시되지 않던 문제를 수정했습니다.</li>
			<li>
				전투원 <BY>프로스트 서펀트</BY>의 스킨 <BR>죽으나 사나 불조심</BR>의
				미검열 중파 다운로드가 소품 가리기에 영향이 없던 문제를 수정했습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일본어 소개 및 대사 보이스가 추가/갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12421" date="2024-01-10"
		update={ <>
			<li>가챠 시뮬레이터 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 스토리 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>일부 스킨의 가격 정보가 갱신되었습니다.</li>
			<li>
				<BY>AL레이스</BY>의 스킨 <BY>AL 큐트 : 레이스 화이트</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>프로스트 서펀트</BY>의 스킨 <BY>죽으나 사나 불조심</BY>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2024-01-10 03:38:33</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12418" date="2024-01-07"
		new={ <>
			<li>이벤트 <BY>당신의 쐐기에 진심을</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>FPS</BY>의 정보가 추가되었습니다.</li>
			<li>적 그룹 정보가 추가되었습니다.</li>
			<li>소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>가챠 시뮬레이터 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
