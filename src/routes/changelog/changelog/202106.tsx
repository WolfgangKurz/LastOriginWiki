import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 10937" date="2021-06-29"
		bugfix={ <>
			<li>일부 코드명으로 노출되던 번역을 수정했습니다.</li>
		</> }
		update={ <>
			<li>버프 목록에 0% 확률 버프도 표시되도록 변경되었습니다. 전투원 스킬 버프 목록은 더미 표시 옵션을 활성화해야 표시됩니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">AC-6 후사르</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">오렐리아</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">원소의 심장(화염) EX</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">원소의 심장(냉기) EX</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">원소의 심장(전기) EX</span>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-06-29 00:35:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">타치</span>의 기본 일러스트 정보가 수정되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">해체자 아자즈</span>의 스킨
				<span class="badge bg-danger">5월의 여왕 : 색다른 경험</span>의 중파 이미지 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">천공의 엘라</span>의 스킨
				<span class="badge bg-danger">귀염냉혹 듀얼리스트</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">레모네이드 알파</span>의 스킨
				<span class="badge bg-danger">칠죄종 : 해방된 각인</span>의 정보가 추가되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 10897" date="2021-06-16"
		update={ <>
			<li>철의 탑 오염된 군수공장 버프의 대상 표시가 적군으로 표시되는 것을 아군으로 표시되도록 개선했습니다.</li>
			<li>램파트 및 알바트로스, 타이런트의 "출력 제한 해제 장치" 관련 스킬 정보를 "개량형 출력 제한 해제 장치"로도 가능하다는 내용을 추가했습니다.</li>
			<li>이상한 나라의 초코 여왕의 맵 정보가 갱신되었습니다.</li>
			<li>현재 진행중인 이벤트 정보가 갱신되었습니다.</li>
			<li>변경된 버프 아이콘이 반영되었습니다. 스탯 아이콘은 변경하지 않았습니다.</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>신규 장비 <span class="badge bg-warning text-dark">HQ1 커맨더 시스템</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">므네모시네</span>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-06-16 03:04:16</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">퀸 오브 메인</span>의 구글 버전 일러스트가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">해체자 아자즈</span>의 스킨
				<span class="badge bg-danger">5월의 여왕 : 색다른 경험</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">S12 쉐이드</span>의 스킨
				<span class="badge bg-danger">생명을 거두는 자</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">블랙 리리스</span>의 스킨
				<span class="badge bg-danger">리리스의 본 목적을 벗어난 수영복</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 10870" date="2021-06-06"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">장비정보</span>에서 제조 가능한 장비가 표시되지 않는 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">장비정보</span>에서
				<span class="badge bg-danger">지난 이벤트 맵</span> 및 <span class="badge bg-danger">지난 이벤트 교환소</span>가 제대로 작동하지 않던 문제를 수정했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">Simulator</span>에서 링크 보너스 및 풀링크 보너스 수치 계산이 잘못되어있던 점을 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 로그라이크 스킬 필터가 제대로 표시되지 않는 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">획득처</span>의 이벤트 교환소가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">글라시아스</span>의 2번째 액티브 스킬
				<span class="badge bg-info text-dark">니플헤임의 폭풍</span>의
				<span class="badge bg-info text-dark">추가 냉기 피해</span> 수치가 잘못 표시되던 문제를 수정했습니다.
			</li>
			<li>일본어 전투원 대사가 잘못 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>일본어 폰트가 추가되었습니다.</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-warning text-dark">제조 시간</span> 보기가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-dark">기본</span> 획득처 필터가 추가되었습니다.
				제조로만 획득 가능한 장비들이 포함됩니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-06-06 00:43:22</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 10864" date="2021-06-01"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">장비정보</span>에서 제조 가능한 장비가
				<span class="badge bg-secondary">한정</span>으로 분류되는 문제를 수정했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span>에서 전투원이 링크로 구성되어있지 않아서
				새 탭 열기 또는 메뉴 열기가 불가능했던 점을 수정했습니다.
			</li>
			<li>전투원 스킨의 옵션을 켠 후에 다른 스킨을 열람하면 옵션이 유지되어 다른 스킨이 표시되지 않던 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">획득처</span>의 이벤트 교환소가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이제 AGS의 호감도 표가 표시되지 않습니다.</li>
			<li>철의 탑 정보가 갱신되었습니다.</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>신규 이벤트 맵 <span class="badge bg-success">Finale</span> 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">글라시아스</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">퀸 오브 메인</span>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-06-01 01:20:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-06-01</span> 기준의 일본 서버 대사 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">C-33 안드바리</span>의 스킨
				<span class="badge bg-danger">첫 번째 수업</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">미스세이프티</span>의 스킨
				<span class="badge bg-danger">얼룩제거반</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">공진의 알렉산드라</span>의 스킨
				<span class="badge bg-danger">5월의 여왕 : 미스 퍼펙트</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
