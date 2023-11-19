import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12371" date="2023-11-19"
		new={ <>
			<li>신규 지역 <BY>메인스토리 12지역</BY> 정보가 추가되었습니다.</li>
			<li>신규 외전 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>시위 대응 매뉴얼 개정판</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>의료용 부항</BY>의 정보가 추가되었습니다.</li>
			<li>신규 배경의 정보가 추가되었습니다.</li>
			<li>신규 장식품의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 장식품의 이미지가 표시되지 않는 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>이그니스</BY>의 스킨 <BR>이그니스 엘븐 밀크 판촉 복장</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>블라인드 프린세스</BY>의 스킨 <BR>미스오르카 : 운명의 순간</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>세라피아스 앨리스</BY>의 스킨 <BR>조금... 아니, 많이 이상한 대행자</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>C-77 홍련</BY>의 스킨 <BR>미스오르카 : Secret Night</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-11-19 15:49:36</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
