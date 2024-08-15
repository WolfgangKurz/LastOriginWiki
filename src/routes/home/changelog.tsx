import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12624" date="2024-08-15"
		bugfix={ <>
			<li>
				버프 보기에서 일부 복합 조건이 표시되지 않던 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12622" date="2024-08-15"
		bugfix={ <>
			<li>
				버프 보기에서 일부 복합 조건이 표시되지 않던 문제를 수정했습니다. (예: <BY>무적의 용</BY>의 <BR>포격 좌표 송신</BR> 버프)
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12619" date="2024-08-07"
		new={ <>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>
				전투원 <BY>뽀끄루 대마왕</BY>의 스킬 <BR>마의 장막</BR>의 설명에서
				수치가 잘못 표기되던 점을 수정하였고, 더 이해하기 쉽도록 텍스트를 수정했습니다.
			</li>
		</> }
		update={ <>
			<li>이벤트 <BY>제로 베이스</BY>가 종료되었습니다.</li>
			<li>이벤트 <BY>해가 지지 않는 워터파크</BY> 복각이 시작되었습니다.</li>
		</> }
		skin={ <>
			<BY>에라토</BY>의 스킨 <BY>오르카 바니 : onlyfanz♡</BY>의 중파 정보가 추가되었습니다.
			<BY>레모네이드 베타</BY>의 스킨 <BY>일상복 : 오피스 레이디</BY>의 정보가 추가되었습니다.
		</> }
	/>
</>;
export default Changelog;
