import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12401" date="2023-12-13"
		new={ <>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>M2187 와이어트 스페셜</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>야전용 위장 침낭</BY>의 정보가 추가되었습니다.</li>
			<li>신규 지역 <BY>메인스토리 12지역 3챕터</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>적 행동의 <BY>X 버프가 총 N 있는가?</BY> 조건의 표시가 올바르지 않던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>적 행동의 버프명 표시에 버프의 번호가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>쿠노이치 엔라이</BY>의 스킨 <BR>미스오르카 : 누군가의 손길이 닿아</BR>의 중파 이미지가 수정되었습니다.
			</li>
			<li>
				<BY>A-15 샐러맨더</BY>의 스킨 <BR>요주의! 샐러맨더</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>신속의 칸</BY>의 스킨 <BR>불량 학생 칸</BR>의 이름이 <BR>불량 후배 칸</BR>으로 변경되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12399" date="2023-12-07"
		bugfix={ <>
			<li>전투원 및 장비의 획득처에 클리어 보상이 누락된 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12398" date="2023-12-07"
		new={ <>
			<li>신규 배경 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 12지역 스토리가 갱신되었습니다.</li>
			<li>일부 전투원의 드랍처 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>쿠노이치 엔라이</BY>의 스킨 <BR>미스오르카 : 누군가의 손길이 닿아</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>신속의 칸</BY>의 스킨 <BR>불량 학생 칸</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12394" date="2023-12-03"
		bugfix={ <>
			<li>12지역이 출처인 전투원, 장비, 적 표시가 올바르지 않던 점을 수정했습니다.</li>
			<li>일일 훈련이 출처인 적 표시가 올바르지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12390" date="2023-12-02"
		update={ <>
			<li>버프보기에서 일부 이름이 존재하지 않는 버프에 대해 판별할 수 있도록 모든 버프에 번호 및 이름을 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12387" date="2023-12-02"
		update={ <>
			<li>일부 전투원의 스킬의 플레이버 텍스트가 추가/갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12386" date="2023-12-01"
		bugfix={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킬 정보가 입력되지 않은 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
