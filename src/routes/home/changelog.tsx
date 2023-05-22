import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12141" date="2023-05-22"
		bugfix={ <>
			<li>일부 팝업들이 제대로 동작하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12134" date="2023-05-22"
		site={ <>
			<li>사이트를 불러오는 도중에 오류가 발생한 경우에 표시되는 안내문을 추가했습니다.</li>
			<li>이제 5분마다 사이트가 업데이트되었는지 검사합니다.</li>
			<li>Store 라이브러리를 unistore에서 @preact/signals로 변경을 완료했습니다.</li>
		</> }
		new={ <>
			<li>
				<BY>기타</BY> 메뉴의 외부 링크에 <BY>스킬 사거리/범위 메이커</BY> 링크를 추가했습니다.
			</li>
		</> }
		update={ <>
			<li>최대 사거리 표기를 6으로 제한하던 것을 삭제했습니다.</li>
			<li>SSS 등급 장비의 획득처에 SS 등급 장비 획득처가 같이 표시됩니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>C-33 안드바리</BY>의 스킨 <BY>드림위버 모던 컬렉션 : 창고가드</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>티에치엔</BY>의 스킨 <BY>러브 올 에이스!</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li>일부 전투원의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-05-22 12:44:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
