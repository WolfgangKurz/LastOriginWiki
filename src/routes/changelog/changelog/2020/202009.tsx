import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build r20200928" date="2020-09-28"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">와쳐 MQ-20</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">쿠노이치 카엔</span>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">MH-4 테티스</span>의 <span class="badge bg-substory">소악마인가? 소정령인가?</span>스킨 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">무적의 용</span>의 <span class="badge bg-substory">모피를 걸친 드래곤</span>스킨 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200924" date="2020-09-24"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 3번째 패시브 스킬
				<span class="badge bg-substory">성장형 마법소녀</span>의 설명을 수정했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">쿠노이치 제로</span>의 1번째 액티브 스킬 <span class="badge bg-substory">은밀</span>과 2번째 액티브 스킬
				<span class="badge bg-substory">뇌신 일섬</span>의 사거리 및 설명을 수정했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">아크로바틱 써니</span>의 2번째 액티브
				<span class="badge bg-substory">전격등장 타이거!</span>의 대상 적중 감소 수치가 입력되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">징벌의 사디어스</span>의 1번째 액티브
				<span class="badge bg-substory">테이져 캐논</span>의 고전압 상태일 때의 대상 전기 저항 감소 수치가 입력되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200922" date="2020-09-22"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">징벌의 사디어스</span>의 대사가 재생되지 않던 문제가 수정되었습니다.</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>의 지역 지도에 <span class="badge bg-danger">이야기 보기</span>기능을 추가했습니다.<br />
				이 기능은 시험 적용된 상태로, <span class="badge bg-substory">[1-1] 비상 상황</span>만 제공됩니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200921" date="2020-09-21"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">S등급 백신 처리</span>장비의 정확한 수치가 입력되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 2번째 액티브 <span class="badge bg-substory">모모찬바라</span>의
				<span class="badge bg-danger">급소찌르기</span>확률이 수정되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 3번째 패시브
				<span class="badge bg-substory">성장형 마법소녀</span>의 설명이 수정되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">AT72 라인리터</span>의 3번째 패시브 <span class="badge bg-substory">기병 돌격</span>의 상세 수치가 입력되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">경험치 계산기</span>의 토미워커 스킬 보너스 계산이 잘못되어있던 점을 수정했습니다.<br />
				경험치 계산이 모든 웨이브 경험치/철충 수 총합으로 계산되던 것을 각 웨이브별 계산으로 수정했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">전투원 스테이터스</span>의 <span class="badge bg-substory">효과 해제</span>를 독립 시행으로 변경했습니다.</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">경험치 계산기</span>의
				<span class="badge bg-warning text-dark">만월의 야상곡</span> 전투 지역 경험치가 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">만월의 야상곡</span>의 전투원/장비 획득처 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">AL 팬텀</span>의 서약 대사 음성이 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200920" date="2020-09-20"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">프로스트 서펀트</span>의 1번째 패시브 <span class="badge bg-substory">긴급 구조</span>의 AP 수치가 입력되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">프로스트 서펀트</span>의 2번째 패시브
				<span class="badge bg-substory">불굴의 소방관</span>의 전투 속행 수치가 입력되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">경험치 계산기</span>페이지의 <span class="badge bg-success">장비/스킬 보너스</span>연산이 잘못되어있던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">기타</span>메뉴에 <span class="badge bg-warning text-dark">경험치 계산기</span>페이지가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 2번째 액티브 <span class="badge bg-substory">모모찬바라</span>의
				<span class="badge bg-danger">급소찌르기</span>확률이 추가되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200917" date="2020-09-17"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원 스킬</span>의 <span class="badge bg-substory">스킬 위력</span>이 공격력 배수의 합연산이 아닌
				최종 값의 곱연산으로 계산되던 문제를 수정했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 <RarityBadge rarity="SS">SS 승급</RarityBadge>정보가 추가되었습니다.<br />
				<span class="badge bg-substory">성장형 마법소녀</span>스킬의 상세 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">라인리터</span>의 이름이 <span class="badge bg-warning text-dark">AT72 라인리터</span>로 변경되었습니다.<br />
				<RarityBadge rarity="SS">SS 승급</RarityBadge>정보가 추가되었습니다.<br />
				<span class="badge bg-substory">기병 돌격</span>스킬의 정보가 추가되었으며, 상세 수치는 업데이트 후 갱신됩니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200916" date="2020-09-16"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원 스테이터스</span>의 <span class="badge bg-substory">효과 저항</span>이 독립 시행으로 계산되는 점을 반영하여
				수치를 합산하지 않고 여러 줄에 나눠 표시하도록 수정했습니다.
			</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">장비목록</span>의 획득처 필터 목록에 <span class="badge bg-primary">외부 통신 요청</span>이 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">기타</span>메뉴에
				외부 사이트인 <span class="badge bg-warning text-dark">지역별 철충 지도</span>링크가 추가되었습니다.
			</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원 스테이터스</span>의 <span class="badge bg-warning text-dark">장비 선택 창</span>의
				<span class="badge bg-substory">장비 삭제</span>버튼의 명칭이 <span class="badge bg-substory">장비 해제</span>로 변경되었습니다.
			</li>
			<li>진행중인 이벤트 정보가 갱신되었습니다. (이벤트 없음)</li>
		</> }
	/>

	<ChangelogItem title="Build r20200915" date="2020-09-15"
		new={ <>
			<li>장비의 <span class="badge bg-primary">효과</span>를 기준으로 필터하는 기능이 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">기타</span>메뉴에 <span class="badge bg-warning text-dark">BGM</span>메뉴가 추가되었습니다.<br />
				사용처가 불분명한 BGM이 있을 수도 있습니다.<br />
				목록에 없는 과거 이벤트의 BGM들은 이후에 추가될 예정입니다.
			</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">장비정보</span>페이지의 필터 기능이 개선되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200914" date="2020-09-14"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">징벌의 사디어스</span>의 일러스트 및 스킬 수치가 입력되었습니다.<br />
				제가 사디어스를 못먹어서 수치가 정확한지는 모르겠습니다.
			</li>
			<li><span class="badge bg-warning text-dark">켈베로스</span>의 3번째 패시브 <span class="badge bg-substory">호위 지원 강화</span>의 수치가 입력되었습니다.</li>
			<li><span class="badge bg-warning text-dark">미스세이프티</span>의 1번째 패시브 <span class="badge bg-substory">유인책</span>의 수치가 입력되었습니다.</li>
			<li><span class="badge bg-warning text-dark">신속의 칸</span>의 1번째 패시브 <span class="badge bg-substory">굶주린 늑대</span>의 설명을 일부 수정했습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">바닐라 A1</span>의 <span class="badge bg-substory">바닐라의 휴일</span>스킨이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">GS-10 샌드걸</span>의 <span class="badge bg-substory">도시 암살자 샌드걸</span>스킨이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">생명의 세레스티아</span>의 <span class="badge bg-substory">세레스티아 카우걸</span>스킨이 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">라비아타 프로토타입</span>의 <span class="badge bg-substory">혼자만의 휴가</span>,
				<span class="badge bg-substory">과거 혼자만의 휴가</span>스킨의 중파 이미지가 추가되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200914" date="2020-09-14"
		new={ <>
			<li><span class="badge bg-warning text-dark">C-33 안드바리</span>의 1번째 패시브 <span class="badge bg-substory">의젓한 여동생</span>의 세부 설명을 추가했습니다.</li>
			<li>외부 사이트에서 사용 가능한 <span class="badge bg-warning text-dark">API</span>메뉴가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200911" date="2020-09-11"
		new={ <>
			<li>
				신규 전투원 <span class="badge bg-warning text-dark">징벌의 사디어스</span>의 정보가 추가되었습니다.<br />
				일러스트, 스킬 및 스테이터스 정보는 업데이트 이후에 갱신됩니다.
			</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">스노우 페더</span>, <span class="badge bg-warning text-dark">생명의 세레스티아</span>,
				<span class="badge bg-warning text-dark">드리아드</span>의 스테이터스 정보가 입력되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200910" date="2020-09-10"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 일부 장비가 목록에 표시되지 않는 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">프로스트 서펀트</span>의 1번째 액티브 <span class="badge bg-substory">고압 분사</span>의 스킬 범위가 수정되었습니다.
				(AP 소모는 업데이트 이후 갱신 예정)
			</li>
			<li><span class="badge bg-warning text-dark">프로스트 서펀트</span>의 1번째 패시브 <span class="badge bg-substory">긴급 구조</span>의 설명이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">프로스트 서펀트</span>의 2번째 패시브 <span class="badge bg-substory">불굴의 소방관</span>의 설명이 수정되었습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">켈베로스</span>의 <RarityBadge rarity="SS" border />승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">미스 세이프티</span>의 <RarityBadge rarity="A" border />승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">켈베로스</span>의 3번째 패시브 <span class="badge bg-substory">호위 지원 강화</span>의 설명이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">미스 세이프티</span>의 1번째 패시브 <span class="badge bg-substory">유인책</span>의 설명이 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200909" date="2020-09-09"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">프로스트 서펀트</span>의 2번째 패시브
				<span class="badge bg-substory">불굴의 소방관</span>의 설명이 잘못 해석될 수 있는 부분을 수정했습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200907" date="2020-09-07"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">전략 폭격 장비</span>의 수치에 공격력이 누락된 점이 수정되었습니다.</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">T-8W 발키리</span>의 3번째 패시브
				<span class="badge bg-substory">발할라로 이끄는 자</span>의 상세 수치가 입력되었습니다.<br />
				<span class="badge bg-warning text-dark">T-8W 발키리</span>의 SS 승급 스테이터스가 입력되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">GS-10 샌드걸</span>의 2번째 액티브 <span class="badge bg-substory">AT 미사일</span>및 1번째 패시브
				<span class="badge bg-substory">지상군 호위</span>의 상세 수치가 입력되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 서약 후 보이스 오디오 파일이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">마법소녀 매지컬 백토</span>의 서약 후 보이스 오디오 파일이 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200906" date="2020-09-06"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">트리아이나</span>의 2번째 액티브
				<span class="badge bg-substory">사이클론 스트림</span>의 받는 피해 증가 수치가 누락된 문제를 수정했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 필터가 올바르게 작동하지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-exchange-old">이전 교환소</span>필터가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-stat-acc">전용장비</span>를 장착할 수 있는 전투원 표시가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>의 <span class="badge bg-warning text-dark">구역 정보</span>페이지에
				<a href="https://lastoriginmap.github.io/" target="_blank" rel="noreferrer">
					<span class="badge bg-primary">철충 지도</span>사이트
				</a>로 이동할 수 있는 버튼이 추가되었습니다.
			</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">세계정보</span>의 레이아웃 및 디자인이 변경되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200905" date="2020-09-05"
		bugfix={ <>
			<li>대사가 있는 전투원의 추가된 스킨 대사가 목록에 표시되지 않는 문제가 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">블랙 리리스</span>의 대사 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200904" date="2020-09-04"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 필터 기능이 제대로 작동하지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-event-exchange-old">지고의 저녁식사</span>및
				<span class="badge bg-event-exchange-old">리오보로스의 유산</span>이벤트의 드랍 정보,
				<span class="badge bg-warning text-dark">세계 정보</span>를 추가했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 팝업에 <span class="badge bg-substory">강화 비용</span>표시가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">전투원 정보</span>페이지에 <span class="badge bg-danger">전용 장비</span>표시를 추가했습니다.<br />
				전투원이 <span class="badge bg-danger">전용 장비</span>를 갖고 있을 때에만 표시됩니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200903" date="2020-09-03"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">드리아드</span>의 행동력이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">스노우 페더</span>의 1번째 패시브 <span class="badge bg-substory">날개짓</span>의 설명이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">C-77 레드후드</span>의 1번째 패시브 <span class="badge bg-substory">물러서지마라!</span>의 설명이 수정되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">마이티R</span>의 2번째 액티브 <span class="badge bg-substory">스프린트</span>의 공격 유형이
				<span class="badge bg-danger">보호 무시</span>로 변경되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">T-13 알비스</span>의 1번째 패시브 <span class="badge bg-substory">못 지나갈걸?</span>의 적용 범위가 갱신되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">GS-10 샌드걸</span>의 1번째 패시브
				<span class="badge bg-substory">지상군 호위</span>의 수치 및 적용 범위가 갱신되었습니다.<br />
				갱신된 수치는 실제 업데이트 전까지 임시로 표시되며, 업데이트 전 수치도 같이 표시됩니다.
			</li>
			<li><span class="badge bg-warning text-dark">전투원 스테이터스</span>의 <span class="badge bg-substory">전투원 강화</span>수치를 직접 입력할 수 있도록 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-exchange">20년 09월 교환소</span>정보를 추가했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">T-8W 발키리</span>의 <RarityBadge rarity="SS" border>SS승급</RarityBadge>정보가 추가되었습니다.<br />
				3번째 패시브 <span class="badge bg-substory">발할라로 이끄는 자</span>스킬의 수치는 실제 업데이트 전까지 패치 노트에 작성된 고정된 수치로 표시됩니다.
			</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>와
				<span class="badge bg-warning text-dark">마법소녀 매지컬 백토</span>의 서약 대사 여부가 갱신되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20200902" date="2020-09-02"
		site={ <>
			<li><span class="badge bg-warning text-dark">모의전투</span>메뉴가 삭제되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 장비의 효과 수치가 % 수치가 아닌 일반 수치로 작성되어있던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">각 전투원</span>페이지에 <span class="badge bg-danger">스테이터스</span>탭이 추가되었습니다.<br />
				기존 <span class="badge bg-warning text-dark">모의전투</span>메뉴의 스테이터스 및 장비 시뮬레이션 기능입니다.<br />
				해당 탭에서 수정하는 스테이터스 및 장비는 저장되지 않으며, 상단의 URL을 통해 보관해야 합니다.<br />
				아직 스킬 및 버프 목록 시뮬레이션은 포함되지 않았으며, 확률 값이 합 연산으로 표시되고 있습니다. 이 점 유의해서 사용해주시기 바랍니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
