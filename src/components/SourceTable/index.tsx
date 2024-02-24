import { useEffect, useMemo } from "preact/hooks";

import { CurrentEvent, PermanentEvents } from "@/libs/Const";
import { cn } from "@/libs/Class";
import { groupBy } from "@/libs/Functions";
import EntitySource from "@/libs/EntitySource";

import Locale from "@/components/locale";
import SourceBadge from "@/components/source-badge";

import IconDot from "@/components/bootstrap-icon/icons/Dot";
import IconChevronDoubleRight from "@/components/bootstrap-icon/icons/ChevronDoubleRight";

import style from "./style.module.scss";

/*
MainStory = [["1-1", "1-2"], ["2-1", "2-2"], ...]
Others = {
	Ev1: [["Ev1-1", "Ev1-2"], ["Ev2-1", "Ev2-2"], ...],
	Ev2: [["Ev1-1", "Ev1-2"], ["Ev2-1", "Ev2-2"], ...]
}
*/

type SourceMap = EntitySource[];
type SourceMapSet = SourceMap[];
type SourceMapSets = Record<string, SourceMapSet>;

interface SourceTableProps {
	source: EntitySource[][];
}

const SourceTable: FunctionalComponent<SourceTableProps> = (props) => {
	const source = props.source;

	const [storySource, restSource] = useMemo(() => {
		const setStory: SourceMapSet = [];
		const set: SourceMapSets = {};

		const _fn = (a: EntitySource, b: EntitySource) => {
			if (a.IsExMap && b.IsExMap) return 0;
			if (a.IsExMap) return 1;
			if (b.IsExMap) return -1;

			if (a.IsSideMap && b.IsSideMap) return 0;
			if (a.IsSideMap) return 1;
			if (b.IsSideMap) return -1;

			return 0;
		};

		source.filter(r => r.length > 0).forEach(arr => {
			if (arr[0].IsStory)
				setStory.push(arr.sort(_fn));
			else {
				const f = arr[0];
				if (f.IsEvent) {
					const k = `${f.World}:${f.Chapter}`;
					set[k] = Object.values(groupBy(arr, v => v.Chapter)).map(r => r.sort(_fn));
				} else
					set[f.World] = [arr];
			}
		});

		return [setStory, set];
	}, [source]);

	const restMap = useMemo(() => {
		return Object.keys(restSource).map(k => {
			const area = restSource[k];
			const f = area[0][0];

			const header = (() => {
				if (f.IsEvent) {
					if (PermanentEvents.includes(f.EventId))
						return <span class={ style.PermanentEvent }>
							<Locale k="UNIT_VIEW_DROPS_PERMANENT" />
						</span>;
					else if (CurrentEvent === f.EventId)
						return <span class={ style.CurrentEvent }>
							<Locale k="COMMON_SOURCE_EVENT_CURRENT" />
						</span>;

					return <span class={ style.Event }>
						<Locale k="COMMON_SOURCE_EVENT" />
					</span>;
				}
				else if (f.IsDaily)
					return <Locale k="WORLD_Daily" />;
				else if (f.IsChallenge)
					return <Locale k={ `COMMON_CHALLENGE_${f.ChallengeName}` } />;
				else if (f.IsSubStory)
					return <Locale k="COMMON_SOURCE_SUBSTORY_SINGLE" />;
				else if (f.IsNewEternalWar)
					return <Locale k="COMMON_SOURCE_NEW" />;

				return <Locale k="???" fallback="???" />;
			})();
			const label = f.IsEvent
				? <Locale k={ f.EventName } />
				: header;

			const available = (f.IsEvent && (PermanentEvents.includes(f.EventId) || CurrentEvent === f.EventId)) ||
				(!f.IsEvent && !(f.IsDaily || f.IsChallenge || f.IsSubStory || f.IsNewEternalWar));

			return {
				header,
				label,
				available,
				data: area,
			};
		});
	}, [restSource]);

	const spanList = useMemo(() => {
		let cursor = -1;
		let length = 0;
		let prev = "";

		const list: number[] = new Array(restMap.length).fill(0);

		restMap.forEach((r, i) => {
			const _elem = r.header.type === "span"
				? r.header.props.children
				: r.header;
			const _key = _elem.props.k;

			if (prev !== _key) {
				if (cursor >= 0)
					list[cursor] = length;

				cursor = i;
				length = 1;

				prev = _key;
			} else
				length++;
		});

		if (cursor >= 0)
			list[cursor] = length;

		return list;
	}, [restMap]);

	const storyAvailable = useMemo(() => storySource.length ? 1 : 0, [storySource]);

	return <div class={ style.UnitSourceTable }>
		{ storySource.length > 0 && <>
			<div class={ style.Header }>
				<Locale k="COMMON_SOURCE_MAINSTORY" />
			</div>
			<div class={ cn(style.Content, style.Available) }>
				<div class={ style.SourceSectors }>
					{ storySource.map((arr, i) => <>
						{ i > 0 && <IconDot /> }
						{ arr.map(s => <SourceBadge
							class={ style.Source }
							source={ s }
							detail={ !s.IsMap }
							linked
						/>) }
					</>) }
				</div>
			</div>
		</> }

		{ restMap.map(({ header, label, available, data }, i) => <>
			{ spanList[i] > 0 && <div
				class={ style.Header }
				style={ {
					gridRow: `${i + 1 + storyAvailable} / ${i + 1 + storyAvailable + spanList[i]}`
				} }
			>
				{ header }
			</div> }

			<div class={ cn(style.Content, available && style.Available) }>
				<div class={ style.SectorName }>
					<IconChevronDoubleRight />

					{ label }
				</div>
				<div class={ style.SourceSectors }>
					{ data.map((arr, i) => <>
						{ i > 0 && <IconDot /> }
						{ arr.map(s => <SourceBadge
							class={ style.Source }
							source={ s }
							detail={ !s.IsMap }
							linked
						/>) }
					</>) }
				</div>
			</div>
		</>) }
	</div>;
};
export default SourceTable;
