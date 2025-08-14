import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13009" date="2025-08-15"
		new={ <>
			<li>신규 전투원 <BY>하루 에스티아</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>스텔라 유니벨</BY>의 정보가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>더럽혀진 마지막 기록</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		site={ <>
			<li>전투원 대사에 태그가 표현될 수 있도록 개선했습니다.</li>
			<li>Spine 라이브러리를 갱신했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>하루 에스티아</BY>의 스킨 <BR>과거의 복수, 미래를 향한 투지</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>하루 에스티아</BY>의 스킨 <BR>더럽혀진 마지막 기록 번외</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>스텔라 유니벨</BY>의 스킨 <BR>헬라와 스텔라의 심야 무도회</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>마키나</BY>의 스킨 <BR>경고! 주의! 관계자 외 이해금지 오트쿠튀르 비키니…?</BR>의 정보가 추가되었습니다.</li>
		</> }
		knownissue={ <>
			<li>
				전투원 <BY>하루 에스티아</BY>의 스킨 <BR>더럽혀진 마지막 기록 번외</BR>의 얼굴 아이콘이 표시되지 않습니다.<br />
				게임 데이터에 포함되어있지 않습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-08-15 06:17:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13003" date="2025-08-05"
		bugfix={ <>
			<li>
				전투원 <BY>장화</BY>의 스킨 <BR>프로젝트 오르카 : 선라이징 스테이지 Sprit and Soul</BR>의
				스킨 배너가 표시되지 않던 점을 수정했습니다.
			</li>
			<li>전투원 <BY>마리아 그레이스</BY>의 기본 스킨에 장식품 숨기기가 표시되던 점을 수정했습니다.</li>
			<li>
				전투원 <BY>마리아 그레이스</BY>의 스킨 <BR>프로젝트 오르카 : 선라이징 스테이지 Joy</BR>를
				장식품 숨기기 상태에서 다운로드할 수 없던 문제를 수정했습니다. (다운로드+ 가 아닌 경우)
			</li>
		</> }
	/>
	<ChangelogItem title="Build 13002" date="2025-08-02"
		new={ <>
			<li>이벤트 <BY>Project ORCA ~SunRising Stage~</BY>의 3부 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 BGM의 곡 길이가 잘못 입력된 점을 수정했습니다.</li>
			<li>일부 스킨의 가격이 판매중이지 않은 항목의 가격을 참조하던 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>마리아 그레이스</BY>의 스킨 <BR>프로젝트 오르카 : 선라이징 스테이지 Joy</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-08-02 00:11:31</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
