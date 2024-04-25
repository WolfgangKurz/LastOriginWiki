import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

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
	<ChangelogItem title="Build 12570" date="2024-03-27"
		update={ <>
			<li>
				<BY>전투원정보</BY>의 <BP>스킨 보기</BP>의 <BG>상세 검색</BG>을 개편했습니다.<br />
				또, 기본 스킨의 <BB>중파 이미지</BB> 필터가 작동하도록 수정했습니다.
			</li>
		</> }
		bugfix={ <>
			<li>
				<BY>C-11 스카라비아</BY>의 스킨 <BY>잠자는 보건실의 보건위원</BY>의 출시일 정보가 누락된 점을 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12564" date="2024-03-24"
		bugfix={ <>
			<li>일부 이미지 및 오디오가 표시/재생되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12563" date="2024-03-20"
		new={ <>
			<li>신규 장식품의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>C-11 스카라비아</BY>의 스킨 <BY>잠자는 보건실의 보건위원</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-03-20 03:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12565" date="2024-03-17"
		bugfix={ <>
			<li>전투원의 스킬 정보에서 풀링크 보너스가 스킬 설명에 반영되지 않는 점을 수정했습니다.</li>
			<li>전투원의 스킨 뷰어에서 일부 항목의 회전이 잘못 적용된 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12562" date="2024-03-14"
		update={ <>
			<li>이벤트 <BY>우주에서 온 황금</BY>이 종료되었습니다.</li>
			<li>이벤트 <BY>분노의 늑대 송곳니</BY> 복각이 시작되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>장화</BY>의 스킨 <BY>여제의 골칫거리 장화</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천아</BY>의 스킨 <BY>여제의 골칫거리 천아</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>GS-130 피닉스</BY>의 스킨 <BY>오르카 사략해적 피닉스</BY>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-03-14 20:48:19</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12559" date="2024-03-09"
		bugfix={ <>
			<li>전투원 <BY>T-75 워울프</BY>의 스킬 정보가 잘못 입력된 문제를 수정했습니다.</li>
			<li>이벤트 종료 시간을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12557" date="2024-03-03"
		bugfix={ <>
			<li>스토리 플레이어에서 텍스트가 줄바꿈되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12555" date="2024-03-03"
		update={ <>
			<li>스토리 플레이어의 폰트 렌더링을 개선했습니다.</li>
			<li>스킨 뷰어에서 확대/축소 시 흐리게 보이는 처리를 기존 방식으로 변경했습니다. (밉맵 기능을 껐습니다.)</li>
		</> }
	/>
	<ChangelogItem title="Build 12547" date="2024-03-01"
		bugfix={ <>
			<li>전투원 <BY>니드호그</BY>의 상세 정보 페이지가 열리지 않는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
