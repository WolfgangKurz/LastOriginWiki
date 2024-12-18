import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11515" date="2022-01-24"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">잠재력 돌파</span> 일일 훈련이 정상적으로 표시되지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11508" date="2022-01-24"
		bugfix={ <>
			<li>드랍 테이블에서 장비를 선택 시 페이지가 이동되는 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">엠피트리테</span>의 일러스트 일부가 잘못 표시되던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 2부 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">니바</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">핏빛안대 -혈화요란-</span>의 정보가 추가되었습니다.</li>
			<li>전투원 정보에 <span class="badge bg-warning text-dark">상한 확장</span> 탭이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">Simulatorβ</span>의 레벨 입력이 120까지 확장되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">장비 목록</span>에 <span class="badge bg-secondary">변화의 성소</span> 필터가 추가되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">CS 페로</span>의 스킨 <span class="badge bg-danger">CAFE amor : dolce</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">로열 아스널</span>의 스킨 <span class="badge bg-danger">CAFE amor : a ballata</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">해체자 아자즈</span>의 스킨 <span class="badge bg-danger">CAFE amor : amabile</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">LRL</span>의 스킨 <span class="badge bg-danger">꿈을 이룬 소녀</span>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">CS 페로</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-01-22 03:52:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11497" date="2022-01-18"
		bugfix={ <>
			<li>일부 버프 정보가 올바르게 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11495" date="2022-01-17"
		new={ <>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 2부 프롤로그 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-3 레프리콘</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">M-5 이프리트</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">LRL</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">A-14B 스프리건</span>의 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">에키드나</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">CS 페로</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-3 레프리콘</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">M-5 이프리트</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">A-14B 스프리건</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">사이클롭스 프린세스</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 스킬 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-01-17 16:57:33</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11491" date="2022-01-10"
		update={ <>
			<li><span class="badge bg-warning text-dark">사이클롭스 프린세스</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">티타니아 프로스트</span>의 스킨 <span class="badge bg-danger">오르카 바니 : 도도한 눈토끼</span>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-01-10 12:28:09</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11488" date="2022-01-08"
		new={ <>
			<li>세계 정보에 <span class="badge bg-success">드랍 테이블</span> 페이지가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-01-08 21:57:26</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11473" date="2022-01-07"
		bugfix={ <>
			<li>세계 정보에서 일부 지역의 표현이 올바르지 않던 점을 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-01-07 22:21:37</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11470" date="2022-01-04"
		bugfix={ <>
			<li>세계 정보에서 일부 지역의 표현이 올바르지 않던 점을 수정했습니다.</li>
			<li>경험치 계산기에서 스킬 보너스 이름이 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>세계 정보에 스킬 경험치와 사령관 경험치 표기가 추가되었습니다.</li>
			<li>경험치 계산기에 <span class="badge bg-warning text-dark">이벤트 보너스</span> 입력이 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11467" date="2022-01-03"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">사이클롭스 프린세스</span>의 정보가 추가되었습니다.</li>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 1부 추가 정보가 추가되었습니다.</li>
			<li>전투원 정보에 로봇 전투원의 연구 계통도가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 스킬 위력 관련 버프 표시가 올바르지 않게 표현되는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>전투원 스킨의 부가 정보의 순서가 일부 변경되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">글라시아스</span>의 스킨 <span class="badge bg-danger">필멸의 운명</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AC-6 후사르</span>의 스킨 <span class="badge bg-danger">오르카 바니 : 두근두근 Make up</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">천아</span>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-01-03 11:11:03</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
