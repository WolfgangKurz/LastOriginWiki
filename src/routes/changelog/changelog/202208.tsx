import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11882" date="2022-08-29"
		new={ <>
			<li>신규 전투원 <BY>클로버 에이스</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 버프의 조건이 버프 보기에서 표기되지 않는 문제를 수정했습니다.</li>
			<li>
				일부 전투원이 일부 오디오가 누락되어있던 점을 수정했습니다.
				<ul>
					<li><BY>아자젤</BY>의 스킨 <BR>수영복 콘테스트 : 한결같은 마음</BR>의 코어링크 대사</li>
					<li><BY>보련</BY>의 스킨 <BR>수영복 콘테스트 : 해변의 이발사</BR>의 수복 대사</li>
					<li><BY>키르케</BY>의 서약 대사 세트의 스쿼드 추가 대사</li>
					<li><BY>P-2000 지니야</BY>의 서약 대사 세트의 장비 장착 대사</li>
					<li><BY>C-77 홍련</BY>의 스킨 <BR>애프터 웨딩 : 퇴근 뒤의 저녁식사</BR>의 선물 대사</li>
				</ul>
			</li>
		</> }
		dialogue={ <>
			<li><BY>AT-4 파니</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li>누락된 DMM Games, FANZA Games 서비스 전투원 오디오가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-08-29 18:14:22</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11867" date="2022-08-23"
		update={ <>
			<li><BY>AT-100 비스트헌터</BY> 전투원의 승급 및 스킬 정보가 갱신되었습니다.</li>
			<li><BY>AT-4 파니</BY> 전투원의 승급 및 스킬 정보가 갱신되었습니다.</li>
			<li><BY>AO-2 레이븐</BY> 전투원의 승급 및 스킬 정보가 갱신되었습니다.</li>
			<li><BY>A-1 블러디 팬서</BY> 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li><BY>신속의 칸</BY> 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>엠프리스</BY>의 스킨
				<BR>아쿠아 랜드 : 한 여름의 펭귄</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>아이아스</BY>의 스킨
				<BR>아쿠아 랜드 : 이론과 실전</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>B-7 스트라토 엔젤</BY>의 스킨
				<BR>아쿠아 랜드 : 성공? 실패?</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>C-11 스카라비아</BY>의 스킨
				<BR>아쿠아랜드 : 게으른 공주</BR>의 중파 이미지가 추가되었습니다.
			</li>
			<li>일부 스킨의 일러스트레이터 정보가 잘못 표기되어있던 점을 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>갈라테아</BY>의 스킨 <BR>아쿠아랜드 : 무의식적인 유혹</BR>의 대사가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-08-23 02:58:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11864" date="2022-08-16"
		bugfix={ <>
			<li><BY>샬럿</BY> 전투원의 2번 패시브 스킬의 설명이 잘못 기입되어있던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li><BY>에키드나</BY> 전투원의 1번 액티브 스킬의 설명 및 효과가 갱신되었습니다.</li>
			<li><BY>A-14B 스프리건</BY> 전투원의 3번 패시브 스킬의 설명이 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>엘븐 포레스트메이커</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><BY>세띠</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-08-16 14:49:30</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11863" date="2022-08-12"
		bugfix={ <>
			<li>일부 구역의 클리어 조건이 표시되지 않던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>세계정보의 클리어 조건이 실제 조건과 표시 조건을 동시에 표시하도록 변경되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11861" date="2022-08-09"
		new={ <>
			<li>이벤트 <BY>해가 지지 않는 워터파크</BY>의 2부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li><BY>드론 08</BY> 및 <BY>천향의 히루메</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>T-40 하이에나</BY>의 스킨
				<BR>아쿠아랜드 : 축제에는 폭탄이지!</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>유린의 소니아</BY>의 스킨
				<BR>아쿠아랜드 : 유혹하는 눈빛</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>갈라테아</BY>의 스킨
				<BR>아쿠아랜드 : 무의식적인 유혹</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>갈라테아</BY>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-08-09 04:15:13</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11857" date="2022-08-02"
		update={ <>
			<li>일부 전투원의 스킬 플레이버 텍스트를 갱신했습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원정보 메뉴에서 <BY>스킨 보기</BY> 탭이 표시되지 않던 문제를 수정했습니다.</li>
			<li>전투원정보 메뉴의 <BY>목록 보기</BY> 탭에서 <BR>도감 번호순</BR> 정렬이 제대로 작동하지 않던 문제를 수정했습니다.</li>
			<li>버프 목록에서 <BY>~이(가) 아닐 때</BY> 조건이 <BY>~이(가) 0개 이상일 때</BY>로 표시되던 문제를 수정했습니다.</li>
			<li>버프 목록에서 일부 이름 없는 버프가 표시되지 않던 문제를 수정했습니다.</li>
			<li>일부 적의 스킬 설명이 갱신되어있지 않던 문제를 수정했습니다.</li>
			<li>전투원의 사거리가 <BR>6</BR>을 초과하여 표시되는 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>AO-2 레이븐</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><BY>베로니카</BY>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-08-02 22:10:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
