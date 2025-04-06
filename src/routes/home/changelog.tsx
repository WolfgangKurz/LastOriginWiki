import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12939" date="2025-04-06"
		bugfix={ <>
			<li>사이트 내 일부 이미지가 표시되지 않던 점을 수정했습니다..</li>
		</> }
	/>
	<ChangelogItem title="Build 12938" date="2025-04-05"
		knownissue={ <>
			<li>
				전투원 <BY>생명의 세레스티아</BY>의 스킨 <BR>신선도 보장! 유기농 과일 비키니</BR>의
				슬림 체형 (소품 제거) 형태를 열람할 수 없습니다.<br />
				기존 스킨과 구조가 다르게 개발되어, 뷰어에서 지원하기 위해 시간이 소요되고 있습니다.
			</li>
		</> }
		bugfix={ <>
			<li>전투원 <BR>P/A-00 그리폰</BR>의 스킬 적용 대상에 누락이 있던 점을 수정했습니다.</li>
			<li>전투원 <BR>EB-48G 흐레스벨그</BR>의 스킬 적용 대상에 누락이 있던 점을 수정했습니다.</li>
		</> }
		site={ <>
			<li>트래픽 비용 절감을 위해 CDN 서비스를 적용했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
