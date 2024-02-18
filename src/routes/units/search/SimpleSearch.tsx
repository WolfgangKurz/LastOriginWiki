import Store, { toggle } from "@/store";

import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

import { useLocale } from "@/libs/Locale";

import Button from "@/components/Button";
import Input from "@/components/Input";
import UnitTypeIcon from "@/components/UnitTypeIcon";
import UnitRoleIcon from "@/components/UnitRoleIcon";

import IconEraserFill from "@/components/bootstrap-icon/icons/EraserFill";

import style from "./style.module.scss";

const SimpleSearch: FunctionalComponent = () => {
	const [loc] = useLocale();

	const rarities = [
		ACTOR_GRADE.SS,
		ACTOR_GRADE.S,
		ACTOR_GRADE.A,
		ACTOR_GRADE.B,
	];
	const types = [
		ACTOR_CLASS.LIGHT,
		ACTOR_CLASS.FLYING,
		ACTOR_CLASS.HEAVY,
	];
	const roles = [
		ROLE_TYPE.ATTACKER,
		ROLE_TYPE.DEFENDER,
		ROLE_TYPE.SUPPORTER,
	];

	return <>
		<div class={ style.Filters }>
			<Button.Group>
				{ rarities.map(r => <Button
					class={ style.RarityButton }
					variant="danger"
					outline={ !Store.Units.Rarity[r].value }
					onClick={ () => toggle(Store.Units.Rarity[r]) }
				>
					{ ACTOR_GRADE[r] }
				</Button>) }
			</Button.Group>

			<Button.Group>
				{ types.map(r => <Button
					variant="primary"
					outline={ !Store.Units.Type[r].value }
					onClick={ () => toggle(Store.Units.Type[r]) }
				>
					<UnitTypeIcon
						type={ r }
						variant={ !Store.Units.Type[r].value ? "bs-primary" : undefined }
					/>
				</Button>) }
			</Button.Group>

			<Button.Group>
				{ roles.map(r => <Button
					variant="primary"
					outline={ !Store.Units.Role[r].value }
					onClick={ () => toggle(Store.Units.Role[r]) }
				>
					<UnitRoleIcon
						role={ r }
						variant={ !Store.Units.Role[r].value ? "bs-primary" : undefined }
					/>
				</Button>) }
			</Button.Group>

			<Button.Group class={ style.InputBox }>
				<Input
					value={ Store.Units.SearchText.value }
					onInput={ e => Store.Units.SearchText.value = e.currentTarget.value }
					placeholder={ loc["UNITS_SEARCH_PLACEHOLDER"] || "" }
				/>

				<Button variant="danger" onClick={ () => (Store.Units.SearchText.value = "") }>
					<IconEraserFill />
				</Button>
			</Button.Group>
		</div>
	</>;
};
export default SimpleSearch;
