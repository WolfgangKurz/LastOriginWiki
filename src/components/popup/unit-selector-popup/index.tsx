import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";

import { StaticDB, useDBData } from "@/libs/Loader";
import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Loading from "@/components/loading";
import UnitFace from "@/components/unit-face";
import PopupBase from "@/components/popup/base";

import "./style.scss";

interface FilterType {
	Type: Record<ACTOR_CLASS, boolean>;
	Role: Record<ROLE_TYPE, boolean>;
	Rarity: Record<ACTOR_GRADE, boolean>;
	Body: Record<Exclude<ACTOR_BODY_TYPE, ACTOR_BODY_TYPE.__MAX__>, boolean>;
}
type FilterKeys = keyof FilterType;
type FilterSubkeys<T extends FilterKeys> = keyof FilterType[T];

interface UnitSelectorPopupProps {
	class?: string;
	display?: boolean;

	value?: string | undefined;
	noClear?: boolean;
	ban?: string[];

	onHidden?: () => void;
	onSelect?: (uid: string | null) => void;
}
const UnitSelectorPopup: FunctionalComponent<UnitSelectorPopupProps> = (props) => {
	const [latestValue, setLatestValue] = useState<string | undefined>(undefined);
	const [value, setValue] = useState<string>("");
	const [filter, setFilter] = useState<FilterType>({
		Type: {
			[ACTOR_CLASS.LIGHT]: true,
			[ACTOR_CLASS.FLYING]: true,
			[ACTOR_CLASS.HEAVY]: true,
		},
		Role: {
			[ROLE_TYPE.ATTACKER]: true,
			[ROLE_TYPE.DEFENDER]: true,
			[ROLE_TYPE.SUPPORTER]: true,
		},
		Rarity: {
			[ACTOR_GRADE.B]: true,
			[ACTOR_GRADE.A]: true,
			[ACTOR_GRADE.S]: true,
			[ACTOR_GRADE.SS]: true,
			[ACTOR_GRADE.SSS]: true,
		},
		Body: {
			[ACTOR_BODY_TYPE.BIOROID]: true,
			[ACTOR_BODY_TYPE.AGS]: true,
			[ACTOR_BODY_TYPE.TOTEM]: false,
			[ACTOR_BODY_TYPE.SUMMON]: false,
		},
	});

	const FilterableUnit = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!FilterableUnit) return <Loading.Data />;

	const source = useMemo(() => {
		return FilterableUnit
			.filter(x => filter.Type[x.type] &&
				filter.Role[x.role] &&
				filter.Body[x.body] &&
				filter.Rarity[x.rarity])
			.filter(x => !props.ban || !props.ban.includes(x.uid));
	}, [FilterableUnit, filter, props.ban]);

	useEffect(() => {
		if (latestValue !== props.value) {
			setValue(props.value || "");
			setLatestValue(props.value);
		}
	}, [latestValue, props.value]);

	function toggleFilter<T extends FilterKeys> (key: T, subkey: FilterSubkeys<T>) {
		setFilter(v => {
			const o = Object.assign({}, v);
			// @ts-ignore type-guard not working well
			o[key][subkey] = !o[key][subkey];
			return o;
		});
	}

	return <PopupBase
		contentClass="unit-selector-popup"
		display={ props.display }
		size="md"
		header={ <Locale k="POPUP_UNIT_TITLE" /> }
		footer={ <div class="btn-group">
			<button class="btn btn-primary"
				onClick={ (e): void => {
					e.preventDefault();
					if (props.onSelect && value) {
						props.onSelect(value);
						if (props.onHidden) props.onHidden();
					}
				} }
			>
				<Locale k="POPUP_UNIT_SELECT" />
			</button>
			{ props.noClear
				? <></>
				: <button class="btn btn-danger">
					<Locale k="POPUP_UNIT_CLEAR" />
				</button>
			}
		</div> }
		onHidden={ (): void => {
			setValue("");

			if (props.onHidden)
				props.onHidden();
		} }
	>
		<div>
			<div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-danger ${isActive(filter.Rarity[ACTOR_GRADE.SS])}` }
						onClick={ () => toggleFilter("Rarity", ACTOR_GRADE.SS) }
					>SS</button>
					<button
						class={ `btn btn-outline-danger ${isActive(filter.Rarity[ACTOR_GRADE.S])}` }
						onClick={ () => toggleFilter("Rarity", ACTOR_GRADE.S) }
					>S</button>
					<button
						class={ `btn btn-outline-danger ${isActive(filter.Rarity[ACTOR_GRADE.A])}` }
						onClick={ () => toggleFilter("Rarity", ACTOR_GRADE.A) }
					>A</button>
					<button
						class={ `btn btn-outline-danger ${isActive(filter.Rarity[ACTOR_GRADE.B])}` }
						onClick={ () => toggleFilter("Rarity", ACTOR_GRADE.B) }
					>B</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-success ${isActive(filter.Type[ACTOR_CLASS.LIGHT])}` }
						onClick={ () => toggleFilter("Type", ACTOR_CLASS.LIGHT) }
					>
						<Locale k="COMMON_UNIT_TYPE_LIGHT" />
					</button>
					<button
						class={ `btn btn-outline-success ${isActive(filter.Type[ACTOR_CLASS.FLYING])}` }
						onClick={ () => toggleFilter("Type", ACTOR_CLASS.FLYING) }
					>
						<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
					</button>
					<button
						class={ `btn btn-outline-success ${isActive(filter.Type[ACTOR_CLASS.HEAVY])}` }
						onClick={ () => toggleFilter("Type", ACTOR_CLASS.HEAVY) }
					>
						<Locale k="COMMON_UNIT_TYPE_HEAVY" />
					</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-warning ${isActive(filter.Role[ROLE_TYPE.ATTACKER])}` }
						onClick={ () => toggleFilter("Role", ROLE_TYPE.ATTACKER) }
					>
						<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
					</button>
					<button
						class={ `btn btn-outline-warning ${isActive(filter.Role[ROLE_TYPE.DEFENDER])}` }
						onClick={ () => toggleFilter("Role", ROLE_TYPE.DEFENDER) }
					>
						<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
					</button>
					<button
						class={ `btn btn-outline-warning ${isActive(filter.Role[ROLE_TYPE.SUPPORTER])}` }
						onClick={ () => toggleFilter("Role", ROLE_TYPE.SUPPORTER) }
					>
						<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
					</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-dark ${isActive(filter.Body[ACTOR_BODY_TYPE.BIOROID])}` }
						onClick={ () => toggleFilter("Body", ACTOR_BODY_TYPE.BIOROID) }
					>
						<Locale k="COMMON_UNIT_BODY_BIOROID" />
					</button>
					<button
						class={ `btn btn-outline-dark ${isActive(filter.Body[ACTOR_BODY_TYPE.AGS])}` }
						onClick={ () => toggleFilter("Body", ACTOR_BODY_TYPE.AGS) }
					>
						<Locale k="COMMON_UNIT_BODY_AGS" />
					</button>
				</div>
			</div>

			<ul class="list-group mb-3">
				{ source.map(u => <li
					class={ `list-group-item unit-list-item ${isActive(value === u.uid, "bg-rarity-SS", "")}` }
					role="button"
					onClick={ (e): void => {
						e.preventDefault();
						setValue(u.uid);
					} }
				>
					<UnitFace class="me-3" uid={ u.uid } size="48" />
					<div class="d-inline-block text-start">
						<div>
							<strong>
								<Locale plain k={ `UNIT_${u.uid}` } />
							</strong>
						</div>
						<div>
							<small class={ "text-secondary" }>{ u.uid }</small>
						</div>
					</div>
				</li>) }
			</ul>
		</div>
	</PopupBase>;
};
export default UnitSelectorPopup;
