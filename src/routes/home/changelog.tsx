import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13166" date="2026-06-19"
		update={ <>
			<li>특정 버프 중 하나를 발동하는 효과에 대해 발동 확률 표기를 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13164" date="2026-06-19"
		new={ <>
			<li>신규 전투원 <BY>그레이브 송</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>제로 베이스</BY> 복각이 시작되었습니다.</li>
			<li>이벤트 <BY>두근두근 러브 스케쥴</BY>이 종료되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>그레이브 송</BY>의 스킨 <BR>가르DEAD or ALIVE : 인기 스트리머 전용 의상</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>스트롱홀드</BY>의 스킨 <BR>오르카 기술부 연구실적</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-06-19 01:47:33</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
