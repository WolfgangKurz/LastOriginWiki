import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12100" date="2023-03-20"
		new={ <>
			<li>홈 페이지의 모바일 환경의 사용자 경험이 개선되었습니다.</li>
		</> }
		update={ <>
			<li><BY>낙원으로부터 온 초대장</BY> 이벤트가 상시로 전환되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>무적의 용</BY>의 스킨 <BY>CAFE Horizon : 신입 바리스타 용</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>AS-12 스틸 드라코</BY>의 스킨 <BY>데이트는 전투다</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>마이티R</BY>의 스킨 <BY>특수 전투원 마이티R</BY>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 대사가 수정되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-03-20 15:36:22</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12098" date="2023-03-12"
		new={ <>
			<li>신규 배경이 추가되었습니다.</li>
			<li>신규 소모품이 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>C-77 홍련</BY>의 기본 스킨의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 소개 보이스가 추가되었습니다.</li>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-03-12 19:52:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12096" date="2023-03-03"
		skin={ <>
			<li>
				<BY>금란 S7</BY>의 스킨 <BR>모던 드레스 금란</BR>의 검열판 이미지가 추가되었습니다.
			</li>
			<li>
				<BY>AL 팬텀</BY>의 스킨 <BR>AL 큐트 : 팬텀 블랙</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
			<li>
				<BY>금란 S7</BY>의 스킨 <BR>모던 드레스 금란</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
			<li>
				<BY>펜리르</BY>의 스킨 <BR>종교의 자유(?)를 원하는 펜리르</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
			<li>
				<BY>브륀힐데</BY>의 스킨 <BR>화염의 지배자 브륀힐드</BR>의 다운로드 기능이 정상화되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
