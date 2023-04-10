import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12109" date="2023-04-10"
		site={ <>
			<li>
				ETC 메뉴에 "장비 이미지 인식기" 링크가 추가되었습니다.<br />
				인식에 오류가 있을 수 있으며, 서버 상태에 따라 작동하지 않을 수도 있습니다.
			</li>
		</> }
		bugfix={ <>
			<li>스킨 뷰어에서 일부 소모품이 올바르지 않게 표시되던 문제를 수정했습니다. (예: 에라토 중파)</li>
			<li>스킨 뷰어에서 가끔 얼굴과 몸이 분리되던 문제를 수정했습니다.</li>
			<li>일부 표정 이름이 올바르지 않게 표시되던 문제를 수정했습니다. (예: SAD2)</li>
		</> }
		update={ <>
			<li>전투원 <BY>C-77 홍련</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>BGM 페이지의 가수 색상 일부가 변경되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>P-2000 지니야</BY>의 기본 스킨의 로비 애니메이션 정보가 추가되었습니다.
			</li>
			<li>
				<BY>시저스 리제</BY>의 스킨 <BY>노트에 전부 담을 수 없는 마음</BY>의 중파 정보가 추가되었습니다.
			</li>
			<li>
				<BY>C-77 홍련</BY>의 스킨 <BY>뒤바뀐 운명 : 홍련</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>장화</BY>의 스킨 <BY>뒤바뀐 운명 : 장화</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>P-49 슬레이프니르</BY>의 스킨 <BY>나는 제비야!</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-04-10 18:53:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
