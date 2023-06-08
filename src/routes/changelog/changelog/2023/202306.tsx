import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12152" date="2023-06-08"
		new={ <>
			<li>신규 BG가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>아르망 추기경</BY>의 스킨 <BY>시스터 아르망</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천향의 히루메</BY>의 스킨 <BY>미스오르카 : Imagination</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-08 15:27:29</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12147" date="2023-06-07"
		bugfix={ <>
			<li>전투원 목록에서 등급 A B 필터가 작동하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12146" date="2023-06-07"
		bugfix={ <>
			<li>적 팝업에서 시리즈를 전환하지 못하는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>일부 스킨의 검열판 스킨이 표시되지 않는 문제를 수정했습니다.</li>
			<li>일부 스킨의 검열판과 일반판의 크기가 크게 다른 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12145" date="2023-06-04"
		new={ <>
			<li>신규 전투원 <BY>데카르트 보이저 삿갓</BY>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원 및 스킨의 아티스트 정보가 누락된 점을 수정했습니다.</li>
			<li>진행중인 총력전이 누락된 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>T-8W 발키리</BY>의 스킨 <BY>드림위버 웨딩 스페셜 : 하얀 신부</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>GS-10 샌드걸</BY>의 스킨 <BY>당신을 위한 꿈의 요정</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-04 04:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
