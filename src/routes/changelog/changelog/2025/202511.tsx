import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13033" date="2025-11-01"
		bugfix={ <>
			<li>일부 스킨의 다운로드 기능이 작동하지 않던 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
