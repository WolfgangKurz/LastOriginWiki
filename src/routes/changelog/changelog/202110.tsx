import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11201" date="2021-10-23"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">엠피트리테</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">살라시아</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">오렌지에이드</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">강행 전투 보조장치</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">스파이크 실드</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">암습형 전투 시스템</span>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>2부 1지역 (9지역) 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-10-23 04:24:02</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11146" date="2021-10-22"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">사멸의 세크메트</span>의 일부 대사가 재생되지 않던 문제가 수정되었습니다.</li>
			<li>일부 스킨이 표시되지 않던 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">사라카엘</span>의 스킬 설명에
				<span class="badge bg-warning text-dark">코헤이 교단</span> 소속 전투원 목록이 잘못 표기되어있던 점이 수정되었습니다.
			</li>
		</> }
		new={ <>
			<li>전투원 스킨의 "크게 보기" 상태에서 로비 애니메이션을 볼 수 있는 스위치가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>로비 애니메이션 영상의 화질을 개선했습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">MH-4 테티스</span>의 스킨
				<span class="badge bg-danger">CAFÉ Horizon : CAFÉ Thetis♡</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">C-77 홍련</span>의 스킨
				<span class="badge bg-danger">애프터 웨딩 : 퇴근 뒤의 저녁식사</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">포이</span>의 스킨
				<span class="badge bg-danger">수영복 콘테스트 : 포이는 물이 싫어</span>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-10-22 18:23:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11139" date="2021-10-18"
		bugfix={ <>
			<li>스킬 범위에서 10% 영역이 표시되지 않던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">에키드나</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">퀵 카멜</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">마이티R</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">T-9 그렘린</span>의 서약 대사 세트가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">C-33 안드바리</span>의 스킨 <span class="badge bg-danger">첫 번째 수업</span>의 로비 애니메이션 정보 및 영상이 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-10-18 12:28:37</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11137" date="2021-10-16"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">사멸의 세크메트</span>의 정보가 추가되었습니다.</li>
			<li>
				전투원 정보의 스킨 미리보기에 <span class="badge bg-dark text-light">로비 애니메이션</span> 영상이 추가되었습니다.<br />
				일부 로비 애니메이션은 모션이 올바르지 않을 수도 있으며, 영상이 존재하지 않는 전투원도 있습니다.<br />
				<span class="badge bg-danger ms-0 mt-1">이제 움직입니다!</span>
			</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원목록</span>의
				<span class="badge bg-warning text-dark">목록 보기</span> 및 <span class="badge bg-warning text-dark">그룹별 보기</span>의
				전투원 카드 크기를 변경하여 한 번에 더 많은 전투원을 볼 수 있도록 수정했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">자비로운 리앤</span>의 스킨 <span class="badge bg-danger">드림위버 웨딩 스페셜: 영원한 구속</span>이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">스노우 페더</span>의 스킨 <span class="badge bg-danger">드림위버 웨딩 스페셜: 당신을 향한 날갯짓</span>이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">니키 트레이시</span>의 스킨 <span class="badge bg-danger">왜곡된 시선</span>의 중파 이미지가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">키르케</span>의 스킨 <span class="badge bg-danger">키르케용 드루이드 의식복</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">시라유리</span>의 스킨 <span class="badge bg-danger">칠흑의 화살</span>의 누락된 이미지가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">S5 기간테스</span>의 스킨 <span class="badge bg-danger">심해의 공포 다곤</span>의 누락된 이미지가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AG-2C 세이렌</span>의 스킨 <span class="badge bg-danger">봄, 바닷가와 소녀</span>의 누락된 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-10-16 02:30:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11123" date="2021-10-08"
		update={ <>
			<li>일부 전투원의 승급 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 서약 대사가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-10-08 21:40:16</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11118" date="2021-10-03"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">엘리 퀵핸드</span>의 정보가 추가되었습니다.</li>
			<li>이벤트 <span class="badge bg-warning text-dark">연꽃 위에 피는 장미 2부</span>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">스킬 버프 목록</span>에서 일부 표기가 잘못되어있던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">T-13 알비스</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span> 및 <span class="badge bg-warning text-dark">적정보</span>의
				검색이 대소문자를 구별하지 않도록 수정되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">M-5 이프리트</span>의 스킨 <span class="badge bg-danger">하계 전투복 이프리트</span>의 중파 이미지가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">시라유리</span>의 스킨 <span class="badge bg-danger">칠흑의 화살</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">니키 트레이시</span>의 스킨 <span class="badge bg-danger">왜곡된 시선</span>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>모든 전투원의 스킨 서약 대사가 인게임 텍스트로 교체되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-10-03 04:36:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
