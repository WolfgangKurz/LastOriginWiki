import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12173" date="2023-06-28"
		bugfix={ <>
			<li>전투원 뱃지에서 전투원 카드가 표시될 때 정렬이 잘못된 문제를 수정했습니다.</li>
			<li>세계정보의 메인스토리의 레이아웃 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 지역 <BY>11지역</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>나스호른</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>와전류 제어장치</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>사냥꾼 사냥 보조 OS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>오지 개척 보조 회로</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>'Heartless Heart' 우회 회로</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>전투원 정보에 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>진행중인 이벤트가 종료됩니다.</li>
			<li>일부 전투원의 스킬 정보가 추가되었습니다.</li>
			<li>일부 스테이지의 클리어 조건의 영문 번역이 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>데카르트 보이저 삿갓</BY>의 기본 스킨의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-28 01:40:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
