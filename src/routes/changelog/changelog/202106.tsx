import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 10864" date="2021-06-01"
		bugfix={ <>
			<li>
				<span class="badge bg-wawrning text-dark">장비정보</span>에서 제조 가능한 장비가
				<span class="badge bg-secondary">한정</span>으로 분류되는 문제를 수정했습니다.
			</li>
			<li>
				<span class="badge bg-wawrning text-dark">전투원정보</span>에서 전투원이 링크로 구성되어있지 않아서
				새 탭 열기 또는 메뉴 열기가 불가능했던 점을 수정했습니다.
			</li>
			<li>전투원 스킨의 옵션을 켠 후에 다른 스킨을 열람하면 옵션이 유지되어 다른 스킨이 표시되지 않던 문제를 수정했습니다.</li>
			<li><span class="badge bg-wawrning text-dark">획득처</span>의 이벤트 교환소가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이제 AGS의 호감도 표가 표시되지 않습니다.</li>
			<li>철의 탑 정보가 갱신되었습니다.</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>신규 이벤트 맵 <span class="badge bg-success">Finale</span> 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">글라시아스</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">퀸 오브 메인</span>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-06-01 01:20:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-06-01</span> 기준의 일본 서버 대사 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">C-33 안드바리</span>의 스킨
				<span class="badge bg-danger">첫 번째 수업</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">미스세이프티</span>의 스킨
				<span class="badge bg-danger">얼룩제거반</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">공진의 알렉산드라</span>의 스킨
				<span class="badge bg-danger">5월의 여왕 : 미스 퍼펙트</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
