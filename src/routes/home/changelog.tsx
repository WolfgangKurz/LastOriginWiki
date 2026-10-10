import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13205" date="2026-10-11"
		site={ <>
			<li><BY>스킨 뷰어</BY>의 비-Spine 로비 애니메이션 모델을 기존 Unity 웹 플레이어에서 다른 모델과 동일한 Pixi 기반 렌더러로 통합했습니다.</li>
			<li>통합한 렌더러를 <BY>스토리 플레이어</BY>에도 적용했습니다.</li>
			<li><BY>스토리 플레이어</BY>에서 로비 애니메이션이 포함된 모든 모델의 애니메이션이 재생되도록 개선했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
