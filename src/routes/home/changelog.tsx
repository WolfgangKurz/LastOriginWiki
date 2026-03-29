import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13105" date="2026-03-29"
		new={ <>
			<li>신규 전투원 <BY>키키 페이링</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>황금 가터링</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>오르카의 신부</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>키키 페이링</BY>의 스킨 <BR>5201314 : 영원을 약속하는 웨딩드레스</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>미스세이프티</BY>의 스킨 <BR>LUBRICATING YOUR PISTOL! TODAY IS “SAFETY”</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>오렌지에이드</BY>의 스킨 <BR>뒤바뀐 운?명: 귀욤뽀짝 오랑지</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-03-29 11:48:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
