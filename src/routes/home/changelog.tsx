import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12118" date="2023-04-20"
		bugfix={ <>
			<li>일부 전투원의 스킬의 버프 목록에서 일부 항목이 누락된 점을 수정했습니다.</li>
			<li>일부 장비의 버프 목록에서 일부 항목이 누락된 점을 수정했습니다.</li>
			<li>일부 적의 스테이터스가 올바르게 표시되지 않던 점을 수정했습니다.</li>
			<li>홈에서 이벤트 배너 이미지가 표시되지 않던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>스킬 범위에서 <BG>본인 대상</BG> 및 <BG>아군 대상</BG> 표기가 액티브 스킬에서만 표시되도록 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12116" date="2023-04-20"
		new={ <>
			<li><BY>총력전</BY> 페이지가 추가되었습니다.</li>
			<li>신규 장비 <BY>M.E.D.U.S.A</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>비급</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>호드 부대 패치</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>연꽃 위에 피는 장미</BY>의 2부 정보가 추가되었습니다.</li>
			<li><BY>적정보</BY> 페이지에 <BR>총력전</BR> 구분이 추가되었습니다.</li>
			<li><BY>장비정보</BY> 페이지에 <BR>총력전</BR> 구분이 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>세계정보의 외전에 <BY>AT72 라인리터</BY>의 외전 전투가 누락된 점을 수정했습니다.</li>
			<li>세계정보의 현재 진행중인 이벤트에 <BY>연꽃 위에 피는 장미</BY> 이벤트가 표시되지 않는 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>사라카엘</BY>의 스킨 <BY>교단의 심판자에게 축복을</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-60 불가사리</BY>의 스킨 <BY>불가사리는 잠복근무 중</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-04-20 02:58:12</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
