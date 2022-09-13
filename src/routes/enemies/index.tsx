import { FunctionalComponent } from "preact";
import Store from "@/store";

import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

import EnemiesList from "./list";
import EnemiesGroup from "./group";

import style from "./style.module.scss";
import { useEffect } from "preact/hooks";
import { objState } from "@/libs/State";

interface EnemiesProps {
	uid?: string;
	level?: string;
}

const Enemies: FunctionalComponent<EnemiesProps> = (props) => {
	const DisplayType = objState<"list" | "group">("list");

	const storeUnsubscriber = Store.Subscribe(state => {
		const d = state.Enemies.DisplayType;
		if (d !== DisplayType.value)
			DisplayType.set(d);
	}, true);
	const { setEnemiesDisplayType: setDisplayType } = Store.Actions();

	useEffect(() => {
		// Nothing to do
		return () => storeUnsubscriber();
	}, []);

	return <div>
		<div class="text-center mb-3">
			<div class={ `btn-group ${style.TabButtons}` }>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(DisplayType.value === "list")}` }
					onClick={ (): void => setDisplayType("list") }
				>
					<Icon icon="list-ul" class="me-1" />
					<Locale k="ENEMIES_LIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(DisplayType.value === "group")}` }
					onClick={ (): void => setDisplayType("group") }
				>
					<Icon icon="archive-fill" class="me-1" />
					<Locale k="ENEMIES_GROUP_LIST" />
				</button>
			</div>
		</div>

		<div style={ { display: DisplayType.value === "list" ? "" : "none" } }>
			<EnemiesList uid={ props.uid } level={ props.level } />
		</div>
		{ DisplayType.value === "group"
			? <EnemiesGroup { ...props } />
			: <></>
		}
	</div>;
};
export default Enemies;
