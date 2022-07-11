import { FunctionalComponent } from "preact";

import { ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { RarityDisplay } from "@/libs/Const";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import UnitFace from "@/components/unit-face";

import "./style.scss";

interface ModuleUnit {
	uid: string;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	rarity: ACTOR_GRADE;
}

interface DropUnitProps {
	id: string | number;
	chance?: number;
}

const DropUnit: FunctionalComponent<DropUnitProps> = (props) => {
	const chance = props.chance || 100;

	const moduleRegex = /^Module_([TACM]{2})_([BAS]+)$/;

	const isModule = moduleRegex.test(props.id.toString());

	function getModule (uid: string): ModuleUnit | null {
		const rarityTable = ["D", "C", "B", "A", "S", "SS"];
		const ret = moduleRegex.exec(uid);
		if (!ret) return null;

		const types = ["T", "A", "M"];
		const roles = ["T", "A", "C"];
		const r = rarityTable.indexOf(ret[2]);

		return {
			uid,
			rarity: r,
			type: types.indexOf(ret[1][0]) as ACTOR_CLASS,
			role: roles.indexOf(ret[1][1]) as ROLE_TYPE,
		};
	}

	return <Loader json={ StaticDB.FilterableUnit } content={ ((): preact.VNode => {
		const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

		const unit = typeof props.id === "number"
			? FilterableUnitDB.find(x => x.id === props.id)
			: isModule
				? getModule(props.id)
				: FilterableUnitDB.find(x => x.uid === props.id);

		return <div class="drop-unit p-2 text-dark">
			{ unit
				? <div class={ `card text-start rarity-${RarityDisplay[unit.rarity]}` }>
					<div class="card-body">
						<UnitFace class="float-start me-2" uid={ unit.uid } size="48" type="mini" />
						<div>
							<span class="badge bg-secondary me-1 bordered">{ RarityDisplay[unit.rarity] }</span>
							<span class="unit-info">
								<i class="unit-type" data-type={ unit.type } />
								<i class="unit-role" data-role={ unit.role } />
							</span>
						</div>
						<div class="float-start">
							<Locale plain k={ `UNIT_${unit.uid}` } />
						</div>
						{ chance < 100
							? <small class="ms-1 text-bold">({ chance }%)</small>
							: <></>
						}
					</div>
				</div>
				: <></>
			}
		</div>;
	}) } />;
};
export default DropUnit;
