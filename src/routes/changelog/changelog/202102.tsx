import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 8197" date="2021-02-22"
		bugfix={ <>
			<li>Build 8137 이후, 전투원 스킬 정보 일부가 비정상적으로 표시되던 문제를 수정했습니다.</li>
			<li>Build 8137 이후, 일부 링크 보너스가 올바르지 않은 이름으로 표시되던 문제를 수정했습니다.</li>
			<li>Build 8137 이후, 일부 페이지가 표시되지 않거나 문자가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">T-40 하이에나</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">누군가 바랐던 소원</span>의 2부 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">드리아드</span>의 <span class="badge bg-danger">꾀병을 부리는 요정</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">에이미 레이저</span>의 <span class="badge bg-danger">드림위버 웨딩 스페셜 : 파랑새</span>의 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 8137" date="2021-02-22"
		site={ <>
			<li>사이트 언어 기능이 추가되었습니다. 현재 한글과 영문만 사용 가능하며, 영문은 일부만 번역되었습니다.</li>
			<li>Language feature has added. Currently only supports KR and EN, EN is partially translated.</li>
		</> }
		bugfix={ <>
			<li><RarityBadge border rarity="S">S급 장비</RarityBadge>의 강화 비용이 잘못 표시되던 문제를 수정했습니다.</li>
			<li>일부 전투원의 짧은 이름이 제대로 적용되어있지 않던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-substory">세계정보</span>의 클리어 조건의 전투원이 뱃지로 변경되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">T-14 미호</span>의 <span class="badge bg-danger">천년의 약속</span> 스킨의 가격 정보가 갱신되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7856" date="2021-02-13"
		site={ <>
			<li>일부 스크립트를 CDN 경유로 변경하였습니다.</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 <span class="badge bg-substory">테이블 보기</span>의 헤더 아이콘이 잘못 표시되던 점을 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 전투원 대사에서 스킨의 서약 대사는 <span class="badge bg-dark">미구현</span>으로 표시되도록 수정했습니다.</li>
			<li>일부 소모품의 이미지가 표시되지 않던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">적 정보</span> 팝업에 해당 적 팝업으로 바로 이동하는 주소 링크를 추가했습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">적 정보</span> 팝업에서 레벨을 변경하면 현재 주소에도 해당 레벨이 반영되도록 수정했습니다. 적 정보 주소를 적의 레벨과 함께 공유할 수 있습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span>의 <span class="badge bg-substory">전투원 카드</span>의 전투원 유형을
				인게임에서 사용하는 아이콘으로 변경하고 카드의 좌상단으로 옮겼습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">켈베로스</span>의 <span class="badge bg-danger">드림위버 웨딩 스페셜 : 오늘은 얌전히!</span> 스킨의
				로비 애니메이션 여부와 가격 정보가 갱신되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 7845" date="2021-02-08"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">천향의 히루메</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">누군가 바랐던 소원</span> 이벤트 정보가 추가되었습니다. (교환소 정보는 이후 추가됩니다.)</li>
			<li>신규 적 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">T-14 미호</span>의 <span class="badge bg-danger">천 년의 약속</span> 스킨 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">사라카엘</span>의 대사 일부가 잘못입력되어있던 점을 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 7842" date="2021-02-01"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">P/A-00 그리폰</span>의 2번째 패시브
				<span class="badge bg-substory">연계 폭격</span>의 적용 대상이 올바르지 않던 점을 수정했습니다.
			</li>
			<li>
				일부 환경에서 전투원 스킬 정보의 <span class="badge bg-primary">아군 대상</span> 또는 <span class="badge bg-primary">본인 대상</span> 표기가
				줄바꿈되는 문제를 수정했습니다.
			</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">사라카엘</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">개량형 방어 역장</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">2021년 02월 교환소</span> 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 스킬 정보의 비 증감값 계수의 가시성을 개선했습니다.</li>
			<li>전투원 대사의 <span class="badge bg-warning text-dark">누락</span>을 <span class="badge bg-dark">미구현</span>으로 변경하였습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">드라큐리나</span>의 중파 이미지 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">레이시</span>의 <span class="badge bg-danger">머무를 장소</span> 스킨 정보가 추가되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
