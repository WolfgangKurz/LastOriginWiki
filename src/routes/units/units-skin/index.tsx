import Store from "@/store";

import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";

import { UnitsListProps } from "..";
import Advanced from "./Advanced";
import Artist from "./Artist";
import ReleaseDate from "./ReleaseDate";

import style from "../style.module.scss";

const UnitsSkin: FunctionalComponent<UnitsListProps> = (props) => {
	return <div class="units-skin">
		<div class="text-center mb-3">
			<div class={ `btn-group ${style.TabButtons}` }>
				<button
					type="button"
					class={ `btn btn-outline-success ${isActive(Store.Units.Skins.Tab.value === "")}` }
					onClick={ (): void => void (Store.Units.Skins.Tab.value = "") }
				>
					<Icons.Search class="me-1" />
					<Locale k="UNIT_VIEW_SKIN_TAB_ADVANCED" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-success ${isActive(Store.Units.Skins.Tab.value === "artist")}` }
					onClick={ (): void => void (Store.Units.Skins.Tab.value = "artist") }
				>
					<Icons.PersonFill class="me-1" />
					<Locale k="UNIT_VIEW_SKIN_TAB_ARTIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-success ${isActive(Store.Units.Skins.Tab.value === "releaseDate")}` }
					onClick={ (): void => void (Store.Units.Skins.Tab.value = "releaseDate") }
				>
					<Icons.CalendarCheck class="me-1" />
					<Locale k="UNIT_VIEW_SKIN_TAB_RELEASEDATE" />
				</button>
			</div>
		</div>

		{ Store.Units.Skins.Tab.value === "" && <Advanced list={ props.list } /> }
		{ Store.Units.Skins.Tab.value === "artist" && <Artist list={ props.list } /> }
		{ Store.Units.Skins.Tab.value === "releaseDate" && <ReleaseDate list={ props.list } /> }
	</div>;
};
export default UnitsSkin;
