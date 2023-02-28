import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12095" date="2023-02-28"
		bugfix={ <>
			<li>적 정보 페이지가 올바르게 작동하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12094" date="2023-02-28"
		bugfix={ <>
			<li>서약 대사가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12093" date="2023-02-28"
		new={ <>
			<li>변화의 성소 5지역의 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 적 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>AL 팬텀</BY>의 스킨 <BR>AL 큐트 : 팬텀 블랙</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>금란 S7</BY>의 스킨 <BR>모던 드레스 금란</BR>의 중파 정보가 추가되었습니다.
			</li>
			<li>
				<BY>펜리르</BY>의 스킨 <BR>종교의 자유(?)를 원하는 펜리르</BR>의 중파 정보가 추가되었습니다.
			</li>
			<li>
				<BY>브륀힐데</BY>의 스킨 <BR>화염의 지배자 브륀힐드</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-02-28 12:59:34</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12089" date="2023-02-21"
		new={ <>
			<li>신규 전투원 <BY>올리비아 스타수어</BY>의 정보가 추가되었습니다.</li>
			<li>THE RADIANT SOUNDS에 CAFE amor 앨범이 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>이제 THE RADIANT SOUNDS는 앨범 이미지를 모두 불러온 후에 시작됩니다.</li>
			<li>전투원정보의 스킨보기의 상세검색 탭의 스킨 이미지가 잘못 표시되던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>전투원 <BY>오드리 드림위버</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>테일러 클로스컷</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>이벤트 <BY>흐린 기억 속의 나라</BY>가 상시 이벤트에 추가되었습니다.</li>
			<li>THE RADIANT SOUNDS에 CAFE amor 및 CAFE amor x Horizon 앨범이 추가되었습니다.</li>
			<li>THE RADIANT SOUNDS에서 모바일 환경의 사용 경험이 개선되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>P-18 실피드</BY>의 스킨 <BR>자유로운 영혼 실피드</BR>의 이미지가 수정되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-02-21 20:55:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12080" date="2023-02-18"
		new={ <>
			<li>전투원 <BY>CM67 스팅어</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>AC-6 후사르</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>코코 인 화이트셸</BY>의 승급 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원정보의 스킨보기에서 일부 스킨의 이름이 표시되지 않는 문제가 수정되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 <BY>에이다 Type-G</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>CM67 스팅어</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>AC-6 후사르</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>코코 인 화이트셸</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>마이티R</BY>의 스킨 <BR>마이티 더 브레이커</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>P-18 실피드</BY>의 스킨 <BR>자유로운 영혼 실피드</BR>의 중파 정보가 추가되었습니다.
			</li>
			<li>
				<BY>펜리르</BY>의 스킨 <BR>종교의 자유(?)를 원하는 펜리르</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-02-18 18:53:34</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12078" date="2023-02-09"
		new={ <>
			<li>
				<BY>소모품</BY> 페이지가 추가되었습니다.<br />
				<BY>기타</BY> 하위 메뉴에서 확인 가능합니다.
			</li>
		</> }
		update={ <>
			<li>
				<BY>눈먼 공주와 안개의 나라</BY> 이벤트가 종료되었습니다.
			</li>
			<li>
				<BY>빛이 들지 않는 성역</BY> 이벤트가 시작되었습니다.
			</li>
			<li>
				<BY>니바</BY> 전투원의 스킬 설명 일부가 수정되었습니다.
			</li>
			<li>
				<BY>스티커</BY> 정보가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-02-09 21:50:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
