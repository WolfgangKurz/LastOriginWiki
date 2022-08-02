import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11857" date="2022-08-02"
		update={ <>
			<li>일부 전투원의 스킬 플레이버 텍스트를 갱신했습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원정보 메뉴에서 <BY>스킨 보기</BY> 탭이 표시되지 않던 문제를 수정했습니다.</li>
			<li>전투원정보 메뉴의 <BY>목록 보기</BY> 탭에서 <BR>도감 번호순</BR> 정렬이 제대로 작동하지 않던 문제를 수정했습니다.</li>
			<li>버프 목록에서 <BY>~이(가) 아닐 때</BY> 조건이 <BY>~이(가) 0개 이상일 때</BY>로 표시되던 문제를 수정했습니다.</li>
			<li>버프 목록에서 일부 이름 없는 버프가 표시되지 않던 문제를 수정했습니다.</li>
			<li>일부 적의 스킬 설명이 갱신되어있지 않던 문제를 수정했습니다.</li>
			<li>전투원의 사거리가 <BR>6</BR>을 초과하여 표시되는 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>AO-2 레이븐</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><BY>베로니카</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-08-02 22:10:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
