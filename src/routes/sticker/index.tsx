import { FunctionalComponent } from "preact";
import { Sticker } from "@/types/DB/Sticker";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { assertDBData, StaticDB, useDBData } from "@/libs/Loader";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { useLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";
import PopupBase from "@/components/popup/base";

import style from "./style.module.scss";
import { useState } from "preact/hooks";

const StickerPage: FunctionalComponent = () => {
	const [loc] = useLocale();

	SetMeta(["description", "twitter:description"], "장식품 목록을 표시합니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(loc["MENU_ETC_STICKER"]);

	const imgExt = ImageExtension();
	const [selected, setSelected] = useState<Sticker | null>(null);

	const stickers = useDBData<Sticker[]>(StaticDB.Sticker);
	return <div>
		<h1 class="mb-4">
			<Locale k="MENU_ETC_STICKER" />
		</h1>

		<PopupBase
			display={ !!selected }
			bodyClass={ `p-4 ${style.StickerPopup}` }
			footerVariant="dark"
			footerText="white"
			footerClass="justify-content-start"
			header={ <div class="text-start">
				{ selected && <>
					<Locale plain k={ selected.key } />
					<div style="font-size: 60%">{ selected.key }</div>
				</> }
			</div> }
			onHidden={ (): void => setSelected(null) }
		>
			{ selected && <img src={ `${AssetsRoot}/${imgExt}/sticker/${selected.image}.${imgExt}` } /> }
		</PopupBase>

		<div class="row row-cols-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8">
			{ assertDBData(stickers) && stickers.map(s => <div class="col">
				<div
					class={ `card mb-3 ${style.StickerItem}` }
					onClick={ (e): void => {
						e.preventDefault();
						setSelected(s);
					} }
				>
					<div class="card-header">
						<EquipIcon image={ s.icon } size="64" />
					</div>
					<div class="card-body">
						<strong>
							<Locale plain k={ s.key } />
						</strong>
					</div>
				</div>
			</div>) }
		</div>
	</div>;
};
export default StickerPage;
