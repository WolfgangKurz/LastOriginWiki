import { Fragment, FunctionalComponent, h } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <Fragment>
	<ChangelogItem title="Build 7567" date="2020-12-30"
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 전투원 정보에 전용장비 정보가 표시되지 않던 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 스테이터스 계산기의 장비 슬롯의 배경이미지가 표시되지 않던 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 장비 목록에 전용장비의 전투원이 표시되지 않던 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 장비 정보에 전용장비의 전투원이 정상적으로 표시되지 않던 문제가 수정되었습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li><span class="badge bg-warning text-dark">BGM</span> 메뉴에 Talk_07이 추가되었습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li><span class="badge bg-warning text-dark">경험치 계산기</span> 메뉴가 숨겨졌습니다. 리뉴얼 준비중입니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2020-12-30 12:39:07</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7561" date="2020-12-28"
		site={ <Fragment>
			<li>🎄 메리 크리스마스! 🎄 였나요? 저는 내내 이거 고쳤습니다.</li>
			<li>사이트에서 사용되는 DB의 용량을 최적화했습니다.</li>
			<li>전투원 스킬 DB의 구조를 최적화했습니다.</li>
		</Fragment> }
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">세계정보</span>의 일부 지역의 웨이브 수가 비정상적으로 표시되는 문제가 수정되었습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">교환소</span> 메뉴가 추가되었습니다.<br />
				현재 및 역대 <span class="badge bg-exchange">전투원/장비 교환소</span>와 <span class="badge bg-exchange">이벤트 교환소</span> 정보가 표시됩니다.<br />
				<span class="badge bg-dark">지고의 저녁식사</span> 이외의 이벤트는 현재 항목 추가 일자 및 당시 교환 가능 갯수를 조사하고 있습니다.
			</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2020-12-28 01:10:11</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7381" date="2020-12-23"
		bugfix={ <Fragment>
			<li>전투원의 전투 승리 호감도 변동치가 올바른 수치로 변경되었습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>에 <span class="badge bg-supplementary">외전</span> 및
				<span class="badge bg-primary">외부 통신 요청</span> 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>의 클리어 보상의 보상 표시가 이제
				<span class="badge bg-secondary">클리어 보상</span>과 <span class="badge bg-secondary">★4 보상</span>으로 분리됩니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>의 클리어 보상에 <span class="badge bg-secondary">클리어 조건</span>이 추가되었습니다.
			</li>
		</Fragment> }
		update={ <Fragment>
			<li>이제 장비의 획득처가 <span class="badge bg-primary">외부 통신 요청</span>인 경우 별도 행으로 분류됩니다.</li>
			<li>이제 적의 등장 스테이지가 <span class="badge bg-primary">외부 통신 요청</span>인 경우 별도 행으로 분류됩니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2020-12-23 01:39:55</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7331" date="2020-12-21"
		bugfix={ <Fragment>
			<li>적 정보에서 스킬의 피해량이 잘못 표시되던 문제를 수정했습니다.</li>
			<li>기존 세계 정보의 일부 잘못되어있 적 배치 및 배치된 적 정보가 수정되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">쿠노이치 카엔</span>의 2번째 액티브
				<span class="badge bg-substory">오의 [화신강림]</span>의 피해량 수치가 잘못되어있던 점을 수정했습니다.
			</li>
			<li>스킬의 범위에 표시되는 위력이 50%, 25%일 때 올바르지 않은 색상으로 표시되던 문제가 수정되었습니다.</li>
			<li>전투원의 링크 보너스의 스킬 위력이 스킬 설명에 반영되지 않던 문제가 수정되었습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>이벤트 <span class="badge bg-warning text-dark">낙원으로부터 온 초대장</span>의 적 정보가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>에서 맵을 선택할 때 주소에
				<span class="badge bg-secondary">#drops</span>가 추가되던 것을 삭제했습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7325" date="2020-12-21"
		new={ <Fragment>
			<li>새 이벤트 <span class="badge bg-warning text-dark">낙원으로부터 온 초대장</span>의 정보가 추가되었습니다.</li>
			<li>새 전투원 <span class="badge bg-warning text-dark">레나 더 챔피언</span>의 정보가 추가되었습니다.</li>
			<li>새 이벤트 <span class="badge bg-warning text-dark">메리</span>의 정보가 추가되었습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li><span class="badge bg-warning text-dark">A-6 이오</span>의 S, SS 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">랜서 미나</span>의 S, SS 승급 정보가 추가되었습니다.</li>
		</Fragment> }
		skin={ <Fragment>
			<li><span class="badge bg-warning text-dark">포이</span>의 스킨 <span class="badge bg-danger">우유 도둑 포이</span>의 정보가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">A-6 이오</span>의 스킨 <span class="badge bg-danger">한 겨울의 약속</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">A-6 이오</span>의 스킨 <span class="badge bg-danger">한 겨울의 약속</span>의 정보가 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">이터니티</span>의 기본 스킨의 중파 일러스트가 추가되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7301" date="2020-12-19"
		new={ <Fragment>
			<li><span class="badge bg-warning text-dark">장비정보</span>의 장비 효과 필터 목록을 유형별로 구분했습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span>의 스킬 효과 필터의 기능이 개선되었습니다.<br />
				이제 <span class="badge bg-substory">자신</span>, <span class="badge bg-substory">아군</span>, <span class="badge bg-substory">적군</span> 필터가
				실제 버프의 적용 대상을 기준으로 적용됩니다.
			</li>
			<li>
				전투원 스킬 정보의 버프 정보가 개선되었습니다.<br />
				버프의 적용 대상에 <span class="badge bg-stat-def">아군</span>, <span class="badge bg-stat-def">적군</span> 여부가 추가되었습니다.<br />
				이제 <span class="badge bg-danger">아군 또는 적군이 n체일 때</span> 조건의 전투원 유형이 표시됩니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>의 <span class="badge bg-secondary">탐사 정보</span>의
				<span class="badge bg-secondary">추가 획득 가능</span> 소모품의 획득 확률 표시가 추가되었습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7218" date="2020-12-16"
		new={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span>의 필터에 <span class="badge bg-secondary">스킬 속성 필터</span>가 추가되었습니다.<br />
				해당 속성의 스킬을 가진 전투원이 필터됩니다.
			</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 스킬 효과 필터 목록을 유형별로 구분했습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7209" date="2020-12-15"
		bugfix={ <Fragment>
			<li>일부 전투원의 스킬의 계수가 올바르지 않던 문제를 수정했습니다.</li>
			<li>일부 전투원의 스킬의 계수가 "스킬 위력"에 영향을 받지 않던 문제를 수정했습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>전투원의 스킬 계수를 표시하는 뱃지의 배경 색상을 진하게 변경했습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7207" date="2020-12-14"
		bugfix={ <Fragment>
			<li>일부 전투원의 스킬의 계수/설명이 누락된 문제를 수정했습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7204" date="2020-12-14"
		bugfix={ <Fragment>
			<li>적 스킬의 버프 수치가 스킬 레벨 2 수치로 표시되던 문제를 수정했습니다.</li>
			<li>소환물의 버프 수치가 스킬 레벨 2 수치로 표시되던 문제를 수정했습니다.</li>
			<li>전투원의 웨이브 승리 호감도 변동 수치가 잘못 표시되던 문제를 수정했습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>변경된 시설 수치가 반영되었습니다.</li>
			<li>변경된 전투원 스킬 공격력 계수가 반영되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7186" date="2020-12-14"
		bugfix={ <Fragment>
			<li>전투원 일러스트의 배경, 스킬 범위 등의 이미지가 표시되지 않던 문제를 수정했습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 7185" date="2020-12-14"
		site={ <Fragment>
			<li>Changelog의 디자인을 변경했습니다.</li>
			<li>빌드 번호를 추가했습니다.</li>
			<li>데이터 DB 파일을 분리했습니다. (동적 로드는 아직입니다!)</li>
		</Fragment> }
		bugfix={ <Fragment>
			<li>일부 적의 정보를 보려고 하면 페이지가 작동하지 않던 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">생명의 세레스티아</span>의 스킨 <span class="badge bg-substory">세레스티아 카우걸</span>의
				중파 정보가 누락되어있던 점을 수정했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">MH-4 테티스</span>의 스킨 <span class="badge bg-substory">소악마인가? 소정령인가?</span>의
				일러스트레이터 정보가 잘못되어있던 점을 수정했습니다.
			</li>
			<li>사이트의 폰트가 툴팁에서 사용되지 않던 문제를 수정했습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li><span class="badge bg-warning text-dark">전투원정보</span>에 <span class="badge bg-substory">제조 시간</span> 보기가 추가되었습니다.</li>
		</Fragment> }
		delete={ <Fragment>
			<li>저작권자 <span class="badge bg-warning text-dark">(주)스마트조이</span>의 요청으로 <span class="badge bg-dark">웨이브 별 드랍 정보</span>를 삭제했습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>전투원 및 장비의 획득처 표시를 개선했습니다.</li>
		</Fragment> }
		skin={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">AG-1 네레이드</span>의 스킨 <span class="badge bg-substory">한여름의 네리네리</span>의
				로비 애니메이션 여부가 갱신되었습니다.
			</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2020-12-14 02:19:27</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20201207" date="2020-12-07"
		bugfix={ <Fragment>
			<li>모든 전투원의 호감도 수치가 잘못 표기된 문제를 수정했습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li>신규 전투원 <span class="badge bg-warning text-dark">천공의 엘라</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">개량형 니트로 EX 3500</span>의 정보가 추가되었습니다.</li>
		</Fragment> }
		skin={ <Fragment>
			<li><span class="badge bg-warning text-dark">AT72 라인리터</span>의 스킨 <span class="badge bg-substory">RheinTiger 모델</span>이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">징벌의 사디어스</span>의 스킨 <span class="badge bg-substory">뇌전룡 의상</span>이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">자비로운 리앤</span>의 스킨 <span class="badge bg-substory">데이트 복장</span>이 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">쿠노이치 제로</span>의 스킨 <span class="badge bg-substory">흐트러진 꽃</span>의 중파 일러스트가
		추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AG-1 네레이드</span>의 스킨 <span class="badge bg-substory">한여름의 네리네리</span>의
				로비 애니메이션 여부가 수정되었습니다.
			</li>
		</Fragment> }
		update={ <Fragment>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>소모품 정보가 갱신되었습니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2020-12-07 15:36:17</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20201206" date="2020-12-06"
		new={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">세계 정보</span>의 드랍 정보에 <span class="badge bg-dark">웨이브 별 드랍 정보</span>버튼이 추가되었습니다.<br />
				웨이브 별 드랍 정보에서는 각 웨이브의 전투원/장비/소모품의 드랍 확률도 확인할 수 있습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20201205" date="2020-12-05"
		new={ <Fragment>
			<li>
				전투원/적 스킬 정보에 <span class="badge bg-warning text-dark">보호 무시</span>, <span class="badge bg-danger">땅 찍기</span>,
				<span class="badge bg-success">적중 보정</span>, <span class="badge bg-dark">소환물</span> 정보가 추가되었습니다.<br />
				소환물은 뱃지를 눌러 자세한 정보를 확인할 수 있습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20201203" date="2020-12-03"
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">8-8</span>의 적 정보가 정확하지 않던 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">세계정보</span>의 지도 표시를 변경했습니다.<br />
				<span class="badge bg-substory">할로윈 파크 패닉</span>의 지도가 정상적으로 표시됩니다.
			</li>
			<li><span class="badge bg-warning text-dark">무적의 용</span>의 기본 및 서약 대사의 "액티브 스킬" 오디오가 일부 환경에서 재생되지 않는 문제를 수정했습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li>
				전투원의 스킬 정보에 <span class="badge bg-danger">확률 발동 버프</span>의 확률 표기를 추가했습니다.<br />
				해당 확률은 호감도 또는 버프/디버프 효과 레벨에 영향을 받지 않으며, 오직 스킬 레벨과 <span class="badge bg-substory">효과 발동</span> 수치에만 영향을 받습니다.<br />
				<span class="badge bg-secondary">효과 발동 수치 예) LRL의 전용 장비 "용살자의 징표"</span>
			</li>
		</Fragment> }
		update={ <Fragment>
			<li>2020년 12월 교환소 정보가 갱신되었습니다.</li>
			<li>일부 버프 이름이 갱신되었습니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2020-12-03 02:20:15</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20201202" date="2020-12-02"
		new={ <Fragment>
			<li><span class="badge bg-warning text-dark">세계정보</span>의 지역에 지역 이름 및 설명이 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">전투원 페이지</span>의 상단 탭 구성을 변경했습니다.<br />
				<span class="badge bg-substory">기본정보</span>는 전투원의 소개글과 기존의 도감 정보, 전용 장비, 호감도 정보, 획득처 정보를 포함합니다.
				도감 정보에 전투원의 키와 몸무게, 사용 무기 정보가 추가되었습니다.<br />
				<span class="badge bg-substory">링크/스킬</span>은 링크 보너스, 풀링크 보너스, 출격 자원, 스킬 정보를 포함합니다.
			</li>
			<li><span class="badge bg-warning text-dark">적 정보</span> 팝업의 스킬 정보에 버프 정보가 추가되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20201201" date="2020-12-01"
		bugfix={ <Fragment>
			<li>전투원 스테이터스의 적중률/치명타/회피율이 비정상적인 값으로 변경되는 문제를 수정했습니다.</li>
			<li>일부 액티브 스킬 대사가 여러개로 나뉜 전투원의 대사가 누락되어있던 점을 수정했습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>전투원 및 장비의 획득처가 갱신되었습니다. (할로윈 파크 패닉 교환소, 외전 보상)</li>
			<li><span class="badge bg-warning text-dark">RF87 로크</span>의 기본 스킨의 로비 애니메이션 여부가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">켈베로스</span>의 스킬 변경점을 반영했습니다.</li>
			<li><span class="badge bg-warning text-dark">미스세이프티</span>의 스킬 변경점을 반영했습니다.</li>
			<li><span class="badge bg-warning text-dark">프로스트 서펀트</span>의 스킬 변경점을 반영했습니다.</li>
			<li><span class="badge bg-warning text-dark">CT66 램파트</span>의 스킬 변경점을 반영했습니다.</li>
			<li><span class="badge bg-warning text-dark">SD3M 펍 헤드</span>의 스킬 변경점을 반영했습니다.</li>
			<li><span class="badge bg-warning text-dark">징벌의 사디어스</span>의 스킬 변경점을 반영했습니다.</li>
			<li><span class="badge bg-warning text-dark">자비로운 리앤</span>의 스킬 변경점을 반영했습니다.</li>
			<li>일부 전투원의 버프 내용을 갱신했습니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2020-11-31 23:35:01</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>
</Fragment>;
export default Changelog;
