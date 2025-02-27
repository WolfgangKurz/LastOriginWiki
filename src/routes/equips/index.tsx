import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import { SetMeta, UpdateTitle } from "@/libs/Site";

import { isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import Icons from "@/components/bootstrap-icon";

import EquipList from "./components/list";
import EquipTimetable from "./components/timetable";

interface EquipsProps {
	uid?: string;
}

const Equips: FunctionalComponent<EquipsProps> = (props) => {
	const [DisplayType, setDisplayType] = useState<"list" | "time">("list");

	if (!props.uid) {
		SetMeta(["description", "twitter:description"], "장비의 목록을 표시합니다. 원하는 장비를 찾기 위해 검색할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle(LocaleGet("MENU_EQUIPS"));
	}

	const GridIcon = Icons["grid-3x3-gap-fill"];
	return <>
		<div>
			<div class="btn-group mb-4">
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(DisplayType === "list")}` }
					onClick={ (): void => setDisplayType("list") }
				>
					<GridIcon class="me-1" />
					<Locale k="EQUIP_VIEW_LIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(DisplayType === "time")}` }
					onClick={ (): void => setDisplayType("time") }
				>
					<Icons.Hammer class="me-1" />
					<Locale k="EQUIP_VIEW_CREATIONTIME" />
				</button>
			</div>
		</div>

		<div style={ { display: DisplayType === "list" ? "" : "none" } }>
			<EquipList uid={ props.uid } />
		</div>
		{ DisplayType === "time" && <EquipTimetable /> }
	</>;
};
export default Equips;
