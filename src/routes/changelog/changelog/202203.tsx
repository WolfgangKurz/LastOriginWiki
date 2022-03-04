import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11558" date="2022-03-04"
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-10 님프</span>의 스킨
				<span class="badge bg-danger">호수의 요정</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">로열 아스널</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜 : 이 마음을 그대에게</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">P-49 슬레이프니르</span>의 스킨
				<span class="badge bg-danger">슈퍼스타 슬레이프니르</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">켈베로스</span>의 스킨
				<span class="badge bg-danger">의장대 켈베로스</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">CT2199W 폴른</span>의 기본 스킨의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">SD3M 펍 헤드</span>의 기본 스킨의 로비 애니메이션 영상이 수정되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AT72 라인리터</span>의 스킨
				<span class="badge bg-danger">마법소녀의 수호수</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11555" date="2022-03-01"
		bugfix={ <>
			<li>
				세계정보에서
				<span class="badge bg-warning text-dark">영원한 겨울의 방주(바니? 니바! 우당탕탕 역바니 대소동)</span> 이벤트가
				표시되지 않는 점을 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
