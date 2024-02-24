import { ITEM_GRADE } from "@/types/Enums";
import { Sticker } from "@/types/DB/Sticker";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { objState } from "@/libs/State";

import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import Locale, { LocaleGet } from "@/components/locale";
import EquipIcon from "@/components/equip-icon";
import PopupBase from "@/components/popup/base";

import style from "./style.module.scss";

const StickerPage: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "장식품 목록을 표시합니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(LocaleGet("MENU_ETC_STICKER"));

	const imgExt = ImageExtension();
	const selected = objState<Sticker | null>(null);

	return <Loader
		json={ [StaticDB.Sticker] }
		content={ (): preact.VNode => {
			const stickers = GetJson<Sticker[]>(StaticDB.Sticker);
			return <div>
				<h1 class="mb-4">
					<Locale k="MENU_ETC_STICKER" />
				</h1>

				<PopupBase
					display={ !!selected.value }
					bodyClass={ `p-4 ${style.StickerPopup}` }
					footerVariant="dark"
					footerText="white"
					footerClass="justify-content-start"
					header={ <div class="text-start">
						{ selected.value
							? <>
								<Locale plain k={ selected.value.key } />
								<div style="font-size: 60%">{ selected.value.key }</div>
							</>
							: <></>
						}
					</div> }
					onHidden={ (): void => selected.set(null) }
				>
					{ selected.value
						? <img src={ `${AssetsRoot}/${imgExt}/sticker/${selected.value.image}.${imgExt}` } />
						: <></>
					}
				</PopupBase>

				<div class="row row-cols-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8">
					{ stickers.map(s => <div class="col">
						<div
							class={ `card mb-3 ${style.StickerItem}` }
							onClick={ (e): void => {
								e.preventDefault();
								selected.set(s);
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
		} }
	/>;
};
export default StickerPage;
