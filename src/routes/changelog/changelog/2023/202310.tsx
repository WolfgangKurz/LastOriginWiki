import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12349" date="2023-10-24"
		new={ <>
			<li>이벤트 <BY>멸망 이후의 커튼콜</BY>의 2부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 스토리의 번역 정보가 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>프리가</BY>의 스킨 <BR>100일간의 기다림</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-24 21:59:34</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12346" date="2023-10-21"
		site={ <>
			<li>사이트가 로드되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12318" date="2023-10-21"
		new={ <>
			<li>신규 장비 정보가 추가되었습니다.</li>
			<li>일부 전투원의 승급 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>
				세계정보에 스토리 뷰어가 추가되었습니다.<br />
				<strong class="text-danger">이 기능은 아직 개발중입니다.</strong>
			</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>신규 이벤트 지역의 드랍처가 전투원정보에 반영되지 않은 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-21 05:40:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12313" date="2023-10-11"
		new={ <>
			<li>신규 이벤트 <BY>멸망 이후의 커튼콜</BY>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>갈라테아</BY>의 스킨 <BR>가을, 그리고 갈라테아</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		site={ <>
			<li>오류가 있던 일본어가 아마도 정상화되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-11 04:01:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12311" date="2023-10-09"
		bugfix={ <>
			<li>
				서약 대사가 둘 이상의 오디오 파일로 이루어진 전투원의 서약 대사가 표시되지 않던 문제가 수정되었습니다.
			</li>
			<li>
				<BY>성벽의 하치코</BY>의 기본 대사 일부가 표시되지 않던 문제가 수정되었습니다.
			</li>
		</> }
		update={ <>
			<li>
				<BY>전투원정보</BY>의 전투원 스킬의 이름 정보 표기가 일부 수정되었습니다.
			</li>
			<li>
				<BY>전투원정보</BY>의 상세 검색의 작은 화면의 사용 환경이 개선되었습니다.
			</li>
		</> }
		site={ <>
			<li>사이트의 페이지 및 데이터를 불러오고 있을 때의 시각적 표현이 추가되었습니다.</li>
			<li>사이트의 일본어에 문제가 있는 점에 대한 공지가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-09 04:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12308" date="2023-10-07"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 <BG>스킨 보기</BG>에서 일부 스킨의 아이콘이 표시되지 않는 문제가 수정되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>보련</BY>의 스킨 <BR>방과 후 미용사 보련</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-10 님프</BY>의 스킨 <BR>드림위버 모던 컬렉션 : 느와르</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-07 01:07:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
