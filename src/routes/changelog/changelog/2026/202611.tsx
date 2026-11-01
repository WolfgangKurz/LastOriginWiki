import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13226" date="2026-11-02"
		bugfix={ <>
			<li>일부 모델 및 스토리 페이지가 제대로 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13224" date="2026-11-02"
		new={ <>
			<li><BY>세계 정보</BY>에 신규 메인스토리 지역이 추가되었습니다.</li>
		</> }
		update={ <>
			<li><BY>세계 정보</BY>의 기존 메인스토리 지역이 <BY>OLD</BY>로 변경되었습니다.</li>
		</> }
		bugfix={ <>
			<li>모델 데이터 수정 과정에서 일부 모델이 누락된 점을 수정했습니다.</li>
			<li><BY>스킨 뷰어</BY> 및 <BY>대사</BY> 탭에서 표정 선택자가 잘못 표시되던 점을 수정했습니다.</li>
			<li><BY>스토리 플레이어</BY> 에서 대사창의 UI가 잘못 그려지던 문제를 수정했습니다.</li>
			<li><BY>세계 정보</BY>에서 지역을 눌러도 선택된 표시가 나타나지 않던 문제가 수정되었습니다.</li>
			<li><BY>세계 정보</BY>에서 메인 스토리 및 메인 스토리 (OLD) 가 개방 조건에서 제대로 표시되지 않던 문제가 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>사니</BY>의 스킨 <BR>연구 뒤풀이 가장 파티</BR>의 미검열 중파의 소품 옵션이 제대로 표시되지 않던 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13213" date="2026-11-01"
		knownissue={ <>
			<li><strong>이번 업데이트에는 적 정보 및 전투원 스킬 정보의 갱신이 포함되지 않았습니다. 신규 전투원의 스킬 정보도 제공되지 않습니다.</strong></li>
		</> }
		bugfix={ <>
			<li><BY>스토리 플레이어</BY>에서 일부 모델이 올바르지 않은 모델로 표시되던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>이벤트 <BY>수상한 연구소의 사라진 대학원생</BY>의 정보 및 스토리가 추가되었습니다.</li>
			<li>신규 전투원 <BY>나모</BY>, <BY>사니</BY>의 정보가 추가되었습니다. <strong>스킬 정보는 제외됩니다.</strong></li>
			<li>신규 장비 <BY>연구실 태블릿</BY>, <BY>테니스 공</BY>, <BY>대학원생 포션</BY>의 정보가 추가되었습니다.</li>
			<li>외전 <BY>끝난 세상에서</BY>의 스토리가 추가되었습니다.</li>
			<li>신규 소모품 및 스티커의 정보가 추가되었습니다.</li>
			<li><BY>BGM</BY>에 <BY>수상한 연구소의 사라진 대학원생</BY> 앨범이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 장비의 능력치, 효과 및 획득처 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 획득처 정보와 <BY>포츈</BY>의 기본 정보가 갱신되었습니다.</li>
			<li>일부 지역의 클리어 조건, 보상 및 탐색 정보가 갱신되었습니다.</li>
			<li>일부 스토리 대사와 연출 정보가 갱신되었습니다.</li>
		</> }
		site={ <>
			<li><BY>스토리 플레이어</BY>의 대사창과 선택지 UI 및 캐릭터 표시 연출을 개선했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>나모</BY>, <BY>사니</BY>의 스킨 <BR>연구 뒤풀이 가장 파티</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>포츈</BY>의 스킨 <BR>중기형 포츈</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-10-30 23:41:45</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
