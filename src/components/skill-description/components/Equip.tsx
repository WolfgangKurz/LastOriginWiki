import { FunctionalComponent } from "preact";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import RarityBadge from "@/components/rarity-badge";
import Icon from "@/components/bootstrap-icon";

interface EquipProps {
	uid: string;
}

export const Equip: FunctionalComponent<EquipProps> = (props) =>
	<Loader json={ [StaticDB.FilterableEquip, "equip-names"] } content={ (): preact.VNode => {
		const db = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);
		const names = GetJson<Record<string, string>>("equip-names");

		const equip = db.find(x => x.fullKey === props.uid || x.fullKey.startsWith(props.uid));
		if (!equip) return <>{ props.uid }</>;

		const k = equip.fullKey.replace(/_T[0-9]+$/, "");
		return <RarityBadge rarity="A">{ names[k] || k } <Icon icon="link-45deg" /></RarityBadge>;
	} } />;
