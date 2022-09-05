import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11888" date="2022-09-06"
		update={ <>
			<li><BY>해가 지지 않는 워터파크</BY> 이벤트가 종료되었습니다.</li>
			<li><BY>누군가 바랐던 소원</BY> 이벤트가 복각되었습니다.</li>
			<li><BY>누군가 바랐던 소원</BY> 이벤트의 정보 일부가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원정보 메뉴에서 일부 전투원의 스킬 탭이 표시되지 않는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>엠프리스</BY>의 스킨
				<BR>아쿠아 랜드 : 한 여름의 펭귄</BR>의 검열판 이미지가 누락된 점이 수정되었습니다.
			</li>
			<li>
				<BY>갈라테아</BY>의 스킨
				<BR>아쿠아랜드 : 무의식적인 유혹</BR>의 검열판 이미지가 누락된 점이 수정되었습니다.
			</li>
			<li>
				<BY>엘리 퀵핸드</BY>의 스킨
				<BR>기대하던 피크닉</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-4 케시크</BY>의 스킨
				<BR>단둘만의 온천</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>갈라테아</BY>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
			<li>
				<BY>클로버 에이스</BY>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
			<li>일부 스킨의 일러스트레이터 정보가 잘못 표기되어있던 점을 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-09-06 01:33:13</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
