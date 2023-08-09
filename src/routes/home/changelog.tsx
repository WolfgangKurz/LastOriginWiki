import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12277" date="2023-08-10"
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>자비로운 리앤</BY>의 스킨 <BR>라이프가드 리앤</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>헬라</BY>의 스킨 <BR>해변의 지배자 헬라</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>해체자 아자즈</BY>의 스킨 <BR>CAFE amor : amabile</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 누락된 대사가 추가되었습니다.</li>
			<li>전투원 <BY>P-24 핀토</BY>의 스킨 <BR>특수 작전대 핀토</BR>의 대사가 추가되었습니다.</li>
			<li>일부 일본어 음성이 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-08-10 03:55:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
