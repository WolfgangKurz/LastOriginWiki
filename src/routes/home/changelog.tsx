import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12303" date="2023-09-28"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 전투원 페이지의 스킨 탭에서 일부 스킨의 아이콘이 표시되지 않는 문제를 수정했습니다.
			</li>
			<li>일부 스킨의 아티스트 정보가 잘못된 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12301" date="2023-09-26"
		new={ <>
			<li>
				신규 전투원 <BY>코요리</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>변화의 성소</BY>에 난이도 정보가 추가되었습니다.
			</li>
		</> }
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>에서 일부 필터가 작동하지 않는 문제를 수정했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>AT-100 비스트헌터</BY>의 스킨 <BR>Vinum animi speculum</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-09-26 19:15:10</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12299" date="2023-09-26"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>에서 이름 검색이 작동하지 않던 문제를 수정했습니다.
			</li>
		</> }
	/>
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
