import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13067" date="2026-02-02"
		new={ <>
			<li>이벤트 <BY>별의 무대</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>신속의 칸</BY>의 스킨 <BR>미스 오르카 : Crush On You</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>레모네이드 엡실론</BY>의 스킨 <BR>미스 오르카 : Your Universe, My Space</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>레모네이드 감마</BY>의 스킨 <BR>미스 오르카 : CAFÉ Poseidon 독점 메뉴</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-02-02 00:11:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
		site={ <>
			<li>웹사이트 코드 일부 수정</li>
		</> }
	/>
</>;
export default Changelog;
