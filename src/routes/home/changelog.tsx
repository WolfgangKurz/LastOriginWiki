import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12234" date="2023-07-23"
		new={ <>
			<li>
				실험 기능인 <BY>통합 효과명 미리보기</BY>가 추가되었습니다.<br />
				본 기능은 한국어 상태에서만 제공됩니다.<br />
				미리보기가 제공되는 효과는 다음과 같습니다.<br />
				<BG>공격 강화</BG>, <BG>공격 약화</BG>, <BG>방어 강화</BG>, <BG>방어 약화</BG>, <BG>적중 강화</BG>,
				<BG>적중 약화</BG>, <BG>회피 강화</BG>, <BG>회피 약화</BG>, <BG>치명 강화</BG>, <BG>치명 약화</BG>,
				<BG>치명타 강화</BG>, <BG>치명타 약화</BG>, <BG>차지</BG>, <BG>내열 강화</BG>, <BG>내열 약화</BG>,
				<BG>방한 강화</BG>, <BG>방한 약화</BG>, <BG>절연 강화</BG>, <BG>절연 약화</BG>, <BG>화염 반작용</BG>,
				<BG>냉기 반작용</BG>, <BG>전기 반작용</BG>, <BG>화염 적응</BG>, <BG>냉기 적응</BG>, <BG>전기 적응</BG>,
				<BG>행동 강화</BG>, <BG>행동 약화</BG>, <BG>가속</BG>, <BG>감속</BG>, <BG>침묵</BG>, <BG>행동 불가</BG>,
				<BG>신속</BG>, <BG>위력 강화</BG>, <BG>위력 약화</BG>, <BG>전략 수립</BG>, <BG>전략 방해</BG>, <BG>피해 감쇄</BG>,
				<BG>피해 증폭</BG>, <BG>회심</BG>, <BG>배수진</BG>, <BG>마무리</BG>, <BG>집속</BG>, <BG>산개</BG>,
				<BG>피해 흡수</BG>, <BG>도탄</BG>, <BG>철벽</BG>, <BG>열 보호</BG>, <BG>행 보호</BG>, <BG>지정 보호</BG>,
				<BG>우회</BG>, <BG>차폐</BG>, <BG>내성 강화</BG>, <BG>내성 약화</BG>, <BG>초 내성 강화</BG>, <BG>무장 해제</BG>,
				<BG>중화</BG>, <BG>봉쇄</BG>, <BG>돌파</BG>, <BG>예리</BG>, <BG>둔탁</BG>, <BG>관통 내성</BG>, <BG>손상</BG>,
				<BG>점화</BG>, <BG>동결</BG>, <BG>감전</BG>, <BG>도발</BG>, <BG>표식</BG>, <BG>이동 불가</BG>, <BG>공격 지원</BG>,
				<BG>역공</BG>, <BG>넉백</BG>, <BG>풀링</BG>, <BG>조준 보조</BG>, <BG>조준 방해</BG>, <BG>임시 복원</BG>,
				<BG>급속 복원</BG>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12230" date="2023-07-23"
		update={ <>
			<li>모든 적의 심리가 추가되었습니다.</li>
			<li>편의를 위해 <BO>영원의 전장</BO> 출처를 <BO>변화의 성소</BO>로 표기하도록 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>
				<BY>퀸오브메인</BY>의 스킨 <BR>물 만난 사자</BR> 및
				<BY>나스호른</BY>의 스킨 <BR>바다로의 행진</BR>의
				작가 정보 및 출시 일자가 누락된 점이 수정되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
