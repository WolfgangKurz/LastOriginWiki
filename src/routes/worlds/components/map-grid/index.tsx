import { FunctionalComponent } from "preact";
import { Link } from "preact-router";
import Decimal from "decimal.js";

import { MapNodeEntity } from "@/types/DB/Map";

import { AssetsRoot } from "@/libs/Const";

import "./style.module.scss";

interface LineData {
	x1: string;
	y1: string;
	x2: string;
	y2: string;
	color: string;
}

interface MapNodeProps {
	node: MapNodeEntity;
	active?: boolean;
}

const MapNode: FunctionalComponent<MapNodeProps> = (props) => {
	const name = props.node.text;
	const shortName = name.includes("-")
		? name.substr(name.indexOf("-") + 1)
		: name;

	return <div class="map-node" data-hidden={ !props.node.text ? 1 : 0 } data-pos={ `${props.node.offset}` }>
		<img src={ `${AssetsRoot}/world/mapicon_${Math.floor(props.node.offset / 8)}.png` } />
		<div class="name d-none d-sm-block" data-active={ props.active ? 1 : 0 }>{ props.node.text }</div>
		<div class="name d-sm-none" data-active={ props.active ? 1 : 0 }>{ shortName }</div>
	</div>;
};

interface MapGridProps {
	nodes: MapNodeEntity[];
	selected: MapNodeEntity | null;

	wid?: string;
	mid?: string;

	onSelect?: (selected: MapNodeEntity) => void;
}

const MapGrid: FunctionalComponent<MapGridProps> = (props) => {
	const wid = props.wid || "";
	const mid = props.mid || "";

	function SelectNode (node: MapNodeEntity): void {
		if (props.onSelect)
			props.onSelect(node);
	}

	const lineData = ((): LineData[] => {
		const ret: LineData[] = [];
		const colors: string[] = [
			"#98fd28",
			"#ffce22",
			"#ff2d5b",
		];

		props.nodes.forEach(node => {
			if (node.prev === null) return;

			const fromX = node.offset % 8;
			const fromY = Math.floor(node.offset / 8);
			const toX = node.prev % 8;
			const toY = Math.floor(node.prev / 8);

			if (fromX < toX) return;

			const x1b = fromY * 0.5 - 0.25 + 0.5;
			const x2b = toY * 0.5 - 0.25 + 0.5;

			ret.push({
				x1: `${Decimal.div(1, 9)
					.mul(Decimal.add(fromX, x1b))
					.mul(100)
					.toNumber()}%`,
				y1: `${Decimal.div(1, 3)
					.mul(fromY + 0.5)
					.mul(100)
					.toNumber()}%`,
				x2: `${Decimal.div(1, 9)
					.mul(Decimal.add(toX, x2b))
					.mul(100)
					.toNumber()}%`,
				y2: `${Decimal.div(1, 3)
					.mul(toY + 0.5)
					.mul(100)
					.toNumber()}%`,
				color: colors[Math.min(fromY, toY)],
			});
		});
		return ret;
	})();

	return <div class="world-map-grid">
		{ props.nodes.map(node => <div data-pos={ node.offset }>
			<Link
				href={ node.text ? `/worlds/${wid}/${mid}/${node.text}` : undefined }
				onClick={ (e: Event): void => {
					e.preventDefault();
					if (node.text) SelectNode(node);
				} }>
				<MapNode node={ node } active={ props.selected === node } />
			</Link>
		</div>) }

		<svg>
			{ lineData.map(line => <line
				x1={ line.x1 }
				y1={ line.y1 }
				x2={ line.x2 }
				y2={ line.y2 }
				stroke={ line.color }
				stroke-width="2"
				stroke-linecap="square"
			/>) }
		</svg>
	</div>;
};
export default MapGrid;
