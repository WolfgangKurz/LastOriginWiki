import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12572" date="2024-03-30"
		new={ <>
			<li>신규 전투원 <BY>T-19 픽시</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스킨 뷰어에서 Spine 애니메이션 스킨의 터치 인식 영역이 올바르지 않던 문제를 수정했습니다.</li>
			<li>일부 스킨의 아티스트 정보가 누락된 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>T-75 워울프</BY>의 스킨 <BY>이 구역 큰언니 워울프</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-40 하이에나</BY>의 스킨 <BY>스트릿 라이터 하이에나</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>멀린</BY>의 스킨 <BY>음악회를 열다 : 멀린</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>신속의 칸</BY>의 스킨 <BY>불량 후배 칸</BY>의 중파 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-13 알비스</BY>의 스킨 <BY>드림위버 모던 컬렉션 : 초코가드</BY>의 Spine 애니메이션 정보가 추가되었습니다.
			</li>
			<li>
				<BY>포이</BY>의 스킨 <BY>수영복 콘테스트 : 포이는 물이 싫어</BY>의 Spine 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
