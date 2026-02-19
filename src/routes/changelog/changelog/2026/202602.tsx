import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
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
	<ChangelogItem title="Build 13068" date="2026-02-08"
		dialogue={ <>
			<li>누락된 일본어 보이스가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13067" date="2026-02-02"
		new={ <>
			<li>이벤트 <BY>별의 무대</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>신속의 칸</BY>의 스킨 <BR>미스 오르카 : Crush On You</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>레모네이드 엡실론</BY>의 스킨 <BR>미스 오르카 : Your Universe, My Space</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>레모네이드 감마</BY>의 스킨 <BR>미스 오르카 : CAFÉ Poseidon 독점 메뉴</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-02-02 00:11:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
		site={ <>
			<li>웹사이트 코드 일부 수정</li>
		</> }
	/>
</>;
export default Changelog;
