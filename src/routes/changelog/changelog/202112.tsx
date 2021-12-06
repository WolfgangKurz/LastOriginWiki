import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11413" date="2021-12-06"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">천아</span>의 정보가 추가되었습니다.</li>
		</> }
		update={<>
			<li>장비 <span class="badge bg-warning text-dark">전장 리부트 시스템 알파</span>의 설명이 수정되었습니다.</li>
			<li>일부 적의 정보가 수정되었습니다.</li>
		</>}
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-13 알비스</span>의 스킨
				<span class="badge bg-danger">드림위버 모던 컬렉션 : 초코가드</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">퀸오브메인</span>의 스킨
				<span class="badge bg-danger">드림위버 모던 컬렉션 : 단장한 야성</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">C-77 홍련</span>의 스킨
				<span class="badge bg-danger">애프터 웨딩 : 퇴근 뒤의 저녁식사</span>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-06 11:41:53</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11409" date="2021-12-05"
		new={ <>
			<li>전투원 정보의 <span class="badge bg-warning text-dark">링크/스킬</span>탭에 전투원 장비 순서 표시가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-05 23:22:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11406" date="2021-12-05"
		site={ <>
			<li>페이지 로드 과정을 조금 더 최적화했습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원의 무기 표기가 칸을 벗어나는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>모든 버프 표시에 <span class="badge bg-event-exchange-old">버프 추가 방식 표시</span>가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-05 00:04:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
