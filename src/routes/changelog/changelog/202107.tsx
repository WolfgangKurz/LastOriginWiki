import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
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
