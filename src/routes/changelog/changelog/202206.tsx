import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11789" date="2022-06-13"
		bugfix={ <>
			<li><BB>프리미엄 출석</BB>에서 리셋해도 쌍반지, 쌍대코 카운트가 초기화되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11788" date="2022-06-12"
		new={ <>
			<BB>프리미엄 출석</BB> 시뮬레이션 기능이 <BY>가챠 시뮬레이터</BY> 페이지에 추가되었습니다.
		</> }
		bugfix={ <>
			<li>일부 스킨의 가격이 <BR>비매품</BR>으로 표시되던 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-06-12 23:31:00</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11786" date="2022-06-07"
		bugfix={ <>
			<li>버프 보기에서 <BO>갱신</BO> 버프 중첩 방식 유형이 <BB>중첩 무제한</BB>으로 표기되던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11781" date="2022-06-07"
		bugfix={ <>
			<li><BY>스트롱홀드</BY> 전투원의 스킬 정보가 올바르게 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>전투원 SD 표시 기능이 일시적으로 비활성화되었습니다.</li>
			<li><BY>분노의 늑대 송곳니</BY> 이벤트의 배너 이미지가 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>T-12 칼리아흐 베라</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><BY>T-75 워울프</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-06-07 14:46:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11779" date="2022-06-01"
		site={ <>
			<li>일부 데이터 처리를 개선했습니다.</li>
		</> }
		update={ <>
			<li>모바일 환경에서 SD 선택 창이 화면을 가리던 문제를 수정했습니다.</li>
			<li>
				<BY>콘스탄챠 S2</BY>, <BY>세라피아스 앨리스</BY>, <BY>바닐라 A1</BY>, <BY>오베로니아 레아</BY>,
				<BY>시저스 리제</BY>, <BY>다프네</BY>, <BY>티타니아 프로스트</BY>의 SD가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
