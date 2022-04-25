import { FunctionalComponent } from "preact";

import { SetMeta, UpdateTitle } from "@/libs/Site";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

import EquipList from "./components/list";
import EquipTimetable from "./components/timetable";

interface EquipsProps {
	uid?: string;
}

const Equips: FunctionalComponent<EquipsProps> = (props) => {
	const DisplayType = objState<"list" | "time">("list");

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
					class={ `btn btn-outline-primary ${isActive(DisplayType.value === "list")}` }
					onClick={ (): void => DisplayType.set("list") }
				>
					<Icon icon="grid-3x3-gap-fill" class="me-1" />
					<Locale k="EQUIP_VIEW_LIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(DisplayType.value === "time")}` }
					onClick={ (): void => DisplayType.set("time") }
				>
					<Icon icon="hammer" class="me-1" />
					<Locale k="EQUIP_VIEW_CREATIONTIME" />
				</button>
			</div>
		</div>

		<div style={ { display: DisplayType.value === "list" ? "" : "none" } }>
			<EquipList uid={ props.uid } />
		</div>
		{ DisplayType.value === "time" && <EquipTimetable /> }
	</>;
};
export default Equips;
