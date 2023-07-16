import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import { SetMeta, UpdateTitle } from "@/libs/Site";

import { isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import IconGrid3x3GapFill from "@/components/bootstrap-icon/icons/Grid3x3GapFill";
import IconHammer from "@/components/bootstrap-icon/icons/Hammer";

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

	return <>
		<div>
			<div class="btn-group mb-4">
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(DisplayType === "list")}` }
					onClick={ (): void => setDisplayType("list") }
				>
					<IconGrid3x3GapFill class="me-1" />
					<Locale k="EQUIP_VIEW_LIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(DisplayType === "time")}` }
					onClick={ (): void => setDisplayType("time") }
				>
					<IconHammer class="me-1" />
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
