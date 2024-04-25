import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import RoguelikeItem from "@/types/DB/Roguelike.Item";

import { objState } from "@/libs/State";

import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import Locale from "@/components/locale";
import IconInfoCircleFill from "@/components/bootstrap-icon/icons/InfoCircleFill";
import PopupBase from "@/components/popup/base";
import EquipIcon from "@/components/equip-icon";

import "./style.scss";

interface RoguelikeItemBadgeProps {
	item: string;
	optional?: boolean;
}

const RoguelikeItemBadge: FunctionalComponent<RoguelikeItemBadgeProps> = (props) => {
	const display = objState<boolean>(false);

	return <div class="roguelike-item-badge p-2 text-dark">
		<div class={ "card bg-warning text-dark" }>
			<div class="card-body">
				<Loader
					json={ StaticDB.RoguelikeItem }
					loading={ <EquipIcon class="float-start me-2" image={ "none" } /> }
					content={ ((): preact.VNode => {
						const RoguelikeItemDB = GetJson<RoguelikeItem[]>(StaticDB.RoguelikeItem);
						const found = RoguelikeItemDB.find(x => x.key === props.item);
						if (found)
							return <EquipIcon class="float-start me-2" image={ found.imgName } />;
						return <EquipIcon class="float-start me-2" image={ "none" } />;
					}) }
				/>
				<div class="text-start">
					<Locale k={ props.item } />
				</div><div class="text-end">
					{ props.optional
						? <small class="me-2">
							* <Locale k="ROGUELIKE_NODE_ITEM_OPTIONAL" />
						</small>
						: <></>
					}
					<IconInfoCircleFill class="float-end mt-1" />
				</div>
			</div>

			<Link href="#" class="stretched-link" onClick={ (e): void => {
				e.preventDefault();
				display.set(true);
			} } />
		</div>

		<PopupBase
			display={ display.value }
			contentClass="item-modal"
			bodyClass="pb-0"
			footerVariant="dark"
			footerText="white"
			footerClass="justify-content-start"
			header={ <div class="text-start">
				<Locale k={ props.item } />
				<div style="font-size: 60%">{ props.item }</div>
			</div> }
			footer={ <div class="text-start p-2 white-space-pre">
				<Locale k={ `${props.item}_DESC` } />
			</div> }
			onHidden={ (): void => display.set(false) }
		>
			<div class="text-center mb-3">
				<Loader
					json={ StaticDB.RoguelikeItem }
					loading={ <EquipIcon image={ "none" } size="large" /> }
					content={ ((): preact.VNode => {
						const RoguelikeItemDB = GetJson<RoguelikeItem[]>(StaticDB.RoguelikeItem);
						const found = RoguelikeItemDB.find(x => x.key === props.item);
						if (found)
							return <EquipIcon image={ found.imgName } size="large" />;
						return <EquipIcon image={ "none" } size="large" />;
					}) }
				/>
				<h5 class="mt-1 mb-0">
					<Locale k={ props.item } />
				</h5>
				<div class="text-secondary">
					<Locale k={ `${props.item}_DETAIL` } />
				</div>
			</div>
		</PopupBase>
	</div >;
};
export default RoguelikeItemBadge;
