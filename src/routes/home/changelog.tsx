import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12690" date="2024-10-12"
		new={ <>
			<li>
				신규 이벤트 <BY>꿈꾸지 않는 인어를 위해</BY> 정보가 추가되었습니다.
			</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어에서 폰트가 로드된 후의 선택지 텍스트의 크기가 조절되지 않던 문제를 수정했습니다.</li>
			<li>스토리 플레이어에서 배경을 <BP>종횡비 유지</BP>로 설정했을 때, 배경 너머로 캐릭터 등의 다른 이미지가 표시되던 점을 개선했습니다.</li>
			<li><BO>Build 12678</BO> 이후 Spine 로비 애니메이션 스킨의 터치 영역 표시가 스킨에 가려지고 작동하지 않는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>아이언 애니</BY>의 스킨 <BR>돌격대장! 정열의 특공복​</BR>의 정보가 추가되었습니다.</li>
			<li>누락된 스킨 배너를 추가했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
