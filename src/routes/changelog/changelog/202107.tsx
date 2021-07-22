import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11073" date="2021-07-22"
		update={ <>
			<li><span class="badge bg-warning text-dark">빛이 들지 않는 성역</span> 이벤트 정보가 추가되었습니다.</li>
			<li>일어 표기의 대부분이 일본 서버 데이터 기준 텍스트로 변경되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">엔젤</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">응용 지휘 프로토콜</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">경화기용 장전기</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">공중화기용 추력기</span>의 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>
				<span class="badge bg-danger">JP 서버</span> 데이터를 이용할 수 있습니다.<br />
				전투원 및 장비 등의 명칭은 언어 설정을 따라갑니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">이터니티</span>의 스킨 <span class="badge bg-danger">수영복 콘테스트 : 휴식</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">오드리 드림위버</span>의 스킨 <span class="badge bg-danger">수영복 콘테스트 : 섹시 디자이너</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">드라큐리나</span>의 스킨 <span class="badge bg-danger">뙤약볕의 흡혈귀</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AT-4 파니</span>의 스킨 <span class="badge bg-danger">코트 위의 에이스</span>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 10940" date="2021-07-09"
		update={ <>
			<li><span class="badge bg-warning text-dark">RF-87 로크</span>의 스킬 변경점이 반영되었습니다.</li>
			<li><span class="badge bg-warning text-dark">포이</span>의 스킬 변경점이 반영되었습니다.</li>
			<li><span class="badge bg-warning text-dark">X-00 티아멧</span>의 스킬 변경점이 반영되었습니다.</li>
			<li><span class="badge bg-warning text-dark">스노우 페더</span>의 스킬 변경점이 반영되었습니다.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">시라유리</span>의 스킨
				<span class="badge bg-danger">퇴마의 홍희</span>의 가격 및 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
