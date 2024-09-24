import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";
import IconFilter from "@/components/bootstrap-icon/icons/Filter";
import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12656" date="2024-09-25"
		new={ <>
			<li>신규 전투원 <BY>메로페</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>경고용 호루라기</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 버프 조건 <BB>반격으로 적 처치 시</BB>가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>설비 정보가 갱신되었습니다.</li>
			<li>
				일부 전투원의 짧은 이름, 별명과 다국어 이름이 갱신되었습니다.
				<ul>
					<li><BY>T-19 픽시</BY> 짧은 이름 <IconArrowRight /> <BY>픽시</BY></li>
					<li><BY>파니</BY> 별명 <IconArrowRight /> <BY>복실이</BY> 추가</li>
					<li><BY>AL 팬텀</BY> 별명 <IconArrowRight /> <BY>찐텀</BY> 추가</li>
					<li><BY>에이미 레이저</BY> 별명 <IconArrowRight /> <BY>엄마</BY> 추가</li>
					<li><BY>C-77 홍련</BY> 별명 <IconArrowRight /> <BY>엄마</BY> 추가</li>
					<li><BY>트리아이나</BY> 별명 <IconArrowRight /> <BY>트리케라톱스</BY> 추가</li>
					<li><BY>포츈</BY> 별명 <IconArrowRight /> <BY>든든</BY> 추가</li>
					<li><BY>S5 기간테스</BY> 별명 <IconArrowRight /> <BY>복실이</BY> 추가</li>
					<li><BY>니드호그</BY> 누락된 짧은 이름 추가</li>
					<li><BY>디오네</BY> 누락된 짧은 이름 추가</li>
					<li>그 외 오류가 있던 전투원 다국어 이름 수정</li>
				</ul>
			</li>
		</> }
		skin={ <>
			<li>전투원 <BY>스카디</BY>의 스킨 <BR>드림위버 모던 컬렉션: Dress Hook Hacker</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>메로페</BY>의 스킨 <BR>플레이아데스의 자랑! 귀여운 막내​</BR>의 정보가 추가되었습니다.</li>
			<li>누락된 스킨 배너를 추가했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-09-25 03:44:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12651" date="2024-09-24"
		new={ <>
			<li><BY>전투원정보</BY>의 상세 검색에 <BP>버프 보유 (이름)</BP> 조건이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				버프 보기 및 필터에서 <BB>적 처치 시</BB> 조건을
				<BB>적 처치 시</BB>, <BB>적 처치 시 (패시브)</BB>로
				세분화 했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12649" date="2024-09-21"
		new={ <>
			<li><BY>전투원정보</BY>의 상세 검색에 <BP>스탯</BP> 조건이 추가되었습니다.</li>
			<li><BY>전투원정보</BY>의 상세 검색의 <BP>등급</BP> 및 <BP>스탯</BP> 조건에 <BG>A ~ B</BG> 연산자가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				버프 보기 및 필터에서 <BB>피격 시</BB> 조건을
				<BB>피격 시</BB>, <BB>피격 후</BB>, <BB>액티브 스킬로 피격 시</BB>로
				세부 분류를 추가했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12646" date="2024-09-20"
		update={ <>
			<li>전투원 <BY>디오네</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>장비정보</BY>의 팝업에서 등급을 변경해도 팝업 내용이 갱신되지 않던 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12644" date="2024-09-18"
		bugfix={ <>
			<li>전투원 <BY>포이</BY>의 스킨 <BR>수영복 콘테스트 : 포이는 물이 싫어</BR>가 잘못 표시되는 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12643" date="2024-09-09"
		bugfix={ <>
			<li>일부 버프 목록을 포함하는 페이지가 동작하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12640" date="2024-09-06"
		new={ <>
			<li>
				<BY>전투원정보</BY> 페이지에 <BP><IconFilter /> 버프별 보기</BP> 표시 방식이 추가되었습니다.<br />
				전투원을 특정 버프 타입으로 묶어서 표시합니다.<br />
				표시될 내용이 매우 많아 브라우저 성능 문제가 있을 수 있습니다.
			</li>
		</> }
		bugfix={ <>
			<li>일부 스킨의 표정이 표시되지 않던 문제를 수정했습니다.</li>
			<li>버프 정보에서 모든 반격 종류가 <BR>반격</BR> 하나로 표시되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12636" date="2024-09-05"
		new={ <>
			<li>신규 이벤트 <BY>다시 시작하는 바다 모험</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				전투원 <BY>디오네</BY>의 스킬 정보가 갱신되었습니다.<br />
				<BP>실제 스킬 효과와 설명 원본이 다른 점이 존재하니 확인할 때 유의하시기 바랍니다.</BP>
			</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어의 재생이 종료되면 사용할 수 없는 주소로 변경되는 점을 수정했습니다.</li>
			<li>스토리 플레이어가 캐릭터의 표정만 바뀌는 경우에도 모델을 새로 불러오는 문제를 수정했습니다.</li>
			<li>스토리 플레이어에서 선택지 텍스트가 버튼을 벗어날 수 있는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>유린의 소니아</BY>의 스킨 <BR>체포, 압수, 풍기문란!</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-09-05 12:13:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
