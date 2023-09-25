import Store, { toggle } from "@/store";

import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE } from "@/types/Enums";

import { isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";

const SimpleSearch: FunctionalComponent = (props) => {
	return <>
		<div class="row mb-2">
			<div class="col">
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.SS])}` }
						onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.SS]) }
					>SS</button>
					<button
						class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.S])}` }
						onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.S]) }
					>S</button>
					<button
						class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.A])}` }
						onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.A]) }
					>A</button>
					<button
						class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.B])}` }
						onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.B]) }
					>B</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-success ${isActive(Store.Units.Type[ACTOR_CLASS.LIGHT])}` }
						onClick={ () => toggle(Store.Units.Type[ACTOR_CLASS.LIGHT]) }
					>
						<Locale k="COMMON_UNIT_TYPE_LIGHT" />
					</button>
					<button
						class={ `btn btn-outline-success ${isActive(Store.Units.Type[ACTOR_CLASS.FLYING])}` }
						onClick={ () => toggle(Store.Units.Type[ACTOR_CLASS.FLYING]) }
					>
						<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
					</button>
					<button
						class={ `btn btn-outline-success ${isActive(Store.Units.Type[ACTOR_CLASS.HEAVY])}` }
						onClick={ () => toggle(Store.Units.Type[ACTOR_CLASS.HEAVY]) }
					>
						<Locale k="COMMON_UNIT_TYPE_HEAVY" />
					</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-warning ${isActive(Store.Units.Role[ROLE_TYPE.ATTACKER])}` }
						onClick={ () => toggle(Store.Units.Role[ROLE_TYPE.ATTACKER]) }
					>
						<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
					</button>
					<button
						class={ `btn btn-outline-warning ${isActive(Store.Units.Role[ROLE_TYPE.DEFENDER])}` }
						onClick={ () => toggle(Store.Units.Role[ROLE_TYPE.DEFENDER]) }
					>
						<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
					</button>
					<button
						class={ `btn btn-outline-warning ${isActive(Store.Units.Role[ROLE_TYPE.SUPPORTER])}` }
						onClick={ () => toggle(Store.Units.Role[ROLE_TYPE.SUPPORTER]) }
					>
						<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
					</button>
				</div>
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-dark ${isActive(Store.Units.Body[ACTOR_BODY_TYPE.BIOROID])}` }
						onClick={ () => toggle(Store.Units.Body[ACTOR_BODY_TYPE.BIOROID]) }
					>
						<Locale k="COMMON_UNIT_BODY_BIOROID" />
					</button>
					<button
						class={ `btn btn-outline-dark ${isActive(Store.Units.Body[ACTOR_BODY_TYPE.AGS])}` }
						onClick={ () => toggle(Store.Units.Body[ACTOR_BODY_TYPE.AGS]) }
					>
						<Locale k="COMMON_UNIT_BODY_AGS" />
					</button>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<div class="input-group">
					<input
						class="form-control"
						value={ Store.Units.SearchText.value }
						onInput={ (e): void => Store.Units.SearchText.value = ((e.target as any).value) }
						placeholder={ LocaleGet("UNITS_SEARCH_PLACEHOLDER") } />

					<button class="btn btn-danger" onClick={ () => (Store.Units.SearchText.value = "") }>
						<Locale k="UNITS_SEARCH_RESET" />
					</button>
				</div>
			</div>
		</div>
	</>;
};
export default SimpleSearch;
