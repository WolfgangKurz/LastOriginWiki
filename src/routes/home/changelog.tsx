import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

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
</>;
export default Changelog;
