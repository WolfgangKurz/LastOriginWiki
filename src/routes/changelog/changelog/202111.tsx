import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11390" date="2021-11-28"
		site={ <>
			<li>웹사이트를 vite + preact 구조로 변경했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11263" date="2021-11-24"
		new={ <>
			<li>JP DMM 보이스가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">랜서 미나</span>의 이미지가 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-11-24 23:03:22</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11259" date="2021-11-22"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">X-02 우르</span>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 스킬의 수치가 잘못 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>스킬 버프의 내용에 "이로운/해로운" 등의 세부 표기가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">멸망의 메이</span>의 스킨
				<span class="badge bg-danger">미스오르카 : My Love</span> 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">B-11 나이트 앤젤</span>의 스킨
				<span class="badge bg-danger">미스오르카 : FLIGHT AGAIN</span> 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">장화</span> 기본 스킨의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-11-22 09:12:54</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11250" date="2021-11-18"
		bugfix={ <>
			<li>일부 스킬의 수치가 잘못 표시되던 문제를 수정했습니다.</li>
			<li>전투원 스킬의 협동 공격 버프가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">P-49 슬레이프니르</span>의 기본 스킨 로비 애니메이션 영상의 오류를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이제 <span class="badge bg-warning text-dark">F.Change</span>으로 변경된 스킬은 스킬 표에서 강조되어 표시됩니다.</li>
			<li>전투원 스킬 정보 개편이 187번 전투원까지 완료되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-11-18 02:27:49</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11243" date="2021-11-16"
		bugfix={ <>
			<li>일부 스킬/장비의 효과가 버프 목록에 표기되지 않던 문제를 수정했습니다.</li>
			<li>적 정보의 적 그룹 목록의 맵 버튼이 최신 정보로 갱신되지 않았던 점을 수정했습니다.</li>
		</> }
		delete={ <>
			<li>로그라이크(철의 탑) 관련 정보들이 삭제되었습니다.</li>
		</> }
		update={ <>
			<li>상설 이벤트 목록이 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>변화의 성소 내 웨이브 정보에서 오해될 수 있는 확률 표기를 제거했습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">AT72 라인리터</span>의 스킨
				<span class="badge bg-danger">마법소녀의 수호수</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-11-16 03:01:56</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11248" date="2021-11-16"
		bugfix={ <>
			<li>적의 스킬이 표시되지 않던 점을 수정했습니다.</li>
			<li>적 스킬 정보의 협동 공격이 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11243" date="2021-11-16"
		bugfix={ <>
			<li>일부 스킬/장비의 효과가 버프 목록에 표기되지 않던 문제를 수정했습니다.</li>
			<li>적 정보의 적 그룹 목록의 맵 버튼이 최신 정보로 갱신되지 않았던 점을 수정했습니다.</li>
		</> }
		delete={ <>
			<li>로그라이크(철의 탑) 관련 정보들이 삭제되었습니다.</li>
		</> }
		update={ <>
			<li>상설 이벤트 목록이 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>변화의 성소 내 웨이브 정보에서 오해될 수 있는 확률 표기를 제거했습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">AT72 라인리터</span>의 스킨
				<span class="badge bg-danger">마법소녀의 수호수</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-11-16 03:01:56</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11239" date="2021-11-08"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">프리가</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">트리톤</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">GS-130 피닉스</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-50 PX 실키</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-20S 노움</span>의 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 기간 연장이 반영되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">AG-1 네레이드</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon : 네리는 부끄러워</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AG-2C 세이렌</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon : 부함장님은 메이드!</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">보련</span>의 스킨
				<span class="badge bg-danger">수영복 콘테스트 : 해변의 이발사</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-11-08 12:23:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11216" date="2021-11-01"
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">살라시아</span>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">골타리온 XIII세</span>의 스킬 정보가 갱신되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">해체자 아자즈</span>의 스킨
				<span class="badge bg-danger">5월의 여왕 : 색다른 경험</span>의 로비 애니메이션 정보 및 영상이 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">AT-100 비스트헌터</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">A-54 칼리스타</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">키르케</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-11-01 14:30:01</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
