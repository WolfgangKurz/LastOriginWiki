import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12078" date="2023-02-09"
		new={ <>
			<li>
				<BY>소모품</BY> 페이지가 추가되었습니다.<br />
				<BY>기타</BY> 하위 메뉴에서 확인 가능합니다.
			</li>
		</> }
		update={ <>
			<li>
				<BY>눈먼 공주와 안개의 나라</BY> 이벤트가 종료되었습니다.
			</li>
			<li>
				<BY>빛이 들지 않는 성역</BY> 이벤트가 시작되었습니다.
			</li>
			<li>
				<BY>니바</BY> 전투원의 스킬 설명 일부가 수정되었습니다.
			</li>
			<li>
				<BY>스티커</BY> 정보가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-02-09 21:50:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
