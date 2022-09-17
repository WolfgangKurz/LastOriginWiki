import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11896" date="2022-09-18"
		update={ <>
			<li>일러스트레이터가 둘 이상인 스킨의 일러스트레이터 표기가 개선되었습니다.</li>
			<li>전투원정보의 상한 확장 정보 표기가 개선되었습니다.</li>
		</> }
		bugfix={ <>
			<li>적 정보에서 일부 적의 스킬이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11894" date="2022-09-15"
		bugfix={ <>
			<li><BY>AA-7 임펫</BY>의 서약 대사 세트가 표시되지 않던 문제를 수정했습니다.</li>
			<li><BY>질주하는 아탈란테</BY>의 서약 대사 세트가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11893" date="2022-09-14"
		new={ <>
			<li>신규 장비 <BY>네이팜 탄환</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>초저온액화 탄환</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>아크방전유도 탄환</BY>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>므네모시네</BY>의 스킨
				<BR>fleurir en memoire</BR>의 이미지가 올바르게 조립되어있지 않던 점을 수정했습니다.
			</li>
			<li>
				<BY>T-4 케시크</BY>의 스킨
				<BR>단둘만의 온천</BR>의 이미지가 올바르게 조립되어있지 않던 점을 수정했습니다.
			</li>
		</> }
		dialogue={ <>
			<li><BY>AA-7 임펫</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><BY>질주하는 아탈란테</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-09-14 00:23:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11889" date="2022-09-06"
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
