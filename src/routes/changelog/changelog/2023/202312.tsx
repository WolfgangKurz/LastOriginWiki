import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12416" date="2023-12-31"
		bugfix={ <>
			<li>전투원 정보의 스킨 보기의 출시일이 표시되지 않는 문제를 수정했습니다.</li>
			<li>일부 전투원의 출시일이 입력되지 않은 문제를 수정했습니다.</li>
			<li>홈의 출시 스킨이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>마법소녀 매지컬 백토</BY>의 스킨 <BR>검게 물든 달맞이 꽃</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12413" date="2023-12-28"
		new={ <>
			<li>신규 전투원 <BY>사레나</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>표준형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>돌격형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>방어형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>정밀형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>고기동 메뉴버 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>전황 분석 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 스킨의 출시일 및 작가 정보가 누락된 점이 수정되었습니다.</li>
			<li>경험치 계산기에서 메인스토리가 작동하지 않던 문제가 수정되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 승급 정보가 갱신되었습니다.</li>
			<li>
				경험치 계산기에 <BY>윤회의 우로보로스</BY> 경험치 보너스 항목이 추가되었습니다.<br />
				<BY>마이티 R</BY>의 경우 버프가 조건에 따라 여러개로 적용되어 경험치 보너스 계산이 복잡해 추가되지 않았습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>퀵 카멜</BY>의 스킨 <BR>모범? 불량? 퀵 카멜</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12411" date="2023-12-16"
		bugfix={ <>
			<li>스토리 뷰어에서 일부 이미지가 제대로 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12408" date="2023-12-23"
		new={ <>
			<li>신규 이벤트 <BY>당신의 쐐기에 진심을</BY>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>T-75 워울프</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>T-40 하이에나</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>A-15 샐러맨더</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>E-16 탈론페더</BY>의 승급 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>마개조형 감청장치</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>예광 탄환</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>블루스크린 탄환</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>탠덤 탄두</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
			<li>신규 변화의성소 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>
				일본어 로케일의 문제가 수정되었습니다.<br />
				日本語ロケールの問題が修正されました。
			</li>
			<li>사이트의 프린트 기능이 제대로 작동하지 않던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>키르케</BY>의 스킨 <BR>키르케의 행복한 바니 산타</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>더치걸</BY>의 스킨 <BR>더치걸의 행복한 작은 산타</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12404" date="2023-12-16"
		bugfix={ <>
			<li>스토리 뷰어 일부 기능이 롤백된 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12403" date="2023-12-15"
		new={ <>
			<li>신규 BGM이 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스토리 뷰어의 일부 컷 씬이 표시되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12401" date="2023-12-13"
		new={ <>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>M2187 와이어트 스페셜</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>야전용 위장 침낭</BY>의 정보가 추가되었습니다.</li>
			<li>신규 지역 <BY>메인스토리 12지역 3챕터</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>적 행동의 <BY>X 버프가 총 N 있는가?</BY> 조건의 표시가 올바르지 않던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>적 행동의 버프명 표시에 버프의 번호가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>쿠노이치 엔라이</BY>의 스킨 <BR>미스오르카 : 누군가의 손길이 닿아</BR>의 중파 이미지가 수정되었습니다.
			</li>
			<li>
				<BY>A-15 샐러맨더</BY>의 스킨 <BR>요주의! 샐러맨더</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>신속의 칸</BY>의 스킨 <BR>불량 학생 칸</BR>의 이름이 <BR>불량 후배 칸</BR>으로 변경되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12399" date="2023-12-07"
		bugfix={ <>
			<li>전투원 및 장비의 획득처에 클리어 보상이 누락된 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12398" date="2023-12-07"
		new={ <>
			<li>신규 배경 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 12지역 스토리가 갱신되었습니다.</li>
			<li>일부 전투원의 드랍처 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>쿠노이치 엔라이</BY>의 스킨 <BR>미스오르카 : 누군가의 손길이 닿아</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>신속의 칸</BY>의 스킨 <BR>불량 학생 칸</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12394" date="2023-12-03"
		bugfix={ <>
			<li>12지역이 출처인 전투원, 장비, 적 표시가 올바르지 않던 점을 수정했습니다.</li>
			<li>일일 훈련이 출처인 적 표시가 올바르지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12390" date="2023-12-02"
		update={ <>
			<li>버프보기에서 일부 이름이 존재하지 않는 버프에 대해 판별할 수 있도록 모든 버프에 번호 및 이름을 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12387" date="2023-12-02"
		update={ <>
			<li>일부 전투원의 스킬의 플레이버 텍스트가 추가/갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12386" date="2023-12-01"
		bugfix={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킬 정보가 입력되지 않은 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
