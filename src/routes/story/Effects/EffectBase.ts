import * as PIXI from "pixi.js";

export default abstract class EffectBase {
	public destroyed: boolean = false;
	protected enabled: boolean = false;

	private _done: boolean = false;
	public get done (): boolean {
		return this._done;
	}

	public onDone: (() => void) | null = null;

	constructor (protected readonly screen: Readonly<PIXI.Container>) {
		new Promise<void>(r => {
			setTimeout(() => r(), this.FinishCheck() * 1000);
		})
			.then(() => {
				this._done = true;
				if (this.onDone) this.onDone();
			});
	}

	abstract Destroy (): void;

	abstract Update (delta: number): void;
	abstract FinishCheck (): number;

	protected insideUnitSphere (): Tuple<number, 3> {
		const radius = Math.random();
		const theta = Math.random() * Math.PI * 2;
		const phi = Math.acos(Math.random() * 2 - 1);

		return [
			radius * Math.sin(phi) * Math.cos(theta),
			radius * Math.sin(phi) * Math.sin(theta),
			radius * Math.cos(phi),
		];
	}
}
