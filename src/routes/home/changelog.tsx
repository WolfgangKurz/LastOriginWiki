import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13084" date="2026-02-22"
		bugfix={ <>
			<li><BY>스토리</BY>의 <BY>플레이어</BY>기능이 동작하지 않던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>
				<BY>세계정보</BY>의 진행중인 이벤트의 디자인을 약간 변경했습니다.
			</li>
		</> }
		site={ <>
			<li>
				<code>precat-router</code> + <code>preact-async-route</code> 라이브러리를 <code>preact-iso</code>로 교체했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 13081" date="2026-02-19"
		bugfix={ <>
			<li><BY>전투원정보</BY>의 <BY>상세검색</BY>의 <BG>버프 보유</BG> 선택 후 사이트가 동작하지 않던 점을 수정했습니다.</li>
			<li>일부 전투원 스킨의 작가 및 출시일 정보가 누락된 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13076" date="2026-02-18"
		bugfix={ <>
			<li><BY>시뮬레이터</BY>가 동작하지 않던 점을 수정했습니다.</li>
			<li><BY>적 정보</BY>에서 그룹화 된 적 팝업에서 첫번째 적의 출현 스테이지가 잘못 표시되던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>
				<BY>시뮬레이터</BY>에 원활한 공유를 위한 <BR>호감도 200</BR> 및 <BR>수복 필요</BR> 설정이 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 13071" date="2026-02-14"
		update={ <>
			<li>이벤트 <BY>당신의 쐐기에 진심을</BY>이 복각되었습니다.</li>
			<li>
				전투원 <BY>K180 셀주크</BY>, <BY>S5 기간테스</BY>, <BY>AT72 라인리터</BY>,
				<BY>Mr 알프레드</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>프리가</BY>의 스킨 <BR>Frigga with Hunny : 허니를 위한 홈웨어​</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>니드호그</BY>의 스킨 <BR>악룡 심판의 권위자 : 미드가르드 수호형 복원 모델</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-02-14 01:05:12</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
