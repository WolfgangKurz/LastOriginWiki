import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 7835" date="2021-01-26"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">적 정보</span>에서 SS급 미만의 일부 적에게 사용되지 않는 패시브 스킬이 표시되는 문제를 수정했습니다.</li>
			<li>
				외부 통신 요청 <span class="badge bg-substory">레모네이드 VR</span>의 난이도가
				<span class="badge bg-substory">등장 스테이지</span> 및 <span class="badge bg-substory">획득처</span>에 표시될 때
				<span class="badge bg-dark">NORMAL</span>/<span class="badge bg-dark">HARD</span>/
				<span class="badge bg-dark">VERY HARD</span>/<span class="badge bg-dark">EXETREAM</span>으로 표시되는 문제를 수정했습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 7827" date="2021-01-26"
		bugfix={ <>
			<li>일부 적의 정보가 올바르게 갱신되지 않은 점을 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">세계 정보</span>의 적을 선택했을 때, 팝업이 아닌
				<span class="badge bg-warning text-dark">적 정보</span>메뉴로 이동하던 점을 수정했습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 7823" date="2021-01-25"
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">적 정보</span> 팝업에 <span class="badge bg-danger">행동 패턴</span> 탭이 추가되었습니다.<br />
				검수를 하지 않은 초벌 상태의 데이터이므로, 완전히 신뢰하지는 말아주시기 바랍니다.
			</li>
			<li>신규 외부 통신 요청 <span class="badge bg-substory">레모네이드 VR</span>이 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">소완</span>의 2번째 액티브 <span class="badge bg-substory">게이트 오브 키친</span>의 내용이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">랜서 미나</span>의 1번째 패시브 <span class="badge bg-substory">뱅가드</span>의 내용이 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">T-75 워울프</span>의 대사가 누락되어있던 점을 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7812" date="2021-01-22"
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span> 메뉴에 스킬 유형 필터가 추가되었습니다.<br />
				지정할 수 있는 유형은 <span class="badge bg-danger">그리드 지정</span> 여부와 <span class="badge bg-primary">보호 무시</span> 여부입니다.
			</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span> 메뉴의 스킬 속성 필터가 스킬별 필터로 분리되었습니다.<br />
				각 스킬의 필터는 형태 변환 이후의 스킬도 포함합니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 7807" date="2021-01-18"
		bugfix={ <>
			<li>전투원 유형 아이콘이 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">소완</span>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">드라큐리나</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-substory">낙원으로부터 온 초대장 3부</span> 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">소완</span>의 <span class="badge bg-danger">일일천추, 당신을 위한 미식</span> 스킨 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">무적의 용</span>의 <span class="badge bg-danger">세일러 용</span> 스킨 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">랜서 미나</span>의 <span class="badge bg-danger">천상의 기사 미나</span> 스킨 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">쿠노이치 카엔</span>의 <span class="badge bg-danger">두송이 꽃</span> 스킨의 중파 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7801" date="2021-01-17"
		bugfix={ <>
			<li>전투원의 스테이터스 계산기에서 전투원 등급의 초기값이 비정상적인 문제를 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7786" date="2021-01-15"
		bugfix={ <>
			<li>전투원정보의 테이블 보기에서 승급 필터가 작동하지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>전투원 기본 정보에 전투원 아이콘 및 SD 아이콘이 추가되었습니다.</li>
			<li>경험치 계산기에 시설 보너스 입력이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>2021년 01월 교환소 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7742" date="2021-01-15"
		bugfix={ <>
			<li>전투원 페이지에서 전용 장비가 없어도 표시되던 점을 수정했습니다.</li>
			<li>전투원의 스테이터스 계산기에서 장비가 장착되지 않던 점을 수정했습니다.</li>
			<li>장비의 등급을 변경해도 버프 목록이 변경되지 않던 점을 수정했습니다.</li>
			<li>적중 버프가 명중률로 표기되던 점을 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7737" date="2021-01-14"
		site={ <>
			<li>전투원, 장비, 적의 DB 구조를 개편했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7678" date="2021-01-12"
		site={ <>
			<li>대사 오디오 파일의 확장자를 mp3로 변경했습니다.</li>
			<li>BGM 오디오 파일의 확장자를 mp3로 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-dark">Build 7660</span> 이후 중장형 전투원과 기동형 전투원의 출격 비용이 뒤바뀌어있던 문제를 수정했습니다.</li>
			<li>일부 장비의 획득처 정보가 제대로 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7673" date="2021-01-11"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">A-14B 스프리건</span>의 1번째 패시브 <span class="badge bg-substory">루머 콜렉터</span>의 설명이
				이전 업데이트 내용으로 반영되지 않았던 점을 수정했습니다.
			</li>
		</> }
		new={ <>
			<li>새로운 적 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">마키나</span>의 2번째 액티브 <span class="badge bg-substory">관중 소환</span>의
				사거리 및 고정 범위 여부가 변경된 점을 반영했습니다.
			</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">낙원으로부터 온 초대장</span>의 <span class="badge bg-warning text-dark">Ev2-3</span> 및
				<span class="badge bg-warning text-dark">Ev2-4</span>의 탐색 정보가 갱신되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">로열 아스널</span>의 <span class="badge bg-danger">드림위버 웨딩 스페셜 : 이 마음을 그대에게</span>의
				로비 애니메이션 여부 및 가격 정보가 갱신되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 7662" date="2021-01-09"
		bugfix={ <>
			<li>전투원정보의 스테이터스에서 장착 제한이 있는 장비가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7660" date="2021-01-09"
		site={ <>
			<li>일부 DB를 비동기 처리했습니다.</li>
			<li>전투원 출격 비용 DB를 메인 스크립트와 통합했습니다.</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-substory">레나 더 챔피언</span>의 1번째 패시브 <span class="badge bg-substory">태그팀</span>의 버프 수치가 잘못된 점을 수정했습니다.</li>
			<li>전투원 스킬 정보의 스킬 속성 아이콘이 약간 왼쪽으로 치우친 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>
				전투원 대사에 일본 서버 대사 정보가 추가되었습니다.<br />
				일본 서버 대사 및 오디오는 비정기적으로 갱신됩니다.<br />
				그렇습니다. 생각나면 갱신합니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 7652" date="2021-01-07"
		bugfix={ <>
			<li>전투원 스테이터스 계산기에서 전투원의 전용장비를 선택할 수 없는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>장비의 스테이터스 상승 수치를 강화 포인트로 환산한 수치 표시를 추가했습니다.</li>
		</> }
		update={ <>
			<li>전투원 경험치 계산기를 재개장했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7638" date="2021-01-06"
		site={ <>
			<li>일부 DB를 비동기 처리했습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 지역의 웨이브 정보가 잘못 표시되던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>여러 종류의 적 배치가 나타날 수 있는 지역의 모든 적 배치를 볼 수 있도록 웨이브 내 적 배치 번호를 추가했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7623" date="2021-01-05"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">A-15 샐러맨더</span>의 요소 숨김 일러스트가 표시되지 않던 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>의 <span class="badge bg-warning text-dark">드랍 정보</span>에서
				획득 가능 물품이 올바르지 않게 정렬되어있던 문제를 수정했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">교환소</span>에서 <span class="badge bg-substory">장비 연구실 시설품</span>이 표시되지 않던 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">교환소</span>에서 <span class="badge bg-substory">소형 배터리 팩</span>,
				<span class="badge bg-substory">중형 배터리 팩</span> 이미지가 표시되지 않던 문제를 수정했습니다.
			</li>
		</> }
		new={ <>
			<li>
				전투원 스킬 정보에 스킬 위력 증가치 뱃지를 추가했습니다.<br />
				스킬 위력 증가치 뱃지는 <small><span class="badge bg-success">▲ 0.2</span></small>와 같이 표시됩니다.
			</li>
		</> }
		update={ <>
			<li>전투원 스킬 정보의 버프/디버프가 아닌 수치의 색상을 <span class="badge bg-success">녹색</span>으로 변경했습니다.</li>
			<li>전투원 정보의 링크 보너스 선택 인터페이스를 드롭다운에서 버튼으로 변경했습니다.</li>
			<li>적 정보 팝업의 데스크탑 사이즈 UI를 개선했습니다.</li>
		</> }
		dialogue={ <>
			<li>토미 워커의 대사가 누락되어있던 점을 수정했습니다.</li>
			<li>전투원의 액티브 스킬 일부가 누락된 점을 수정했습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-01-05 01:06:33</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
			<li>🎉 모든 전투원의 대사가 추가되었습니다. 🎉</li>
			<li>전투원의 대사 오디오 태그의 Preload 기능을 제거했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7608" date="2021-01-04"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">마키나</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">A-15 샐러맨더</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">낙원으로부터 온 초대장</span> 2부 세계 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>일부 전투원 스킨의 가격이 누락되어있던 점을 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">자비로운 리앤</span>의 스킨 <span class="badge bg-danger">데이트 복장</span>의 중파 일러스트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">세라피아스 앨리스</span>의 스킨 <span class="badge bg-danger">해변의 여왕의 유혹</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">AL 레이스</span>의 스킨 <span class="badge bg-danger">특급 요원 레이스</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">이터니티</span>의 스킨 <span class="badge bg-danger">오르카 강아지, 이터니티</span>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-01-04 15:00:57</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7602" date="2021-01-03"
		site={ <>
			<li>사이트의 스토리지 서버가 공격당해 트래픽 비용이 매우 많이 발생하여 Cloudflare를 적용했습니다.</li>
		</> }
		bugfix={ <>
			<li>버프 목록에 적 이름이 정상적으로 표시되지 않던 문제를 수정했습니다.</li>
			<li>버프 목록이 모바일 환경에서 넘치는 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">메리</span>의 스킬 계수 정보가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
