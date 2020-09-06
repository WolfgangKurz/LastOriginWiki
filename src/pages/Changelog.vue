<template>
	<div class="changelog text-left">
		<h2>변경 기록</h2>
		<p>
			<i>멸망 전의 전술 교본</i> 사이트의 변경 기록을 작성한 문서입니다.
		</p>
		<hr />

		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200906>2020-09-06</b-card-header>
			<b-collapse id="changelog20200906" visible>
				<b-card-body>
					<div>
						<b-badge variant="warning">장비정보</b-badge>의 필터가 올바르게 작동하지 않던 문제를 수정했습니다.
						<br />
						<b-badge variant="exchange-old">이전 교환소</b-badge>필터가 추가되었습니다.
						<br />
						<b-badge variant="stat-acc">전용장비</b-badge>를 장착할 수 있는 전투원 표시가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">세계정보</b-badge>의 레이아웃 및 디자인이 변경되었습니다.
						<br />
						<b-badge variant="warning">구역 정보</b-badge>페이지에
						<a href="https://lastoriginmap.github.io/index.html" target="_blank">
							<b-badge variant="primary">철충 지도</b-badge>사이트
						</a>로 이동할 수 있는 버튼이 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200905>2020-09-05</b-card-header>
			<b-collapse id="changelog20200905">
				<b-card-body>
					<div>
						<b-badge variant="warning">블랙 리리스</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>대사가 있는 전투원의 추가된 스킨 대사가 목록에 표시되지 않는 문제가 수정되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200904>2020-09-04</b-card-header>
			<b-collapse id="changelog20200904">
				<b-card-body>
					<div>
						<b-badge variant="event-exchange-old">지고의 저녁식사</b-badge>및
						<b-badge variant="event-exchange-old">리오보로스의 유산</b-badge>이벤트의
						드랍 정보,
						<b-badge variant="warning">세계 정보</b-badge>를 추가했습니다.
					</div>
					<div>
						<b-badge variant="warning">장비정보</b-badge>의 필터 기능이 제대로 작동하지 않던 문제를 수정했습니다.
					</div>
					<div>
						<b-badge variant="warning">장비정보</b-badge>의 팝업에
						<b-badge variant="info">강화 비용</b-badge>표시가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">전투원 정보</b-badge>페이지에
						<b-badge variant="danger">전용 장비</b-badge>표시를 추가했습니다.
						<br />전투원이
						<b-badge variant="danger">전용 장비</b-badge>를 갖고 있을 때에만 표시됩니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200903>2020-09-03</b-card-header>
			<b-collapse id="changelog20200903">
				<b-card-body>
					<div>
						<b-badge variant="exchange">20년 09월 교환소</b-badge>정보를 추가했습니다.
					</div>
					<div>
						<b-badge variant="warning">마법소녀 매지컬 모모</b-badge>와
						<b-badge variant="warning">마법소녀 매지컬 백토</b-badge>의
						서약 대사 여부가 갱신되었습니다.
					</div>
					<div>
						<b-badge variant="warning">드리아드</b-badge>의 행동력이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">스노우 페더</b-badge>의 1번째 패시브
						<b-badge variant="info">날개짓</b-badge>의 설명이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">C-77 레드후드</b-badge>의 1번째 패시브
						<b-badge variant="info">물러서지마라!</b-badge>의 설명이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">마이티R</b-badge>의 2번째 액티브
						<b-badge variant="info">스프린트</b-badge>의 공격 유형이
						<b-badge variant="danger">보호 무시</b-badge>로 변경되었습니다.
					</div>
					<div>
						<b-badge variant="warning">T-8W 발키리</b-badge>의
						<rarity-badge rarity="SS" border>SS승급</rarity-badge>정보가 추가되었습니다.
						<br />3번째 패시브
						<b-badge variant="info">발할라로 이끄는 자</b-badge>스킬의 수치는 실제 업데이트 전까지 패치 노트에 작성된 고정된 수치로 표시됩니다.
					</div>
					<div>
						<b-badge variant="warning">T-13 알비스</b-badge>의 1번째 패시브
						<b-badge variant="info">못 지나갈걸?</b-badge>의 적용 범위가 갱신되었습니다.
					</div>
					<div>
						<b-badge variant="warning">GS-10 샌드걸</b-badge>의 1번째 패시브
						<b-badge variant="info">지상군 호위</b-badge>의 수치 및 적용 범위가 갱신되었습니다.
						<br />갱신된 수치는 실제 업데이트 전까지 임시로 표시되며, 업데이트 전 수치도 같이 표시됩니다.
					</div>
					<div>
						<b-badge variant="warning">전투원 스테이터스</b-badge>의
						<b-badge variant="info">전투원 강화</b-badge>수치를 직접 입력할 수 있도록 수정했습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200902>2020-09-02</b-card-header>
			<b-collapse id="changelog20200902">
				<b-card-body>
					<div>일부 장비의 효과 수치가 % 수치가 아닌 일반 수치로 작성되어있던 점을 수정했습니다.</div>
					<div>
						<b-badge variant="warning">모의전투</b-badge>메뉴가 삭제되었습니다.
					</div>
					<div>
						<b-badge variant="warning">각 전투원</b-badge>페이지에
						<b-badge variant="danger">스테이터스</b-badge>탭이 추가되었습니다.
						기존
						<b-badge variant="warning">모의전투</b-badge>메뉴의 스테이터스 및 장비 시뮬레이션 기능입니다.
						<br />해당 탭에서 수정하는 스테이터스 및 장비는 저장되지 않으며, 상단의 URL을 통해 보관해야 합니다.
						<br />아직 스킬 및 버프 목록 시뮬레이션은 포함되지 않았으며, 확률 값이 합 연산으로 표시되고 있습니다.
						이 점 유의해서 사용해주시기 바랍니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200831>2020-08-31</b-card-header>
			<b-collapse id="changelog20200831">
				<b-card-body>
					<div>
						<b-badge variant="warning">장비정보</b-badge>의 필터 기능을 개선했습니다.
						추가로,
						<b-badge variant="secondary">드랍 없음</b-badge>표시가
						<b-badge variant="secondary">획득처 없음</b-badge>으로 명칭 변경되었고, 기준이 변경되었습니다.
						자세한 내용은
						<b-badge variant="warning">장비정보</b-badge>의 상단 알림을 확인해주세요.
					</div>
					<div>
						<b-badge variant="warning">C-33 안드바리</b-badge>전투원이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">드리아드</b-badge>전투원이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">마이티R</b-badge>의 스킬 수치 및 설명을 수정했습니다.
					</div>
					<div>
						<b-badge variant="warning">마이티R</b-badge>의
						<rarity-badge border rarity="SS">SS 승급 스킨</rarity-badge>
						<b-badge variant="info">특수 전투원 마이티R</b-badge>스킨이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>의
						<b-badge variant="info">혼자만의 휴가</b-badge>스킨이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>의
						<b-badge variant="info">과거 혼자만의 휴가</b-badge>스킨이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>의
						<b-badge variant="info">한여름의 흑백합</b-badge>스킨의 중파 이미지가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200829>2020-08-29</b-card-header>
			<b-collapse id="changelog20200829">
				<b-card-body>
					<div>
						<b-badge variant="warning">장비정보</b-badge>의 팝업이 표시되지 않던 문제를 수정했습니다.
					</div>
					<div>
						<b-badge variant="warning">장비정보</b-badge>의 드랍처를 눌러
						<b-badge variant="warning">세계정보</b-badge>페이지로 갈 수 있도록 수정했습니다.
					</div>
					<div>
						<b-badge variant="warning">모든 전투원</b-badge>의 스킬 정보에 참조된 장비 및 전투원에 링크 및 툴팁이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">모든 전투원</b-badge>의
						<b-badge variant="stat-hp">속성 저항</b-badge>수치가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">모든 전투원</b-badge>의
						<b-badge variant="info">사거리 +1 풀링크 보너스</b-badge>를 확인할 수 있도록 추가했습니다.
					</div>
					<div>
						<b-badge variant="warning">모든 전투원</b-badge>의 스킬 설명에
						<b-badge variant="stat-hp">속성 아이콘</b-badge>이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">모든 전투원</b-badge>의 스킬 설명의
						<b-badge variant="primary">증가하는 수치</b-badge>와
						<b-badge variant="danger">감소하는 수치</b-badge>,
						<b-badge variant="info">그 외 수치</b-badge>색상 구분이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라인리터</b-badge>의 1번째 액티브
						<b-badge variant="info">기사의 응시</b-badge>의 사거리가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라인리터</b-badge>의 2번째 액티브
						<b-badge variant="info">용기병의 화창</b-badge>의 사거리가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">스파토이아</b-badge>의 2번째 액티브
						<b-badge variant="info">CQB 돌입</b-badge>의 공격력 계수가 올바른 수치로 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">레이시</b-badge>의 1번째 패시브
						<b-badge variant="info">전자기 공명</b-badge>의 전기 속성 아군 목록이 수정되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200827>2020-08-27</b-card-header>
			<b-collapse id="changelog20200827">
				<b-card-body>
					<div>
						<b-badge variant="warning">마이티R</b-badge>의
						<rarity-badge border rarity="S">S 승급</rarity-badge>,
						<rarity-badge border rarity="SS">SS 승급</rarity-badge>및
						패시브 스킬 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다프네</b-badge>의 1번째 패시브
						<b-badge variant="info">민감한 눈</b-badge>의 적용 범위가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다프네</b-badge>의 2번째 패시브
						<b-badge variant="info">대사 촉진</b-badge>의 적용 범위가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">세라피아스 앨리스</b-badge>의 1번째 액티브
						<b-badge variant="info">찌르는 강철</b-badge>의 소모 AP가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">화롯가의 포티아</b-badge>의 대사 정보가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200826>2020-08-26</b-card-header>
			<b-collapse id="changelog20200826">
				<b-card-body>
					<div>
						<b-badge variant="warning">모든 전투원</b-badge>의
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>및
						<b-badge variant="success">일러스트레이터 정보</b-badge>가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200824>2020-08-24</b-card-header>
			<b-collapse id="changelog20200824">
				<b-card-body>
					<div>
						<b-badge variant="warning">세계 정보</b-badge>메뉴가 추가되었습니다.
						특정 맵의 전투원 드랍 및 장비 드랍 정보를 확인할 수 있습니다.
					</div>
					<div>
						<b-badge variant="warning">Mr 알프레드</b-badge>의
						출격 비용의 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">요정 마을의 아리아</b-badge>이벤트 맵의 누락된 3부 전투원/장비 드랍 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">스노우 페더</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>의
						<b-badge variant="info">한겨울의 만찬 라비아타</b-badge>스킨의
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">성벽의 하치코</b-badge>의
						<b-badge variant="info">플라잉 하치코</b-badge>스킨의
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">Mr 알프레드</b-badge>의
						<b-badge variant="info">로버트 몸체 원형</b-badge>스킨의
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200820>2020-08-20</b-card-header>
			<b-collapse id="changelog20200820">
				<b-card-body>
					<div>
						<b-badge variant="warning">폭주 유도 시스템 OS</b-badge>장비가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">개량형 초정밀 조준기</b-badge>장비가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">Mr 알프레드</b-badge>의 스킬 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>의 스킬 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>의 스킬 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라인리터</b-badge>의 스킬 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">요정 마을의 아리아</b-badge>이벤트 맵의 3부 전투원/장비 드랍 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">샬럿</b-badge>의
						<b-badge variant="info">프랑스 풍 보석 비키니</b-badge>스킨의
						<b-badge variant="danger">원스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">샬럿</b-badge>의
						<b-badge variant="info">조금 이상한 대행자</b-badge>스킨의
						로비 애니메이션 여부가 추가되었고, 가격 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">소완</b-badge>의
						<b-badge variant="info">술잔과 진솔한 이야기</b-badge>스킨의
						로비 애니메이션 여부가 추가되었고, 가격 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">T-50 PX 실키</b-badge>의
						<b-badge variant="info">하계 전투복 실키</b-badge>스킨의
						로비 애니메이션 여부가 추가되었고, 가격 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">설비정보</b-badge>의 일부 설비의 시설 능력이 올바르지 않던 문제를 수정했습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200819>2020-08-19</b-card-header>
			<b-collapse id="changelog20200819">
				<b-card-body>
					<div>
						일부 스킨들에
						<b-badge variant="success">일러스트레이터 정보</b-badge>와
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>를 추가했습니다.
						해당 정보들은 확인되는 대로 추가될 예정입니다.
					</div>
					<div>
						모든 전투원의 서약 대사 존재 여부를 갱신했습니다.
						이제 서약 대사가 없으면 대사 정보가 없더라도 대사 목록에 표시되지 않습니다.
					</div>
					<div>
						<b-badge variant="warning">Mr 알프레드</b-badge>전투원이 추가되었습니다.
						스킬 정보는 이후에 추가될 예정입니다.
						<b-badge variant="info">로버트 몸체 원형</b-badge>스킨이 추가되었습니다.
						<b-badge variant="success">일러스트레이터 정보</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>의 스킬 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">퀵 카멜</b-badge>의
						<b-badge variant="info">한여름의 위기일발</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
						<b-badge variant="success">일러스트레이터 정보</b-badge>가 존재합니다.
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">뽀끄루 대마왕</b-badge>의
						<b-badge variant="info">한여름의 우정</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
						<b-badge variant="success">일러스트레이터 정보</b-badge>가 존재합니다.
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">럼버제인</b-badge>의
						<b-badge variant="info">한여름의 삼림욕</b-badge>스킨의 중파 이미지가 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>의
						<b-badge variant="info">한여름의 흑백합</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
						<b-badge variant="success">일러스트레이터 정보</b-badge>가 존재합니다.
						<b-badge variant="stat-crit">스킨 아이템 정보</b-badge>가 존재합니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200817>2020-08-17</b-card-header>
			<b-collapse id="changelog20200817">
				<b-card-body>
					<div>
						<b-badge variant="primary">설비정보</b-badge>메뉴가 추가되었습니다.
						누락되었거나 부정확한 정보가 포함되어있을 수도 있습니다.
					</div>
					<div>
						<b-badge variant="warning">스노우 페더</b-badge>의 스킬 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">생명의 세레스티아</b-badge>의 스킬 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">AA-7 임펫</b-badge>의 S 승급 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">K180 셀주크</b-badge>의 S 승급 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>의 스킬 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">마법소녀 매지컬 모모</b-badge>의 스킬 오타가 수정되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200815>2020-08-15</b-card-header>
			<b-collapse id="changelog20200815">
				<b-card-body>
					<div>
						<b-badge variant="warning">스노우 페더</b-badge>전투원이 추가되었습니다.
						스킬 정보는 이후에 추가될 예정입니다.
					</div>
					<div>
						<b-badge variant="warning">생명의 세레스티아</b-badge>전투원이 추가되었습니다.
						스킬 정보는 이후에 추가될 예정입니다.
					</div>
					<div>
						<b-badge variant="warning">특수 대원용 가시 목걸이</b-badge>장비가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">레인저용 전투장비 세트</b-badge>장비가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">험지용 특수 프레임</b-badge>장비가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">요정 마을의 아리아</b-badge>이벤트 맵의 전투원/장비 드랍 정보가 추가되었습니다.
					</div>
					<div>
						누락되어있던
						<b-badge variant="warning">모든 전투원</b-badge>의 대사 오디오 파일이 추가되었습니다.
						서약 후 대사, 스킨 대사가 모두 포함됩니다.
						대사 텍스트는 추가되지 않았습니다.
					</div>
					<div>
						<b-badge variant="warning">AA-7 임펫</b-badge>의
						<b-badge variant="info">한여름의 불장난</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">A-1 블러디 팬서</b-badge>의
						<b-badge variant="info">한여름의 정면돌파</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">A-54 칼리스타</b-badge>의
						<b-badge variant="info">한여름의 별</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">AG-1 네레이드</b-badge>의
						<b-badge variant="info">한여름의 네리네리</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">P-22 하르페이아</b-badge>의
						<b-badge variant="info">한여름의 마이애미</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">커넥터 유미</b-badge>의
						<b-badge variant="info">한여름의 데이트</b-badge>스킨이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">아크로바틱 써니</b-badge>의
						<b-badge variant="info">한여름의 커플 요가</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">럼버제인</b-badge>의
						<b-badge variant="info">한여름의 삼림욕</b-badge>스킨이 추가되었습니다.
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 존재합니다.
					</div>
					<div>
						<b-badge variant="warning">C-77 홍련</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>및
						<b-badge variant="info">드림위버 웨딩 스페셜 : 순백의 연꽃</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200714>2020-07-14</b-card-header>
			<b-collapse id="changelog20200714">
				<b-card-body>
					<div>
						<b-badge variant="warning">라인리터</b-badge>의 2번째 패시브
						<b-badge variant="info">기병 참전</b-badge>의 적용 대상이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다크엘븐 포레스트레인저</b-badge>의 승급시 치명타 증가량이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">포츈</b-badge>,
						<b-badge variant="warning">다프네</b-badge>,
						<b-badge variant="warning">P-49 슬레이프니르</b-badge>의 서약 후 대사 오디오 파일이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다프네</b-badge>의 서약 후 대사 텍스트가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다크엘븐 포레스트레인저</b-badge>의
						<b-badge variant="info">다크엘프 카우걸</b-badge>의 가격이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다크엘븐 포레스트레인저</b-badge>의
						<b-badge variant="info">다크엘프 카우걸</b-badge>에 소품 분리가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">SS급 소형 정찰 드론</b-badge>의 획득처 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">미니 하치코</b-badge>의 획득처 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">세라피아스 앨리스</b-badge>의
						<b-badge variant="info">밤의 여왕의 초대</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">오베로니아 레아</b-badge>의
						<b-badge variant="info">오드리 문 컬렉션 &lt;어덜트 래빗&gt;</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">공진의 알렉산드라</b-badge>의
						<b-badge variant="info">조련사 알렉산드라</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 리리스</b-badge>의
						<b-badge variant="info">위험한 가족 : 유혹하는 메이드</b-badge>및
						<b-badge variant="info">리리스의 본 목적을 벗어난 수영복</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">샬럿</b-badge>의
						<b-badge variant="info">프랑스 풍 보석 비키니</b-badge>및
						<b-badge variant="info">조금 이상한 대행자</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다크엘븐 포레스트레인저</b-badge>의
						<b-badge variant="info">다크엘프 카우걸</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200706>2020-07-06</b-card-header>
			<b-collapse id="changelog20200706">
				<b-card-body>
					<div>
						<b-badge variant="warning">SS급 고속 학습 시스템</b-badge>의 수치 정보가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라인리터</b-badge>의 스탯, 스킬 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">엘븐 포레스트메이커</b-badge>,
						<b-badge variant="warning">다크엘븐 포레스트레인저</b-badge>의 승급 스탯 및 스킬 정보가 추가/수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">아르망 추기경</b-badge>,
						<b-badge variant="warning">소완</b-badge>,
						<b-badge variant="warning">금란 S7</b-badge>,
						<b-badge variant="warning">신속의 칸</b-badge>의 서약 후 대사 오디오 파일이 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">소완</b-badge>의 서약 후 대사 텍스트가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">신속의 칸</b-badge>의
						<b-badge variant="info">드림위버 웨딩 스페셜 : 사막에 핀 꽃</b-badge>스킨 정보가 추가되었습니다.
						해당 스킨은
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 포함되어있습니다.
					</div>
					<div>
						<b-badge variant="warning">베로니카</b-badge>의
						<b-badge variant="info">이단 심문관 베로니카</b-badge>스킨 정보가 추가되었습니다.
						해당 스킨은
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 포함되어있습니다.
					</div>
					<div>
						<b-badge variant="warning">시라유리</b-badge>의 스킬 설명 일부가 수정되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200705>2020-07-05</b-card-header>
			<b-collapse id="changelog20200705">
				<b-card-body>
					<div>
						시험 추가 결과,
						<b-badge variant="warning">성능 문제</b-badge>로
						<b-badge variant="danger">로비 애니메이션 미리보기</b-badge>가 제거되었습니다.
					</div>
					<div>
						<b-badge variant="warning">시라유리</b-badge>의 스킬 이름 및 설명이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">아쿠아</b-badge>,
						<b-badge variant="warning">공진의 알렉산드라</b-badge>,
						<b-badge variant="warning">소완</b-badge>,
						<b-badge variant="warning">아이언 애니</b-badge>,
						<b-badge variant="warning">보속의 마리아</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>전투원 대사의 모바일 환경 레이아웃이 개선되었습니다.</div>
					<div>크롬 브라우저에서 전투원 대사의 오디오 플레이어가 표시되지 않는 문제가 수정되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200703>2020-07-03</b-card-header>
			<b-collapse id="changelog20200703">
				<b-card-body>
					<div>
						<b-badge variant="warning">뽀끄루 대마왕</b-badge>의
						<b-badge variant="warning">마법소녀!? 매지컬 뽀끄루</b-badge>스킨에
						<b-badge variant="danger">로비 애니메이션 미리보기</b-badge>가 시험적으로 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200702>2020-07-02</b-card-header>
			<b-collapse id="changelog20200702">
				<b-card-body>
					<div>
						<b-badge variant="warning">드론 08</b-badge>의 2번째 스킬
						<b-badge variant="info">정밀 스캔</b-badge>의 설명이 누락된 문제가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">엘븐 포레스트메이커</b-badge>의
						<rarity-badge border rarity="S">S 승급</rarity-badge>정보가 추가되었습니다.
						추가된 패시브 스킬의 수치 및 정확한 범위는 업데이트 이후에 갱신될 예정입니다.
					</div>
					<div>
						<b-badge variant="warning">다크엘븐 포레스트레인저</b-badge>의
						<rarity-badge border rarity="S">S 승급</rarity-badge>정보가 추가되었습니다.
						추가된 패시브 스킬의 수치 및 정확한 범위는 업데이트 이후에 갱신될 예정입니다.
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>의 1번째 패시브
						<b-badge variant="info">허공 둔</b-badge>의 설명이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 리리스</b-badge>,
						<b-badge variant="warning">신속의 칸</b-badge>,
						<b-badge variant="warning">철혈의 레오나</b-badge>,
						<b-badge variant="warning">불굴의 마리</b-badge>,
						<b-badge variant="warning">멸망의 메이</b-badge>,
						<b-badge variant="warning">GS-130 피닉스</b-badge>,
						<b-badge variant="warning">T-50 PX 실키</b-badge>,
						<b-badge variant="warning">C-77 레드후드</b-badge>,
						<b-badge variant="warning">다크엘븐 포레스트레인저</b-badge>,
						<b-badge variant="warning">엘븐 포레스트메이커</b-badge>,
						<b-badge variant="warning">M-5 이프리트</b-badge>,
						<b-badge variant="warning">럼버제인</b-badge>,
						<b-badge variant="warning">SS급 출력 강화 회로</b-badge>,
						<b-badge variant="warning">SS급 분석 회로</b-badge>,
						<b-badge variant="warning">SS급 내 충격 회로</b-badge>,
						<b-badge variant="warning">SS급 반응 강화 회로</b-badge>,
						<b-badge variant="warning">SS급 회로 내구 강화</b-badge>,
						<b-badge variant="warning">SS급 회로 최적화</b-badge>,
						<b-badge variant="warning">SS급 연산 강화 회로</b-badge>,
						<b-badge variant="warning">로열 아스널</b-badge>,
						<b-badge variant="warning">베로니카</b-badge>,
						<b-badge variant="warning">SS급 보조 에너지 팩</b-badge>,
						<b-badge variant="warning">SS급 방어 역장</b-badge>의
						교환소 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">금란 S9</b-badge>,
						<b-badge variant="warning">아르망 추기경</b-badge>,
						<b-badge variant="warning">소완</b-badge>,
						<b-badge variant="warning">신속의 칸</b-badge>의 서약 대사 여부가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">시라유리</b-badge>의 3번째 패시브
						<b-badge variant="info">정보전달</b-badge>의 적용 대상이 잘못되어있던 점을 수정했습니다.
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">콘스탄챠 S2</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">세라피아스 앨리스</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">바닐라 A1</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">오베로니아 레아</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">시저스 리제</b-badge>의 대사 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다프네</b-badge>의 대사 정보가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200629>2020-06-29</b-card-header>
			<b-collapse id="changelog20200629">
				<b-card-body>
					<div>
						<b-badge variant="warning">멸망의 메이</b-badge>의
						<b-badge variant="info">드림위버 웨딩 스페셜 : 5월의 신부</b-badge>스킨의
						<b-badge variant="danger">로비 애니메이션</b-badge>여부와 가격이 변경되었습니다.
					</div>
					<div>
						<b-badge variant="warning">이그니스</b-badge>의
						<b-badge variant="info">대마왕 뽀끄루의 첫 번째 심복</b-badge>스킨의
						<b-badge variant="danger">로비 애니메이션</b-badge>여부와 가격이 변경되었습니다.
					</div>
					<div>
						<b-badge variant="warning">이그니스</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">샬럿</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">콘스탄챠 S2</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">바바리아나</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">P/A-00 그리폰</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">프레스터 요안나</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">T-14 미호</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">성벽의 하치코</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">C-77 레드후드</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">E-16 탈론페더</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">엠프리스</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">오베로니아 레아</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">바닐라 A1</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">T-8W 발키리</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">T-2 브라우니</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 리리스</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">AG-1 네레이드</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">화롯가의 포티아</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">아우로라</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">X-00 티아멧</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">아자젤</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">AG-2C 세이렌</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">P-29 린트블룸</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">로열 아스널</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">스카디</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">멸망의 메이</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">트리아이나</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">닥터</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">시저스 리제</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">GS-130 피닉스</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">A-14B 스프리건</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">무적의 용</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">네오딤</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">펜리르</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">랜서 미나</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">캐럴라이나</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">보속의 마리아</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">럼버제인</b-badge>정보에
						<b-badge variant="danger">서약 대사 존재 여부</b-badge>가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">모의전투</b-badge>레이아웃 변경
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200625>2020-06-25</b-card-header>
			<b-collapse id="changelog20200625">
				<b-card-body>
					<div>
						전 전투원의
						<b-badge variant="info">획득처</b-badge>에
						<b-badge variant="exchange">교환소</b-badge>,
						<b-badge variant="apocrypha">외전</b-badge>,
						<b-badge variant="event-exchange">이벤트 교환소</b-badge>,
						<b-badge variant="warning">이벤트 맵</b-badge>정보가 추가되었습니다. (이벤트 맵 드랍 정보는 아직 수집되지 않았습니다.)
					</div>
					<div>
						전 장비에
						<b-badge variant="info">획득처</b-badge>정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="info">장비목록</b-badge>메뉴에
						<b-badge variant="exchange">교환소</b-badge>,
						<b-badge variant="apocrypha">외전</b-badge>,
						<b-badge variant="event-exchange">이벤트 교환소</b-badge>,
						<b-badge variant="warning">이벤트 맵</b-badge>,
						<b-badge variant="danger">Ex 맵 (~Ex)</b-badge>,
						<b-badge variant="success">사이드 맵 (~B)</b-badge>,
						<b-badge variant="warning">일반 맵</b-badge>,
						<b-badge variant="secondary">한정(드랍 없음)</b-badge>필터가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="info">장비목록</b-badge>메뉴의 장비에 표시되는 획득처 중
						<b-badge variant="danger">Ex 맵</b-badge>,
						<b-badge variant="success">사이드 맵</b-badge>,
						<b-badge variant="warning">일반 맵</b-badge>은
						해당 맵이 유일한 드랍 장소일 때에만 표시됩니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200623>2020-06-23</b-card-header>
			<b-collapse id="changelog20200623">
				<b-card-body>
					<div>
						전 전투원에
						<b-badge variant="info">획득처</b-badge>가 추가되었습니다.
						이벤트 드랍 및 제조는 포함되지 않았습니다.
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>의 스탯 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>의 1번째 스킬
						<b-badge variant="info">은밀</b-badge>의 공격력 배수 수정
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>의 2번째 스킬
						<b-badge variant="info">뇌신 일섬</b-badge>의 행동력 계수 수정
					</div>
					<div>
						<b-badge variant="warning">SS등급 보조 에너지 팩</b-badge>의 AP 증가치 수정
					</div>
					<div>
						<b-badge variant="warning">CS 페로</b-badge>의 3번째 패시브
						<b-badge variant="info">상처 가르기</b-badge>의 설명 오타 수정
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>의
						<b-badge variant="info">스킬 수치</b-badge>가 추가되었습니다.
						공격력 배수 수치는 정확하지 않을 수 있습니다.
					</div>
					<div>
						<b-badge variant="info">전투원보기</b-badge>의
						<b-badge variant="info">스킨 상세 보기</b-badge>가 이미지를 제대로 표시하지 않는 문제가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>전투원 정보가 추가되었습니다.
						해당 전투원은
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 포함되어있으며,
						스킬 정보가 온전하지 않습니다.
					</div>
					<div>
						<b-badge variant="warning">T-9 그렘린</b-badge>의
						<b-badge variant="info">휴일의 그렘린</b-badge>스킨 정보가 추가되었습니다.
						해당 스킨은
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 포함되어있습니다.
					</div>
					<div>
						<b-badge variant="warning">GS-130 피닉스</b-badge>의
						<b-badge variant="info">하계 전투복 피닉스</b-badge>스킨의 중파 이미지가 추가되었습니다.
						해당 스킨은
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 포함되어있습니다.
					</div>
					<div>
						<b-badge variant="warning">에키드나</b-badge>의
						<b-badge variant="info">드림위버 웨딩 스페셜 : 순백의 여제</b-badge>스킨 정보가 추가되었습니다.
						해당 스킨은
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>가 포함되어있습니다.
					</div>
					<div>
						<b-badge variant="warning">펜리르</b-badge>의
						<b-badge variant="info">봄맞이 펜리르</b-badge>스킨의 가격이 변경되었습니다.
					</div>
					<div>
						<b-badge variant="warning">로열 아스널</b-badge>의
						<b-badge variant="info">드림위버 웨딩 스페셜 : 이 마음을 그대에게</b-badge>스킨의 가격이 변경되었습니다.
					</div>
					<div>
						<b-badge variant="warning">출력 강화 회로 베타</b-badge>장비 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">분석 회로 베타</b-badge>장비 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">회로 내구 강화 베타</b-badge>장비 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">정밀형 관측 장비</b-badge>장비 정보가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200621>2020-06-21</b-card-header>
			<b-collapse id="changelog20200621">
				<b-card-body>
					<div>
						<b-badge variant="info">유닛정보</b-badge>페이지가
						<b-badge variant="info">전투원정보</b-badge>로 명칭이 변경되었습니다.
					</div>
					<div>
						<b-badge variant="info">전투원정보</b-badge>의 기본 모드를
						<b-badge variant="warning">테이블보기</b-badge>로 변경했습니다.
					</div>
					<div>
						<b-badge variant="info">전투원정보</b-badge>의
						<b-badge variant="warning">상세보기</b-badge>페이지 레이아웃이 변경되었습니다.
					</div>
					<div>
						<b-badge variant="info">전투원정보</b-badge>의 스킨에
						<b-badge variant="warning">가격 표시</b-badge>가 추가됩니다.
					</div>
					<div>
						페이지를 이동해도 이전에 선택한 옵션이 유지되도록 변경되었습니다. 단,
						<b-badge variant="danger">새로고침</b-badge>을 하는 경우에는 초기화됩니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200618>2020-06-18</b-card-header>
			<b-collapse id="changelog20200618">
				<b-card-body>
					<div>
						<b-badge variant="info">모의 전투</b-badge>수치에 링크 보너스 수치가 중복 반영되는 문제 수정
					</div>
					<div>
						<b-badge variant="info">모의 전투</b-badge>수치에 링크 보너스 수치가 반영되지 않는 문제 수정
					</div>
					<div>
						<b-badge variant="info">모의 전투</b-badge>장비의 % 수치가 변동치로 취급되지 않아 변동량 표시가 보이지 않던 문제 수정
					</div>
					<div>
						<b-badge variant="info">모의 전투</b-badge>기능
						<b-badge variant="warning">ALPHA</b-badge>버전 공개
					</div>
					<div>
						<b-badge variant="info">Changelog</b-badge>를 접고 펼 수 있게,
						짝수 줄 배경색을 다르게 수정
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200617>2020-06-17</b-card-header>
			<b-collapse id="changelog20200617">
				<b-card-body>
					<div>
						보호기의
						<b-badge variant="danger">풀링크 보너스</b-badge>중
						<b-badge variant="info">회피</b-badge>수치 오류 수정
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200615>2020-06-15</b-card-header>
			<b-collapse id="changelog20200615">
				<b-card-body>
					<div>
						기동 보호기의
						<b-badge variant="danger">풀링크 보너스</b-badge>중
						<b-badge variant="info">회피</b-badge>수치 오류 수정
					</div>
					<div>
						<b-badge variant="danger">링크 보너스</b-badge>및
						<b-badge variant="danger">풀링크 보너스</b-badge>정보 추가
					</div>
					<div>
						<b-badge variant="warning">A-1 블러디 팬서</b-badge>의 3번째 패시브
						<b-badge variant="warning">순항 모드</b-badge>의 설명 오타 수정
					</div>
					<div>
						<b-badge variant="warning">AG-2C 세이렌</b-badge>의 1번째 스킬
						<b-badge variant="warning">57mm 대공포</b-badge>및 폼 체인지 이후 1번째 스킬
						<b-badge variant="warning">203mm 연장포</b-badge>와 2번째 스킬
						<b-badge variant="warning">초토화 포격</b-badge>의 공격력 계수 오류 및 설명 오타 수정
					</div>
					<div>
						<b-badge variant="warning">P-49 슬레이프니르</b-badge>의 2번째 스킬
						<b-badge variant="warning">한계돌파</b-badge>의 아이콘 오류, 3번째 패시브
						<b-badge variant="warning">멈출 수 없는 질주</b-badge>의 설명 오류 수정
					</div>
					<div>
						<b-badge variant="warning">RF87 로크</b-badge>의 3번째 패시브
						<b-badge variant="warning">전자기 유도</b-badge>의 설명 오류 수정
					</div>
					<div>
						<b-badge variant="warning">티아멧</b-badge>의 2번째 스킬
						<b-badge variant="warning">풀 웨폰 어썰트</b-badge>의 고정 피해 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">X-00 에밀리</b-badge>의 2번째 패시브
						<b-badge variant="warning">급속 충전</b-badge>의 AP 수치 오류 및 설명 오타 수정
					</div>
					<div>
						<b-badge variant="warning">공진의 알렉산드라</b-badge>의 폼 체인지 이후 2번째 스킬
						<b-badge variant="warning">전기폭풍</b-badge>의 설명 오류 수정
					</div>
					<div>
						<b-badge variant="warning">네오딤</b-badge>의 2번째 패시브
						<b-badge variant="warning">반응 방벽</b-badge>의 방어력 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">멸망의 메이</b-badge>의 3번째 패시브
						<b-badge variant="warning">길동무 모집!?</b-badge>의 아이콘 오류 수정
					</div>
					<div>
						<b-badge variant="warning">불굴의 마리</b-badge>의 2번째 패시브
						<b-badge variant="warning">대공 지휘</b-badge>의 적중 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">뽀끄루 대마왕</b-badge>의 2번째 스킬
						<b-badge variant="warning">크림슨 익스큐션</b-badge>의 AP 수치 오류, 1번째 패시브
						<b-badge variant="warning">세뇌의 파동</b-badge>의 설명 오류 수정
					</div>
					<div>
						<b-badge variant="warning">샬럿</b-badge>의 1번째 스킬
						<b-badge variant="warning">앙 가르드</b-badge>의 적중 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">에이다 Type-G</b-badge>의 2번째 패시브
						<b-badge variant="warning">연산 최적화</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">에키드나</b-badge>의 1번째 스킬
						<b-badge variant="warning">포식</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">오베로니아 레아</b-badge>의 버프/디버프 수치 오류, 1번째 스킬
						<b-badge variant="warning">호우 주의보</b-badge>의 침수 설명 누락 수정
					</div>
					<div>
						<b-badge variant="warning">철혈의 레오나</b-badge>의 폼 체인지 이후 2번째 패시브
						<b-badge variant="warning">방어 지휘</b-badge>의 방어력 및 행동력 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">타이런트</b-badge>의 1번째 스킬
						<b-badge variant="warning">타이런트 바이트</b-badge>의 공격력 계수 오류, 2번째 스킬
						<b-badge variant="warning">프라이멀 파이어</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">P-24 핀토</b-badge>의 3번째 패시브
						<b-badge variant="warning">강행 돌입</b-badge>의 설명 누락 및 1번째 스킬
						<b-badge variant="warning">위협 사격</b-badge>의 받는 피해 증가 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">A-54 칼리스타</b-badge>의 1번째 스킬
						<b-badge variant="warning">조준 포격</b-badge>의 공격력 계수 오류, 2번째 스킬
						<b-badge variant="warning">90mm HEAT탄 연사</b-badge>의 공격력 계수 오류 및 설명 누락 수정
					</div>
					<div>
						<b-badge variant="warning">AG-1 네레이드</b-badge>의 1번째 스킬
						<b-badge variant="warning">벌집 만들기</b-badge>의 공격력 계수 오류, 2번째 스킬
						<b-badge variant="warning">무차별 난사</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">AT-100 비스트헌터</b-badge>의 1번째 스킬
						<b-badge variant="warning">157mm HEAT탄</b-badge>의 공격력 계수 오류, 2번째 스킬
						<b-badge variant="warning">유산탄 포격</b-badge>의 공격력 계수 오류, 스킬 범위 오류 수정
					</div>
					<div>
						<b-badge variant="warning">GS-130 피닉스</b-badge>의 2번째 패시브
						<b-badge variant="warning">숙련된 조준</b-badge>의 치명타 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">P-3M 운디네</b-badge>의 2번째 스킬
						<b-badge variant="warning">F.F 미사일</b-badge>의 방어 관통 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">S12 쉐이드</b-badge>의 1번째 스킬
						<b-badge variant="warning">연속사격</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">S5 기간테스</b-badge>의 1번째 패시브
						<b-badge variant="warning">거점 방어 모드</b-badge>의 받는 피해 감소 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">T-60 불가사리</b-badge>의 1번째 스킬
						<b-badge variant="warning">쇼크 스파이크</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">마법소녀 매지컬 모모</b-badge>의 1번째 스킬
						<b-badge variant="warning">마법신의 요술봉</b-badge>의 피해량 증가 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">마법소녀 매지컬 백토</b-badge>의 1번째 패시브
						<b-badge variant="warning">정의는 지지 않아!</b-badge>의 설명 오류 수정
					</div>
					<div>
						<b-badge variant="warning">스파토이아</b-badge>의 1번째 스킬
						<b-badge variant="warning">슈팅스타</b-badge>의 공격력 계수 오류, 2번째 스킬
						<b-badge variant="warning">CQB 돌입</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">아이언 애니</b-badge>의 2번째 패시브
						<b-badge variant="warning">범죄자 체포</b-badge>의 스킬 범위 오류 수정
					</div>
					<div>
						<b-badge variant="warning">엠프리스</b-badge>의 1번째 패시브
						<b-badge variant="warning">의태</b-badge>의 피해 최소화 횟수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">질주하는 아탈란테</b-badge>의 2번째 패시브
						<b-badge variant="warning">펠타스트 숙련</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">캐럴라이나</b-badge>의 1번째 패시브
						<b-badge variant="warning">LBRB 스피커</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">커넥터 유미</b-badge>의 1번째 스킬
						<b-badge variant="warning">과부하 방전</b-badge>의 AP 수치 오류, 2번째 스킬
						<b-badge variant="warning">전파 발신</b-badge>의 AP 수치 오류, 1번째 패시브
						<b-badge variant="warning">이동형 기지국</b-badge>의 범위 증가 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">코코 인 화이트셸</b-badge>의 1번째 스킬
						<b-badge variant="warning">운석 파쇄 드릴</b-badge>의 설명 수정
					</div>
					<div>
						<b-badge variant="warning">키르케</b-badge>의 2번째 스킬
						<b-badge variant="warning">패밀리어 소환!</b-badge>의 누락 행 추가
					</div>
					<div>
						<b-badge variant="warning">AS-12 스틸 드라코</b-badge>의 1번째 패시브
						<b-badge variant="warning">진압 개시</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">LRL</b-badge>의 2번째 스킬
						<b-badge variant="warning">사이클롭스 이터널 빔</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">M-5 이프리트</b-badge>의 1번째 스킬
						<b-badge variant="warning">140mm 고폭탄</b-badge>의 공격력 계수 오류, AP 수치 오류, 2번째 스킬
						<b-badge variant="warning">곡사 포격</b-badge>의 공격력 계수 오류, AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">P-18 실피드</b-badge>의 2번째 스킬
						<b-badge variant="warning">열 추적 로크 미사일</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">P-29 린트블룸</b-badge>의 2번째 패시브
						<b-badge variant="warning">모두 주목해주세요~!</b-badge>의 누락 행 수정
					</div>
					<div>
						<b-badge variant="warning">T-10 님프</b-badge>의 2번째 스킬
						<b-badge variant="warning">제압 난사</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">T-3 레프리콘</b-badge>의 2번째 스킬
						<b-badge variant="warning">경기관총 난사</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">바닐라 A1</b-badge>의 1번째 스킬
						<b-badge variant="warning">다리 노리기</b-badge>의 공격력 계수 오류, 2번째 패시브
						<b-badge variant="warning">앞장서시죠</b-badge>의 설명 오류 수정
					</div>
					<div>
						<b-badge variant="warning">시저스 리제</b-badge>의 1번째 스킬
						<b-badge variant="warning">장갑 오려내기</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">A-14B 스프리건</b-badge>의 2번째 스킬
						<b-badge variant="warning">BFG1000 저격용 캐논포</b-badge>의 공격력 계수 오류, 피해량 증가 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">A-6 이오</b-badge>의 2번째 스킬
						<b-badge variant="warning">전탄 방출</b-badge>의 공격력 계수 오류, AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">CT103 포트리스</b-badge>의 폼 체인지 정보 오류 수정
					</div>
					<div>
						<b-badge variant="warning">K180 셀주크</b-badge>의 1번째 스킬
						<b-badge variant="warning">175mm 직사포</b-badge>의 공격력 계수 오류, 2번째 스킬
						<b-badge variant="warning">175mm 곡사포</b-badge>의 공격력 계수 오류 수정
					</div>
					<div>
						<b-badge variant="warning">세띠</b-badge>의 2번째 스킬
						<b-badge variant="warning">쏘지마세요!</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">AA-7 임펫</b-badge>의 1번째 패시브
						<b-badge variant="warning">시제 EFP탄</b-badge>의 방어 관통 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">GS-10 샌드걸</b-badge>의 2번째 스킬
						<b-badge variant="warning">AT 미사일</b-badge>의 방어 관통 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">T-9 그렘린</b-badge>의 승급 정보 누락, 1번째 패시브
						<b-badge variant="warning">화기 불법 개조</b-badge>의 치명타 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">P-2000 지니야</b-badge>의 2번째 스킬
						<b-badge variant="warning">채프 미사일</b-badge>의 회피 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">레이시</b-badge>의 1번째 스킬
						<b-badge variant="warning">라이트닝 샷</b-badge>의 AP 수치 오류, 2번째 스킬
						<b-badge variant="warning">스톰 볼트</b-badge>의 AP 수치 오류 수정
					</div>
					<div>
						<b-badge variant="warning">SD3M 펍 헤드</b-badge>의 1번째 스킬
						<b-badge variant="warning">테이저 건</b-badge>의 AP 수치 오류, 2번째 스킬
						<b-badge variant="warning">체포 사슬</b-badge>의 설명 오타 수정
					</div>
					<div>
						<b-badge variant="warning">드론 08</b-badge>의 1번째 스킬
						<b-badge variant="warning">충격파 미사일</b-badge>의 AP 수치 오류, 2번째 스킬
						<b-badge variant="warning">정밀 스캔</b-badge>의 누락 행 수정
					</div>
					<div>
						<b-badge variant="warning">프레스터 요안나</b-badge>의 2번째 스킬
						<b-badge variant="warning">기사도</b-badge>의 누락 행 수정
					</div>
					<div>
						<b-badge variant="warning">화롯가의 포티아</b-badge>의 2번째 스킬
						<b-badge variant="warning">파이어레인</b-badge>의 스킬 범위 오류, 지속 화염 피해 누락 오류 수정
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200610>2020-06-10</b-card-header>
			<b-collapse id="changelog20200610">
				<b-card-body>
					<div>
						<b-badge variant="warning">T-10 님프</b-badge>의 2번째 액티브 스킬
						<b-badge variant="warning">제압 난사</b-badge>의 공격력 계수가 잘못 기입된 점 수정
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200609>2020-06-09</b-card-header>
			<b-collapse id="changelog20200609">
				<b-card-body>
					<div>
						<b-badge variant="warning">Vue-Router</b-badge>적용
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200608>2020-06-08</b-card-header>
			<b-collapse id="changelog20200608">
				<b-card-body>
					<div>
						<b-badge variant="warning">신속의 칸</b-badge>의 1번째 패시브 스킬 설명 일부가 누락된 점 수정
					</div>
					<div>
						<b-badge variant="warning">에키드나</b-badge>의 1번째 액티브 스킬
						<b-badge variant="warning">포식</b-badge>의 공격 범위가 잘못 기입되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">정밀형 전투 시스템</b-badge>명칭이
						<b-badge variant="info">정밀형 OS 시스템</b-badge>으로 표시되던 점 수정
					</div>
					<div>
						<b-badge variant="warning">초정밀 조준기</b-badge>의 치명타 속성이
						<b-badge variant="info">공격력</b-badge>으로 표시되던 점 수정
					</div>
					<div>
						일부 장비의
						<b-badge variant="warning">특정 효과 해제</b-badge>속성이
						<b-badge variant="info">해로운 효과 해제</b-badge>로 표시되던 점 수정
					</div>
					<div>
						<b-badge variant="warning">콘스탄챠 S2</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>,
						<b-badge variant="info">안경을 벗은 콘스탄챠</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">세라피아스 앨리스</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>,
						<b-badge variant="info">밤의 여왕의 초대 (중파만)</b-badge>스킨,
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">오베로니아 레아</b-badge>의
						<b-badge variant="info">드림위버 웨딩 스페셜 : 요정 여왕</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">시저스 리제</b-badge>의
						<b-badge variant="info">리제 인 더 베드</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">다프네</b-badge>의
						<b-badge variant="info">다프네의 우아한 수영복</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">소완</b-badge>의
						<b-badge variant="info">소완의 함정 (중파만)</b-badge>스킨,
						<b-badge variant="info">술잔과 진솔한 이야기</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">보속의 마리아</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">화롯가의 포티아</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">CS 페로</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">펜리르</b-badge>의
						<b-badge variant="info">봄맞이 늑대 펜리르</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">T-50 PX 실키</b-badge>의
						<b-badge variant="info">하계 전투복 실키</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">GS-130 피닉스</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>,
						<b-badge variant="info">하계 전투복 피닉스</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">T-20S 노움</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>,
						<b-badge variant="info">위험한 가족 : 가족의 탄생 (중파만)</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">철혈의 레오나</b-badge>의
						<b-badge variant="info">레이싱 퀸 레오나</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
					<div>
						<b-badge variant="warning">T-8W 발키리</b-badge>의
						<b-badge variant="info">1년간의 추억</b-badge>스킨에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200607>2020-06-07</b-card-header>
			<b-collapse id="changelog20200607">
				<b-card-body>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>의 스킬 정보 추가
					</div>
					<div>
						<b-badge variant="warning">철혈의 레오나</b-badge>의 2번째 액티브 스킬
						<b-badge variant="warning">돌격 명령</b-badge>의 AP 고정 수치가 표시되지 않는 문제 수정
					</div>
					<div>
						<b-badge variant="warning">소완제 수제 도시락</b-badge>에
						<b-badge variant="warning">펜리르</b-badge>조건이
						<b-badge variant="info">unit</b-badge>으로 표시되는 문제 수정
					</div>
					<div>
						<b-badge variant="warning">달의 마력이 담긴 송편</b-badge>의
						<b-badge variant="warning">해로운 효과 해제</b-badge>속성이
						<b-badge variant="info">???</b-badge>로 표시되는 문제 수정
					</div>
					<div>
						<b-badge variant="warning">달의 마력이 담긴 송편</b-badge>의
						<b-badge variant="info">랜덤</b-badge>조건이 표시되지 않는 문제 수정
					</div>
					<div>
						<b-badge variant="warning">럼버제인</b-badge>의 스킬 정보 추가
					</div>
					<div>
						<b-badge variant="warning">A-87 밴시</b-badge>의 1번째 패시브 스킬의 오타 수정
					</div>
					<div>
						<b-badge variant="warning">아르망 추기경</b-badge>의 1번째 액티브 스킬의 템플릿 오타 수정
					</div>
					<div>
						<b-badge variant="warning">바닐라 A1</b-badge>의 1번째 패시브 스킬의 AP 증가량이 잘못 기입되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">공진의 알렉산드라</b-badge>의 1번째, 2번째 액티브 스킬과
						<b-badge variant="info">폼 체인지</b-badge>후 1번째, 2번째 액티브 스킬의
						AP, 회피 감소량이 잘못 기입되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">소완</b-badge>의 1번째 액티브 스킬의 공격력 계수가 잘못 기입되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">아이언 애니</b-badge>의 1번째 액티브 스킬의 공격력 계수가 잘못 기입되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">보속의 마리아</b-badge>의 1번째 액티브 스킬의 공격력 계수가 잘못 기입되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">블랙 리리스</b-badge>의 2번째 액티브 스킬의
						<b-badge variant="info">피해 무효화</b-badge>횟수와 1번째 패시브 스킬의
						<b-badge variant="info">전투 속행</b-badge>HP가 잘못 기입되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">성벽의 하치코</b-badge>의 2번째 패시브 스킬의
						<b-badge variant="info">해로운 효과 해제</b-badge>가 확률 발동으로 작성되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">펜리르</b-badge>의 1번째 패시브 스킬의 AP 증가량이 표시되지 않는 문제 수정
					</div>
					<div>
						<b-badge variant="warning">질주하는 아탈란테</b-badge>의 1번째 패시브 스킬의
						<b-badge variant="info">공격력</b-badge>수치가 표시되지 않는 문제,
						2번째 패시브 스킬의 아이콘이 표시되지 않는 점 수정
					</div>
					<div>
						<b-badge variant="warning">블랙 웜 S9</b-badge>의 1번째 패시브 스킬
						<b-badge variant="warning">뒤로 피하세요!</b-badge>이 표시되지 않는 문제, 3번째 패시브 스킬
						<b-badge variant="warning">검은 분진</b-badge>의 대상이 아군으로 되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">시저스 리제</b-badge>의 2번째 패시브 스킬의 오타 수정
					</div>
					<div>
						<b-badge variant="warning">AL 팬텀</b-badge>의
						<b-badge variant="info">특급 요원 팬텀</b-badge>스킨이 승급 스킨으로 분류되지 않고 표시되지 않는 문제 수정
					</div>
					<div>
						<b-badge variant="warning">포츈</b-badge>의
						<b-badge variant="info">기본 스킨</b-badge>과
						<b-badge variant="info">초기형 포츈</b-badge>이 뒤바뀌어있던 점,
						<b-badge variant="info">초기형 포츈</b-badge>의 중파가 누락되어있던 점 수정
					</div>
					<div>
						<b-badge variant="warning">장비 속성</b-badge>의
						<b-badge variant="info">HP 50%</b-badge>,
						<b-badge variant="info">HP 25%</b-badge>의 이상/이하 조건이 반대로 표시되던 문제 수정
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>의
						<b-badge variant="info">한겨울의 만찬 라비아타</b-badge>스킨에 안경 ON/OFF 기능 추가
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>의
						<b-badge variant="info">한겨울의 만찬 라비아타</b-badge>스킨,
						<b-badge variant="warning">MH-4 테티스</b-badge>
						<b-badge variant="info">기본 스킨</b-badge>에
						<b-badge variant="danger">플레이스토어 버전 CG</b-badge>시험 추가
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200606>2020-06-06</b-card-header>
			<b-collapse id="changelog20200606">
				<b-card-body>
					<div>배포 시작</div>
					<div>레벨 10 이상의 스킬 범위가 정상적으로 표시되지 않는 문제 수정</div>
					<div>
						<b-badge variant="warning">오베로니아 레아</b-badge>의 2번째 패시브 스킬
						<b-badge variant="warning">기상 최적화</b-badge>의 1~9 레벨 범위가 올바르지 않은 문제 수정
					</div>
					<div>승급 후 자원 소모도 볼 수 있도록 수정</div>
					<div>파이어폭스를 제외한 브라우저에서 스킨이 잘려 표시되는 문제 수정</div>
					<div>모바일 사이즈에서 유닛 정보 내용이 넘치는 문제 수정</div>
					<div>모바일 사이즈에서 스킬 정보가 넘치는 문제 수정</div>
					<div>
						<b-badge variant="warning">세띠</b-badge>의 유형, 2번째 액티브 스킬
						<b-badge variant="warning">쏘지마세요!</b-badge>의 사거리와 AP가 잘못 기입되어있던 문제 수정
					</div>
					<div>
						<b-badge variant="warning">레이시</b-badge>의 1번째 패시브 스킬
						<b-badge variant="warning">전자기 공명</b-badge>의 전기 속성 아군 설명이 올바르지 못하게 표시되던 문제 수정
					</div>
					<div>
						<b-badge variant="warning">라비아타 프로토타입</b-badge>의 2번째 액티브 스킬
						<b-badge variant="warning">철충 대파괴</b-badge>의 AP가 누락되어있던 문제 수정
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200605>2020-06-05</b-card-header>
			<b-collapse id="changelog20200605">
				<b-card-body>
					<div>
						<b-badge variant="warning">켈베로스 "드림위버 웨딩 스페셜 : 오늘은 얌전히!"</b-badge>,
						<b-badge variant="warning">세띠 "드림위버 웨딩 스페셜 : 안식처"</b-badge>,
						<b-badge variant="warning">블랙 웜 S9</b-badge>스킨 추가
					</div>
					<div>
						<b-badge variant="warning">세띠</b-badge>스킬 정보 추가
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200604>2020-06-04</b-card-header>
			<b-collapse id="changelog20200604">
				<b-card-body>
					<div>유닛 스킬 정보 작성 완료 (세띠, 럼버제인 제외)</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200530>2020-05-30</b-card-header>
			<b-collapse id="changelog20200530">
				<b-card-body>
					<div>
						<b-badge variant="info">유닛 모달</b-badge>내 스킨에
						<b-badge variant="info">로비 애니메이션</b-badge>여부 추가.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200523>2020-05-23</b-card-header>
			<b-collapse id="changelog20200523">
				<b-card-body>
					<div>
						<b-badge variant="info">유닛 모달</b-badge>완성.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200521>2020-05-21</b-card-header>
			<b-collapse id="changelog20200521">
				<b-card-body>
					<div>
						유닛정보
						<b-badge variant="info">일반 보기</b-badge>,
						<b-badge variant="info">그룹별 보기</b-badge>완성
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200518>2020-05-18</b-card-header>
			<b-collapse id="changelog20200518">
				<b-card-body>
					<div>
						유닛정보
						<b-badge variant="info">테이블 보기</b-badge>완성
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200517>2020-05-17</b-card-header>
			<b-collapse id="changelog20200517">
				<b-card-body>
					<div>
						<b-badge variant="info">장비정보</b-badge>페이지 완성
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200516>2020-05-16</b-card-header>
			<b-collapse id="changelog20200516">
				<b-card-body>
					<div>프로젝트 시작</div>
				</b-card-body>
			</b-collapse>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import RarityBadge from "@/components/RarityBadge.vue";
import { UpdateTitle } from "@/libs/Functions";

@Component({
	components: {
		RarityBadge,
	},
})
export default class Changelog extends Vue {
	private mounted () {
		UpdateTitle("Changelog");
	}
}
</script>

<style lang="scss">
#app > .container > .changelog {
	.card-body > div {
		padding: 5px 5px 2px;
		border-bottom: 1px solid #d9d9d9;

		&:last-child {
			border-bottom: 0;
		}
		&:nth-child(2n) {
			background-color: rgba(0, 0, 0, 0.07);
		}
	}
	.badge {
		margin-right: 0.25em;
		margin-bottom: 5px;
		font-size: inherit;
	}
}
</style>
