import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { Consumable } from "@/types/DB/Consumable";

import { objState } from "@/libs/State";
import { FormatNumber } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";
import PopupBase from "@/components/popup/base";

import "./style.scss";

interface DropItemProps {
	item: Consumable;
	count?: number;
	chance?: number;
	variant?: string;
	text?: string;
}

const DropItem: FunctionalComponent<DropItemProps> = (props) => {
	const count = props.count || 1;
	const chance = props.chance || 100;
	const variant = props.variant || "secondary";
	const text = props.text || "light";

	const display = objState<boolean>(false);

	const ParsedDesc = ((): preact.VNode[] => {
		const parseBuffer: string[] = [];
		const parseMode: string[] = [];
		let parsePhase = 0;
		const parseColor: string[] = [];
		let parseItalic = false;

		function color (): string {
			const m = (c: string, a?: boolean): number => parseInt(c, 16) / (a ? 255 : 1);

			const c = parseColor[parseColor.length - 1];
			if (c.length === 8) {
				const b = m(c.substr(0, 2));
				const g = m(c.substr(2, 2));
				const r = m(c.substr(4, 2));
				const a = m(c.substr(6, 2), true);
				return `rgba(${r},${g},${b},${a})`;
			}
			return `#${c}`;
		}

		function parseText (text: string): preact.VNode[] {
			const ret: Array<preact.VNode> = [];

			for (let i = 0; i < text.length; i++) {
				const c = text[i];

				switch (parsePhase) {
					case 0: // Idle
						if (c === "[") {
							if (parseBuffer.length > 0) {
								const text = parseBuffer.join("")
									.split(/(\{[0-9]+\})/g)
									.filter(x => typeof x === "string");
								parseBuffer.splice(0, parseBuffer.length);

								if (parseColor.length > 0) {
									if (parseItalic)
										ret.push(<i style={ { color: color() } }>{ text }</i>);
									else
										ret.push(<span style={ { color: color() } }>{ text }</span>);
								} else if (parseItalic)
									ret.push(<i>{ text }</i>);
								else
									ret.push(<>{ text }</>);
							}

							parsePhase = 1;
						} else
							parseBuffer.push(c);
						break;
					case 1: // Tag Parsing
						if (c === "]") {
							const tag = parseBuffer.join("");
							parseBuffer.splice(0, parseBuffer.length);
							parsePhase = 0;

							if (tag === "-") {
								if (parseColor.length > 0)
									parseColor.pop();
							} else if (tag === "i")
								parseItalic = true;
							else if (parseMode[parseMode.length - 1] === "c")
								parseColor.push(tag);
							else if (tag[0] === "/") {
								const ctag = tag.substr(1);
								while (parseMode.pop() !== ctag);

								if (ctag === "c")
									parseColor.pop();
								else if (ctag === "i")
									parseItalic = false;
							} else
								parseMode.push(tag);
							// parseDepth++;
						} else
							parseBuffer.push(c);
						break;
				}
			}
			if (parseBuffer.length > 0) {
				const text = parseBuffer.join("")
					.split(/(\{[0-9]+\})/g)
					.filter(x => typeof x === "string");
				parseBuffer.splice(0, parseBuffer.length);

				if (parseColor.length > 0) {
					if (parseItalic)
						ret.push(<i style={ { color: color() } }>{ text }</i>);
					else
						ret.push(<span style={ { color: color() } }>{ text }</span>);
				} else if (parseItalic)
					ret.push(<i>{ text }</i>);
				else
					ret.push(<>{ text }</>);
			}
			return ret;
		}

		return parseText(
			(LocaleGet(`CONSUMABLE_DESC_${props.item.key}`) || "")
				.toString()
				.replace(/&([lg]t);/g, (p0, p1) => p1 === "lt" ? "<" : ">"),
		);
	})();

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

	return <div class="p-2 text-dark drop-item">
		<div class={ `card bg-${variant} text-${text} drop-item` }>
			<div class="card-body">
				<EquipIcon class="float-start me-2" image={ props.item.icon } />
				<div class="text-start">
					<Locale k={ `CONSUMABLE_${props.item.key}` } />

					{ count > 1
						? <span class="badge bg-dark ms-1">x{ count }</span>
						: <></>
					}
					<div>
						{ chance < 100
							? <span class="badge bg-light text-dark">{ chance }%</span>
							: <></>
						}
						<Icon icon="info-circle-fill" class="float-end mt-1" />
					</div>
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
				<Locale k={ `CONSUMABLE_${props.item.key}` } />
				<div style="font-size: 60%">{ props.item.key }</div>
			</div> }
			footer={ <div class="text-start p-2">
				<div class="desc-text">{ ParsedDesc }</div>
				{ FunctionBadge
					? <div>{ FunctionBadge }</div>
					: <></>
				}
			</div> }
			onHidden={ (): void => display.set(false) }
		>
			<div class="text-center mb-3">
				<EquipIcon image={ props.item.icon } size="large" />
				<h5 class="mt-1">
					<Locale k={ `CONSUMABLE_${props.item.key}` } />
				</h5>
			</div>
		</PopupBase>
	</div>;
};
export default DropItem;
