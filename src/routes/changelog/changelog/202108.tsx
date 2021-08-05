import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11087" date="2021-08-05"
		update={ <>
			<li><span class="badge bg-warning text-dark">경험치 계산기</span> 리팩토링이 완료되었습니다.</li>
			<li><img src={`${AssetsRoot}/flags/zhTW.png`} alt="zhTW" /> 대만(중화민국) 언어 지원이 추가되었습니다.</li>
			<li><img src={`${AssetsRoot}/flags/zhTW.png`} alt="zhTW" /> Taiwan(Republic of China) language support has been added.</li>
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
