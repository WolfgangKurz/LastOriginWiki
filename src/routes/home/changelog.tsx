import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import IconGithub from "@/components/bootstrap-icon/icons/Github";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12469" date="2024-02-10"
		site={ <>
			<li>
				사이트 메뉴에서 <BY>변화의 성소</BY> 및 <BY>총력전</BY>을 제거하고 <BY>세계정보</BY> 페이지로 이전했습니다.
			</li>
			<li>
				스토리 감상을 위한 <BY>스토리</BY> 메뉴가 추가되었습니다.
			</li>
			<li>
				스토리 뷰어 명칭을 플레이어로 변경했습니다.
			</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어에서 일부 화자의 이름이 표시되지 않는 점을 수정했습니다.</li>
			<li>
				<BY>전투원정보</BY>의 <BY>테이블 보기</BY>에서 일부 전투원 이름이 잘리는 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12465" date="2024-02-09"
		bugfix={ <>
			<li>Spine 애니메이션 스킨이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12463" date="2024-02-09"
		bugfix={ <>
			<li>
				일부 환경에서 <BY>스토리 뷰어</BY>의 텍스트가 잘려 보이는 현상을 수정했습니다.<br />
				실제 오류가 개발 환경에서 확인되지 않아 수정되지 않았을 수도 있습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12460" date="2024-02-07"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 테이블 보기에서 전투원 항목이 링크로 취급되지 않던 문제를 수정했습니다.
			</li>
			<li>
				전투원의 상세 정보에서 별명이 비어있는 경우 잘못된 내용이 표시되던 문제를 수정했습니다.
			</li>
			<li>
				전투원 및 장비의 획득처에서 <BY>메인스토리</BY> 클리어 보상이 * 로 표시되던 문제를 수정했습니다.
			</li>
			<li>
				적 <BR>추격자</BR>의 행동 원리가 잘못 표시되던 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12458" date="2024-02-07"
		site={ <>
			<li>
				사이트 개편안의 일부를 선행 적용했습니다.
				<ol>
					<li><BY>전투원정보</BY>의 <BY>테이블 보기</BY>의 디자인이 변경되었습니다.</li>
					<li>이제 <BY>전투원정보</BY>의 이름 검색이 띄어쓰기를 무시합니다.</li>
					<li>
						이제 <BY>전투원정보</BY>의 이름 검색이 <BO>별명</BO>에도 검색됩니다.<br />
						별명의 추가 또는 수정 요청은&nbsp;
						<a class="mx-1" href="https://github.com/WolfgangKurz/LastOriginWiki/issues" target="_blank">
							<IconGithub /> Github Issue
						</a>
						를 통해 가능합니다.
					</li>
					<li>
						전투원 상세정보에 <BO>별명</BO> 항목이 추가되었습니다.
					</li>
				</ol>
			</li>
		</> }
		new={ <>
			<li>이벤트 <BY>우주에서 온 황금</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
			<li>신규 적 그룹 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>
				<BY>THE RADIANT SOUNDS (BGM)</BY>에서 유튜브 음원을 처음 재생할 때,
				재생되지 않았지만 재생 버튼이 표시되지 않아 재생할 수 없는 문제를 수정했습니다.
			</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>U2DModelRenderer의 일부 버그가 수정되었습니다.</li>
			<li>
				SSS급 장비의 장비 팝업에서 SS급 드랍처 정보의 배경 색상이
				메인스토리 / 상시 이벤트 / 진행중인 이벤트 표시 색상과 비슷해 가시성이 저하되어
				색상을 변경하여 해당 부분을 개선했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>레모네이드 알파</BY>의 스킨 <BY>어론 님 오신 밤</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-02-07 01:33:14</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
