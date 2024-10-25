import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12701" date="2024-10-26"
		bugfix={ <>
			<li><BY>획득처</BY>와 같은 일부 뱃지의 링크가 작동하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12698" date="2024-10-25"
		new={ <>
			<li>신규 전투원 <BY>멜트</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>꿈꾸지 않는 인어를 위해</BY>의 2부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>장비 <BY>스파이크 실드</BY>의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>멜트</BY>의 스킨 <BR>몽환의 꽃 : 료칸 종업원 유카타 테라피</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>므네모시네</BY>의 스킨 <BR>칵테일 한잔 : 아이시 버레스크 의상</BR>의 정보가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12696" date="2024-10-24"
		new={ <>
			<li>
				카메라 한계 영역이 있는 스킨의 경우,
				<BG>다운로드<sup>+</sup></BG>에서 저장할 때 카메라 한계 영역에 맞춰 자르는 옵션이 추가되었습니다.<br />
				기본 ON 입니다.
			</li>
		</> }
		bugfix={ <>
			<li>스킨 뷰어에서 일부 전투원의 회전/왜곡이 잘못 적용되어 표시되는 문제를 수정했습니다.</li>
			<li><BG>다운로드<sup>+</sup></BG>에서 일부 전투원이 잘린 상태로 다운로드 되는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12693" date="2024-10-12"
		bugfix={ <>
			<li><BY>적 정보</BY>의 <BR>행동패턴</BR>이 작동하지 않는 문제를 수정했습니다.</li>
			<li>전투원 <BY>아이언 애니</BY>의 스킨 <BR>돌격대장! 정열의 특공복​</BR>의 검열판이 표시되지 않던 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12690" date="2024-10-12"
		new={ <>
			<li>
				신규 이벤트 <BY>꿈꾸지 않는 인어를 위해</BY> 정보가 추가되었습니다.
			</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어에서 폰트가 로드된 후의 선택지 텍스트의 크기가 조절되지 않던 문제를 수정했습니다.</li>
			<li>스토리 플레이어에서 배경을 <BP>종횡비 유지</BP>로 설정했을 때, 배경 너머로 캐릭터 등의 다른 이미지가 표시되던 점을 개선했습니다.</li>
			<li><BO>Build 12678</BO> 이후 Spine 로비 애니메이션 스킨의 터치 영역 표시가 스킨에 가려지고 작동하지 않는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>아이언 애니</BY>의 스킨 <BR>돌격대장! 정열의 특공복​</BR>의 정보가 추가되었습니다.</li>
			<li>누락된 스킨 배너를 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12688" date="2024-10-10"
		update={ <>
			<li>
				<BG>다운로드<sup>+</sup></BG> 기능의 결과품의 해상도를 2배로 개선했습니다.
			</li>
		</> }
		bugfix={ <>
			<li>
				<BG>다운로드<sup>+</sup></BG> 기능이 일부 효과를 그리지 못하던 점을 수정했습니다.<br />
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12686" date="2024-10-10"
		bugfix={ <>
			<li>
				<BG>다운로드<sup>+</sup></BG> 기능을 이용한 후, 스킨의 위치가 이동하던 점을 수정했습니다.<br />
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12681" date="2024-10-10"
		bugfix={ <>
			<li>
				<BG>다운로드<sup>+</sup></BG> 기능을 이용할 때, 이미지의 크기가 올바르지 않던 점을 수정했습니다.<br />
			</li>
		</> }
	/>
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
