import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11813" date="2022-07-11"
		site={ <>
			<li>EN, TC 언어의 번역 텍스트가 대거 갱신되었습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <BY>바르그</BY>의 정보가 추가되었습니다.</li>
			<li>
				전투원 스킨 자세히 보기에서 드래그, 줌 인/아웃 기능이 추가되었습니다. 본 기능은 모바일에서 올바르게 작동합니다.
			</li>
		</> }
		update={ <>
			<li><BY>M-5 이프리트</BY>의 스킬 정보가 수정되었습니다.</li>
			<li><BY>장화</BY>의 스킬 정보가 수정되었습니다.</li>
			<li><BY>천아</BY>의 스킬 정보가 수정되었습니다.</li>
			<li><BY>불굴의 마리</BY>의 스킬 정보가 수정되었습니다.</li>
			<li><BY>AA-7 임펫</BY>의 승급 정보 및 스킬 정보가 추가/수정되었습니다.</li>
			<li><BY>C-77 레드후드</BY>의 승급 정보 및 스킬 정보가 추가/수정되었습니다.</li>
			<li><BY>오렌지에이드</BY>의 승급 정보 및 스킬 정보가 추가/수정되었습니다.</li>
			<li><BY>스파토이아</BY>의 승급 정보 및 스킬 정보가 추가/수정되었습니다.</li>
			<li>일부 적 정보가 갱신되었습니다.</li>
			<li><BY>분노의 늑대 송곳니</BY> 이벤트 3부 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>신속의 칸</BY>의 스킨 <BR>함정에 빠진 전사</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-75 워울프</BY>의 스킨 <BR>쌍권총을 든 수녀님</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천아</BY>의 스킨 <BR>CAFE Horizon...? : 널 위한 part time</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><BY>37식 다이카</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><BY>아크로바틱 서니</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-07-11 03:49:22</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
