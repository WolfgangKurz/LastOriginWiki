import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11991" date="2022-12-20"
		bugfix={ <>
			<li>버프 보기에서 <BR>공격력 비례 지속 피해</BR> 버프가 비례 수치 없이 표시되던 점을 수정했습니다.</li>
			<li>버프 보기에서 <BR>공격력 비례 속성 지속 피해</BR> 버프가 모두 화염 속성으로 표시되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11988" date="2022-12-20"
		new={ <>
			<li>전투원 <BY>화롯가의 포티아</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>트리아이나</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>보속의 마리아</BY>의 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>가챠 시뮬레이터 정보가 갱신되었습니다.</li>
			<li>감자튀김이 조금 눅눅해졌습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>보속의 마리아</BY>의 스킨 <BR>어린이들의 기쁨</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>레이시</BY>의 스킨 <BR>진짜 크리스마스</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>
				전투원 <BY>엠피트리테</BY>, <BY>천아</BY>, <BY>T-20S 노움</BY>, <BY>AC-6 후사르</BY>, <BY>멸망의 메이</BY>,
				<BY>B-11 나이트 앤젤</BY>, <BY>오렌지에이드</BY>, <BY>살라시아</BY>, <BY>B-7 스트라토 엔젤</BY>의
				일본어 오디오 파일이 추가되었습니다.
			</li>
			<li><span class="badge bg-light text-dark">KST 2022-12-20 01:39:36</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11983" date="2022-12-13"
		update={ <>
			<li>
				<BY>요정 마을의 아리아</BY> 이벤트가 상시로 전환되었습니다.
			</li>
			<li>
				<BY>요정 마을의 아리아</BY> 이벤트의 일부 정보가 갱신되었습니다.
			</li>
			<li>일부 전투원의 스킬의 버프 정보가 갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11982" date="2022-12-10"
		new={ <>
			<li>
				<BY>기타</BY>의 하위 메뉴에 <BY>BG</BY> 메뉴가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11979" date="2022-12-07"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 <BY>스킨 보기</BY>의 <BG>작가</BG>표시 방식에서
				<BR>Corgi</BR> 작가가 <BR>CORGI</BR>로 분리되어 표시되던 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11977" date="2022-12-06"
		bugfix={ <>
			<li>일부 스킨의 출시일이 지정되지 않아 전투원 출시일로 표시되던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>
				<BY>전투원정보</BY>의 <BY>스킨 보기</BY>의 <BG>작가</BG>, <BG>출시일</BG> 표시 방식에
				<BB>전투원 출시도 표시</BB>가 삭제되고
				<BB>전투원 출시 표시</BB>, <BB>스킨 출시 표시</BB>로 변경되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11975" date="2022-12-06"
		new={ <>
			<li>전투원 및 스킨의 출시일 정보가 추가되었습니다.</li>
			<li>
				<BY>전투원정보</BY>의 <BY>스킨 보기</BY>에 표시 방식이 추가되었습니다.<br />
				기존의 방식은 <BG>상세 검색</BG>으로 변경되었으며, <BG>작가</BG>, <BG>출시일</BG> 표시 방식이 추가되었습니다.<br />
				<BG>작가</BG>는 작가별 전투원/스킨으로 묶여 테이블로 표시되며,<br />
				<BG>출시일</BG>은 전투원/스킨의 출시일을 타임라인으로 표시합니다.
			</li>
			<li>
				<BY>전투원정보</BY>의 전투원 스킨 탭에 스킨으로 바로 이동할 수 있는 URL 제공이 추가되었습니다.<br />
				<BY>전투원정보</BY>의 <BY>스킨 보기</BY>에서 스킨을 클릭할 시 해당 스킨으로 바로 이동됩니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11972" date="2022-12-05"
		skin={ <>
			<li>
				<BY>샬럿</BY>의 스킨 <BR>그리드 걸 샬럿</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>사이클롭스 프린세스</BY>의 스킨 <BR>코드네임 프린세스</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-4 케시크</BY>의 스킨 <BR>단둘만의 온천</BR>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-12-05 14:35:57</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
