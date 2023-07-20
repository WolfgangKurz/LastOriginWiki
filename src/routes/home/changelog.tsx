import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12226" date="2023-07-20"
		bugfix={ <>
			<li>일부 적의 버프 목록이 표시되지 않던 문제가 수정되었습니다.</li>
		</> }
		update={ <>
			<li>데이터에 존재하지 않는 버프가 입력되어있는 경우의 표시를 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12222" date="2023-07-18"
		new={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>의 2부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>적 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>퀸오브메인</BY>의 스킨 <BR>물 만난 사자</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>나스호른</BY>의 스킨 <BR>바다로의 행진</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
