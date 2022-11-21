import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11948" date="2022-11-22"
		update={ <>
			<li>전투원 <BY>토미 워커</BY>의 SS 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>드론 08</BY>의 SS 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>와쳐 MQ-20</BY>의 SS 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>CT103 포트리스</BY>의 SS 승급 정보가 추가되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>메인스토리 2부 2지역 (10지역) 일부의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>이터니티</BY>의 스킨 <BR>미스오르카 : 북극성</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>바르그</BY>의 스킨 <BR>늑! 대! 무녀 바르그</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-11-22 00:43:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11946" date="2022-11-17"
		bugfix={ <>
			<li>일부 적에게 가지고 있지 않은 스킬이 표시되던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11937" date="2022-11-15"
		bugfix={ <>
			<li>일부 스킬 플레이버 텍스트에 오타가 있던 점을 수정했습니다.</li>
		</> }
		site={ <>
			<li>운영사가 변경됨에 따라 사이트 문구가 일부 변경되었습니다.</li>
		</> }
		new={ <>
			<li>신규 장비 <span class="badge bg-warning text-dark">S.P.A.C.E</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">파랑새가 있던 새장</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">MMORPG</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">아나톨리아 산 물담배</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">라플라시안 글로브</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">삼정</span>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>메인스토리 2부 2지역 (10지역) 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>사멸의 세크메트</BY>의 스킨
				<BR>미스오르카 : 들려주고픈 이야기</BR>의 소품 정보 및 표정 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11934" date="2022-11-07"
		bugfix={ <>
			<li>스킨 정보에 추가됐던 표정이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>블랙 리리스</BY>의 스킨
				<BR>미스오르카 : 주인님 Overdose</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>사멸의 세크메트</BY>의 스킨
				<BR>미스오르카 : 들려주고픈 이야기</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>쿠노이치 엔라이</BY>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-11-07 15:40:33</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11930" date="2022-11-03"
		new={ <>
			<li>신규 전투원 <BY>헬라</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>에라토</BY>의 스킨
				<BR>드림위버 웨딩 스페셜 : 최고의 무대 위에서</BR>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-11-03 02:15:12</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
