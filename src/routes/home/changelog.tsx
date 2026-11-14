import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13233" date="2026-11-15"
		new={ <>
			<li><BY>스킨 뷰어</BY>에서 전투원의 전투 SD 모델과 스킬 이펙트를 확인할 수 있는 기능이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>수상한 연구소의 사라진 대학원생</BY>의 기간이 수정되었습니다.</li>
		</> }
		site={ <>
			<li>스킨 모델의 텍스쳐 형식을 변경하여 로딩 속도와 메모리 사용량을 개선했습니다.</li>
			<li>모바일 환경에서 스킨 뷰어의 메모리 사용량과 렌더링 성능을 개선했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
