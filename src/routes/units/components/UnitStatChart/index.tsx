import { useEffect, useRef } from "preact/hooks";

import { useFontLoad as useFontReady, useUpdate } from "@/libs/hooks";
import { useLocale } from "@/libs/Locale";

import style from "./style.module.scss";

interface UnitStatChartProps {
	attack: number;
	speed: number;
	assist: number;
	defence: number;
	hp: number;
	atkRate: number;
}

const UnitStatChart: FunctionalComponent<UnitStatChartProps> = (props) => {
	const update = useUpdate();
	const [loc] = useLocale();

	const fontReadyIBM = useFontReady("IBM Flex Sans KR");
	const fontReadyPretendard = useFontReady("Pretendard JP Variable") && useFontReady("Pretendard Variable");

	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) {
			setTimeout(() => update(), 500);
			return;
		}

		const el = canvasRef.current;
		const ctx = el.getContext("2d");
		if (!ctx) {
			setTimeout(() => update(), 500);
			return;
		}

		const data = [
			props.attack,
			props.speed,
			props.assist,
			props.defence,
			props.hp,
			props.atkRate,
		];

		const w = el.width;
		const h = el.height;
		ctx.clearRect(0, 0, w, h);

		ctx.reset();
		ctx.save();

		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";

		ctx.translate(w / 2, h / 2);

		function distance (v: number): number {
			return v * 10; // v / 2 * 20
		}

		const fills = [0x54, 0x48, 0x3a, 0x28, 0x10];
		const labels = ["Atk", "Speed", "Assist", "Def", "HP", "AtkRate"]
			.map(r => loc[`UNIT_VIEW_SPEC_CHART_${r.toUpperCase()}`]);
		const rating = [
			"E",
			"D", "D+",
			"C", "C+",
			"B", "B+",
			"A", "A+",
			"S", "S+",
		];

		ctx.lineWidth = 1;
		for (let i = 5; i >= 1; i--) {
			ctx.strokeStyle = i === 4 ? "#D0B420B8" : "#FFFFFF3D";
			ctx.fillStyle = "#FFFFFF" + fills[i - 1].toString(16).padStart(2, "0");
			ctx.beginPath();
			ctx.moveTo(0, -20 * i);

			for (let j = 0; j < 6; j++) {
				const a = (j * 60 - 30) * Math.PI / 180;
				ctx.lineTo(Math.cos(a) * 20 * i, Math.sin(a) * 20 * i);
			}
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}

		ctx.fillStyle = "#EEBB28D0";
		ctx.beginPath();
		for (let i = 0; i < 6; i++) {
			const a = (i * 60 - 90) * Math.PI / 180;
			if (i === 0) {
				ctx.moveTo(
					Math.cos(a) * distance(data[i]),
					Math.sin(a) * distance(data[i]),
				);
			} else {
				ctx.lineTo(
					Math.cos(a) * distance(data[i]),
					Math.sin(a) * distance(data[i]),
				);
			}
		}
		ctx.fill();

		for (let i = 0; i < 6; i++) {
			const a = (i * 60 - 90) * Math.PI / 180;

			ctx.font = "600 24px \"Exo 2\"";
			ctx.textAlign = (i % 3) === 0 ? "center" : (i < 3 ? "left" : "right");
			ctx.textBaseline = "middle";
			ctx.fillStyle = "#ffffff";
			ctx.fillText(
				rating[data[i]],
				Math.round(Math.cos(a) * 100),
				Math.round(Math.sin(a) * 100),
			);

			const tw1 = ctx.measureText(rating[data[i]]).width;
			const tw2 = ctx.measureText("S+").width;

			ctx.font = "500 14px \"Pretendard JP Variable\",\"Pretendard Variable\"";
			ctx.textAlign = "center";
			ctx.textBaseline = (i + 1) % 6 < 3 ? "bottom" : "hanging";
			ctx.fillStyle = "#D4BD9D";
			ctx.fillText(
				labels[i] || "",
				Math.round(Math.cos(a) * 100) + (tw1 - tw2 / 2) * (i % 3 === 0 ? 0 : i < 3 ? 1 : -1),
				Math.round(Math.sin(a) * 100) + 14 * ((i + 1) % 6 < 3 ? -1 : 1),
			);
		};

		ctx.restore();
	}, [
		update.value, loc,
		fontReadyIBM, fontReadyPretendard,
		props.attack, props.speed, props.assist, props.defence, props.hp, props.atkRate,
	]);

	return <canvas
		class={ style.UnitStatChart }
		width="260"
		height="260"
		ref={ canvasRef }
	/>;
};
export default UnitStatChart;
