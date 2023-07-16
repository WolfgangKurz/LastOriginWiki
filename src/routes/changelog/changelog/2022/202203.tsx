import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";
import IconCapslockFill from "@/components/bootstrap-icon/icons/CapslockFill";

import ChangelogItem from "../../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11582" date="2022-03-28"
		update={ <>
			<li>
				<span class="badge bg-substory">이로운 효과</span> 표기가 <span class="badge bg-substory">강화 효과</span>로,
				<span class="badge bg-substory">기타 효과</span> 표기가 <span class="badge bg-substory">일반 효과</span>로
				변경되었습니다.
			</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비들의 수치가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-20S 노움</span>의 스킨
				<span class="badge bg-danger">오르카 바니 : 완벽한 토끼</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-03-28 14:00:00</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11580" date="2022-03-21"
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">장비정보</span>에
				<span class="badge bg-warning text-dark"><IconCapslockFill class="me-1" /> 승급</span> 비용 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11577" date="2022-03-21"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">멜리테</span>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>일부 잘못된 정보가 기입되어있거나 위치가 맞지 않거나 이미지/영상이 누락된 스킨을 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">엔젤</span>의 스킨
				<span class="badge bg-danger">작은 천사의 휴식</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">MH-4 테티스</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon : CAFE Thetis♡</span>의 중파 이미지 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-03-21 11:01:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11571" date="2022-03-14"
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">변화의 성소</span>에
				<span class="badge bg-dark">제4작전구역</span> 정보가 추가되었습니다.
			</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">초중량 복합장갑</span> 정보가 추가되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">출력 강화 회로 베타</span>의 SSS 등급 정보가 추가되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">연산 강화 회로 베타</span>의 SSS 등급 정보가 추가되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">내 충격 회로 베타</span>의 SSS 등급 정보가 추가되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">반응 강화 회로 베타</span>의 SSS 등급 정보가 추가되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">분석 회로 베타</span>의 SSS 등급 정보가 추가되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">회로 내구 강화 베타</span>의 SSS 등급 정보가 추가되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">회로 최적화 베타</span>의 SSS 등급 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">쿠노이치 카엔</span>의 스킨
				<span class="badge bg-danger">두송이 꽃</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-03-14 11:01:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11567" date="2022-03-08"
		new={ <>
			<li>세계정보의 지도에 <span class="badge bg-dark">서브스토리</span> 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>진행중인 이벤트 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-03-08 01:14:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11565" date="2022-03-07"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">C-11 스카라비아</span>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">E-16 탈론페더</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜 : 렌즈 너머의 진실​</span>이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">마키나</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜 : Dreaming in Paradise</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜: 배반의 흑장미</span>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-03-07 12:36:13</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11558" date="2022-03-04"
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-10 님프</span>의 스킨
				<span class="badge bg-danger">호수의 요정</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">로열 아스널</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜 : 이 마음을 그대에게</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">P-49 슬레이프니르</span>의 스킨
				<span class="badge bg-danger">슈퍼스타 슬레이프니르</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">켈베로스</span>의 스킨
				<span class="badge bg-danger">의장대 켈베로스</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">CT2199W 폴른</span>의 기본 스킨의 로비 애니메이션 영상이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">SD3M 펍 헤드</span>의 기본 스킨의 로비 애니메이션 영상이 수정되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AT72 라인리터</span>의 스킨
				<span class="badge bg-danger">마법소녀의 수호수</span>의 로비 애니메이션 영상이 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11555" date="2022-03-01"
		bugfix={ <>
			<li>
				세계정보에서
				<span class="badge bg-warning text-dark">영원한 겨울의 방주(바니? 니바! 우당탕탕 역바니 대소동)</span> 이벤트가
				표시되지 않는 점을 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
