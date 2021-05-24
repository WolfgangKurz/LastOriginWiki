import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 10855" date="2021-05-25"
		bugfix={ <>
			<li>일부 전투원의 폼 체인지 스킬을 본 이후 페이지가 조작되지 않는 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">카페테리아</span>의 편성 조건에
				<span class="badge bg-warning text-dark">천향의 히루메</span>가 누락되어있던 점을 수정했습니다.
			</li>
		</> }
		update={ <>
			<li>AGS 전투원들의 스테이터스 수치 버프를 반영했습니다.</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>신규 장비 <span class="badge bg-warning text-dark">개량형 출력 제한 해제 장치</span>의 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 10845" date="2021-05-21"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">철의 탑</span>의
				<span class="badge bg-warning text-dark">오염된 군수 공장</span>의 공격력/방어력 수치가 %로 표시되던 점을 수정했습니다.
				(Build 10830 롤백)
			</li>
			<li>
				<span class="badge bg-warning text-dark">공진의 알렉산드라</span>의 스킨
				<span class="badge bg-danger">5월의 여왕 : 미스 퍼펙트</span>의 보이스가 존재하지 않던 점을 수정했습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 10844" date="2021-05-18"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">세계 정보</span>의 <span class="badge bg-warning text-dark">일일 훈련</span>의
				드랍 정보가 제대로 표시되지 않는 문제를 수정했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">P-49 슬레이프니르</span>의 스킬 설명이 갱신되지 않았던 점을 수정했습니다.</li>
			<li>전투원 스킨의 소모품 이름이 잘못 연결되어있던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 이벤트 지역 <span class="badge bg-success">Project ORCA, 별밤의 무대 3부</span> 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">니키 트레이시</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">철의 탑</span>의 퀘스트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">철의 탑</span>에 지도 외부 링크가 추가되었습니다.</li>
			<li>전투원 스킨 정보에 <span class="badge bg-warning text-dark">프리미엄 스킨</span> 여부 표시가 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">철의 탑</span>의 퀘스트 등급 뱃지를 정리했습니다.</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">뮤즈</span>의 스킨
				<span class="badge bg-danger">프로젝트 오르카 : 뮤즈</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">블랙 웜 S9</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜 : 되찾은 마음</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-05-18 03:20:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 10830" date="2021-05-12"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">적 정보</span> 및 <span class="badge bg-warning text-dark">소환물 정보</span>의
				<span class="badge bg-primary">행동 패턴</span>에 표시되는 타깃이 분리되어 표시되던 문제가 수정되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">T-60 불가사리</span>의 스킬 설명이 제대로 표시되지 않던 점을 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">AL 레이스</span>의 스킬 설명이 제대로 표시되지 않던 점을 수정했습니다.</li>
			<li>일부 획득처의 이름 잘못 표시되던 점을 수정했습니다.</li>
			<li>일부 효과의 유형이 잘못 표시되던 점을 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">철의 탑</span>의
				<span class="badge bg-warning text-dark">오염된 군수 공장</span>의 공격력/방어력 수치가 %가 누락되어 표시되던 점을 수정했습니다.
			</li>
		</> }
		new={ <>
			<li>전투원 <span class="badge bg-warning text-dark">CT66 램파트</span>의 <span class="badge bg-rarity-SS text-dark">SS승급</span>정보가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">철의 탑</span>의 퀘스트가 추가되었습니다.
			</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">적 정보</span> 및 <span class="badge bg-warning text-dark">소환물 정보</span>의
				<span class="badge bg-primary">행동 패턴</span>에 표시되는 스킬이 이름으로 표시되도록 갱신되었습니다.
			</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
	/>

	<ChangelogItem title="Build 10816" date="2021-05-09"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">적 정보</span>의 적 카드에 표시되는 적 유형/역할이 잘못 표시되는 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-05-09 18:36:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 10814" date="2021-05-09"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">Simulator<sup>β</sup></span>의
				<span class="badge bg-warning text-dark">버프 수치 포함</span> 기능이
				<span class="badge bg-dark">적중률, 치명타, 회피율</span>에는 반영되지 않는 문제를 수정했습니다.
			</li>
		</> }
		update={ <>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
	/>

	<ChangelogItem title="Build 10811" date="2021-05-07"
		bugfix={ <>
			<li>전투원의 스킨 아이템 이름이 표시되지 않던 문제를 수정했습니다.</li>
			<li>소환물 창을 닫으면 다시 열 수 없던 문제를 수정했습니다.</li>
			<li>소환물 창의 사거리/범위가 항상 크게 보이는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>전투원의 스킬 정보의 범위 표시를 개선했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">레나 더 챔피언</span>의
				<span class="badge bg-warning text-dark">태그팀 피니쉬 무브</span>의 협동 공격 순서가 갱신되었습니다.
			</li>
			<li>협동 공격의 버프 표시가 개선되었습니다.</li>
			<li>스킬 정보에서 스킬 명에 존재하는 뱃지를 스킬의 속성 옆으로 이동하였습니다.</li>

			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">Simulator<sup>β</sup></span>의 개요에
				<span class="badge bg-warning text-dark">버프 수치 포함</span> 체크박스가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">Simulator<sup>β</sup></span>의 편성 상단에
				자원 총합 및 편성 현황 표시를 추가했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">무적의 용</span>의 스킨
				<span class="badge bg-danger">세일러 용</span>의 로비 애니메이션 및 가격 정보가 갱신되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 10787" date="2021-05-04"
		bugfix={ <>
			<li>전투원 카드에서 전투원의 분류/역할이 제대로 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">T-60 불가사리</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">라비아타 프로토타입</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">AS-12 스틸 드라코</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">P-24 핀토</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">C-77 홍련</span>의 스킬 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">레나 더 챔피언</span>의 <span class="badge bg-info">태그팀 피니쉬 무브</span> 설명이 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">수상한 보조제</span>의 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">우주용 확장 부스터</span>의 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">테러진압용 외장아머</span>의 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">특수 대원용 가시 목걸이</span>의 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">개량형 복합 장갑</span>의 정보가 갱신되었습니다.</li>
			<li>일부 영문/일문 번역이 추가/수정되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>
				신규 이벤트 지역 <span class="badge bg-success">Project ORCA, 별밤의 무대 2부</span> 정보가 추가되었습니다.
			</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">보련</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">능동형 항공 레이더</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">개량형 MK 엔진</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">전격형 파일벙커</span>의 정보가 추가되었습니다.</li>
			<li>신규 적의정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-05-04 01:58:13</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">P-22 하르페이아</span>의 스킨
				<span class="badge bg-danger">프로젝트 오르카 : 하르페이아</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">P-49 슬레이프니르</span>의 스킨
				<span class="badge bg-danger">프로젝트 오르카 : 슬레이프니르</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">EB-48G 흐레스벨그</span>의 스킨
				<span class="badge bg-danger">프로젝트 오르카 : 흐레스벨그</span>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
