import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12844" date="2024-12-20"
		new={ <>
			<li>신규 전투원 <BY>레모네이드 감마</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>BR 최적화 회로</BY>의 정보가 추가되었습니다.</li>
			<li>메인스토리 13지역 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>T-19 픽시</BY>의 스킨 <BR>Merry Christmas? Marry Christmas!</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>레모네이드 감마</BY>의 스킨 <BR>성난 그녀를 달래는 방법: 슬립 가운</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-12-20 05:49:43</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12838" date="2024-12-06"
		new={ <>
			<li>
				전투원 정보에 <BY>원-오프 타입</BY> 여부와 <BY>다음 지역 클리어 후 사용 가능</BY> 정보가 추가되었습니다.<br />
				해당하는 전투원에만 표시됩니다.
			</li>
		</> }
		bugfix={ <>
			<li>일부 스킨에서 표정 선택 상자가 표시되지 않던 문제를 수정했습니다.</li>
			<li>일부 스킨의 애니메이션이 동작하지 않던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>눈먼 공주와 안개의 나라</BY>가 복각되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>T-50 PX 실키</BY>의 스킨 <BR>휴가지의 실키​</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-12-06 01:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
