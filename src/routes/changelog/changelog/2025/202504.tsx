import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12943" date="2025-04-11"
		bugfix={ <>
			<li>메인스토리 13지역 4부 지도가 올바르지 못하게 표시되던 점을 수정했습니다.</li>
			<li><BY>세계정보</BY>의 지도에 스크롤이 생기지 않을 수 있는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 장비 <BY>BR 위험방지 회로</BY>의 정보가 추가되었습니다.</li>
			<li>메인스토리 13지역 5부 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>X-05 에밀리</BY>의 스킨 <BR>아쿠아리움... 아니야? : 머메이드 프릴 비키니</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>닥터</BY>의 스킨 <BR>오빠지만 사랑만 있으면…!</BR>의 스킨 배너 이미지가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-04-10 06:10:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
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
