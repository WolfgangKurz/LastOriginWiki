import { FunctionalComponent } from "preact";

import { ACTOR_GRADE, ROGUEEFFECTTYPE } from "@/types/Enums";
import { BuffStatBuff } from "@/types/Buffs";
import RoguelikeEffect from "@/types/DB/Roguelike.Effect";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";
import { ImageExtension, AssetsRoot, RarityDisplay } from "@/libs/Const";

import Loader, { StaticDB, GetJson } from "@/libs/Loader";
import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";
import BuffList from "@/components/buff-list";

import style from "./style.module.scss";

interface TypeGroup {
	type: ROGUEEFFECTTYPE;
	imgName: string;
}

const SubBadge: FunctionalComponent = (props) => <span class={ `badge bg-primary ${style.subbadge}` }>{ props.children }</span>;

const RoguelikePassiveContent: FunctionalComponent = () => {
	const selectedType = objState<ROGUEEFFECTTYPE>(ROGUEEFFECTTYPE.NONE);
	const selectedGrade = objState<ACTOR_GRADE>(1 as ACTOR_GRADE);

	const ext = ImageExtension();

	return <Loader
		json={ [
			StaticDB.RoguelikeEffects,
			StaticDB.RoguelikeBuffEffects,
		] }
		content={ ((): preact.VNode => {
			const Effects = GetJson<RoguelikeEffect[]>(StaticDB.RoguelikeEffects);
			const RoguelikeBuffEffectDB = GetJson<BuffStatBuff[]>(StaticDB.RoguelikeBuffEffects);

			if (selectedType.value === ROGUEEFFECTTYPE.NONE)
				selectedType.set(Effects[0].type);

			const types = Effects
				.map(x => ({
					type: x.type,
					imgName: x.imgName,
				}))
				.reduce((p, c) => p.some(x => x.type === c.type) ? p : [...p, c], [] as TypeGroup[]);

			const selectedTypeValue = types.find(x => x.type === selectedType.value);

			const grades = Effects
				.filter(x => x.type === selectedType.value)
				.map(x => x.grade)
				.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as number[]);

			const selected = Effects.filter(x => x.type === selectedType.value && x.grade === selectedGrade.value);
			if (selected.length === 0)
				selectedGrade.set(grades[0]);

			return <div>
				<div class="btn-grid d-none d-md-inline-grid btn-grid-6 mb-4">
					{ types.map(x => <button
						class={ `btn btn-substory ${isActive(selectedType.value === x.type)}` }
						onClick={ (e): void => {
							e.preventDefault();
							selectedType.set(x.type);
						} }
					>
						<img class={ `${style["effect-icon"]} ${style["button"]}` } src={ `${AssetsRoot}/${ext}/item/${x.imgName}.${ext}` } />
						<div>
							<Locale k={ `RogueEffect_Type_${x.type}` } />
						</div>
					</button>) }
				</div>
				<div class="btn-group mb-4 d-md-none">
					<button
						class="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{ selectedTypeValue
							? <>
								<img
									class={ `${style["effect-icon"]} ${style["button"]} me-3` }
									src={ `${AssetsRoot}/${ext}/item/${selectedTypeValue.imgName}.${ext}` }
								/>
								<Locale k={ `RogueEffect_Type_${selectedTypeValue.type}` } />
							</>
							: <></>
						}
					</button>
					<ul class="dropdown-menu">
						{ types.map(x => <li>
							<a
								href="#"
								class={ `dropdown-item ${isActive(selectedType.value === x.type)}` }
								onClick={ (e): void => {
									e.preventDefault();
									selectedType.set(x.type);
								} }
							>
								<img
									class={ `${style["effect-icon"]} ${style["button"]} me-3` }
									src={ `${AssetsRoot}/${ext}/item/${x.imgName}.${ext}` }
								/>
								<Locale k={ `RogueEffect_Type_${x.type}` } />
							</a>
						</li>) }
					</ul>
				</div>

				<div class="btn-group mb-4 d-block">
					{ grades.map(x => <button
						class={ `btn btn-substory ${isActive(selectedGrade.value === x)}` }
						onClick={ (e): void => {
							e.preventDefault();
							selectedGrade.set(x);
						} }
					>{ RarityDisplay[(x + 1) as ACTOR_GRADE] }</button>) }
				</div>

				<div class="row row-cols-1 row-cols-md-2">
					{ selected.map((x, i) => {
						return <div class="col mb-4">
							<div class="container table-effect mb-3 text-center">
								<div class="row row-cols-1 row-cols-md-2">
									<div class="col icon-container bg-light">
										<div class="icon-back" data-grade={ x.grade } data-ext={ ext }>
											<img class={ style["effect-icon"] } src={ `${AssetsRoot}/${ext}/item/${x.imgName}.${ext}` } />
										</div>
									</div>
									<div class="col nested">
										<div class="row row-cols-1">
											<div class="col bg-dark text-light">
												<Locale k={ `${x.key}` } components={ { badge: SubBadge } } />
											</div>
											<div class="col bg-light">
												<Locale k={ `${x.key}_COND` } />
											</div>
											<div class="col bg-light">
												<RarityBadge border rarity={ (x.grade + 1) } />
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col bg-light break-keep white-pre-line">
										<Locale k={ `${x.key}_DESC` } />
									</div>
								</div>
								<div class="row">
									<div class="col bg-dark text-light">
										{ x.buffIndex.length === 0
											? <span class="text-secondary">
												<Locale k="ROGUELIKE_NODE_EFFECTS_EMPTY" />
											</span>
											: <BuffList invert list={
												x.buffIndex
													.map(y => RoguelikeBuffEffectDB.find(z => z.key === y))
													.filter(y => y) as BuffStatBuff[]
											} />
										}
									</div>
								</div>
							</div>
						</div>;
					}) }
				</div>
			</div>;
		}) }
	/>;
};
export default RoguelikePassiveContent;
