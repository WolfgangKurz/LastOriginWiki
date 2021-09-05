import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import RarityBadge from "@/components/rarity-badge";
import Icon from "@/components/bootstrap-icon";
import Locale from "@/components/locale";

interface CharProps {
	uid: string;
}

export const Char: FunctionalComponent<CharProps> = (props) =>
	<Loader json={ [StaticDB.FilterableUnit] } content={ (): preact.VNode => {
		const db = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

		const unit = db.find(x => x.uid === props.uid);
		if (!unit) return <>{ props.uid }</>;

		return <RarityBadge rarity="A">
			<Locale k={`UNIT_${unit.uid}`} fallback={unit.uid} /> <Icon icon="link-45deg" />
		</RarityBadge>;
	} } />;
