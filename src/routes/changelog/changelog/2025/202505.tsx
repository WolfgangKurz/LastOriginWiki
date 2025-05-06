import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12954" date="2025-05-06"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY> &gt; <BY>버프별 보기</BY> 메뉴가 동작하지 않던 점을 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
