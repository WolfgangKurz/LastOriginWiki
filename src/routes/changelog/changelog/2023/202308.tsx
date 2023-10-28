import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12285" date="2023-08-31"
		new={ <>
			<li>신규 적의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>철의 왕자의 행동 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>로열 아스널</BY>의 스킨 <BR>클로스컷 스페셜 컬렉션 : 스위트 스티키 서머</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>징벌의 사디어스</BY>의 스킨 <BR>단둘만의 풀파티</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><BY>S7 데스스토커</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>T-3 레프리콘</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>AC-6 후사르</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>자비로운 리앤</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-08-31 21:16:05</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12281" date="2023-08-22"
		new={ <>
			<li>신규 전투원 <BY>S7 데스스토커</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>실버 불렛 니들</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>단분자 가위</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-08-22 16:50:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12279" date="2023-08-16"
		bugfix={ <>
			<li>전투원정보 및 장비정보에서 효과 필터가 동작하지 않는 문제를 수정했습니다.</li>
			<li>일부 언어에서 변화의성소 목록이 올바르지 않게 표시되는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>이 종료되었습니다.</li>
			<li>이벤트 <BY>오르카 데이트 공모전</BY>이 개방되었습니다.</li>
			<li>일부 지역의 정보가 갱신되었습니다.</li>
			<li>일부 적 그룹의 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-08-16 18:03:22</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12277" date="2023-08-10"
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>자비로운 리앤</BY>의 스킨 <BR>라이프가드 리앤</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>헬라</BY>의 스킨 <BR>해변의 지배자 헬라</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>해체자 아자즈</BY>의 스킨 <BR>CAFE amor : amabile</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 누락된 대사가 추가되었습니다.</li>
			<li>전투원 <BY>P-24 핀토</BY>의 스킨 <BR>특수 작전대 핀토</BR>의 대사가 추가되었습니다.</li>
			<li>일부 일본어 음성이 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-08-10 03:55:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12275" date="2023-08-03"
		new={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>의 3부 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>엠피트리테</BY>의 스킨 <BR>바다의 여신 엠피트리테</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>살라시아</BY>의 스킨 <BR>바다의 여신 살라시아</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-08-03 01:11:21</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
