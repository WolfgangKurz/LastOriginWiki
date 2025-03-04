import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12910" date="2025-03-05"
		bugfix={ <>
			<li>일부 스킨 배너가 누락된 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
