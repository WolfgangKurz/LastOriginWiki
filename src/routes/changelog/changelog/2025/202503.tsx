import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12928" date="2025-03-28"
		knownissue={ <>
			<li>
				전투원 <BY>생명의 세레스티아</BY>의 스킨 <BR>신선도 보장! 유기농 과일 비키니</BR>의
				슬림 체형 (소품 제거) 형태를 열람할 수 없습니다.<br />
				기존 스킨과 구조가 다르게 개발되어, 뷰어에서 지원하기 위해 시간이 소요되고 있습니다.
			</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어의 등장인물 목록에서 일부 얼굴이 표시되지 않던 문제를 수정했습니다.</li>
			<li>스토리 플레이어에서 일부 한자가 표시되지 않던 점을 수정했습니다.</li>
			<li>경험치 계산기 페이지가 열리지 않던 문제를 수정했습니다. (계산 로직 등이 갱신되지는 않았습니다.)</li>
		</> }
		new={ <>
			<li>신규 전투원 <BY>레모네이드 엡실론</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>페어리 수제 화관</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>젖병</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>은둔한 여신의 궁전</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 장식품의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>레모네이드 엡실론</BY>의 스킨 <BR>나태한 그녀를 달래는 방법 : 홈웨어</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>생명의 세레스티아</BY>의 스킨 <BR>신선도 보장! 유기농 과일 비키니</BR>의 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-03-28 03:11:27</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12916" date="2025-03-14"
		bugfix={ <>
			<li>일부 전투원의 스킨이 잘못 표시되던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>전투원 및 장비 획득처에 <BR>전술 훈련실</BR>을 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12913" date="2025-03-14"
		new={ <>
			<li>신규 이벤트 <BY>은둔한 여신의 궁전</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 <BY>칼립소</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>알키오네</BY>의 스킨 <BR>미스오르카 : 꿈꾸던 파랑(波浪)</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>보속의 마리아</BY>의 스킨 <BR>눈높이 육아 : 소꿉놀이 란제리</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-03-14 01:08:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12910" date="2025-03-05"
		bugfix={ <>
			<li>일부 스킨 배너가 누락된 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
