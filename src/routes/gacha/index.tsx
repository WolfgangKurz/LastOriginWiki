import { INNER_GACHA_CATEGORY } from "@/types/DB/Gacha";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale, { LocaleGet } from "@/components/locale";

import BoxGacha from "./box";
import PremiumAttendGacha from "./premium_attend";

export interface GachaSubpageProps {
	style?: preact.JSX.CSSProperties;
}

const GachaPage: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "게임의 가챠를 해볼 수 있는 가챠 시뮬레이터입니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(LocaleGet("MENU_ETC_GACHA"));

	const cat = objState<INNER_GACHA_CATEGORY>(INNER_GACHA_CATEGORY.Box);

	return <>
		<div class="btn-group mb-4">
			<button
				class={ `btn btn-outline-dark ${isActive(cat.value === INNER_GACHA_CATEGORY.Box)}` }
				onClick={ (): void => cat.set(INNER_GACHA_CATEGORY.Box) }
			>
				<Locale k="GACHA_CATEGORY_BOX" />
			</button>
			<button
				class={ `btn btn-outline-dark ${isActive(cat.value === INNER_GACHA_CATEGORY.PremiumAttend)}` }
				onClick={ (): void => cat.set(INNER_GACHA_CATEGORY.PremiumAttend) }
			>
				<Locale k="GACHA_CATEGORY_PREMIUMATTEND" />
			</button>
		</div>

		<BoxGacha style={ { display: isActive(cat.value === INNER_GACHA_CATEGORY.Box, "", "none") } } />
		<PremiumAttendGacha style={ { display: isActive(cat.value === INNER_GACHA_CATEGORY.PremiumAttend, "", "none") } } />
	</>;
};
export default GachaPage;
