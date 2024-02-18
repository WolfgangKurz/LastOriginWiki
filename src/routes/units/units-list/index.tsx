import { FunctionalComponent } from "preact";
import { useMemo } from "preact/hooks";
import { route } from "preact-router";
import Store from "@/store";

import { ACTOR_GRADE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { UnitsListProps } from "../";

import { useLocale } from "@/libs/Locale";
import { useImageExtension } from "@/libs/ImageExtension";
import { AssetsRoot } from "@/libs/Const";
import { groupBy, minMax } from "@/libs/Functions";

import Locale from "@/components/locale";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Separator from "@/components/Separator";
import UnitFace from "@/components/unit-face";

import IconTagsFill from "@/components/bootstrap-icon/icons/TagsFill";
import IconSpellcheck from "@/components/bootstrap-icon/icons/Spellcheck";
import IconListOl from "@/components/bootstrap-icon/icons/ListOl";
import IconStarFill from "@/components/bootstrap-icon/icons/StarFill";
import IconAlphabet from "@/components/Icons/IconAlphabet";

import style from "./style.module.scss";

const UnitsList: FunctionalComponent<UnitsListProps> = (props) => {
	const [loc] = useLocale();
	const imgExt = useImageExtension();

	const withShort = Store.Units.SearchWithShortname.value;
	const listOrder = Store.Units.SearchListOrder.value;
	const groupByGroup = Store.Units.SearchGroupByGroup.value;

	const tabTypes: Array<"dict" | "name" | "rarity"> = ["dict", "name", "rarity"];

	const UnitList = useMemo(() => {
		if (groupByGroup)
			return props.list;

		const list = props.list.slice();

		if (listOrder === "name") {
			if (withShort)
				list.sort((x, y) => loc[`UNIT_SHORT_${x.uid}`] < loc[`UNIT_SHORT_${y.uid}`] ? -1 : 1);
			else
				list.sort((x, y) => loc[`UNIT_${x.uid}`] < loc[`UNIT_${y.uid}`] ? -1 : 1);
		} else if (listOrder === "rarity") {
			if (withShort) {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: loc[`UNIT_SHORT_${x.uid}`] < loc[`UNIT_SHORT_${y.uid}`] ? -1 : 1,
				);
			} else {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: loc[`UNIT_${x.uid}`] < loc[`UNIT_${y.uid}`] ? -1 : 1,
				);
			}
		} else {
			const [min, max] = minMax(...list.map(r => r.id));
			const arr: Array<FilterableUnit | undefined> = new Array(max - min);

			list.forEach(e => (arr[e.id - 1] = e));
			return arr;
		}

		return list;
	}, [props.list, withShort, listOrder, groupByGroup]);

	const Groups = useMemo(() => {
		if (groupByGroup) {
			return Object.values(groupBy(
				UnitList.filter(r => !!r),
				k => loc[`UNIT_GROUP_${k.group}`] || k.group,
			));
		}

		if (listOrder !== "rarity") return [UnitList];

		return Object.values(groupBy(
			UnitList,
			k => k!.rarity,
		)).reverse();
	}, [UnitList, listOrder, groupByGroup]);

	function empShortName (name: string, shortName: string): preact.VNode {
		const s = shortName || name;
		return <>
			{ name.split(s).gap(<strong class="text-danger">{ s }</strong>) }
		</>;
	}

	function getGroupImage (gid: string): string {
		return gid.replace(/^(.+)_[^_]+$/, "$1");
	}

	return <div>
		<div class={ style.ListFilters }>
			<Button
				active={ groupByGroup }
				outline
				variant="danger"
				onClick={ () => Store.Units.SearchGroupByGroup.value = !groupByGroup }
			>
				<IconTagsFill />
				<Locale k="UNITS_LIST_GROUPBY_GROUP" />
			</Button>

			<Button.Group>
				<Button
					disabled={ groupByGroup }
					variant="primary"
					outline={ Store.Units.SearchListOrder.value !== tabTypes[0] }
					onClick={ () => Store.Units.SearchListOrder.value = tabTypes[0] }
				>
					<IconListOl />
					<Locale k="UNITS_LIST_ORDERBY_NO" />
				</Button>
				<Button
					disabled={ groupByGroup }
					variant="primary"
					outline={ Store.Units.SearchListOrder.value !== tabTypes[1] }
					onClick={ () => Store.Units.SearchListOrder.value = tabTypes[1] }
				>
					<IconAlphabet />
					<Locale k="UNITS_LIST_ORDERBY_NAME" />
				</Button>
				<Button
					disabled={ groupByGroup }
					variant="primary"
					outline={ Store.Units.SearchListOrder.value !== tabTypes[2] }
					onClick={ () => Store.Units.SearchListOrder.value = tabTypes[2] }
				>
					<IconStarFill />
					<Locale k="UNITS_LIST_ORDERBY_GRADE" />
				</Button>
			</Button.Group>

			<Button
				disabled={ (listOrder === "dict") || groupByGroup }
				outline={ !withShort }
				variant="danger"
				onClick={ () => Store.Units.SearchWithShortname.value = !withShort }
			>
				<IconSpellcheck />
				<Locale k="UNITS_LIST_ORDERBY_SHORTNAME" />
			</Button>
		</div>

		<div>
			{ Groups
				.map(list => <div class={ style.Group }>
					{ groupByGroup && <div class={ style.GroupInfo }>
						<img src={ `${AssetsRoot}/${imgExt}/group/${getGroupImage(list[0]!.group)}.${imgExt}` } />
						<Locale k={ `UNIT_GROUP_${list[0]!.group}` } />
					</div> }

					<div class={ style.UnitList }>
						{ list.map(unit => <div
							class={ style.UnitItem }
							onClick={ e => {
								e.preventDefault();
								if (unit) route(`/units/${unit.uid}`);
							} }
						>
							{ unit && <>
								<UnitFace uid={ unit.uid } />

								<div class={ style.Info }>
									No.{ unit.id }

									<Badge variant={ `rarity-${ACTOR_GRADE[unit.rarity]}` }>
										{ ACTOR_GRADE[unit.rarity] }
									</Badge>
								</div>

								<div>
									{ !groupByGroup && listOrder !== "dict" && withShort
										? <span class="text-secondary">
											{ empShortName(
												loc[`UNIT_${unit.uid}`],
												loc[`UNIT_SHORT_${unit.uid}`],
											) }
										</span>
										: <Locale k={ `UNIT_${unit.uid}` } />
									}
								</div>
							</> }
						</div>) }
					</div>
				</div>)
				.gap(<Separator />)
			}
		</div>
	</div>;
};
export default UnitsList;
