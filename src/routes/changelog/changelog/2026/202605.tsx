import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13138" date="2026-05-09"
		update={ <>
			<li>전투원 <BY>니키 트레이시</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>시라유리</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>닥터</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>토모</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13134" date="2026-05-08"
		new={ <>
			<li>신규 장비 <BY>미니 캐럴</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>미니 그레이트월</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>미니 사디어스</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>미니 감마</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>미니 티에치엔</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>미니 팬텀</BY>의 정보가 추가되었습니다.</li>
			<li>신규 시스템 <BY>이상현상</BY>의 정보가 <BY>총력전</BY> 페이지에 추가되었습니다.</li>
			<li>신규 이벤트 <BY>020 무술특급</BY>이 시작되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>우주에서 온 황금</BY>가 종료되었습니다.</li>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 누락된 로봇 전투원의 연구 트리를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>C-79G 하베트롯</BY>의 스킨 <BR>엘랑 비탈한 데이 오프</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-05-08 07:55:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
