import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12636" date="2024-09-05"
		new={ <>
			<li>신규 이벤트 <BY>다시 시작하는 바다 모험</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				전투원 <BY>디오네</BY>의 스킬 정보가 갱신되었습니다.<br />
				<BP>실제 스킬 효과와 설명 원본이 다른 점이 존재하니 확인할 때 유의하시기 바랍니다.</BP>
			</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어의 재생이 종료되면 사용할 수 없는 주소로 변경되는 점을 수정했습니다.</li>
			<li>스토리 플레이어가 캐릭터의 표정만 바뀌는 경우에도 모델을 새로 불러오는 문제를 수정했습니다.</li>
			<li>스토리 플레이어에서 선택지 텍스트가 버튼을 벗어날 수 있는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>유린의 소니아</BY>의 스킨 <BR>체포, 압수, 풍기문란!</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-09-05 12:13:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
