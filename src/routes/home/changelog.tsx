import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12486" date="2024-02-18"
		site={ <>
			<li>
				사이트 개편안의 일부를 선행 적용했습니다.
				<ol>
					<li>
						<BY>전투원정보</BY>의 <BG>목록 보기</BG>의 디자인이 변경되었습니다.
					</li>
					<li>
						<BY>전투원정보</BY>의 <BG>목록 보기</BG> 및 <BG>그룹별 보기</BG>가 통합되었습니다.
					</li>
					<li>
						<BY>전투원정보</BY>의 <BG>제조 시간</BG>이 <BR>@deprecated</BR>가 되었습니다.
					</li>
				</ol>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12484" date="2024-02-18"
		bugfix={ <>
			<li>일부 상황에서 사이트 동작이 멈추는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12481" date="2024-02-18"
		site={ <>
			<li>
				사이트 개편안의 일부를 선행 적용했습니다.
				<ol>
					<li>홈 페이지의 디자인을 변경했습니다.</li>
					<li>Changelog 페이지의 디자인을 일부 변경했습니다.</li>
					<li>내부 코드 변경을 진행중입니다.</li>
				</ol>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12479" date="2024-02-18"
		dialogue={ <>
			<li>
				전투원 <BY>라비아타 프로토타입</BY>의 스킨 <BR>눈 속에 피는 꽃</BR>의 대사 정보가 누락된 문제가 수정되었습니다.
			</li>
			<li>
				전투원 <BY>P/A-00 그리폰</BY>의 스킨 <BR>벌써 5년</BR>의 대사 정보가 누락된 문제가 수정되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12477" date="2024-02-17"
		update={ <>
			<li>
				스토리 플레이어에서 전투원의 Spine 애니메이션이 표시되도록 수정했습니다.
			</li>
		</> }
		bugfix={ <>
			<li>
				스토리 플레이어에서 일부 전투원이 표시되지 않는 문제를 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
