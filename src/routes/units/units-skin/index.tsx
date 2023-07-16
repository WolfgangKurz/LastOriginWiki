import Store from "@/store";

import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import IconSearch from "@/components/bootstrap-icon/icons/Search";
import IconPersonFill from "@/components/bootstrap-icon/icons/PersonFill";
import IconCalendarCheck from "@/components/bootstrap-icon/icons/CalendarCheck";

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
					<IconSearch class="me-1" />
					<Locale k="UNIT_VIEW_SKIN_TAB_ADVANCED" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-success ${isActive(Store.Units.Skins.Tab.value === "artist")}` }
					onClick={ (): void => void (Store.Units.Skins.Tab.value = "artist") }
				>
					<IconPersonFill class="me-1" />
					<Locale k="UNIT_VIEW_SKIN_TAB_ARTIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-success ${isActive(Store.Units.Skins.Tab.value === "releaseDate")}` }
					onClick={ (): void => void (Store.Units.Skins.Tab.value = "releaseDate") }
				>
					<IconCalendarCheck class="me-1" />
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
