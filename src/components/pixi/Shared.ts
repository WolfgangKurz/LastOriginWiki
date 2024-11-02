import * as PIXI from "pixi.js";

import Pixi2DModel from "@/components/pixi/Pixi2DModel";

export default class Shared {
	private static _shared: Shared = new Shared();
	public static get instance () {
		return Shared._shared;
	}

	private _renderTexture: PIXI.RenderTexture;
	public get renderTexture (): PIXI.RenderTexture { return this._renderTexture; }

	public renderer: PIXI.Renderer | null = null;
	public host: Pixi2DModel | null = null;
	public inRendering: boolean = false;

	private constructor () { // new guard
		this._renderTexture = PIXI.RenderTexture.create({ width: 1, height: 1 });
	}

	public resize (width: number, height: number): void {
		this._renderTexture.resize(width, height, true);
	}

	public static RenderableObjects (root: PIXI.DisplayObject): PIXI.DisplayObject[] {
		interface RenderTree {
			target: PIXI.DisplayObject;
			parent: RenderTree | null;
			childs: RenderTree[];
		}

		const tree: RenderTree = {
			target: root,
			parent: null,
			childs: [],
		};
		const allNodes: RenderTree[] = [tree];

		// Make tree first
		function recursiveTree (tree: RenderTree) {
			const { target } = tree;

			if (target instanceof PIXI.Container) {
				target.children.forEach((c: PIXI.DisplayObject) => {
					const node: RenderTree = {
						target: c,
						parent: tree,
						childs: [],
					};

					if (c.visible) {
						tree.childs.push(node);
						allNodes.push(node);

						recursiveTree(node);
					}
				});
			}
		}
		recursiveTree(tree);

		// move parent based on layer
		allNodes.forEach(n => {
			if (!n.target.parentLayer) return;

			if (n.parent) {
				const oParent = n.parent;
				const idx = oParent.childs.indexOf(n);
				oParent.childs.splice(idx, 1); // remove from previous parent
			}

			const parent = allNodes.find(p => p.target === n.target.parentLayer);
			if (!parent) return; // parent not found

			parent.childs.push(n);
		});

		if (false) { // tree print
			function recursiveDebug (current: RenderTree, depth: number = 0) {
				console.log(
					"  ".repeat(depth) +
					(current.target.name || "...") + " : " + current.target.constructor.name
				);
				current.childs.forEach(c => recursiveDebug(c, depth + 1));
			}
			recursiveDebug(tree);
		}

		const renderList: PIXI.DisplayObject[] = [];
		function recursiveResult (cur: RenderTree) {
			if (cur.target.renderable) // visible==false already excluded
				renderList.push(cur.target);

			cur.childs
				.sort((a, b) => {
					if (a.target.zIndex !== b.target.zIndex) return a.target.zIndex - b.target.zIndex;
					return (a.target.zOrder || 0) - (b.target.zOrder || 0);
				})
				.forEach(c => recursiveResult(c));
		}
		recursiveResult(tree);

		return renderList;
	}
}
