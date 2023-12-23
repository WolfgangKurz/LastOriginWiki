import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12408" date="2023-12-23"
		new={ <>
			<li>신규 이벤트 <BY>당신의 쐐기에 진심을</BY>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>T-75 워울프</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>T-40 하이에나</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>A-15 샐러맨더</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>E-16 탈론페더</BY>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <BY>A-15 샐러맨더</BY>의 승급 정보가 추가되었습니다.</li>
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
			<li>사이트의 프린트 기능이 제대로 작동하지 않던 문제를 수정했씁니다.</li>
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
</>;
export default Changelog;
