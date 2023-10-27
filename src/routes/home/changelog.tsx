import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12354" date="2023-10-27"
		bugfix={ <>
			<li>
				버프 보기의 <BR>전장에 XXX이(가) 존재하는 경우</BR> 조건이
				<BR>아군에 XXX이(가) 존재하는 경우</BR>로 표시되는 문제를 수정했습니다.
			</li>
			<li>
				세계 정보에서 스크롤이 있는 지도의 노드를 선택했을 때 스크롤이 초기화되는 문제를 수정했습니다.
			</li>
			<li>일부 전투원의 소모품 감추기 등의 일부 기능이 누락된 것을 수정했습니다.</li>
		</> }
		update={ <>
			<li>
				세계 정보의 스크롤이 있는 지도에서 선택된 노드가 화면을 벗어난 경우,
				자동으로 해당 노드가 보이게 스크롤되도록 변경했습니다.
			</li>
			<li>이벤트 종료 시간을 알 수 없는 경우의 메인의 이벤트 타이머 동작을 수정했습니다.</li>
			<li>버프 보기의 존재 조건에 아군/적 여부가 추가되었습니다.</li>
			<li>버프 보기의 적 조건에 적 정보 링크가 추가되었습니다.</li>
			<li>
				스토리 뷰어가 갱신되었습니다.
				<ol>
					<li>모든 메인스토리가 작업되었습니다.</li>
					<li>오르카 데이트 공모전 이벤트까지 작업되었습니다.</li>
					<li>영상 재생 기능이 추가되었습니다.</li>
					<li>통신 효과가 추가되었습니다.</li>
					<li>스크립트의 중간에서 뷰어를 시작하는 경우 BGM이 들리지 않던 점을 수정했습니다.</li>
					<li>일부 추가 이미지가 올바르지 않게 표시되던 점을 수정했습니다.</li>
					<li>일부 캐릭터가 표시되지 않던 점을 수정했습니다.</li>
					<li>일부 이름이 표시되지 않던 점을 수정했습니다.</li>
				</ol>
			</li>
		</> }
	/>
</>;
export default Changelog;
