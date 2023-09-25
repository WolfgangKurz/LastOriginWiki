import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12298" date="2023-09-25"
		update={ <>
			<li>
				<BY>전투원정보</BY>의 기존 <BR>스킬 관련 필터</BR>가 삭제되고 <BG>상세 검색</BG>으로 개편되었습니다.
			</li>
		</> }
		bugfix={ <>
			<li>
				버프 보기에서 일부 버프의 설명이 잘못되어있던 점을 수정했습니다.
				<ul>
					<li>
						공격자의 회피 수치만큼 스킬 위력이 감소
						<IconArrowRight class="mx-2" />
						대상의 회피 수치만큼 공격자의 스킬 위력이 감소
					</li>
					<li>
						공격자의 방어력 수치만큼 치명타가 감소
						<IconArrowRight class="mx-2" />
						자신의 방어력 수치만큼 공격자의 치명타가 감소
					</li>
				</ul>
			</li>
			<li>버프 보기의 일부 중국어 번체(대만) 번역을 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-09-25 21:35:53</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
