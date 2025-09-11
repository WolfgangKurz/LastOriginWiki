import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13015" date="2025-09-12"
		new={ <>
			<li>신규 전투원 <BY>에프넬</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>다나 오피니</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>더럽혀진 마지막 기록</BY>의 3부 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>누락된 BGM 정보가 추가되었습니다.</li>
			<li>스토리 플레이어에서 보이스 있는 대사가 재생되지 않던 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>에프넬</BY>의 스킨 <BR>스트리트 그래피티 : 네온 테크웨어</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>다나 오피니</BY>의 스킨 <BR>Girls Night Out : 허~접♥을 상대하는 오픈백 스웨터</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>니바</BY>의 스킨 <BR>바니 슬레이어의 암울한(?) 과거 : 가식모드(바니걸)</BR>의 정보가 추가되었습니다.</li>

			<li>전투원 <BY>릴리 블룸메르헨</BY>의 스킨 <BR>삼도천의 피안화 : 견습요괴 기모노</BR>의 이름이 갱신되었습니다.</li>
			<li>전투원 <BY>이리스 유마</BY>의 스킨 <BR>방과후 무도협의회 : 분노를 정화하는 도복</BR>의 이름이 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-09-12 01:47:36</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
