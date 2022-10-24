import { FunctionalComponent } from "preact";
import { route } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Locale from "@/components/locale";
import Loader, { GetJson, StaticDB } from "@/components/loader";
import Icon from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import RarityBadge from "@/components/rarity-badge";
import UnitCard from "@/components/unit-card";
import UnitFace from "@/components/unit-face";

import style from "./style.module.scss";

interface CharProps {
	class?: string;
	uid: string;
}

export const Char: FunctionalComponent<CharProps> = (props) =>
	<Loader json={ StaticDB.FilterableUnit } content={ (): preact.VNode => {
		const db = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

		const unit = db.find(x => x.uid === props.uid);
		if (!unit) return <>{ props.uid }</>;

		const href = `/units/${unit.uid}`;

		return <>
			<a
				class={ props.class }
				href={ href }
				onClick={ (e: Event): void => {
					e.preventDefault();
					e.stopPropagation();
					route(href);
				} }
			>
				<BootstrapTooltip
					placement="top"
					content={ <UnitCard class="text-center" unit={ unit } rarity={ unit.rarity } no-link /> }
				>
					<RarityBadge rarity="A">
						<Locale plain k={ `UNIT_${unit.uid}` } fallback={ unit.uid } /> <Icon icon="link-45deg" />
					</RarityBadge>
				</BootstrapTooltip>
			</a>
			<div class={ style.Preload }>
				<UnitFace uid={ unit.uid } />
			</div>
		</>;
	} } />;
