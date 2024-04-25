import { useEffect, useState } from "preact/hooks";

import { Consumable } from "@/types/DB/Consumable";

import { ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import DropItem from "@/components/drop-item";
import { BuildClass } from "@/libs/Class";

const ConsumableView: FunctionalComponent = () => {
	const [filterCharTicket, setFilterCharTicket] = useState(false);
	const [filterSkinPack, setFilterSkinPack] = useState(false);
	const [filterEvent, setFilterEvent] = useState(false);
	const [filterSticker, setFilterSticker] = useState(false);
	const [filterBG, setFilterBG] = useState(false);
	const [filterOthers, setFilterOthers] = useState(false);

	useEffect(() => {
		SetMeta(["description", "twitter:description"], "소모품 목록을 표시합니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle(LocaleGet("MENU_ETC_CONSUMABLE"));
	}, []);

	return <Loader
		json={ [StaticDB.Consumable] }
		content={ (): preact.VNode => {
			const consumables = GetJson<Consumable[]>(StaticDB.Consumable);
			return <div>
				<h1 class="mb-4">
					<Locale k="MENU_ETC_CONSUMABLE" />
				</h1>

				<div class="btn-group mb-4">
					<button
						class={ BuildClass("btn", "btn-outline-substory", isActive(filterCharTicket)) }
						onClick={ e => {
							e.preventDefault();
							setFilterCharTicket(!filterCharTicket);
						} }
					>
						<Locale k="CONSUMABLE_INCLUDES_CHARTICKET" />
					</button>
					<button
						class={ BuildClass("btn", "btn-outline-substory", isActive(filterSkinPack)) }
						onClick={ e => {
							e.preventDefault();
							setFilterSkinPack(!filterSkinPack);
						} }
					>
						<Locale k="CONSUMABLE_INCLUDES_SKINPACK" />
					</button>
					<button
						class={ BuildClass("btn", "btn-outline-substory", isActive(filterEvent)) }
						onClick={ e => {
							e.preventDefault();
							setFilterEvent(!filterEvent);
						} }
					>
						<Locale k="CONSUMABLE_INCLUDES_EVENT" />
					</button>
					<button
						class={ BuildClass("btn", "btn-outline-substory", isActive(filterSticker)) }
						onClick={ e => {
							e.preventDefault();
							setFilterSticker(!filterSticker);
						} }
					>
						<Locale k="CONSUMABLE_INCLUDES_STICKER" />
					</button>
					<button
						class={ BuildClass("btn", "btn-outline-substory", isActive(filterBG)) }
						onClick={ e => {
							e.preventDefault();
							setFilterBG(!filterBG);
						} }
					>
						<Locale k="CONSUMABLE_INCLUDES_BG" />
					</button>
					<button
						class={ BuildClass("btn", "btn-outline-substory", isActive(filterOthers)) }
						onClick={ e => {
							e.preventDefault();
							setFilterOthers(!filterOthers);
						} }
					>
						<Locale k="CONSUMABLE_INCLUDES_OTHERS" />
					</button>
				</div>

				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
					{ consumables
						.filter(c => {
							const k = c.key;
							if (k.startsWith("CharTicket_")) return filterCharTicket;
							if (k.startsWith("Ev_")) return filterEvent;
							if (k.includes("PROP")) return filterSticker;
							if (k.startsWith("Consumable_BG_")) return filterBG;
							if (k.startsWith("Skin_") || k.startsWith("Shop_Package_Skin_")) return filterSkinPack;
							return filterOthers;
						})
						.map(s => <div class="col">
							<DropItem item={ s } />
						</div>)
					}
				</div>
			</div>;
		} }
	/>;
};
export default ConsumableView;
