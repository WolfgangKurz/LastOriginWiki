import { FunctionalComponent } from "preact";
import { Link } from "preact-router";
import { createPortal, useState } from "preact/compat";

import { Consumable } from "@/types/DB/Consumable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { FormatNumber } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";

import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";
import PopupBase from "@/components/popup/base";
import PCIcon from "@/components/pc-icon";

import "./style.scss";

interface DropItemProps {
	item: Consumable;

	count?: number;
	countPart?: preact.VNode;

	chance?: number;
	chancePart?: preact.VNode;

	variant?: string;
	text?: string;

	noIcon?: boolean;
	transcluent?: boolean;
}

const DropItem: FunctionalComponent<DropItemProps> = (props) => {
	const count = props.count || 1;
	const chance = props.chance || 100;
	const variant = props.variant || "secondary";
	const text = props.text || "light";

	const [display, setDisplay] = useState(false);

	const ParsedDesc = ((): preact.VNode[] => ParseDescriptionText(
		(LocaleGet(`CONSUMABLE_DESC_${props.item.key}`) || "")
			.toString()
			.replace(/&([lg]t);/g, (p0, p1) => p1 === "lt" ? "<" : ">"),
	))();

	const FunctionBadge = ((): preact.VNode => {
		if (["TestFunction_04", "GiveFavor_02", "GiveFavor_03"].includes(props.item.func)) { // 호감도
			const favorTable: Record<string, number> = {
				/* eslint-disable camelcase */
				TestFunction_04: 1,
				GiveFavor_02: 2.5,
				GiveFavor_03: 5,
				/* eslint-enable camelcase */
			};
			return <span class="badge bg-danger">
				<Locale k="ITEM_FUNCTION_FAVOR" p={ [favorTable[props.item.func].toFixed(2)] } />
			</span>;
		} else if (["MaxFavor_Expand_Lv1"].includes(props.item.func)) { // 호감도 상한
			const favorLimitTable: Record<string, number> = {
				/* eslint-disable camelcase */
				MaxFavor_Expand_Lv1: 10,
				/* eslint-enable camelcase */
			};
			return <span class="badge bg-danger">
				<Locale k="ITEM_FUNCTION_FAVOR_LIMIT" p={ [favorLimitTable[props.item.func].toFixed(2)] } />
			</span>;
		} else if (props.item.func === "Consumable_CommanderDiary") // 사령관의 일지
			return <Locale k="ITEM_FUNCTION_COMMANDERDIARY" />;
		else if (["TacticRecord_01", "TacticRecord_02", "TacticRecord_03"].includes(props.item.func)) { // 경험치 교본
			const expTable: Record<string, number> = {
				/* eslint-disable camelcase */
				TacticRecord_01: 3000,
				TacticRecord_02: 100000,
				TacticRecord_03: 1000000,
				/* eslint-enable camelcase */
			};
			return <span class="badge bg-warning text-dark">
				<Locale k="ITEM_FUNCTION_TACTICRECORD" p={ [FormatNumber(expTable[props.item.func])] } />
			</span>;
		} else if (["TrainingManual_01", "TrainingManual_02", "TrainingManual_03"].includes(props.item.func)) { // 스킬 교본
			const expTable: Record<string, number> = {
				/* eslint-disable camelcase */
				TrainingManual_01: 1000,
				TrainingManual_02: 10000,
				TrainingManual_03: 100000,
				/* eslint-enable camelcase */
			};
			return <span class="badge bg-success">
				<Locale k="ITEM_FUNCTION_TRAININGMANUAL" p={ [FormatNumber(expTable[props.item.func])] } />
			</span>;
		}

		return <></>;
	})();

	const imgExt = ImageExtension();
	const icon = props.item.icon;
	const iconNode = (large?: boolean) => {
		const size = large ? 128 : 48;

		if (!icon || icon === "0") {
			return <div
				class={ BuildClass(!large && "float-start me-2", "bg-icon") }
				style={ {
					display: "inline-block",
					width: `${size}px`,
					height: `${size}px`,
				} }
			/>;
		}

		if (icon.startsWith("InvenIcon_")) {
			return <PCIcon
				class={ BuildClass(!large && "float-start me-2") }
				item={ icon }
				size={ size }
			/>;
		}

		if (icon.startsWith("UI_ICON_BG_")) {
			return <img
				class={ BuildClass(!large && "float-start me-2", "bg-icon") }
				width={ size }
				height={ size }
				src={ `${AssetsRoot}/${imgExt}/bg/icon/${icon}.${imgExt}` }
			/>;
		}

		return <EquipIcon
			class={ BuildClass(!large && "float-start me-2") }
			image={ icon }
			size={ large ? "large" : undefined }
		/>;
	};

	return <div class={ `p-2 text-dark drop-item ${props.transcluent ? "transcluent" : ""}` }>
		<div class={ `card bg-${variant} text-${text} drop-item` }>
			<div class="card-body">
				{ iconNode() }
				<div class="text-start">
					<Locale
						plain
						k={ `CONSUMABLE_${props.item.key}` }
						fallback={ props.item.key }
					/>

					{ props.countPart || (count > 1 ? <span class="badge bg-dark ms-1">x{ count }</span> : <></>) }
					<div>
						{ props.chancePart || (chance < 100 ? <span class="badge bg-light text-dark">{ chance }%</span> : <></>) }

						{ !props.noIcon ? <Icon icon="info-circle-fill" class="float-end mt-1" /> : <></> }
					</div>
				</div>
			</div>

			<Link href="#" class="stretched-link" onClick={ (e): void => {
				e.preventDefault();
				setDisplay(true);
			} } />
		</div>

		{ createPortal(<PopupBase
			display={ display }
			contentClass="item-modal"
			bodyClass="pb-0"
			footerVariant="dark"
			footerText="white"
			footerClass="justify-content-start"
			header={ <div class="text-start">
				<Locale
					plain
					k={ `CONSUMABLE_${props.item.key}` }
					fallback={ props.item.key }
				/>
				<div style="font-size: 60%">{ props.item.key }</div>
			</div> }
			footer={ <div class="text-start p-2">
				<div class="desc-text">{ ParsedDesc }</div>
				{ FunctionBadge
					? <div>{ FunctionBadge }</div>
					: <></>
				}
			</div> }
			onHidden={ (): void => setDisplay(false) }
		>
			<div class="text-center mb-3">
				{ iconNode(true) }
				<h5 class="mt-1">
					<Locale
						plain
						k={ `CONSUMABLE_${props.item.key}` }
						fallback={ props.item.key }
					/>
				</h5>
			</div>
		</PopupBase>, document.body) }
	</div>;
};
export default DropItem;
