import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
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
			<li><span class="badge bg-warning text-dark">T-50 PX</span>의 서약 후 대사가 추가되었습니다.</li>
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
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-09-06 01:53:31</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
