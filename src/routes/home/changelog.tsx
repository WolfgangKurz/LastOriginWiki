import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12865" date="2025-01-05"
		update={ <>
			<li>
				<BY>버프 보기</BY>에서 표시되는 <BB>버프 번호</BB> 기준을 변경했습니다.
			</li>
			<li>
				<BY>버프 보기</BY> 기능의 <BB>특정 버프 조건</BB>의 표기가 개선되었습니다.<br />
				이제 조건을 클릭하면 해당 버프가 어디에서 유래됐는지 표시됩니다.
			</li>
			<li>데스크탑 환경에서 전투원 스킬 정보 테이블의 스킬명 표기가 개선되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12863" date="2025-01-04"
		bugfix={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킨 <BR>미스 오르카 : 자기 위로와 하얀 거짓말</BR>이 잘못 표시되던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 타이틀 콜 정보가 추가되었습니다.</li>
		</> }
		site={ <>
			<li>전투원 타이틀 콜 레이아웃을 갱신했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12851" date="2025-01-03"
		bugfix={ <>
			<li>Spine 로비 애니메이션 스킨의 <BR>특수 터치</BR>와 <BR>일반 터치</BR> 동작이 뒤바뀐 점이 수정되었습니다.</li>
			<li>전투원 <BY>T-19 픽시</BY>의 스킨 <BR>Merry Christmas? Marry Christmas!</BR>의 특수 터치 영역이 표시되지 않던 점이 수정되었습니다.</li>
			<li>일부 스킨의 중파 이미지가 표시되지 않던 점이 수정되었습니다.</li>
		</> }
		new={ <>
			<li>신규 장비 <BY>Hasta la Vista Baby!</BY>의 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 적 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>천아</BY>의 스킨 <BR>미스 오르카 : 정기 핫팩 쇼핑</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>파프니르</BY>의 스킨 <BR>미스 오르카 : 럭키, 언럭키! 도박사의 올인 갬블러 드레스</BR>의 배경 숨기기가 표시되지 않던 문제가 수정되었습니다.</li>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킨 <BR>미스 오르카 : 자기 위로와 하얀 거짓말</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-01-03 06:35:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
