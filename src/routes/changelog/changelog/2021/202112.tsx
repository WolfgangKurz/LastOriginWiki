import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11446" date="2021-12-27"
		update={ <>
			<li>일부 적 정보가 갱신되었습니다.</li>
			<li>일부 지역 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">P-3M 운디네</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon : 천재 파티시에</span>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-27 11:53:07</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11443" date="2021-12-21"
		bugfix={ <>
			<li>일부 스킨 카테고리가 비정상적으로 표시되는 문제를 수정했습니다.</li>
			<li>전투 노드에서 적 목록을 선택 후 스토리 노드를 선택하면 페이지가 멎는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11440" date="2021-12-20"
		bugfix={ <>
			<li>일부 버프 조건이 표시되지 않던 점을 수정했습니다.</li>
			<li>전투원 검색 시 오류가 발생하여 페이지가 멎을 수 있던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 적 정보가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11433" date="2021-12-20"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">페레그리누스</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">핫팩</span>의 정보가 추가되었습니다.</li>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 지도가 새 형식으로 표시됩니다. (완전하지 않습니다)</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>에 <span class="badge bg-primary">스킨 보기</span>가 추가되었습니다.</li>
			<li>전투원의 스킨 정보 영역에 스킨 카테고리가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 스킨의 부가 정보가 인게임 스킨의 추가 요소에 맞게 변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-20S 노움</span>의 대사 음성 파일이 교체되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-20S 노움</span>의 스킨
				<span class="badge bg-danger">오르카 버니 : 완벽한 토끼</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">므네모시네</span>의 스킨
				<span class="badge bg-danger">fleurir en memoire</span>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-18 00:07:13</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11423" date="2021-12-14"
		update={ <>
			<li>같은 그룹으로 묶인 버프가 보기 쉽게 개선되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11421" date="2021-12-13"
		bugfix={ <>
			<li>일부 전투원의 승급 정보가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이제 전투원 목록의 승급 정보 표시가 최종 승급 등급만 표시됩니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11417" date="2021-12-13"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">C-33 안드바리</span> 2번 액티브 스킬
				<span class="badge bg-warning text-dark">아껴 써야 해요!</span>의 수치가 올바르지 않게 표시되는 문제를 수정했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">아르망 추기경</span> 2번 액티브 스킬
				<span class="badge bg-warning text-dark">기원</span>의 수치가 올바르지 않게 표시되는 문제를 수정하고 설명을 보충했습니다.
			</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 설명이 수정되었습니다.</li>
			<li>일부 적의 정보가 수정되었습니다.</li>
			<li>일부 적 그룹의 정보가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">변화의 성소</span> 제3작전구역의 일부 적 배치 정보가 수정되었습니다.</li>
		</> }
		delete={ <>
			<li><span class="badge bg-event-exchange-old">버프 추가 방식 표시</span>가 정확하지 않은 문제로 삭제되었습니다. 검증 이후 다시 추가될 예정입니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-12 칼리아흐 베라</span>의 스킨
				<span class="badge bg-danger">베라용 흡혈귀 복장</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">스파토이아</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">GS-10 샌드걸</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-12-13 12:00:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11413" date="2021-12-06"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">천아</span>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>장비 <span class="badge bg-warning text-dark">전장 리부트 시스템 알파</span>의 설명이 수정되었습니다.</li>
			<li>일부 적의 정보가 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-13 알비스</span>의 스킨
				<span class="badge bg-danger">드림위버 모던 컬렉션 : 초코가드</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">퀸오브메인</span>의 스킨
				<span class="badge bg-danger">드림위버 모던 컬렉션 : 단장한 야성</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">C-77 홍련</span>의 스킨
				<span class="badge bg-danger">애프터 웨딩 : 퇴근 뒤의 저녁식사</span>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-06 11:41:53</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11409" date="2021-12-05"
		new={ <>
			<li>전투원 정보의 <span class="badge bg-warning text-dark">링크/스킬</span>탭에 전투원 장비 순서 표시가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-05 23:22:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11406" date="2021-12-05"
		site={ <>
			<li>페이지 로드 과정을 조금 더 최적화했습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원의 무기 표기가 칸을 벗어나는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>모든 버프 표시에 <span class="badge bg-event-exchange-old">버프 추가 방식 표시</span>가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-05 00:04:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
