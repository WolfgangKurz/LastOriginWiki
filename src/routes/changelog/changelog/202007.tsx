import { Fragment, FunctionalComponent, h } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <Fragment>
	<ChangelogItem title="Build r20200714" date="2020-07-14"
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">라인리터</span>의 2번째 패시브 <span class="badge bg-substory">기병 참전</span>의 적용 대상이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">다크엘븐 포레스트레인저</span>의 승급시 치명타 증가량이 수정되었습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li><span class="badge bg-warning text-dark">SS급 소형 정찰 드론</span>의 획득처 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">미니 하치코</span>의 획득처 정보가 추가되었습니다.</li>
		</Fragment> }
		skin={ <Fragment>
			<li><span class="badge bg-warning text-dark">다크엘븐 포레스트레인저</span>의 <span class="badge bg-substory">다크엘프 카우걸</span>의 가격이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">다크엘븐 포레스트레인저</span>의 <span class="badge bg-substory">다크엘프 카우걸</span>에 소품 분리가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">세라피아스 앨리스</span>의 <span class="badge bg-substory">밤의 여왕의 초대</span>에
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">오베로니아 레아</span>의 <span class="badge bg-substory">오드리 문 컬렉션 &lt;어덜트 래빗&gt;</span>에
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">공진의 알렉산드라</span>의 <span class="badge bg-substory">조련사 알렉산드라</span>에
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">블랙 리리스</span>의 <span class="badge bg-substory">위험한 가족 : 유혹하는 메이드</span>및
				<span class="badge bg-substory">리리스의 본 목적을 벗어난 수영복</span>에 <span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">샬럿</span>의 <span class="badge bg-substory">프랑스 풍 보석 비키니</span>및
				<span class="badge bg-substory">조금 이상한 대행자</span>에 <span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">다크엘븐 포레스트레인저</span>의 <span class="badge bg-substory">다크엘프 카우걸</span>에
				<span class="badge bg-danger">플레이스토어 버전 CG</span>가 추가되었습니다.
			</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">포츈</span>, <span class="badge bg-warning text-dark">다프네</span>,
				<span class="badge bg-warning text-dark">P-49 슬레이프니르</span>의 서약 후 대사 오디오 파일이 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">다프네</span>의 서약 후 대사 텍스트가 추가되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20200706" date="2020-07-06"
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">SS급 고속 학습 시스템</span>의 수치 정보가 수정되었습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li><span class="badge bg-warning text-dark">라인리터</span>의 스탯, 스킬 정보가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">엘븐 포레스트메이커</span>,
				<span class="badge bg-warning text-dark">다크엘븐 포레스트레인저</span>의 승급 스탯 및 스킬 정보가 추가/수정되었습니다.
			</li>
		</Fragment> }
		skin={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">신속의 칸</span>의 <span class="badge bg-substory">드림위버 웨딩 스페셜 : 사막에 핀 꽃</span>스킨 정보가 추가되었습니다.
				해당 스킨은 <span class="badge bg-danger">플레이스토어 버전 CG</span>가 포함되어있습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">베로니카</span>의 <span class="badge bg-substory">이단 심문관 베로니카</span>스킨 정보가 추가되었습니다.
				해당 스킨은 <span class="badge bg-danger">플레이스토어 버전 CG</span>가 포함되어있습니다.
			</li>
			<li><span class="badge bg-warning text-dark">시라유리</span>의 스킬 설명 일부가 수정되었습니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">아르망 추기경</span>, <span class="badge bg-warning text-dark">소완</span>,
				<span class="badge bg-warning text-dark">금란 S7</span>, <span class="badge bg-warning text-dark">신속의 칸</span>의 서약 후 대사 오디오 파일이 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">소완</span>의 서약 후 대사 텍스트가 추가되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20200705" date="2020-07-05"
		site={ <Fragment>
			<li>시험 추가 결과, <span class="badge bg-warning text-dark">성능 문제</span>로 <span class="badge bg-danger">로비 애니메이션 미리보기</span>가 제거되었습니다.</li>
			<li>전투원 대사의 모바일 환경 레이아웃이 개선되었습니다.</li>
		</Fragment> }
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">시라유리</span>의 스킬 이름 및 설명이 수정되었습니다.</li>
			<li>크롬 브라우저에서 전투원 대사의 오디오 플레이어가 표시되지 않는 문제가 수정되었습니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">아쿠아</span>, <span class="badge bg-warning text-dark">공진의 알렉산드라</span>,
				<span class="badge bg-warning text-dark">소완</span>, <span class="badge bg-warning text-dark">아이언 애니</span>,
				<span class="badge bg-warning text-dark">보속의 마리아</span>의 대사 정보가 추가되었습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20200703" date="2020-07-03"
		new={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">뽀끄루 대마왕</span>의 <span class="badge bg-warning text-dark">마법소녀!? 매지컬 뽀끄루</span>스킨에
				<span class="badge bg-danger">로비 애니메이션 미리보기</span>가 시험적으로 추가되었습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build r20200702" date="2020-07-02"
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">드론 08</span>의 2번째 스킬 <span class="badge bg-substory">정밀 스캔</span>의 설명이 누락된 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">쿠노이치 제로</span>의 1번째 패시브 <span class="badge bg-substory">허공 둔</span>의 설명이 수정되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">시라유리</span>의 3번째 패시브
				<span class="badge bg-substory">정보전달</span>의 적용 대상이 잘못되어있던 점을 수정했습니다.
			</li>
		</Fragment> }
		new={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">엘븐 포레스트메이커</span>의 <RarityBadge border rarity="S">S 승급</RarityBadge>정보가 추가되었습니다.
				추가된 패시브 스킬의 수치 및 정확한 범위는 업데이트 이후에 갱신될 예정입니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">다크엘븐 포레스트레인저</span>의 <RarityBadge border rarity="S">S 승급</RarityBadge>정보가 추가되었습니다.
				추가된 패시브 스킬의 수치 및 정확한 범위는 업데이트 이후에 갱신될 예정입니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">블랙 리리스</span>, <span class="badge bg-warning text-dark">신속의 칸</span>,
				<span class="badge bg-warning text-dark">철혈의 레오나</span>, <span class="badge bg-warning text-dark">불굴의 마리</span>,
				<span class="badge bg-warning text-dark">멸망의 메이</span>, <span class="badge bg-warning text-dark">GS-130 피닉스</span>,
				<span class="badge bg-warning text-dark">T-50 PX 실키</span>, <span class="badge bg-warning text-dark">C-77 레드후드</span>,
				<span class="badge bg-warning text-dark">다크엘븐 포레스트레인저</span>, <span class="badge bg-warning text-dark">엘븐 포레스트메이커</span>,
				<span class="badge bg-warning text-dark">M-5 이프리트</span>, <span class="badge bg-warning text-dark">럼버제인</span>,
				<span class="badge bg-warning text-dark">SS급 출력 강화 회로</span>, <span class="badge bg-warning text-dark">SS급 분석 회로</span>,
				<span class="badge bg-warning text-dark">SS급 내 충격 회로</span>, <span class="badge bg-warning text-dark">SS급 반응 강화 회로</span>,
				<span class="badge bg-warning text-dark">SS급 회로 내구 강화</span>, <span class="badge bg-warning text-dark">SS급 회로 최적화</span>,
				<span class="badge bg-warning text-dark">SS급 연산 강화 회로</span>, <span class="badge bg-warning text-dark">로열 아스널</span>,
				<span class="badge bg-warning text-dark">베로니카</span>, <span class="badge bg-warning text-dark">SS급 보조 에너지 팩</span>,
				<span class="badge bg-warning text-dark">SS급 방어 역장</span>의 교환소 정보가 추가되었습니다.
			</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">금란 S9</span>, <span class="badge bg-warning text-dark">아르망 추기경</span>,
				<span class="badge bg-warning text-dark">소완</span>, <span class="badge bg-warning text-dark">신속의 칸</span>의 서약 대사 여부가 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">라비아타 프로토타입</span>의 대사 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">콘스탄챠 S2</span>의 대사 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">세라피아스 앨리스</span>의 대사 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">바닐라 A1</span>의 대사 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">오베로니아 레아</span>의 대사 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">시저스 리제</span>의 대사 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">다프네</span>의 대사 정보가 추가되었습니다.</li>
		</Fragment> }
	/>
</Fragment>;
export default Changelog;
