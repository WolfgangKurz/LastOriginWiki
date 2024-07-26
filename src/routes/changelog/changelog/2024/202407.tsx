import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12617" date="2024-07-27"
		bugfix={ <>
			<li>일부 누락된 AGS 전투원의 연구 트리 그래프를 추가했습니다.</li>
			<li>일부 스토리가 동작하지 않는 문제를 수정했습니다.</li>
			<li>일부 누락된 스토리 배경 및 CG를 추가했습니다.</li>
		</> }
		update={ <>
			<li>스토리 페이지에 외전 페이지로 이동하는 링크를 추가했습니다.</li>
			<li>일부 누락된 BGM이 추가되었습니다.</li>
			<li>일부 BGM을 적당한 앨범으로 분류했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12615" date="2024-07-24"
		new={ <>
			<li>이벤트 <BY>제로 베이스</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>플레이버 텍스트가 입력되지 않은 스킬에 빈 플레이버 텍스트 박스가 표시되는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>스토리 플레이어에 배경의 종횡비 설정이 추가되었습니다.</li>
		</> }
		skin={ <>
			<BY>쿠노이치 제로</BY>의 스킨 <BY>오르카 바니 : 망사 바니걸</BY>의 정보가 추가되었습니다.
		</> }
	/>
	<ChangelogItem title="Build 12612" date="2024-07-22"
		bugfix={ <>
			<li>일부 스킨이 올바르지 않게 표시되던 문제를 수정했습니다. (예: 레모네이드 베타 기본 스킨 중파)</li>
		</> }
	/>
	<ChangelogItem title="Build 12609" date="2024-07-11"
		new={ <>
			<li>신규 이벤트 <BY>제로 베이스</BY>의 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 누락된 BGM 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어에서 일부 문자가 표시되지 않는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<BY>에라토</BY>의 스킨 <BY>오르카 바니 : onlyfanz♡</BY>의 정보가 추가되었습니다.
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-07-10 21:33:19</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
