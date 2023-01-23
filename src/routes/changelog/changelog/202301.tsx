import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12066" date="2023-01-23"
		bugfix={ <>
			<li>BGM 페이지에서 Boss Battle C 가 삭제되었습니다.</li>
			<li><BY>뮤즈</BY>의 스킨 <BR>舊 드림위버 웨딩 스페셜 : 세 사람을 위한 축가</BR>가 잘못 표시되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12063" date="2023-01-22" tag="Elbe"
		new={ <>
			<li>BGM 페이지를 개편했습니다.</li>
			<li>생강차가 조금 더 진해졌습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원의 기업 정보에 무기 정보가 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>전투원 정보의 비밀의 방 유형의 표현 일부가 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 소개 보이스가 누락된 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12050" date="2023-01-21"
		new={ <>
			<li>전투원 정보에 <BY>비밀의 방 유형</BY> 정보가 추가되었습니다.</li>
			<li><BY>질주하는 아탈란테</BY>의 승급 정보가 추가되었습니다.</li>
			<li><BY>바바리아나</BY>의 승급 정보가 추가되었습니다.</li>
			<li><BY>럼버제인</BY>의 승급 정보가 추가되었습니다.</li>
			<li><BY>퀸오브메인</BY>의 승급 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>세계정보에서 일부 서브스토리의 제목이 표시되지 않던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li><BY>질주하는 아탈란테</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li><BY>바바리아나</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li><BY>럼버제인</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li><BY>퀸오브메인</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>세계정보의 서브스토리 정보에 해금 조건 표기를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>레나 더 챔피언</BY>의 스킨 <BR>챔피언 난입 1초 전</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>P-18 실피드</BY>의 스킨 <BR>자유로운 영혼 실피드</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일어 보이스가 추가되었습니다.</li>
			<li>일부 전투원의 성우 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-01-21 19:59:36</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12043" date="2023-01-09"
		new={ <>
			<li>이벤트 <BY>눈먼공주와 안개의 나라</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 장식품의 정보가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12043" date="2023-01-09"
		update={ <>
			<li>스킨 보기에 다운로드 버튼이 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원 스킨이 잘못 표시되던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12041" date="2023-01-09"
		bugfix={ <>
			<li>일부 전투원 스킨에서 "일반" 표정이 표시되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12037" date="2023-01-09" tag="Danube"
		update={ <>
			<li>로비 애니메이션을 가지는 전투원을 포함해 일부를 제외한 전체 전투원의 스킨 보기에 표정 선택이 추가되었습니다.</li>
			<li>둥굴레차가 더 따뜻해졌습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12017" date="2023-01-03"
		site={ <>
			<li>Spine 로비 애니메이션의 로딩 시간을 약 8.5배 개선했습니다.</li>
			<li>보리차가 약간 밍밍해졌습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>마법소녀 매지컬 모모</BY>의 스킨 <BR>마법소녀 매지컬 모모 해외 특집</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>마법소녀 매지컬 백토</BY>의 스킨 <BR>마법소녀 매지컬 백토 해외 특집</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일어 성우 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-01-03 01:58:12</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
