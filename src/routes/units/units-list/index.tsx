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
import { cn } from "@/libs/Class";
import { groupBy, minMax } from "@/libs/Functions";

import Locale from "@/components/locale";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Separator from "@/components/Separator";
import UnitFace from "@/components/unit-face";

import IconBookmarksFill from "@/components/bootstrap-icon/icons/BookmarksFill";
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
	const groupByMethod = Store.Units.SearchGroupByGroup.value;

	const tabTypes: Array<"dict" | "name" | "rarity"> = ["dict", "name", "rarity"];

	const UnitList = useMemo(() => {
		if (groupByMethod !== "none")
			return props.list;

		const list = props.list.slice(); // clone list

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
			const [_, max] = minMax(...list.map(r => r.id));
			const arr: Array<FilterableUnit | undefined> = new Array(max).fill(null); // 1 ~ n

			list.forEach(e => (arr[e.id - 1] = e));
			return arr;
		}

		return list;
	}, [props.list, withShort, listOrder, groupByMethod]);

	const Groups = useMemo(() => {
		if (groupByMethod !== "none") {
			const g = groupBy(
				UnitList.filter(r => !!r),
				k => groupByMethod === "roughly"
					? k.group.replace(/^(.+)_[0-9]+$/, "$1_1")
					: k.group,
			);
			const keys = Object.keys(g)
				.sort((a, b) => {
					const da = loc[`UNIT_GROUP_${a}`] || a;
					const db = loc[`UNIT_GROUP_${b}`] || b;
					return da.localeCompare(db);
				});
			return keys.map(k => g[k]);
		}

		if (listOrder === "dict") return [UnitList];

		return Object.values(groupBy(
			UnitList,
			k => k!.rarity,
		)).reverse();
	}, [UnitList, listOrder, groupByMethod]);

	const nextGroupBy = useMemo((): typeof groupByMethod => {
		switch (groupByMethod) {
			case "none":
				return "roughly";
			case "roughly":
				return "exactly";
			case "exactly":
				return "none";
		}
		return "none";
	}, [groupByMethod]);

	function empShortName (name: string, shortName: string): preact.VNode {
		const s = shortName || name;
		return <>
			{ name.split(s).gap(<strong class="text-danger">{ s }</strong>) }
		</>;
	}

	function getGroupImage (gid: string): string {
		return gid.replace(/^(.+)_[^_]+$/, "$1");
	}
	function getGroup1 (gid: string): string {
		return gid.replace(/^(.+)_[^_]+$/, "$1_1");
	}

	return <div>
		<div class={ style.ListFilters }>
			<Button
				disabled={ (listOrder === "dict") || groupByMethod !== "none" }
				outline={ !withShort }
				variant="danger"
				onClick={ () => Store.Units.SearchWithShortname.value = !withShort }
			>
				<IconSpellcheck />
				<Locale k="UNITS_LIST_ORDERBY_SHORTNAME" />
			</Button>

			<Button.Group>
				<Button
					disabled={ groupByMethod !== "none" }
					variant="primary"
					outline={ Store.Units.SearchListOrder.value !== tabTypes[0] }
					onClick={ () => Store.Units.SearchListOrder.value = tabTypes[0] }
				>
					<IconListOl />
					<Locale k="UNITS_LIST_ORDERBY_NO" />
				</Button>
				<Button
					disabled={ groupByMethod !== "none" }
					variant="primary"
					outline={ Store.Units.SearchListOrder.value !== tabTypes[1] }
					onClick={ () => Store.Units.SearchListOrder.value = tabTypes[1] }
				>
					<IconAlphabet />
					<Locale k="UNITS_LIST_ORDERBY_NAME" />
				</Button>
				<Button
					disabled={ groupByMethod !== "none" }
					variant="primary"
					outline={ Store.Units.SearchListOrder.value !== tabTypes[2] }
					onClick={ () => Store.Units.SearchListOrder.value = tabTypes[2] }
				>
					<IconStarFill />
					<Locale k="UNITS_LIST_ORDERBY_GRADE" />
				</Button>
			</Button.Group>

			<Button
				active={ groupByMethod !== "none" }
				outline
				variant="danger"
				onClick={ () => Store.Units.SearchGroupByGroup.value = nextGroupBy }
			>
				<IconBookmarksFill />
				<Locale k={ `UNITS_LIST_GROUPBY_${groupByMethod.toUpperCase()}` } />
			</Button>
		</div>
		<div class={ style.GroupBy_Desc }>
			<Locale k={ `UNITS_LIST_GROUPBY_${groupByMethod.toUpperCase()}_DESC` } />
		</div>

		<div>
			{ Groups
				.map(list => <div class={ style.Group }>
					{ groupByMethod !== "none"
						? <div class={ style.GroupInfo }>
							<img src={ `${AssetsRoot}/${imgExt}/group/${getGroupImage(list[0]!.group)}.${imgExt}` } />
							<Locale
								raw={ false }
								k={ `UNIT_GROUP_${groupByMethod === "roughly"
									? getGroup1(list[0]!.group)
									: list[0]!.group}`
								}
								fallback={ <Locale
									k={ `UNIT_GROUP_${groupByMethod === "roughly"
										? getGroupImage(list[0]!.group)
										: list[0]!.group}`
									}
									fallback={ list[0]!.group }
								/> }
							/>
						</div>
						: <></>
					}

					<div class={ style.UnitList }>
						{ list.map((unit, i) => <div
							class={ cn(style.UnitItem, !unit && style.Placeholder) }
							onClick={ e => {
								e.preventDefault();
								if (unit) route(`/units/${unit.uid}`);
							} }
						>
							<UnitFace uid={ unit?.uid ?? "" } />

							<div class={ style.Info }>
								No.{ unit?.id ?? (i + 1) }

								{ unit && <Badge variant={ `rarity-${ACTOR_GRADE[unit.rarity]}` }>
									{ ACTOR_GRADE[unit.rarity] }
								</Badge> }
							</div>

							<div>
								{ unit
									? groupByMethod === "none" && listOrder !== "dict" && withShort
										? <span class="text-secondary">
											{ empShortName(
												loc[`UNIT_${unit.uid}`],
												loc[`UNIT_SHORT_${unit.uid}`],
											) }
										</span>
										: <Locale
											raw={ false }
											k={ `UNIT_${unit.uid}` }
										/>
									: <></>
								}
							</div>
						</div>) }
					</div>
				</div>)
				.gap(<Separator />)
			}
		</div>
	</div>;
};
export default UnitsList;
