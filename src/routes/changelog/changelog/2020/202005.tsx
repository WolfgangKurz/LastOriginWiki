import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build r20200530" date="2020-05-30"
		new={ <>
			<li><span class="badge bg-substory">유닛 모달</span>내 스킨에 <span class="badge bg-substory">로비 애니메이션</span>여부 추가.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200523" date="2020-05-23"
		new={ <>
			<li><span class="badge bg-substory">유닛 모달</span>완성.</li>
		</> }
	/>

	<ChangelogItem title="Build r20200521" date="2020-05-21"
		new={ <>
			<li>유닛정보 <span class="badge bg-substory">일반 보기</span>, <span class="badge bg-substory">그룹별 보기</span>완성</li>
		</> }
	/>

	<ChangelogItem title="Build r20200518" date="2020-05-18"
		new={ <>
			<li>유닛정보 <span class="badge bg-substory">테이블 보기</span>완성</li>
		</> }
	/>

	<ChangelogItem title="Build r20200517" date="2020-05-17"
		new={ <>
			<li><span class="badge bg-substory">장비정보</span>페이지 완성</li>
		</> }
	/>

	<ChangelogItem title="Build r20200516" date="2020-05-16"
		site={ <>
			<li>프로젝트 시작</li>
		</> }
	/>
</>;
export default Changelog;
