import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BR, BY } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13246" date="2026-11-21"
		bugfix={ <>
			<li>모바일 환경에서 스킨 및 SD 모델의 텍스쳐가 표시되지 않던 점을 수정했습니다.</li>
			<li>전투원 <BY>ZP95 주피터</BY>의 연구 트리가 표시되지 않던 점을 수정했습니다.</li>
			<li><BY>스토리 플레이어</BY>에서 일부 효과음이 재생되지 않던 점을 수정했습니다.</li>
			<li><BY>스토리 플레이어</BY>에서 일부 연출 효과가 대사보다 먼저 재생되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13240" date="2026-11-21"
		new={ <>
			<li>신규 전투원 <BY>ZP95 주피터</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>우주 항행용 OS &lt;올림푸스&gt;</BY>의 정보가 추가되었습니다.</li>
			<li><BY>세계 정보</BY>에 메인스토리 2지역 <BY>꺼지지 않는 등대</BY>가 추가되었습니다.</li>
			<li><BY>스토리</BY>에 메인스토리 2지역의 스토리가 추가되었습니다.</li>
			<li><BY>BGM</BY>에 신규 BGM 4곡이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>메인스토리 1지역의 적 편성 정보가 갱신되었습니다.</li>
			<li>일부 연구 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>스토리 플레이어</BY>에서 일부 내용이 제대로 표시되지 않던 점을 수정했습니다.</li>
			<li><BY>스토리 플레이어</BY>에서 <BY>세계 정보</BY>로 돌아가는 경로가 잘못되던 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>ZP95 주피터</BY>의 스킨 <BR>문명 재건 사업: 휴먼 커스텀 팩 : Model.Juno</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>오베로니아 레아</BY>의 스킨 <BR>오르카는 언제나 흐림 뒤 맑음 : 생화 비키니</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>37식 다이카</BY>의 스킨 <BR>은밀한 욕망 : 바바리 걸이 나타났다!</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>글라시아스</BY>의 스킨 <BR>추락한 정의 : 타락한 수호자</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>나모</BY>, <BY>사니</BY>의 스킨 가격 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-11-20 03:21:47</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
		site={ <>
			<li>스킨 및 SD 모델의 텍스쳐 형식을 변경하여 화질을 개선했습니다. (용량은 약간 증가했습니다.)</li>
			<li><BY>스토리 플레이어</BY>의 글자 표시 방식을 개선하여 굵은 글씨가 제대로 표시되도록 했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
