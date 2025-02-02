import { FunctionalComponent } from "preact";
import Store from "@/store";

import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";

import EnemiesList from "./list";
import EnemiesGroup from "./group";

import style from "./style.module.scss";

interface EnemiesProps {
	uid?: string;
	level?: string;
}

const Enemies: FunctionalComponent<EnemiesProps> = (props) => {
	return <div>
		<div class="text-center mb-3">
			<div class={ `btn-group ${style.TabButtons}` }>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Enemies.DisplayType.value === "list")}` }
					onClick={ () => Store.Enemies.DisplayType.value = "list" }
				>
					<Icons.ListUl class="me-1" />
					<Locale k="ENEMIES_LIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Enemies.DisplayType.value === "group")}` }
					onClick={ () => Store.Enemies.DisplayType.value = "group" }
				>
					<Icons.ArchiveFill class="me-1" />
					<Locale k="ENEMIES_GROUP_LIST" />
				</button>
			</div>
		</div>

		<div style={ { display: Store.Enemies.DisplayType.value === "list" ? "" : "none" } }>
			<EnemiesList uid={ props.uid } level={ props.level } />
		</div>
		{ Store.Enemies.DisplayType.value === "group"
			? <EnemiesGroup { ...props } />
			: <></>
		}
	</div>;
};
export default Enemies;
