import { FunctionalComponent, FunctionComponent } from "preact";
import { Link } from "preact-router";
import Decimal from "decimal.js";

import { SelectOption } from "@/types/Helper";
import { ACTOR_BODY_TYPE, ACTOR_GRADE, ITEM_TYPE } from "@/types/Enums";
import { LinkBonusType, Unit, UnitSkin } from "@/types/DB/Unit";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { UnitDialogueAudioType, UnitDialogueDataType } from "@/types/DB/Dialogue";
import { Consumable } from "@/types/DB/Consumable";

import { ObjectState, objState } from "@/libs/State";
import { AssetsRoot, ImageExtension, IsDev, RarityDisplay, UnitClassDisplay, UnitRoleDisplay } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";
import { GetRequireResource } from "@/libs/Cost";
import EntitySource from "@/libs/EntitySource";
import { GetLinkBonus } from "@/libs/LinkBonus";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { DBSourceConverter, GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import RarityBadge from "@/components/rarity-badge";
import UnitFace from "@/components/unit-face";
import UnitBadge from "@/components/unit-badge";
import ElemIcon from "@/components/elem-icon";
import EquipIcon from "@/components/equip-icon";
import SourceBadge from "@/components/source-badge";
import DropEquip from "@/components/drop-equip";
import EquipPopup from "@/components/popup/equip-popup";

import SkinView from "../../components/skin-view";
import SkillTable from "../../components/skill-table";
import UnitDialogue, { VoiceItem } from "../../components/unit-dialogue";
import ResearchTree from "../../components/research-tree";
import UnitFace2 from "../../components/unit-face2";

import { SubpageProps } from "..";

import style from "../style.module.scss";


const LvLimitTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	return <Loader json={ StaticDB.Consumable } content={ () => {
		if (!display) return <></>;

		const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

		return <table class="table table-bordered text-center">
			<thead>
				<tr>
					<th class="bg-dark text-light">
						<Locale k="UNIT_VIEW_LVLIMIT_LEVEL" />
					</th>
					<th class="bg-dark text-light">
						<Locale k="UNIT_VIEW_LVLIMIT_ITEMS" />
					</th>
				</tr>
			</thead>
			<tbody>
				{ unit.lvLimits.map(e => <tr>
					<td class="p-3 table-medidark font-exo2">
						<small>Lv.</small>
						{ e.level }
					</td>
					<td class="text-start">
						{ e.items.map(v => {
							const item = ConsumableDB.find(c => c.key === v.id);
							if (!item) return <>-</>;

							return <span class="badge bg-secondary me-2 mb-2">
								<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
								<Locale k={ `CONSUMABLE_${item.key}` } />
								&nbsp;x{ FormatNumber(v.count!) }
							</span>;
						}) }
					</td>
				</tr>) }
			</tbody>
		</table>;
	} } />;
};
export default LvLimitTab;
