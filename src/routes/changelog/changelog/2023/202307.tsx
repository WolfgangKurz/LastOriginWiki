import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12234" date="2023-07-23"
		new={ <>
			<li>
				실험 기능인 <BY>통합 효과명 미리보기</BY>가 추가되었습니다.<br />
				본 기능은 한국어 상태에서만 제공됩니다.<br />
				미리보기가 제공되는 효과는 다음과 같습니다.<br />
				<BG>공격 강화</BG>, <BG>공격 약화</BG>, <BG>방어 강화</BG>, <BG>방어 약화</BG>, <BG>적중 강화</BG>,
				<BG>적중 약화</BG>, <BG>회피 강화</BG>, <BG>회피 약화</BG>, <BG>치명 강화</BG>, <BG>치명 약화</BG>,
				<BG>치명타 강화</BG>, <BG>치명타 약화</BG>, <BG>차지</BG>, <BG>내열 강화</BG>, <BG>내열 약화</BG>,
				<BG>방한 강화</BG>, <BG>방한 약화</BG>, <BG>절연 강화</BG>, <BG>절연 약화</BG>, <BG>화염 반작용</BG>,
				<BG>냉기 반작용</BG>, <BG>전기 반작용</BG>, <BG>화염 적응</BG>, <BG>냉기 적응</BG>, <BG>전기 적응</BG>,
				<BG>행동 강화</BG>, <BG>행동 약화</BG>, <BG>가속</BG>, <BG>감속</BG>, <BG>침묵</BG>, <BG>행동 불가</BG>,
				<BG>신속</BG>, <BG>위력 강화</BG>, <BG>위력 약화</BG>, <BG>전략 수립</BG>, <BG>전략 방해</BG>, <BG>피해 감쇄</BG>,
				<BG>피해 증폭</BG>, <BG>회심</BG>, <BG>배수진</BG>, <BG>마무리</BG>, <BG>집속</BG>, <BG>산개</BG>,
				<BG>피해 흡수</BG>, <BG>도탄</BG>, <BG>철벽</BG>, <BG>열 보호</BG>, <BG>행 보호</BG>, <BG>지정 보호</BG>,
				<BG>우회</BG>, <BG>차폐</BG>, <BG>내성 강화</BG>, <BG>내성 약화</BG>, <BG>초 내성 강화</BG>, <BG>무장 해제</BG>,
				<BG>중화</BG>, <BG>봉쇄</BG>, <BG>돌파</BG>, <BG>예리</BG>, <BG>둔탁</BG>, <BG>관통 내성</BG>, <BG>손상</BG>,
				<BG>점화</BG>, <BG>동결</BG>, <BG>감전</BG>, <BG>도발</BG>, <BG>표식</BG>, <BG>이동 불가</BG>, <BG>공격 지원</BG>,
				<BG>역공</BG>, <BG>넉백</BG>, <BG>풀링</BG>, <BG>조준 보조</BG>, <BG>조준 방해</BG>, <BG>임시 복원</BG>,
				<BG>급속 복원</BG>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12230" date="2023-07-23"
		update={ <>
			<li>모든 적의 심리가 추가되었습니다.</li>
			<li>편의를 위해 <BO>영원의 전장</BO> 출처를 <BO>변화의 성소</BO>로 표기하도록 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>
				<BY>퀸오브메인</BY>의 스킨 <BR>물 만난 사자</BR> 및
				<BY>나스호른</BY>의 스킨 <BR>바다로의 행진</BR>의
				작가 정보 및 출시 일자가 누락된 점이 수정되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12226" date="2023-07-20"
		bugfix={ <>
			<li>일부 적의 버프 목록이 표시되지 않던 문제가 수정되었습니다.</li>
		</> }
		update={ <>
			<li>데이터에 존재하지 않는 버프가 입력되어있는 경우의 표시를 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12222" date="2023-07-18"
		new={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>의 2부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>적 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>퀸오브메인</BY>의 스킨 <BR>물 만난 사자</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>나스호른</BY>의 스킨 <BR>바다로의 행진</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12221" date="2023-07-18"
		bugfix={ <>
			<li>
				적 심리에서 버프 명이 잘못 표시되던 점을 수정했습니다.
				(원본 이름이 이상하여 해당 버프 그룹의 첫번째 버프 이름을 가져오도록 했습니다.)
			</li>
			<li>존재하지 않는 적 심리가 잘못 표시되던 점을 수정했습니다.</li>
			<li>
				<BY>개량형 레기온 스나이퍼</BY>의 심리가 표시되지 않던 점을 수정했습니다.
			</li>
		</> }
		update={ <>
			<li>
				적 심리의 일부 표현이 수정되었습니다.
				<ol type="a">
					<li class="mb-1">
						<span class="d-inline-block border bg-rarity-S p-2">
							<span class="badge bg-primary">버프</span>가 <span class="badge bg-dark">대상</span>에게 있는가?
						</span>
						<IconArrowRight class="mx-2" />
						<span class="d-inline-block border bg-rarity-S p-2">
							누군가 <span class="badge bg-primary">버프</span>가 있는가?
						</span>
					</li>
					<li class="mb-1">
						<span class="d-inline-block border bg-rarity-S p-2">
							<span class="badge bg-primary">버프</span>가 <span class="badge bg-dark">자신</span>에게 있는가?
						</span>
						<IconArrowRight class="mx-2" />
						<span class="d-inline-block border bg-rarity-S p-2">
							자신에게 <span class="badge bg-primary">버프</span>가 있는가?
						</span>
					</li>
					<li class="mb-1">
						<span class="d-inline-block border bg-rarity-S p-2">
							<span class="badge bg-primary">버프</span>가 <span class="badge bg-dark">대상</span>에게 <span class="badge bg-danger">갯수</span> 있는가?
						</span>
						<IconArrowRight class="mx-2" />
						<span class="d-inline-block border bg-rarity-S p-2">
							<span class="badge bg-primary">버프</span>가 총 <span class="badge bg-danger">갯수</span> 있는가?
						</span>
					</li>
					<li class="mb-1">
						<span class="d-inline-block border bg-rarity-S p-2">
							<span class="badge bg-primary">버프</span>가 <span class="badge bg-dark">자신</span>에게 <span class="badge bg-danger">갯수</span> 있는가?
						</span>
						<IconArrowRight class="mx-2" />
						<span class="d-inline-block border bg-rarity-S p-2">
							자신에게 <span class="badge bg-primary">버프</span>가 <span class="badge bg-danger">갯수</span> 있는가?
						</span>
					</li>
				</ol>
			</li>
			<li>
				다음 적의 심리가 추가되었습니다. (동일한 이름을 가지는 적 중 일부는 추가되지 않았을 수 있습니다.)
				<div>
					<BY>헤비 스카우트</BY>, <BY>팔랑스</BY>, <BY>엘리트 센츄리온</BY>, <BY>매머드</BY>, <BY>경비용 램파트</BY>,
					<BY>경비용 폴른</BY>, <BY>양산형 셀주크</BY>, <BY>양산형 기간테스</BY>, <BY>개량형 매머드</BY>, <BY>케미컬 칙 Type-X</BY>,
					<BY>헤비 스카우트 G</BY>, <BY>폴른 커스텀</BY>, <BY>엘리트 레기온</BY>, <BY>센츄리온 제네럴</BY>, <BY>센츄리온</BY>,
					<BY>문제아반 반장</BY>, <BY>그럼요~</BY>, <BY>슈퍼 네리다!</BY>, <BY>그럼~요!</BY>, <BY>다곤씨 (대여 중)</BY>,
					<BY>빅 칙 런쳐 G</BY>, <BY>강화형 케미컬 칙</BY>, <BY>개조된 타란튤라</BY>, <BY>칙 스나이퍼</BY>, <BY>강화형 칙 실더</BY>,
					<BY>강화형 칙 디텍터</BY>, <BY>프로스트바이트</BY>, <BY>디스트로이어</BY>, <BY>나이트 칙 디텍터 AA</BY>,
					<BY>레기온 Mk.II</BY>, <BY>한랭지형 칙 스나이퍼</BY>, <BY>한랭지형 매머드</BY>, <BY>나이트 칙?</BY>,
					<BY>나이트 칙 런처??</BY>, <BY>나이트 칙 실더???</BY>, <BY>초코 여왕의 정예 보병</BY>, <BY>초코 여왕의 경비병</BY>,
					<BY>초코 여왕의 보병</BY>, <BY>초코 여왕의 포병</BY>, <BY>초코 여왕의 근위병</BY>, <BY>생존형 칙 실더</BY>,
					<BY>생존형 케미컬 칙</BY>, <BY>팔랑스H</BY>, <BY>로버트</BY>, <BY>로버트 암</BY>, <BY>Mr 알프레드</BY>,
					<BY>양산형 포트리스</BY>, <BY>슬래셔</BY>, <BY>프리져 헤드</BY>, <BY>프리져 슈터</BY>, <BY>프리져 쉘</BY>,
					<BY>프라이어 헤드</BY>, <BY>프라이어 슈터</BY>, <BY>프라이어 쉘</BY>, <BY>드론 09</BY>, <BY>마키나</BY>,
					<BY>익스큐셔너</BY>, <BY>이모탈 익스큐셔너</BY>, <BY>라이트닝 봄버 Type-S</BY>, <BY>천향의 히루메</BY>,
					<BY>드라이어 헤드</BY>, <BY>드라이어 슈터</BY>, <BY>드라이어 쉘</BY>, <BY>스캐럽H</BY>, <BY>스카우트AK</BY>,
					<BY>보조 에너지 컨덴서</BY>, <BY>재생 에너지 컨덴서</BY>, <BY>사이클롭스</BY>, <BY>라인리터 SP</BY>, <BY>에큐토스</BY>,
					<BY>교단 근위대장</BY>, <BY>공습형 인터셉터</BY>, <BY>정찰형 인터셉터</BY>, <BY>포격 통제 장치</BY>, <BY>함선 통제 장치</BY>,
					<BY>사이클롭스 Type-X</BY>, <BY>칙 런쳐 Type-S</BY>, <BY>칙 실더 Type-S</BY>, <BY>인트루더</BY>, <BY>헌티드 포트리스</BY>,
					<BY>마리오네트 보병</BY>, <BY>마리오네트 포병</BY>, <BY>마리오네트 중장갑병</BY>, <BY>마리오네트 저격병</BY>, <BY>니바</BY>,
					<BY>테스트 몬스터</BY>, <BY>불굴의 마리</BY>, <BY>C-77 레드후드</BY>, <BY>AA-7 임펫</BY>, <BY>T-20S 노움</BY>,
					<BY>M-5 이프리트</BY>, <BY>T-3 레프리콘</BY>, <BY>T-2 브라우니</BY>, <BY>개량형 마리오네트 보병</BY>,
					<BY>개량형 마리오네트 저격병</BY>, <BY>개량형 마리오네트 중장갑병</BY>, <BY>달기</BY>, <BY>포사</BY>, <BY>말희</BY>,
					<BY>리빌라</BY>, <BY>마마이아</BY>, <BY>메살리나</BY>
				</div>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12216" date="2023-07-16"
		site={ <>
			<li>번들 용량 최적화</li>
		</> }
		bugfix={ <>
			<li>일부 적의 AI가 잘못 입력되어있던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>적 AI 뷰어를 개편했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12189" date="2023-07-13"
		site={ <>
			<li>번들 용량 최적화</li>
		</> }
	/>
	<ChangelogItem title="Build 12188" date="2023-07-13"
		site={ <>
			<li>Spine 패키지 업데이트</li>
		</> }
	/>
	<ChangelogItem title="Build 12187" date="2023-07-12"
		new={ <>
			<li>SpineRenderer의 스페셜 애니메이션 스킨 지원이 추가되었습니다.</li>
			<li>신규 배경이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>스킨 상세보기 팝업에서 로비 애니메이션을 기본 Off 상태로 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>
				<BY>GS-10 샌드걸</BY>의 스킨 <BR>당신을 위한 꿈의 요정</BR>이 검열판 이미지가 표시되지 않던 문제를 수정했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>올리비아 스타수어</BY>의 스킨 <BR>수영복 콘테스트? : 요염한 심사원</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>테일러 클로스컷</BY>의 스킨 <BR>수영복 콘테스트? : 관능 작가</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>GS-10 샌드걸</BY>의 스킨 <BR>당신을 위한 꿈의 요정</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-07-12 03:05:19</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12184" date="2023-07-06"
		update={ <>
			<li>11지역 BGM 정보가 추가되었습니다.</li>
			<li>
				<BY>CAFE amor × Cafe Horizon</BY> 앨범의 곡이 재생 가능하도록 변경되었습니다.<br />
				<BO>어서오세요 라스트 파라다이스 (CAFE Horizon)</BO> 곡은 음원이 공개되지 않아 재생 기능이 제공되지 않습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12183" date="2023-07-05"
		bugfix={ <>
			<li>전투원 대사의 서약 대사가 표시되지 않는 문제를 수정했습니다.</li>
			<li>버프 목록에서 특정 버프가 표시되지 않을 수 있는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 스킨 배너가 추가되었습니다.</li>
			<li>전투원정보의 스킨 정보에 스킨 배너가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>꿈꾸는 인어의 섬</BY>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>티타니아 프로스트</BY>의 스킨 <BR>간호사? 티타니아</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>불굴의 마리</BY>의 스킨 <BR>하계 전투복 마리</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-07-05 03:50:37</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
