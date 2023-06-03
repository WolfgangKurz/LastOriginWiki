import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12073" date="2023-01-31"
		knownissue={ <>
			<li>
				스킨 보기의 U2DModelRenderer에서 일부 전투원의 스킨이 올바르지 않게 표시되는 문제가 있습니다.
				(예: 에라토의 기본 스킨 중파 소품 가리기, 손이 올바르게 표시되지 않음)
			</li>
		</> }
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 <BY>스킨 보기</BY>의 <BG>작가</BG> 표시 방식에서
				<BR>D-loG</BR> 작가가 <BR>D-log</BR>로 분리되어 표시되던 문제를 수정했습니다.
			</li>
			<li>
				<BY>전투원정보</BY>의 <BY>스킨 보기</BY>의 <BG>작가</BG> 및 <BG>출시일</BG> 표시 방식에서
				일부 스킨의 이미지가 잘못 표시되던 점을 수정했습니다.
			</li>
		</> }
		delete={ <>
			<li>
				<BY>전투원정보</BY>의 <BG>대사</BG> 탭에 <BY>소개</BY>가 삭제되었습니다.<br />
				<BG>기본 정보</BG> 탭의 자기소개로 통합되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>콘스탄챠 S2</BY>의 스킨 <BR>당신만을 기다리는 근위총병</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>P-2000 지니야</BY>의 스킨 <BR>대지의 은혜 지니야</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천향의 히루메</BY>의 스킨 <BR>불꽃을 품은 눈꽃 히루메</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>브륀힐드</BY>의 스킨 <BR>화염의 지배자 브륀힐드</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>전투원 <BY>천향의 히루메</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>SD3M 펍 헤드</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>P-2000 지니야</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-01-31 15:25:09</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12071" date="2023-01-29"
		new={ <>
			<li>이벤트 <BY>눈먼공주와 안개의 나라</BY>의 3부 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>멀린</BY>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 소개 보이스가 누락된 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12067" date="2023-01-24"
		update={ <>
			<li>BGM 페이지에 MISS ORCA 2nd season 앨범의 음원이 추가되었습니다.</li>
		</> }
	/>
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
