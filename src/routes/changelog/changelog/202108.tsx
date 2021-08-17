import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11102" date="2021-08-17"
		new={ <>
			<li><span class="badge bg-warning text-dark">세계정보</span>에 <span class="badge bg-warning text-dark">상시 이벤트</span> 영역이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">더치걸</span>의 특수 터치 대사 및 서약 후 대사가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">아쿠아</span>의 특수 터치 대사 및 서약 후 대사가 추가/변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">코코 인 화이트셸</span>의 특수 터치 대사 및 서약 후 대사가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">LRL</span>의 특수 터치 대사 및 서약 후 대사가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">LRL</span>의 특수 터치 대사가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>Some EN/JP/TW translation has added/updated.</li>
			<li>一部の英語・日本語・台湾語の翻訳が追加・修正されました。</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">베로니카</span>의 스킨 <span class="badge bg-danger">이단 심문관 베로니카</span>의 로비 애니메이션 정보가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-08-17 13:11:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
			<li>일부 전투원의 대사가 잘못 기입되어있던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11096" date="2021-08-10"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span>의
				<span class="badge bg-warning text-dark">그룹별 보기</span>에서 그룹 아이콘 및 합치기가 올바르지 않게 작동하던 점을 수정했습니다.
			</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">N2E-888 아라크네</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">빛이 들지 않는 성역</span> 이벤트 3부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 <span class="badge bg-warning text-dark">베로니카</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">사라카엘</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>장비 <span class="badge bg-warning text-dark">특수 대원용 가시 목걸이</span>의 정보가 갱신되었습니다.</li>
			<li>Some EN/JP/TW translation has added/updated.</li>
			<li>一部の英語・日本語・台湾語の翻訳が追加・修正されました。</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">아자젤</span>의 기본 스킨의 구글판 이미지 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">아자젤</span>의 스킨 <span class="badge bg-danger">반려의 의무</span>의 구글판 이미지 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">아자젤</span>의 스킨 <span class="badge bg-danger">수영복 콘테스트 : 한결같은 마음</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">사라카엘</span>의 스킨 <span class="badge bg-danger">수영복 콘테스트 : 매혹의 깃</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">라미엘</span>의 스킨 <span class="badge bg-danger">수영복 콘테스트 : 구원받은 천사</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">베로니카</span>의 스킨 <span class="badge bg-danger">이단 심문관 베로니카</span>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-08-10 01:05:21</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11087" date="2021-08-05"
		update={ <>
			<li><span class="badge bg-warning text-dark">경험치 계산기</span> 리팩토링이 완료되었습니다.</li>
			<li><img src={ `${AssetsRoot}/flags/zhTW.png` } alt="zhTW" /> 대만(중화민국) 언어 지원이 추가되었습니다.</li>
			<li><img src={ `${AssetsRoot}/flags/zhTW.png` } alt="zhTW" /> Taiwan(Republic of China) language support has been added.</li>
			<li>Some EN/JP translation has added/updated.</li>
			<li>一部の英語・日本語の翻訳が追加・修正されました。</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">바닐라 A1</span>의 스킨 <span class="badge bg-danger">바닐라의 휴일</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-08-05 10:25:33</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
