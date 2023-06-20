import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12169" date="2023-06-21"
		bugfix={ <>
			<li><BY>장비정보</BY>에서 전용장비가 항상 표시되는 문제를 수정했습니다.</li>
			<li><BY>가챠 시뮬레이터</BY>의 임무 상자 더미가 10회 시뮬레이션되지 않는 문제를 수정했습니다.</li>
			<li><BY>가챠 시뮬레이터</BY>의 임무 상자 및 임무 상자 더미에 필요한 재화 표시가 수정되었습니다.</li>
		</> }
		new={ <>
			<li>신규 장비 <BY>속죄의 영대</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>경량형 실드 블레이드</BY>의 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>진행중인 이벤트가 종료됩니다.</li>
			<li><BY>가챠 시뮬레이터</BY>의 소모 재화 표시를 수정했습니다.</li>
			<li>
				일부 장비의 정보가 갱신되었습니다.<br />
				다음 장비들의 강화 Lv.0 상태의 버프가 삭제되었습니다.
				<ul>
					<li>테러진압용 외장아머 (T-60 불가사리)</li>
					<li>40mm DU탄 (AG-1 네레이드)</li>
					<li>우주용 확장 부스터 (CM67 스팅어)</li>
					<li>MG80용 개조키트 (T-10 님프)</li>
					<li>수상한 보조제 (스카디)</li>
				</ul>
			</li>
		</> }
		skin={ <>
			<li>
				<BY>에키드나</BY>의 스킨 <BY>휴일의 여제님</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>메리</BY>의 스킨 <BY>클로스컷 스페셜 컬렉션 : 미인도</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 자기소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-21 03:30:33</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
