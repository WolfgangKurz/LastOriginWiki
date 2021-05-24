import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build r20200831" date="2020-08-31"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">마이티R</span>의 스킬 수치 및 설명을 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">C-33 안드바리</span>전투원이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">드리아드</span>전투원이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">장비정보</span>의 필터 기능을 개선했습니다. 추가로,
				<span class="badge bg-secondary">드랍 없음</span>표시가 <span class="badge bg-secondary">획득처 없음</span>으로 명칭 변경되었고, 기준이 변경되었습니다.<br />
				자세한 내용은 <span class="badge bg-warning text-dark">장비정보</span>의 상단 알림을 확인해주세요.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">마이티R</span>의 <RarityBadge border rarity="SS">SS 승급 스킨</RarityBadge>
				<span class="badge bg-substory">특수 전투원 마이티R</span>스킨이 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">라비아타 프로토타입</span>의 <span class="badge bg-substory">혼자만의 휴가</span>스킨이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">라비아타 프로토타입</span>의 <span class="badge bg-substory">과거 혼자만의 휴가</span>스킨이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">블랙 웜 S9</span>의 <span class="badge bg-substory">한여름의 흑백합</span>스킨의 중파 이미지가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200829" date="2020-08-29"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 팝업이 표시되지 않던 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">라인리터</span>의 1번째 액티브 <span class="badge bg-substory">기사의 응시</span>의 사거리가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">라인리터</span>의 2번째 액티브 <span class="badge bg-substory">용기병의 화창</span>의 사거리가 수정되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">스파토이아</span>의 2번째 액티브
				<span class="badge bg-substory">CQB 돌입</span>의 공격력 계수가 올바른 수치로 수정되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">레이시</span>의 1번째 패시브 <span class="badge bg-substory">전자기 공명</span>의 전기 속성 아군 목록이 수정되었습니다.</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">장비정보</span>의 드랍처를 눌러
				<span class="badge bg-warning text-dark">세계정보</span>페이지로 갈 수 있도록 수정했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">모든 전투원</span>의 스킬 정보에 참조된 장비 및 전투원에 링크 및 툴팁이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">모든 전투원</span>의 <span class="badge bg-stat-hp">속성 저항</span>수치가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">모든 전투원</span>의 <span class="badge bg-substory">사거리 +1 풀링크 보너스</span>를 확인할 수 있도록 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">모든 전투원</span>의 스킬 설명에 <span class="badge bg-stat-hp">속성 아이콘</span>이 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">모든 전투원</span>의 스킬 설명의 <span class="badge bg-primary">증가하는 수치</span>와
				<span class="badge bg-danger">감소하는 수치</span>, <span class="badge bg-substory">그 외 수치</span>색상 구분이 추가되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200827" date="2020-08-27"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">다프네</span>의 1번째 패시브 <span class="badge bg-substory">민감한 눈</span>의 적용 범위가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">다프네</span>의 2번째 패시브 <span class="badge bg-substory">대사 촉진</span>의 적용 범위가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">세라피아스 앨리스</span>의 1번째 액티브 <span class="badge bg-substory">찌르는 강철</span>의 소모 AP가 수정되었습니다.</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">마이티R</span>의 <RarityBadge border rarity="S">S 승급</RarityBadge>,
				<RarityBadge border rarity="SS">SS 승급</RarityBadge>및 패시브 스킬 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">화롯가의 포티아</span>의 대사 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200826" date="2020-08-26"
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">모든 전투원</span>의 <span class="badge bg-stat-crit">스킨 아이템 정보</span>및
				<span class="badge bg-success">일러스트레이터 정보</span>가 추가되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200824" date="2020-08-24"
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">세계 정보</span>메뉴가 추가되었습니다.<br />
				특정 맵의 전투원 드랍 및 장비 드랍 정보를 확인할 수 있습니다.
			</li>
			<li><span class="badge bg-warning text-dark">Mr 알프레드</span>의 출격 비용의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">요정 마을의 아리아</span>이벤트 맵의 누락된 3부 전투원/장비 드랍 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">스노우 페더</span>에 <span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">라비아타 프로토타입</span>의 <span class="badge bg-substory">한겨울의 만찬 라비아타</span>스킨의
				<span class="badge bg-stat-crit">스킨 아이템 정보</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">성벽의 하치코</span>의 <span class="badge bg-substory">플라잉 하치코</span>스킨의
				<span class="badge bg-stat-crit">스킨 아이템 정보</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">Mr 알프레드</span>의 <span class="badge bg-substory">로버트 몸체 원형</span>스킨의
				<span class="badge bg-stat-crit">스킨 아이템 정보</span>가 추가되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200820" date="2020-08-20"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">설비정보</span>의 일부 설비의 시설 능력이 올바르지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">폭주 유도 시스템 OS</span>장비가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">개량형 초정밀 조준기</span>장비가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">Mr 알프레드</span>의 스킬 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">블랙 웜 S9</span>의 스킬 정보가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">쿠노이치 제로</span>의 스킬 정보가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">라인리터</span>의 스킬 정보가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">요정 마을의 아리아</span>이벤트 맵의 3부 전투원/장비 드랍 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">샬럿</span>의 <span class="badge bg-substory">프랑스 풍 보석 비키니</span>스킨의
				<span class="badge bg-danger">원스토어 버전 CG</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">샬럿</span>의 <span class="badge bg-substory">조금 이상한 대행자</span>스킨의
				로비 애니메이션 여부가 추가되었고, 가격 정보가 수정되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">소완</span>의 <span class="badge bg-substory">술잔과 진솔한 이야기</span>스킨의
				로비 애니메이션 여부가 추가되었고, 가격 정보가 수정되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">T-50 PX 실키</span>의 <span class="badge bg-substory">하계 전투복 실키</span>스킨의
				로비 애니메이션 여부가 추가되었고, 가격 정보가 수정되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200819" date="2020-08-19"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">블랙 웜 S9</span>의 스킬 정보가 수정되었습니다.</li>
		</> }
		new={ <>
			<li>
				일부 스킨들에 <span class="badge bg-success">일러스트레이터 정보</span>와 <span class="badge bg-stat-crit">스킨 아이템 정보</span>를 추가했습니다.<br />
				해당 정보들은 확인되는 대로 추가될 예정입니다.
			</li>
			<li><span class="badge bg-warning text-dark">Mr 알프레드</span>전투원이 추가되었습니다. 스킬 정보는 이후에 추가될 예정입니다.</li>
		</> }
		update={ <>
			<li>모든 전투원의 서약 대사 존재 여부를 갱신했습니다.<br />이제 서약 대사가 없으면 대사 정보가 없더라도 대사 목록에 표시되지 않습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-substory">로버트 몸체 원형</span>스킨이 추가되었습니다.
				<span class="badge bg-success">일러스트레이터 정보</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">퀵 카멜</span>의 <span class="badge bg-substory">한여름의 위기일발</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다. <span class="badge bg-success">일러스트레이터 정보</span>가 존재합니다.
				<span class="badge bg-stat-crit">스킨 아이템 정보</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">뽀끄루 대마왕</span>의 <span class="badge bg-substory">한여름의 우정</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다. <span class="badge bg-success">일러스트레이터 정보</span>가 존재합니다.
				<span class="badge bg-stat-crit">스킨 아이템 정보</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">럼버제인</span>의 <span class="badge bg-substory">한여름의 삼림욕</span>스킨의 중파 이미지가 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
				<span class="badge bg-stat-crit">스킨 아이템 정보</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">블랙 웜 S9</span>의 <span class="badge bg-substory">한여름의 흑백합</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다. <span class="badge bg-success">일러스트레이터 정보</span>가 존재합니다.
				<span class="badge bg-stat-crit">스킨 아이템 정보</span>가 존재합니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200817" date="2020-08-17"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">블랙 웜 S9</span>의 스킬 정보가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 스킬 오타가 수정되었습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-primary">설비정보</span>메뉴가 추가되었습니다. 누락되었거나 부정확한 정보가 포함되어있을 수도 있습니다.</li>
			<li><span class="badge bg-warning text-dark">스노우 페더</span>의 스킬 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">생명의 세레스티아</span>의 스킬 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">AA-7 임펫</span>의 S 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">K180 셀주크</span>의 S 승급 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200815" date="2020-08-15"
		bugfix={ <>
			<li>
				누락되어있던 <span class="badge bg-warning text-dark">모든 전투원</span>의 대사 오디오 파일이 추가되었습니다.<br />
				서약 후 대사, 스킨 대사가 모두 포함됩니다. 대사 텍스트는 추가되지 않았습니다.
			</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">스노우 페더</span>전투원이 추가되었습니다. 스킬 정보는 이후에 추가될 예정입니다.</li>
			<li><span class="badge bg-warning text-dark">생명의 세레스티아</span>전투원이 추가되었습니다. 스킬 정보는 이후에 추가될 예정입니다.</li>
			<li><span class="badge bg-warning text-dark">특수 대원용 가시 목걸이</span>장비가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">레인저용 전투장비 세트</span>장비가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">험지용 특수 프레임</span>장비가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">요정 마을의 아리아</span>이벤트 맵의 전투원/장비 드랍 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">AA-7 임펫</span>의 <span class="badge bg-substory">한여름의 불장난</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">A-1 블러디 팬서</span>의 <span class="badge bg-substory">한여름의 정면돌파</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">A-54 칼리스타</span>의 <span class="badge bg-substory">한여름의 별</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AG-1 네레이드</span>의 <span class="badge bg-substory">한여름의 네리네리</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">P-22 하르페이아</span>의 <span class="badge bg-substory">한여름의 마이애미</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
			</li>
			<li><span class="badge bg-warning text-dark">커넥터 유미</span>의 <span class="badge bg-substory">한여름의 데이트</span>스킨이 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">아크로바틱 써니</span>의 <span class="badge bg-substory">한여름의 커플 요가</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">럼버제인</span>의 <span class="badge bg-substory">한여름의 삼림욕</span>스킨이 추가되었습니다.
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 존재합니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">C-77 홍련</span>의 <span class="badge bg-substory">기본 스킨</span>및
				<span class="badge bg-substory">드림위버 웨딩 스페셜 : 순백의 연꽃</span>에 <span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
