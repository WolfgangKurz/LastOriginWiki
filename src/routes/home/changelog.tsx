import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13012" date="2025-08-15"
		new={ <>
			<li>신규 전투원 <BY>릴리 블룸메르헨</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>이리스 유마</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>더럽혀진 마지막 기록</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>릴리 블룸메르헨</BY>의 스킨 <BR><s>판타지풍 기모노 릴리 블룸메르헨 팩</s> 삼도천 피안화</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>이리스 유마</BY>의 스킨 <BR><s>일본식 무도복 이리스 유마 팩</s> 방과후 무도협의회</BR>의 정보가 추가되었습니다.</li>
		</> }
		site={ <>
			<li><BY>Orehalcon</BY> 작가의 링크가 추가되었습니다.</li>
		</> }
		knownissue={ <>
			<li>
				전투원 <BY>하루 에스티아</BY>의 스킨 <BR>더럽혀진 마지막 기록 번외</BR>의 얼굴 아이콘이 표시되지 않습니다.<br />
				게임 데이터에 포함되어있지 않습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-08-29 01:13:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
