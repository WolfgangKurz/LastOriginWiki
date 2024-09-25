import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";
import IconFilter from "@/components/bootstrap-icon/icons/Filter";
import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";

import Locale from "@/components/locale";
import IconX from "@/components/bootstrap-icon/icons/X";
import IconCheck from "@/components/bootstrap-icon/icons/Check";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12659" date="2024-09-26"
		update={ <>
			<li>
				버프 조건 <BB>적 처치 시</BB> 계열이 수정되었습니다.
				<ul>
					<li class="mb-2">
						<BB>적 처치 시</BB>
						<IconArrowRight class="mx-1" />
						<BB>적 직접 처치 시</BB>
						<br />
						<div
							class="d-inline-block bg-dark text-bg-dark p-2 pe-3"
							style={ { borderRadius: "0.5rem", whiteSpace: "pre-line" } }
						>
							<Locale
								k="BUFFTRIGGERDESC_KILL"
								p={ [
									<span class="text-danger"><IconX /></span>,
									<span class="text-danger"><IconX /></span>,
									<span class="text-danger"><IconX /></span>,
									<span class="text-success"><IconCheck /></span>,
									<span class="text-danger"><IconX /></span>,
								] }
							/>
						</div>
					</li>
					<li class="mb-2">
						<BB>적 처치 시 (패시브)</BB>
						<IconArrowRight class="mx-1" />
						<BB>적 처치 시</BB>
						<br />
						<div
							class="d-inline-block bg-dark text-bg-dark p-2 pe-3"
							style={ { borderRadius: "0.5rem", whiteSpace: "pre-line" } }
						>
							<Locale
								k="BUFFTRIGGERDESC_KILL"
								p={ [
									<span class="text-success"><IconCheck /></span>,
									<span class="text-success"><IconCheck /></span>,
									<span class="text-danger"><IconX /></span>,
									<span class="text-success"><IconCheck /></span>,
									<span class="text-success"><IconCheck /></span>,
								] }
							/>
						</div>
					</li>
					<li class="mb-2">
						<BB>반격으로 적 처치 시</BB>
						<IconArrowRight class="mx-1" />
						<BB>적 처치 기여 시</BB>
						<br />
						<div
							class="d-inline-block bg-dark text-bg-dark p-2 pe-3"
							style={ { borderRadius: "0.5rem", whiteSpace: "pre-line" } }
						>
							<Locale
								k="BUFFTRIGGERDESC_KILL"
								p={ [
									<span class="text-success"><IconCheck /></span>,
									<span class="text-success"><IconCheck /></span>,
									<span class="text-success"><IconCheck /></span>,
									<span class="text-success"><IconCheck /></span>,
									<span class="text-danger"><IconX /></span>,
								] }
							/>
						</div>
					</li>
				</ul>
				자세한 내용은 버프 목록의 조건 뱃지에 추가된 툴팁에서도 확인 가능합니다.
			</li>
		</> }
		bugfix={ <>
			<li>일부 모바일 환경에서 플레이어가 표시되지 않아 전투원의 소개 보이스를 재생할 수 없던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12657" date="2024-09-25"
		new={ <>
			<li>신규 총력전 정보가 추가되었습니다.</li>
		</> }
	/>
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
</>;
export default Changelog;
