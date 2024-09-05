import { FunctionalComponent } from "preact";
import { useMemo, useRef } from "preact/hooks";
import { Link, route } from "preact-router";
import Store from "@/store";

import { ACTOR_GRADE } from "@/types/Enums";
import { BUFFEFFECT_TYPE } from "@/types/BuffEffect";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import BuffCategory from "@/types/DB/BuffCategory";
import { UnitsListProps } from "..";

import { useLocale } from "@/libs/Locale";
import { useImageExtension } from "@/libs/ImageExtension";
import { StaticDB, useDBData } from "@/libs/Loader";
import { AssetsRoot } from "@/libs/Const";
import { cn } from "@/libs/Class";

import Locale from "@/components/locale";
import Badge from "@/components/Badge";
import Separator from "@/components/Separator";
import UnitFace from "@/components/unit-face";
import Button from "@/components/Button";
import IconCaretUpFill from "@/components/bootstrap-icon/icons/CaretUpFill";

import style from "./style.module.scss";
import { CombinedBuffEffectTypes } from "@/routes/units/common";

const UnitsBuffGrouped: FunctionalComponent<UnitsListProps> = (props) => {
	const BuffCategoryDB = useDBData<BuffCategory[]>(StaticDB.BuffCategory);

	const TabledBuffCategory = useMemo(
		() => {
			const ret: Record<BUFFEFFECT_TYPE, BuffCategory> = {} as typeof ret;
			BuffCategoryDB?.forEach(c => {
				c.buffEffectType.forEach(t => {
					if (t in ret) return;
					ret[t] = c;
				});
			});
			return ret;
		},
		[BuffCategoryDB],
	);
	const CombinedRefs = useMemo(
		() => {
			const ret: Partial<Record<BUFFEFFECT_TYPE, BUFFEFFECT_TYPE>> = {};
			Object.keys(CombinedBuffEffectTypes)
				.map(r => Number(r) as BUFFEFFECT_TYPE)
				.forEach(r => {
					CombinedBuffEffectTypes[r]!.forEach(v => (ret[v] = r));
				});
			return ret;
		},
		[CombinedBuffEffectTypes],
	);

	const Groups = useMemo(() => {
		const ret: Partial<Record<BUFFEFFECT_TYPE, FilterableUnit[]>> = {};

		props.list.forEach(u => {
			const buffTypes = new Set<BUFFEFFECT_TYPE>();
			Object.values(u.skills)
				.flatMap(s => s.buffs.flatMap(r => r.buffs.map(v => v.type)))
				.forEach(v => {
					if (v in CombinedRefs) {
						buffTypes.add(CombinedRefs[v]!);
						return;
					}
					buffTypes.add(v);
				});

			buffTypes.forEach(v => {
				ret[v] ||= [];
				ret[v].push(u);
			});
		});

		return ret;
	}, [props.list]);
	const GroupKeys = useMemo(() => Object.keys(Groups).map(r => Number(r) as BUFFEFFECT_TYPE), [Groups]);

	const GroupHeaderRefs = useRef<Partial<Record<BUFFEFFECT_TYPE, HTMLDivElement>>>({});

	const PrerenderedUnit = useMemo(() => {
		const ret: Record<string, preact.VNode> = {};

		props.list.forEach(unit => {
			const content = <>
				<UnitFace uid={ unit.uid } />

				<div class={ style.Info }>
					No.{ unit.id }

					<Badge variant={ `rarity-${ACTOR_GRADE[unit.rarity]}` }>
						{ ACTOR_GRADE[unit.rarity] }
					</Badge>
				</div>

				<div>
					<Locale raw={ false } k={ `UNIT_${unit.uid}` } />
				</div>
			</>;

			ret[unit.uid] = <Link
				class={ cn(style.UnitItem, !unit && style.Placeholder) }
				href={ `/units/${unit.uid}` }
			>
				{ content }
			</Link>;
		});
		return ret;
	}, [props.list]);

	return <div>
		<div class={ style.Index }>
			<div class={ style.Header }>
				<Locale k="UNIT_BUFF_GROUPED_INDEX" />
			</div>
			<div class={ style.List }>
				{ GroupKeys.map(g => <div>
					<Link
						href={ `#${g}` }
						onClick={ e => {
							e.preventDefault();
							e.stopImmediatePropagation();

							const top = (GroupHeaderRefs.current[g]?.offsetTop ?? 0) - (window.innerHeight / 5);
							window.scrollTo({ top, behavior: "smooth" });
						} }
					>
						<Locale
							k={ `SEARCH_CONF_BUFF_BUFF_.${g}` }
							fallback={ <Locale
								k={ TabledBuffCategory[g]?.groupName ?? "___" }
								fallback={ g }
							/> }
						/>
					</Link>
				</div>) }
			</div>
		</div>

		<div>
			{ GroupKeys.map(g => <div class={ style.Group }>
				<div
					class={ style.GroupHeader }
					ref={ el => {
						if (el) {
							GroupHeaderRefs.current[g] = el;
						} else {
							if (g in GroupHeaderRefs.current)
								delete GroupHeaderRefs.current[g];
						}
					} }
				>
					<span>
						<Locale
							k={ `SEARCH_CONF_BUFF_BUFF_.${g}` }
							fallback={ <Locale k={ TabledBuffCategory[g].groupName } /> }
						/>
					</span>
					<Button
						sm
						variant="transparent"
						onClick={ () => {
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						} }
					>
						<IconCaretUpFill />
					</Button>
				</div>
				<div class={ style.UnitList }>
					{ Groups[g as unknown as keyof typeof Groups]!
						.map(u => PrerenderedUnit[u.uid])
					}
				</div>
			</div>) }
		</div>
	</div>;
};
export default UnitsBuffGrouped;
