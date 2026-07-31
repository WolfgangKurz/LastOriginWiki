import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13181" date="2026-08-01"
		new={ <>
			<li>이벤트 <BY>꿈꾸지 않는 인어를 위해</BY>의 복각이 시작되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>Sisters Of Omerta</BY>가 종료되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원/스킨의 작가명이 잘못 입력되어있던 점을 수정했습니다.</li>
			<li>목록/스킨 정보 등 일부 페이지에서 전투원 얼굴/SD 이미지의 품질에 문제가 있던 것을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>닥터</BY>의 스킨 <BR>DARK OCEAN VIBE : 엔지니어의 수영복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-07-31 23:03:09</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
