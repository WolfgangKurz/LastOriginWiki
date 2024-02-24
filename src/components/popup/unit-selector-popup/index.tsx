import { FunctionalComponent } from "preact";
import merge from "deepmerge";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";

import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import Locale from "@/components/locale";
import UnitFace from "@/components/unit-face";
import PopupBase from "@/components/popup/base";

import "./style.scss";

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
	const latestValue = objState<string | undefined>(undefined);

	const value = objState<string>("");

	const Filter = objState({
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
	const Filters = merge({}, Filter.value);

	return <Loader json={ StaticDB.FilterableUnit } content={ ((): preact.VNode => {
		const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
		const source = FilterableUnit
			.filter(x => Filters.Type[x.type] &&
				Filters.Role[x.role] &&
				Filters.Body[x.body] &&
				Filters.Rarity[x.rarity])
			.filter(x => !props.ban || !props.ban.includes(x.uid));

		if (latestValue.value !== props.value) {
			value.set(props.value || "");
			latestValue.set(props.value);
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
						if (props.onSelect && value.value) {
							props.onSelect(value.value);
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
				value.set("");

				if (props.onHidden)
					props.onHidden();
			} }
		>
			<div>
				<div>
					<div class="btn-group mx-2 mb-2">
						<button
							class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.SS])}` }
							onClick={ (): void => {
								Filters.Rarity[ACTOR_GRADE.SS] = !Filters.Rarity[ACTOR_GRADE.SS];
								Filter.set(Filters);
							} }
						>SS</button>
						<button
							class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.S])}` }
							onClick={ (): void => {
								Filters.Rarity[ACTOR_GRADE.S] = !Filters.Rarity[ACTOR_GRADE.S];
								Filter.set(Filters);
							} }
						>S</button>
						<button
							class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.A])}` }
							onClick={ (): void => {
								Filters.Rarity[ACTOR_GRADE.A] = !Filters.Rarity[ACTOR_GRADE.A];
								Filter.set(Filters);
							} }
						>A</button>
						<button
							class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.B])}` }
							onClick={ (): void => {
								Filters.Rarity[ACTOR_GRADE.B] = !Filters.Rarity[ACTOR_GRADE.B];
								Filter.set(Filters);
							} }
						>B</button>
					</div>
					<div class="btn-group mx-2 mb-2">
						<button
							class={ `btn btn-outline-success ${isActive(Filters.Type[ACTOR_CLASS.LIGHT])}` }
							onClick={ (): void => {
								Filters.Type[ACTOR_CLASS.LIGHT] = !Filters.Type[ACTOR_CLASS.LIGHT];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_TYPE_LIGHT" />
						</button>
						<button
							class={ `btn btn-outline-success ${isActive(Filters.Type[ACTOR_CLASS.FLYING])}` }
							onClick={ (): void => {
								Filters.Type[ACTOR_CLASS.FLYING] = !Filters.Type[ACTOR_CLASS.FLYING];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
						</button>
						<button
							class={ `btn btn-outline-success ${isActive(Filters.Type[ACTOR_CLASS.HEAVY])}` }
							onClick={ (): void => {
								Filters.Type[ACTOR_CLASS.HEAVY] = !Filters.Type[ACTOR_CLASS.HEAVY];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_TYPE_HEAVY" />
						</button>
					</div>
					<div class="btn-group mx-2 mb-2">
						<button
							class={ `btn btn-outline-warning ${isActive(Filters.Role[ROLE_TYPE.ATTACKER])}` }
							onClick={ (): void => {
								Filters.Role[ROLE_TYPE.ATTACKER] = !Filters.Role[ROLE_TYPE.ATTACKER];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
						</button>
						<button
							class={ `btn btn-outline-warning ${isActive(Filters.Role[ROLE_TYPE.DEFENDER])}` }
							onClick={ (): void => {
								Filters.Role[ROLE_TYPE.DEFENDER] = !Filters.Role[ROLE_TYPE.DEFENDER];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
						</button>
						<button
							class={ `btn btn-outline-warning ${isActive(Filters.Role[ROLE_TYPE.SUPPORTER])}` }
							onClick={ (): void => {
								Filters.Role[ROLE_TYPE.SUPPORTER] = !Filters.Role[ROLE_TYPE.SUPPORTER];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
						</button>
					</div>
					<div class="btn-group mx-2 mb-2">
						<button
							class={ `btn btn-outline-dark ${isActive(Filters.Body[ACTOR_BODY_TYPE.BIOROID])}` }
							onClick={ (): void => {
								Filters.Body[ACTOR_BODY_TYPE.BIOROID] = !Filters.Body[ACTOR_BODY_TYPE.BIOROID];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_BODY_BIOROID" />
						</button>
						<button
							class={ `btn btn-outline-dark ${isActive(Filters.Body[ACTOR_BODY_TYPE.AGS])}` }
							onClick={ (): void => {
								Filters.Body[ACTOR_BODY_TYPE.AGS] = !Filters.Body[ACTOR_BODY_TYPE.AGS];
								Filter.set(Filters);
							} }
						>
							<Locale k="COMMON_UNIT_BODY_AGS" />
						</button>
					</div>
				</div>

				<ul class="list-group mb-3">
					{ source.map(u => {
						const actived = value.value === u.uid;

						return <li
							class={ `list-group-item unit-list-item ${isActive(actived, "bg-rarity-SS", "")}` }
							role="button"
							onClick={ (e): void => {
								e.preventDefault();
								value.set(u.uid);
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
						</li>;
					}) }
				</ul>
			</div>
		</PopupBase>;
	}) } />;
};
export default UnitSelectorPopup;
