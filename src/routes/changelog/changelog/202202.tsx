import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11518" date="2022-02-07"
		new={ <>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 2부 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">C-79G 하베트롯</span>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">장화</span>의 스킨 <span class="badge bg-danger">CAFE Horizon...? : 설레는 break time</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">B-7 스트라토 엔젤</span>의 스킨 <span class="badge bg-danger">오르카 바니 : 바니걸 최고!</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">니바</span>의 스킨 <span class="badge bg-danger">오르카 바니...? : 진심 모드</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">엘리 퀵핸드</span>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">B-7 스트라토 엔젤</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">니바</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-02-07 13:03:37</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
