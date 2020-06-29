import Vue from "vue";
import Component from "vue-class-component";

import { Unit } from "./Unit";

@Component({})
export default class Simulation extends Vue {
	private grid: Array<Unit | null>;

	public get Grid () {
		return this.grid;
	}

	constructor () {
		super();
		this.grid = new Array(9).fill(null);
	}

	public Clear (index?: number) {
		if (typeof index === "undefined")
			this.grid = new Array(9).fill(null);
		else
			this.grid[index] = null;
	}

	public SetGrid (index: number, unitId: number) {
		if (index < 0 || index >= 9) return; // 범위 벗어남
		if (this.grid.some(x => x && x.Unit.id === unitId)) return; // 이미 존재하는 전투원

		this.grid[index] = new Unit().SetUnit(unitId);
	}
}
