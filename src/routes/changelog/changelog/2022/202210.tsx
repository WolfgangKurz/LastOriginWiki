import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11927" date="2022-10-28"
		bugfix={ <>
			<li>일부 버프에 <BR>[object Object]</BR>가 표시되던 문제를 수정했습니다.</li>
			<li><BY>변화의 성소</BY> 적합 및 제약 표기가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11924" date="2022-10-24"
		bugfix={ <>
			<li>전투원의 스킨 정보가 올바르지 않게 표시되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11922" date="2022-10-24"
		bugfix={ <>
			<li><BR>에라토</BR> 전투원의 풀링크 보너스 일부가 표시되지 않던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>
				전투원 <BY>스킨 정보</BY>에 Spine 로비 애니메이션이 적용된 스킨 뷰어가 추가되었습니다.<br />
				이 뷰어는 일반 터치와 특수 터치 기능도 포함되어있습니다.
			</li>
		</> }
		update={ <>
			<li>전투원 <BY>골타리온 XIII세</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>CS 페로</BY>의 스킨
				<BR>CAFE amor : dolce</BR>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11916" date="2022-10-18"
		bugfix={ <>
			<li><BR>변화의 성소</BR> 4지역 일부 구역의 적 정보가 잘못 입력되어있던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>전투원 <BY>마법소녀 매지컬 백토</BY>의 SS 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 <BY>뽀끄루 대마왕</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>골타리온 XIII세</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>마법소녀 매지컬 모모</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>마법소녀 매지컬 백토</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>뽀끄루 대마왕</BY>의 스킨
				<BR>미스오르카 : New Page</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>프레스터 요안나</BY>의 스킨
				<BR>수호성인 요안나</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11912" date="2022-10-07"
		update={ <>
			<li><BR>변화의 성소</BR> 4지역이 확장되었습니다.</li>
			<li>일부 적의 정보가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11910" date="2022-10-07"
		bugfix={ <>
			<li><BY>쿠노이치 엔라이</BY>의 일러스트레이터 정보가 잘못 기입되어있던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11909" date="2022-10-06"
		update={ <>
			<li>이벤트 <BY>Project ORCA, 별밤의 무대</BY>의 정보가 갱신되었습니다.</li>
			<li>일부 이벤트 맵의 드랍 정보 및 적 정보가 갱신되었습니다.</li>
			<li>모바일 환경에서 사용이 불편했던 UI 일부를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>아우로라</BY>의 스킨
				<BR>주의! 아우로라 탈의 중!</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>AO-2 레이븐</BY>의 스킨
				<BR>꿈속에서의 밀회</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>엘리 퀵핸드</BY>의 스킨
				<BR>기대하던 피크닉</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
