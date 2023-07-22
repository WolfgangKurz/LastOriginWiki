import { FunctionalComponent } from "preact";

import { useNodes, BezierEdge, BezierEdgeProps, BaseEdge } from "@reactflow/core";
import { getSmartEdge } from "@tisoap/react-flow-smart-edge";
import { BreadthFirstFinder, DiagonalMovement } from "pathfinding";

const CustomEdge: FunctionalComponent<BezierEdgeProps> = (props) => {
	const {
		sourcePosition, targetPosition,
		sourceX, sourceY,
		targetX, targetY,

		label,
		labelBgPadding,
		labelStyle,
		labelBgStyle,

		..._props
	} = props;

	const nodes = useNodes().map(r => ({ ...r, width: (r.width || 0) + 20 }));
	const gridRatio = 3;

	let isStraight: boolean = false;
	const getSmartEdgeResponse = getSmartEdge({
		sourcePosition, targetPosition,
		sourceX, sourceY,
		targetX, targetY,
		nodes,
		options: {
			gridRatio,
			generatePath: (grid, start, end) => {
				try {
					const finder = new BreadthFirstFinder({
						diagonalMovement: DiagonalMovement.Always,
						// heuristic: (dx, dy) => Math.min(dx, dy),
					});

					const p = finder.findPath(start.x, start.y, end.x, end.y, grid) as Tuple<number, 2>[];
					if (p.length === 0) return null;

					// straight
					if (p.every(r => r[0] === p[0][0]) || p.every(r => r[1] === p[0][1]))
						isStraight = true;
					else
						p.push([ // for straighted end?
							p[p.length - 2][0],
							p[p.length - 2][1],
						]);

					return { fullPath: p, smoothedPath: p };
				} catch {
					return null;
				}
			},
		},
	});

	if (getSmartEdgeResponse === null)
		return <BezierEdge { ...props } />;

	const { edgeCenterX, edgeCenterY, svgPathString: smoothenPath } = getSmartEdgeResponse;
	const straightPath = (): string => `M${sourceX} ${sourceY}L${targetX} ${targetY}`;

	const centerX = isStraight
		? (sourceX + targetX) / 2
		: edgeCenterX;
	const centerY = isStraight
		? (sourceY + targetY) / 2
		: edgeCenterY;

	return <BaseEdge
		path={ isStraight ? straightPath() : smoothenPath }
		label={ label }
		labelStyle={ labelStyle }
		labelBgStyle={ labelBgStyle }
		labelX={ centerX }
		labelY={ centerY }
		{ ..._props }
	/>;
};
export default CustomEdge;
