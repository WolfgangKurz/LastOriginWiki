import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13023" date="2025-10-01"
		bugfix={ <>
			<li>전투원 <BY>이나비</BY>의 스킨 <BR>야전부대의 전투식량</BR>의 검열 버전 이미지가 제대로 표시되지 않는 문제를 수정했습니다.</li>
			<li>일부 로비 애니메이션 스킨의 다운로드 버튼이 제대로 동작하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
