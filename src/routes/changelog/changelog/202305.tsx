import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12143" date="2023-05-30"
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 버프 정보가 갱신되었습니다.</li>
			<li>버프 목록에서 특정 버프를 조건으로 표시할 때 버프의 속성을 표시하도록 수정했습니다. (강화, 해로운, 일반, 모든)</li>
		</> }
	/>
	<ChangelogItem title="Build 12141" date="2023-05-22"
		bugfix={ <>
			<li>일부 팝업들이 제대로 동작하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12139" date="2023-05-22"
		site={ <>
			<li>사이트를 불러오는 도중에 오류가 발생한 경우에 표시되는 안내문을 추가했습니다.</li>
			<li>이제 5분마다 사이트가 업데이트되었는지 검사합니다.</li>
			<li>Store 라이브러리를 unistore에서 @preact/signals로 변경을 완료했습니다.</li>
		</> }
		new={ <>
			<li>
				<BY>기타</BY> 메뉴의 외부 링크에 <BY>스킬 사거리/범위 메이커</BY> 링크를 추가했습니다.
			</li>
		</> }
		update={ <>
			<li>최대 사거리 표기를 6으로 제한하던 것을 삭제했습니다.</li>
			<li>SSS 등급 장비의 획득처에 SS 등급 장비 획득처가 같이 표시됩니다.</li>
			<li>전투원 <BY>헬라</BY>의 획득처가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>C-33 안드바리</BY>의 스킨 <BY>드림위버 모던 컬렉션 : 창고가드</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>티에치엔</BY>의 스킨 <BY>러브 올 에이스!</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li>일부 전투원의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-05-22 12:44:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12130" date="2023-05-15"
		bugfix={ <>
			<li>일부 전투원 스킨의 다운로드 이미지 오류를 수정했습니다.</li>
			<li>일부 전투원 스킨이 잘못 표시되던 점을 수정했습니다.</li>
			<li>일부 전투원의 소개 오디오가 누락된 점을 수정했습니다.</li>
			<li>진행중인 이벤트 정보가 올바르지 않은 점을 수정했습니다.</li>
			<li>일부 지역의 정보가 갱신되지 않은 점을 수정했습니다.</li>
			<li>일부 적의 정보가 갱신되지 않은 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>천우의 하토르</BY>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
			<li>
				<BY>천우의 하토르</BY>의 기본 스킨 이미지가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-05-15 15:52:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12128" date="2023-05-08"
		bugfix={ <>
			<li>전투원 <BY>천우의 하토르</BY>가 스킨 보기의 출시일에서 스킨으로 분류되던 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>철혈의 레오나</BY>의 스킨 <BY>드림위버 모던 컬렉션 : 라 마드리나</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-12 칼리아흐 베라</BY>의 스킨 <BY>드림위버 모던 컬렉션 : 보디가드</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-05-08 17:46:30</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12126" date="2023-05-02"
		new={ <>
			<li>신규 전투원 <BY>천우의 하토르</BY>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>시뮬레이터에서 모든 위치가 항상 선택된 상태로 표시되는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>총력전 목록이 내림차순으로 보이도록 수정하였습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>장화</BY>의 스킨 <BY>뒤바뀐 운명 : 장화</BY>의 이미지가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-05-02 04:17:26</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
