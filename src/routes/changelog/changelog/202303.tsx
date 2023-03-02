import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12096" date="2023-03-03"
		skin={ <>
			<li>
				<BY>금란 S7</BY>의 스킨 <BR>모던 드레스 금란</BR>의 검열판 이미지가 추가되었습니다.
			</li>
			<li>
				<BY>AL 팬텀</BY>의 스킨 <BR>AL 큐트 : 팬텀 블랙</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
			<li>
				<BY>금란 S7</BY>의 스킨 <BR>모던 드레스 금란</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
			<li>
				<BY>펜리르</BY>의 스킨 <BR>종교의 자유(?)를 원하는 펜리르</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
			<li>
				<BY>브륀힐데</BY>의 스킨 <BR>화염의 지배자 브륀힐드</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
