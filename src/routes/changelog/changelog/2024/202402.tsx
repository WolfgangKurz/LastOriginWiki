import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";
import IconGithub from "@/components/bootstrap-icon/icons/Github";

const Changelog: FunctionalComponent = () => <>
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
	<ChangelogItem title="Build 12475" date="2024-02-14"
		bugfix={ <>
			<li>
				스토리 플레이어에서 일부 전투원이 올바르게 표시되지 않는 문제를 수정했습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일본어 소개 및 대사 보이스가 추가/갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12470" date="2024-02-14"
		skin={ <>
			<li>
				<BY>성벽의 하치코</BY>의 스킨 <BY>상쾌한 달콤함</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>화롯가의 포티아</BY>의 스킨 <BY>사령관님 전용 디저트</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>다프네</BY>의 스킨 <BY>다프네 인 더 키친</BY>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12469" date="2024-02-10"
		site={ <>
			<li>
				사이트 메뉴에서 <BY>변화의 성소</BY> 및 <BY>총력전</BY>을 제거하고 <BY>세계정보</BY> 페이지로 이전했습니다.
			</li>
			<li>
				스토리 감상을 위한 <BY>스토리</BY> 메뉴가 추가되었습니다.
			</li>
			<li>
				스토리 뷰어 명칭을 스토리 플레이어로 변경했습니다.
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
	<ChangelogItem title="Build 12454" date="2024-02-01"
		new={ <>
			<li>이벤트 <BY>우주에서 온 황금</BY>의 서브스토리 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>무적의 용</BY>의 스킨 <BY>뒤틀린 운명 : 포세이돈 용</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>RF87 로크</BY>의 스킨 <BY>창공의 기사 로크</BY>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
