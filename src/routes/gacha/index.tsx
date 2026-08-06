import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import { INNER_GACHA_CATEGORY } from "@/types/DB/Gacha";

import { useLocale } from "@/libs/Locale";
import { isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale from "@/components/locale";

import BoxGacha from "./box";
import PremiumAttendGacha from "./premium_attend";

export interface GachaSubpageProps {
	style?: preact.JSX.CSSProperties;
}

const GachaPage: FunctionalComponent = () => {
	const [loc] = useLocale({ namespaces: "MENU" });

	SetMeta(["description", "twitter:description"], "게임의 가챠를 해볼 수 있는 가챠 시뮬레이터입니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(loc["MENU_ETC_GACHA"]);

	const [cat, setCat] = useState<INNER_GACHA_CATEGORY>(INNER_GACHA_CATEGORY.Box);

	return <>
		<div class="btn-group mb-4">
			<button
				class={ `btn btn-outline-dark ${isActive(cat === INNER_GACHA_CATEGORY.Box)}` }
				onClick={ (): void => setCat(INNER_GACHA_CATEGORY.Box) }
			>
				<Locale k="GACHA_CATEGORY_BOX" />
			</button>
			<button
				class={ `btn btn-outline-dark ${isActive(cat === INNER_GACHA_CATEGORY.PremiumAttend)}` }
				onClick={ (): void => setCat(INNER_GACHA_CATEGORY.PremiumAttend) }
			>
				<Locale k="GACHA_CATEGORY_PREMIUMATTEND" />
			</button>
		</div>

		<BoxGacha style={ { display: isActive(cat === INNER_GACHA_CATEGORY.Box, "", "none") } } />
		<PremiumAttendGacha style={ { display: isActive(cat === INNER_GACHA_CATEGORY.PremiumAttend, "", "none") } } />
	</>;
};
export default GachaPage;
