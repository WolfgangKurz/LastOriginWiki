import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11113" date="2021-09-07"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">Simulator<sup>β</sup></span>의
				<span class="badge bg-warning text-dark">버프 목록</span>에서
				<span class="badge bg-danger">스킬 위력</span>이 잘못 표기되던 문제를 수정했습니다.
			</li>
			<li>일부 전투원의 스킬 설명에 표시되는 수치가 F.Change 이후를 참조할 때 제대로 표기되지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 이벤트 <span class="badge bg-warning text-dark">연꽃 위에 피는 장미</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">장화</span>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원 스킬 정보</span>의
				<span class="badge bg-danger">속성</span> 표시의 색상을 <span class="badge bg-warning text-dark">속성</span>으로 변경했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">B-11 나이트 앤젤</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">샬럿</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">블랙 리리스</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">X-00 티아멧</span>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">골타리온 XIII세</span>의 스킨 <span class="badge bg-danger">빛의 근위기사단장 골타리온</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">티타니아 프로스트</span>의 스킨 <span class="badge bg-danger">In Vino Veritas</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">천공의 엘라</span>의 스킨 <span class="badge bg-danger">귀염냉혹 듀얼리스트</span>의 중파 및 구글 버전 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-09-07 02:21:44</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11111" date="2021-09-06"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">스킬 버프 목록</span>에서
				<span class="badge bg-danger">xx에게 xxx이(가) n개 이상일 때</span>가
				<span class="badge bg-danger">xx에게 xxx이(가) n개일 때</span>로 잘못 표기되던 문제를 수정했습니다.
			</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">스트라토 엔젤</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">C-77 홍련</span>의 서약 후 대사가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-50 PX 실키</span>의 서약 후 대사가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-10 님프</span>의 서약 후 대사가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">럼버제인</span>의 서약 후 대사가 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">전투원 스킬 정보</span> 표시가 개편되었습니다. 일부 전투원은 아직 작업중입니다.</li>
			<li><span class="badge bg-warning text-dark">이벤트 정보</span>가 변경되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">드라큐리나</span>의 스킨 <span class="badge bg-danger">뙤약볕의 흡혈귀</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">베로니카</span>의 스킨 <span class="badge bg-danger">수녀님의 휴일</span>이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 스킨 <span class="badge bg-danger">드림위버 웨딩 스페셜: 배반의 흑장미</span>가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-09-06 01:53:31</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
