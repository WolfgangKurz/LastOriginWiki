import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12188" date="2023-07-13"
		update={ <>
			<li>Spine 패키지 업데이트</li>
		</> }
	/>
	<ChangelogItem title="Build 12187" date="2023-07-12"
		new={ <>
			<li>SpineRenderer의 스페셜 애니메이션 스킨 지원이 추가되었습니다.</li>
			<li>신규 배경이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>스킨 상세보기 팝업에서 로비 애니메이션을 기본 Off 상태로 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>
				<BY>GS-10 샌드걸</BY>의 스킨 <BR>당신을 위한 꿈의 요정</BR>이 검열판 이미지가 표시되지 않던 문제를 수정했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>올리비아 스타수어</BY>의 스킨 <BR>수영복 콘테스트? : 요염한 심사원</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>테일러 클로스컷</BY>의 스킨 <BR>수영복 콘테스트? : 관능 작가</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>GS-10 샌드걸</BY>의 스킨 <BR>당신을 위한 꿈의 요정</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-07-12 03:05:19</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
