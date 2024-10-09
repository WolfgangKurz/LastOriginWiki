import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12678" date="2024-10-10"
		new={ <>
			<li>
				<BY>스킨 뷰어</BY>에 <BG>다운로드<sup>+</sup></BG> 기능이 추가되었습니다.<br />
				일부 로비 애니메이션 스킨 등에서는 이용할 수 없습니다.<br />
				스킨 뷰어에서 설정한 표정도 같이 저장할 수 있지만 시간이 걸릴 수 있고, 실패할 수도 있습니다.<br />
				잘못된 이미지가 다운로드되는 경우, 보고해주시기 바랍니다.
			</li>
		</> }
		update={ <>
			<li>
				<BY>스킨 뷰어</BY>의 일반 다운로드가 항상 png 파일로 저장되도록 변경했습니다.
			</li>
		</> }
		site={ <>
			<li>
				<BB>html2cavnas</BB> 라이브러리를 <BB>html-to-image</BB> 라이브러리로 변경했습니다. (경량화)
			</li>
		</> }
		bugfix={ <>
			<li>AGS 전투원의 스킬 정보에서 호감도 보너스를 지정할 수 있던 점을 수정했습니다.</li>
			<li>일부 스킨의 요소가 올바르지 않은 위치에 표시되던 문제를 수정했습니다.</li>
			<li>일부 스킨의 요소가 올바르지 않은 색상으로 표시되던 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
