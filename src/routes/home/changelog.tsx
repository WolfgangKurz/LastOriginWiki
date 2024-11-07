import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12828" date="2024-11-08"
		new={ <>
			<li>신규 이벤트 <BY>밤을 걷는 소녀</BY>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>레모네이드 알파</BY>의 스킨 <BR>레모네이드 델?타 : 연극을 위한 드레스</BR>의 정보가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12827" date="2024-11-06"
		bugfix={ <>
			<li>일부 스킨의 배경에 스킨의 정적 이미지가 같이 표시되는 문제를 수정했습니다.</li>
			<li>일부 스킨의 로비 애니메이션이 잘못된 움직임으로 표현되는 문제을 수정했습니다.</li>
		</> }
		site={ <>
			<li>전투원 얼굴 이미지에 최적화 처리가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12799" date="2024-11-04"
		bugfix={ <>
			<li>일부 장비의 획득처가 누락된 점을 수정했습니다.</li>
			<li>
				스킨 뷰어가 디스플레이 장치의 픽셀비를 참조하지 않던 문제를 수정했습니다.<br />
				이제 (주로) 모바일 환경에서 스킨 뷰어가 선명해집니다.
			</li>
			<li>일부 모바일 환경에서 <BG>다운로드<sup>+</sup></BG> 기능이 올바르지 않게 작동하는 문제를 수정했습니다.</li>
			<li>iOS 17.2 미만 환경에서 <BY>전투원정보</BY>의 전투원 페이지를 열면 사이트가 작동하지 않는 문제를 수정했습니다.</li>
		</> }
		knownissue={ <>
			<li>일부 iOS 기기에서 <BG>다운로드<sup>+</sup></BG> 기능이 작동하지 않습니다.</li>
		</> }
		site={ <>
			<li>스킨 뷰어 작동을 최적화했습니다.</li>
			<li>이제 전투원 스킨 URL 주소가 페이지가 열린 후에도 유지됩니다.</li>
		</> }
	/>
</>;
export default Changelog;
