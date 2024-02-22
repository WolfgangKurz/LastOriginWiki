import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12530" date="2024-02-22"
		bugfix={ <>
			<li>
				사파리 브라우저에서 스킨 뷰어 및 스토리 플레이어의 Spine 애니메이션이 올바르게 표시되지 않는 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12522" date="2024-02-22"
		site={ <>
			<li>전투원 정보의 <BP>제조 시간</BP> 보기가 삭제되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 정보의 각종 탭/필터 버튼 및 전투원 검색 상자를 작은 화면 사이즈에서 사용하기 용이하도록 개선했습니다.</li>
			<li>전투원 상세 정보의 <BP>스킨 보기</BP> 탭의 아이콘이 변경되었습니다.</li>
			<li>
				전투원 정보의 <BP>목록 보기</BP>의 <BR>소속으로 묶기</BR> 기능이 다음과 같이 통합/개선되었습니다.
				<ol>
					<li>
						<BR>분류 안함</BR> : 소속으로 분류하지 않고 목록으로 표시합니다.
					</li>
					<li>
						<BR>평범하게 분류</BR> : 분리된 소속을 하나로 합쳐서 표시합니다.<br />
						기존의 <BR>소속으로 묶기</BR> + 개편 전의 <BR>세부 그룹 합치기</BR>와 같습니다.
					</li>
					<li>
						<BR>정확하게 분류</BR> : 분리된 소속을 합치지 않고 정확하게 표시합니다.<br />
						기존의 <BR>소속으로 묶기</BR>와 같습니다.
					</li>
				</ol>
			</li>
			<li>
				전투원 정보의 <BP>목록 보기</BP>에서 <BR>분류 안함</BR>이고 <BP>도감 번호순</BP> 정렬일 때,
				채워지지 않은 번호가 표시되도록 변경했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12520" date="2024-02-21"
		bugfix={ <>
			<li>일부 고 DPI 화면에서 스킨 뷰어 및 스토리 플레이어가 저해상도로 표시되는 문제를 수정했습니다.</li>
			<li>터치 환경에서 스킨 뷰어의 Spine 애니메이션 스킨이 터치되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12500" date="2024-02-21"
		knownissue={ <>
			<li>모바일 환경에서 스토리 플레이어의 텍스트가 제대로 표시되지 않는 문제가 확인되었습니다.</li>
		</> }
		bugfix={ <>
			<li>로비 애니메이션 표시를 해제한 스킨의 표시와 다운로드가 되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
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
