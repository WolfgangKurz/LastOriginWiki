import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { UnitSkinEntity } from "@/types/DB/Unit";
import { SKIN_IN_PARTS } from "@/types/Enums";
import { UnitsListProps } from "..";

import { AssetsRoot } from "@/libs/Const";
import { ObjectState, objState } from "@/libs/State";
import { groupBy, isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import UnitFace from "@/components/unit-face";

import style from "./style.module.scss";

interface SkinData extends UnitSkinEntity {
	uid: string;
}

const Advanced: FunctionalComponent<UnitsListProps> = (props) => {
	const currentCategory = objState("ALL");

	const voice = objState<boolean | undefined>(undefined);
	const l2d = objState<boolean | undefined>(undefined);
	const motion = objState<boolean | undefined>(undefined);
	const fx = objState<boolean | undefined>(undefined);
	const damaged = objState<boolean | undefined>(undefined);
	const bg = objState<boolean | undefined>(undefined);

	const skins = props.list
		.map(x => {
			const r: SkinData[] = [];

			const o: SkinData = {} as SkinData;
			Object.keys(x.skins).forEach(k => {
				if (k === "skins" || k === "P") return;
				o[k] = x.skins[k];
			});
			o.uid = x.uid;

			r.push(o);
			if (x.skins.skins) r.push(...x.skins.skins.map(y => ({ ...y, uid: x.uid })));
			if (x.skins.P) r.push({ ...x.skins.P, uid: x.uid });
			return r;
		})
		.flat();

	const categories = skins.flatMap(x => x.category)
		.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as string[])
		.sort((a, b) => {
			if (a === "ALL") return -3;
			if (b === "ALL") return 3;
			if (a === "") return -2;
			if (b === "") return 2;
			if (a === "None") return -1;
			if (b === "None") return 1;
			return LocaleGet(`SKIN_CATEGORY_${a}`).localeCompare(LocaleGet(`SKIN_CATEGORY_${b}`));
		});

	const filtered = groupBy(skins
		.filter(x => {
			if (!x.category.includes(currentCategory.value) && currentCategory.value !== "ALL") return false;

			const A = (x.parts & (1 << SKIN_IN_PARTS.LOBBY_ANIMATION)) > 0;
			const V = (x.parts & (1 << SKIN_IN_PARTS.VOICE)) > 0;
			const M = (x.parts & (1 << SKIN_IN_PARTS.SD_ANIMATION)) > 0;
			const E = (x.parts & (1 << SKIN_IN_PARTS.SD_EFFECT)) > 0;
			const D = (x.parts & (1 << SKIN_IN_PARTS.DAMAGE_IMAGE)) > 0;
			const BG = (x.parts & (1 << SKIN_IN_PARTS.PROPS)) > 0;

			if (l2d.value !== undefined) {
				if (l2d.value && !A)
					return false;
				else if (!l2d.value && A)
					return false;
			}
			if (voice.value !== undefined) {
				if (x.sid === null) return false;

				if (voice.value && !V)
					return false;
				else if (!voice.value && V)
					return false;
			}
			if (motion.value !== undefined) {
				if (x.sid === null) return false;

				if (motion.value && !M)
					return false;
				else if (!motion.value && M)
					return false;
			}
			if (fx.value !== undefined) {
				if (x.sid === null) return false;

				if (fx.value && !E)
					return false;
				else if (!fx.value && E)
					return false;
			}
			if (damaged.value !== undefined) {
				if (damaged.value && !D)
					return false;
				else if (!damaged.value && D)
					return false;
			}
			if (bg.value !== undefined) {
				if (bg.value && !BG)
					return false;
				else if (!bg.value && BG)
					return false;
			}

			return true;
		}),
		x => x.uid);

	const radioSet = (state: ObjectState<boolean | undefined>): preact.VNode => {
		return <div class="btn-group">
			<button
				class={ `btn btn-sm btn-outline-dark ${isActive(state.value === undefined)}` }
				onClick={ (e): void => {
					e.preventDefault();
					state.set(undefined);
				} }
			>
				<Icon icon="three-dots" />
			</button>
			<button
				class={ `btn btn-sm btn-outline-dark ${isActive(state.value === true)}` }
				onClick={ (e): void => {
					e.preventDefault();
					state.set(true);
				} }
			>
				<Icon icon="check" />
			</button>
			<button
				class={ `btn btn-sm btn-outline-dark ${isActive(state.value === false)}` }
				onClick={ (e): void => {
					e.preventDefault();
					state.set(false);
				} }
			>
				<Icon icon="x" />
			</button>
		</div>;
	};

	return <>
		<div class="row mb-2">
			<select
				class="form-select"
				value={ currentCategory.value }
				onChange={ (e): void => {
					const value = (e.target as HTMLSelectElement).value;
					currentCategory.set(value);
				} }
			>
				{ categories.map(c => <option value={ c }>
					<Locale k={ `SKIN_CATEGORY_${c}` } plain />
				</option>) }
			</select>
		</div>
		<div class={ `row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-2 ${style.FilterButtons}` }>
			<div class={ `col ${style.FilterCol}` }>
				<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/l2d.png` } />
				<span><Locale k="UNIT_VIEW_SKIN_FILTER_L2D" /></span>
				{ radioSet(l2d) }
			</div>
			<div class={ `col ${style.FilterCol}` }>
				<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/voice.png` } />
				<span><Locale k="UNIT_VIEW_SKIN_FILTER_VOICE" /></span>
				{ radioSet(voice) }
			</div>
			<div class={ `col ${style.FilterCol}` }>
				<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/sd.png` } />
				<span><Locale k="UNIT_VIEW_SKIN_FILTER_MOTION" /></span>
				{ radioSet(motion) }
			</div>
			<div class={ `col ${style.FilterCol}` }>
				<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/fx.png` } />
				<span><Locale k="UNIT_VIEW_SKIN_FILTER_FX" /></span>
				{ radioSet(fx) }
			</div>
			<div class={ `col ${style.FilterCol}` }>
				<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/damaged.png` } />
				<span><Locale k="UNIT_VIEW_SKIN_FILTER_DAMAGED" /></span>
				{ radioSet(damaged) }
			</div>
			<div class={ `col ${style.FilterCol}` }>
				<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/object.png` } />
				<span><Locale k="UNIT_VIEW_SKIN_FILTER_BG" /></span>
				{ radioSet(bg) }
			</div>
		</div>
		<div class="row">
			<hr />
		</div>
		{ Object.keys(filtered)
			.map(y => <>
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					{ filtered[y].map(x => <div class="col">
						<Link class={ style.SkinCol } href={ `/units/${x.uid}/s${x.sid || 0}` }>
							<div class={ style.SkinCol }>
								<UnitFace uid={ x.uid } skin={ x.sid || undefined } size={ 56 } />
								<span>
									<Locale plain k={ `UNIT_${x.uid}` } />
								</span>
								<span>
									<Locale
										k={ `UNIT_SKIN_${x.uid}_${x.sid}` }
										fallback={ <Locale plain k={ `UNIT_${x.uid}` } /> }
										plain
									/>
								</span>
							</div>
						</Link>
					</div>) }
				</div>
				<hr class="mt-1 mb-3" />
			</>)
		}
	</>;
};
export default Advanced;
