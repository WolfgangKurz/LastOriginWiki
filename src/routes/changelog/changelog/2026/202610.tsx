import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13205" date="2026-10-11"
		site={ <>
			<li><BY>스킨 뷰어</BY>의 비-Spine 로비 애니메이션 모델을 기존 Unity 웹 플레이어에서 다른 모델과 동일한 Pixi 기반 렌더러로 통합했습니다.</li>
			<li>통합한 렌더러를 <BY>스토리 플레이어</BY>에도 적용했습니다.</li>
			<li><BY>스토리 플레이어</BY>에서 로비 애니메이션이 포함된 모든 모델의 애니메이션이 재생되도록 개선했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13204" date="2026-10-07"
		update={ <>
			<li>새로운 연출 속성을 반영하도록 스토리 데이터가 갱신되었습니다.</li>
		</> }
		site={ <>
			<li><BY>스토리 플레이어</BY>의 연출을 원작 게임에 맞춰 개선했습니다.</li>
			<li>캐릭터의 등장/퇴장 효과, 지속 효과, 이모지 및 활성 상태 연출을 지원합니다.</li>
			<li>캐릭터의 위치·크기·회전 변환을 누적 적용하거나 에셋 기준으로 덮어쓸 수 있도록 했으며, 원본 크기와 페이드 시 그룹 투명도를 반영합니다.</li>
			<li>대사 종료 후 화면 페이드와 카메라 흔들림이 적용되도록 했으며, 흔들림의 지속 시간과 방향을 반영합니다.</li>
			<li>배경 이름과 설명의 표시 시점, 대사가 없는 구간의 자동 진행 및 선택지 진행 흐름을 원작에 맞춰 개선했습니다.</li>
			<li>추가 연출 효과로 효과음, 흔들림과 효과음의 동시 재생, 타이머, 눈 뜨기, 반짝임, 음소거 가능한 영상 및 CG 카메라 연출을 지원합니다.</li>
			<li>음성 건너뛰기와 BGM 반복 재생을 지원합니다.</li>
		</> }
	/>
</>;
export default Changelog;
