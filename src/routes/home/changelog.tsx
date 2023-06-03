import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
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
