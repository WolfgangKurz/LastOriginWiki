import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
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
		update={ <>
			<li>스킨 뷰어 작동을 최적화했습니다.</li>
			<li>이제 전투원 스킨 URL 주소가 페이지가 열린 후에도 유지됩니다.</li>
		</> }
	/>
</>;
export default Changelog;
