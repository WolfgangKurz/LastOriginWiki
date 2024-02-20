import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12493" date="2024-02-21"
		new={ <>
			<li>이벤트 <BY>우주에서 온 황금</BY>의 3부 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>구속용 초커</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 <BY>바닐라 A1</BY>의 승급 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>바닐라 A1</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>천향의 히루메</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>블랙 웜 S9</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>세라피아스 앨리스</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>
				전투원의 Spine 애니메이션의 터치 기능이 이제 실제 터치 영역에 반응하도록 개선되었습니다.<br />
				기존 터치 위치 변경 기능은 터치 영역 표시 기능으로 변경되었습니다.
			</li>
			<li>스토리 플레이어의 탭의 사용 경험이 개선되었습니다.</li>
		</> }
		knownissue={ <>
			<li>스토리 플레이어에서 일부 끝 글자가 잘리는 현상이 확인되었습니다.</li>
			<li>
				전투원 <BY>바바리아나</BY>의 스킨 <BR>드림위버 모던 컬렉션 : 세련된 유혹</BR>의
				Spine 애니메이션이 정상적으로 동작하지 않는 점이 확인되었습니다.
			</li>
		</> }
		bugfix={ <>
			<li>전투원의 Spine 애니메이션이 상하 반전되어 표시되는 문제를 수정했습니다.</li>
			<li>스토리 플레이어에서 동일한 일러스트가 동시에 표시되는 경우 동작하지 않는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>화롯가의 포티아</BY>의 스킨 <BY>사령관님 전용 디저트</BY>의 중파 정보가 추가되었습니다.
			</li>
			<li>
				<BY>포츈</BY>의 스킨 <BY>누나 오늘 휴가거든?</BY>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
