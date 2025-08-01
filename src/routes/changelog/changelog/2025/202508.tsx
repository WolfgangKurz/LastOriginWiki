import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13002" date="2025-08-02"
		new={ <>
			<li>이벤트 <BY>Project ORCA ~SunRising Stage~</BY>의 3부 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 BGM의 곡 길이가 잘못 입력된 점을 수정했습니다.</li>
			<li>일부 스킨의 가격이 판매중이지 않은 항목의 가격을 참조하던 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>마리아 그레이스</BY>의 스킨 <BR>프로젝트 오르카 : 선라이징 스테이지 Joy</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-08-02 00:11:31</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
