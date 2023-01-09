import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import ResizeObserver from "resize-observer-polyfill";

import { FACETYPE, SKIN_IN_PARTS } from "@/types/Enums";
import { SKIN_ANIM_SUBSET_ENUM, SKIN_SUBSET_ENUM, Unit, UnitSkin } from "@/types/DB/Unit";

import { AssetsRoot, CanPlayWebM, ImageExtension } from "@/libs/Const";

import Locale from "@/components/locale";
import { objState } from "@/libs/State";

import PopupBase from "@/components/popup/base";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import MergedVideo from "@/components/merged-video";
import Pinch from "@/components/pinch";
import SpineRenderer from "@/components/spine-renderer";
import U2DModelRenderer from "@/components/u2dmodel-renderer";

import style from "./style.module.scss";
import Icon from "@/components/bootstrap-icon";

interface SkinItem extends UnitSkin {
	isDef: boolean;
	isPro: boolean;
}

interface SkinViewProps {
	skin: SkinItem;
	unit: Unit;
	black?: boolean;
	hideGroup?: boolean;
	collapsed?: boolean;
	detailable?: boolean;
	animate?: boolean;
}

const SkinView: FunctionalComponent<SkinViewProps> = (props) => {
	const imageExt = ImageExtension();

	const unit = props.unit;
	const skin = props.skin;

	// const skinDirection = objState<"" | "horz" | "vert">("");

	const [resizeObserver, setResizeObserver] = useState<ResizeObserver | null>(null);
	const [FullUnitSize, setFullUnitSize] = useState<[number, number]>([0, 0]);
	const FullUnitEl = useRef<HTMLDivElement>(null);

	const face = objState<string>("");
	const faceList = objState<string[]>([]);

	const IsDamaged = objState<boolean>(false);
	const IsSimplified = objState<boolean>(false);
	const IsBG = objState<boolean>(false);
	const IsGoogle = objState<boolean>(false);
	const IsSpecialTouch = objState<boolean>(false);

	const IsAnimating = objState<boolean>(true);
	const IsBlackBG = objState<boolean>(false);
	const HideGroup = objState<boolean>(false);

	const [detailView, setDetailView] = useState(false);

	useEffect(() => {
		if (FullUnitEl.current) {
			const observer = new ResizeObserver((entries) => {
				const rc = (entries[0].contentRect as DOMRectReadOnly);
				setFullUnitSize([
					Math.floor(rc.width / 2) * 2,
					Math.floor(rc.height / 2) * 2,
				]);
			});
			setResizeObserver(observer);

			observer.observe(FullUnitEl.current);
		}

		return () => {
			if (resizeObserver)
				resizeObserver.disconnect();

			setResizeObserver(null);
		};
	}, [FullUnitEl.current]);

	// const Aspect = props.collapsed ? style["ratio-2x5"] : "ratio-4x3";
	const Aspect = "ratio-2x4 ratio-lg-5x3";
	// const Aspect = "ratio-2x4";

	const ImageStyle = ((): Record<string, string> => {
		if (!props.collapsed) return {};

		const base = skin.offsets;
		// const platform = IsGoogle.value ? "google" : "normal";
		const d = IsDamaged.value;
		const b = IsBG.value;
		const s = IsSimplified.value;

		const target = (() => {
			if (!d && !b && !s) return 0;
			if (d && !b && !s) return 1;
			if (!d && b && !s) return 2;
			if (!d && !b && s) return 3;
			if (d && b && !s) return 4;
			if (d && !b && s) return 5;
			if (!d && b && s) return 6;
			if (d && b && s) return 7;
			return 0;
		})();

		if (base[target] === null) return {};

		return {
			"margin-left": `${base[target]}%`,
			"margin-right": "0",
		};
	})();
	const SkinImageURL = ((): string => {
		const skinId = skin.isDef ? 0 : skin.metadata.imageId;
		const ext = imageExt;

		const postfix = ((): string => {
			const ret: string[] = [];
			if (IsDamaged.value) ret.push("D");
			if (IsBG.value) ret.push("B");
			if (IsSimplified.value) ret.push("S");
			return (ret.length > 0 ? "_" : "") + ret.join("");
		})();

		return `${AssetsRoot}/${ext}/full/${unit.uid}_${skinId}_${skin.G && IsGoogle.value ? "G" : "O"}${postfix}.${ext}`;
	})();
	const SkinVideoURL = ((): string => {
		if (!props.collapsed && !props.animate) return "";
		if (IsDamaged.value) return "";

		let flag: SKIN_ANIM_SUBSET_ENUM = 0;
		const postfix = ((): string => {
			const ret: string[] = [];
			if (IsBG.value) {
				flag |= SKIN_ANIM_SUBSET_ENUM.B_;
				ret.push("B");
			}
			if (IsSimplified.value) {
				flag |= SKIN_ANIM_SUBSET_ENUM._S;
				ret.push("S");
			}
			return (ret.length > 0 ? "_" : "") + ret.join("");
		})();
		if (!skin.anim[flag]) return "";

		const skinId = skin.isDef ? 0 : skin.metadata.imageId;
		return `${unit.uid}_${skinId}_${skin.G && IsGoogle.value ? "G" : "O"}${postfix}`;
	})();

	if (!skin.G && IsGoogle.value) // not have google
		IsGoogle.set(false);

	// skin mod adjust
	if (IsDamaged.value) {
		if (IsSimplified.value && IsBG.value && !skin.subset[SKIN_SUBSET_ENUM.DBS]) {
			if (skin.subset[SKIN_SUBSET_ENUM.DB_])
				IsBG.set(false);
			else if (skin.subset[SKIN_SUBSET_ENUM.D_S])
				IsSimplified.set(false);
			else {
				IsBG.set(false);
				IsSimplified.set(false);
			}
		} else if (IsSimplified.value && !IsBG.value && !skin.subset[SKIN_SUBSET_ENUM.D_S])
			IsSimplified.set(false);
		else if (IsBG.value && !IsSimplified.value && !skin.subset[SKIN_SUBSET_ENUM.DB_])
			IsBG.set(false);
		else if (!IsBG.value && !IsSimplified.value && skin.subset[SKIN_SUBSET_ENUM.D__]) {
			IsBG.set(false);
			IsSimplified.set(false);
		} else if (!IsBG.value && !IsSimplified.value && !skin.subset[SKIN_SUBSET_ENUM.D__])
			IsDamaged.set(false);
	} else {
		if (IsSimplified.value && IsBG.value && !skin.subset[SKIN_SUBSET_ENUM._BS]) {
			if (skin.subset[SKIN_SUBSET_ENUM._B_])
				IsBG.set(false);
			else if (skin.subset[SKIN_SUBSET_ENUM.__S])
				IsSimplified.set(false);
			else {
				IsBG.set(false);
				IsSimplified.set(false);
			}
		} else if (IsSimplified.value && !IsBG.value && !skin.subset[SKIN_SUBSET_ENUM.__S])
			IsSimplified.set(false);
		else if (IsBG.value && !IsSimplified.value && !skin.subset[SKIN_SUBSET_ENUM._B_])
			IsBG.set(false);
	}

	const AvailableS = !IsDamaged.value
		? skin.subset[SKIN_SUBSET_ENUM.__S] || (skin.subset[SKIN_SUBSET_ENUM._BS] && IsBG.value)
		: skin.subset[SKIN_SUBSET_ENUM.D_S] || (skin.subset[SKIN_SUBSET_ENUM.DBS] && IsBG.value);

	const AvailableBG = !IsDamaged.value
		? skin.subset[SKIN_SUBSET_ENUM._B_] || (skin.subset[SKIN_SUBSET_ENUM._BS] && IsSimplified.value)
		: skin.subset[SKIN_SUBSET_ENUM.DB_] || (skin.subset[SKIN_SUBSET_ENUM.DBS] && IsSimplified.value);

	const AvailableAnim = (() => {
		if (skin.Spine) return true;

		if (IsSimplified.value && IsBG.value)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.BS];
		else if (IsSimplified.value && !IsBG.value)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM._S];
		else if (!IsSimplified.value && IsBG.value)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.B_];
		else
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.__];
	})();

	const modelId = `${unit.uid}_N${skin.isDef ? "" : `S${skin.metadata.imageId}`}`;
	const DisplaySpine = skin.Spine && (props.animate || props.collapsed) && !IsDamaged.value;
	const Display2DModel = (!IsDamaged.value && !!skin.metadata["2dmodel"]) ||
		(IsDamaged.value && !!skin.metadata["2dmodel_dam"]);

	return <div class={ style.SkinView }>
		<div class={ `ratio ${Aspect} ${style.SkinFull} ${props.collapsed ? style.Collapsed : ""}` }>
			<div>
				<div class={ `${style.FullBG} ${props.black ? style.Black : ""}` } />
				<div class={ `${style.FullGroup} ${props.hideGroup ? style.HideGroup : ""}` }>
					<div>
						<img src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` } />
					</div>
				</div>
				<div
					class={ [
						style.FullUnit,
						(!props.collapsed || DisplaySpine || Display2DModel) && style.FullUnitMarginless,
					].filter(x => x).join(" ") }
					ref={ FullUnitEl }
				>
					{ DisplaySpine
						? <SpineRenderer
							uid={ modelId }
							google={ IsGoogle.value }
							specialTouch={ IsSpecialTouch.value }

							// collider={ true }
							hidePart={ IsSimplified.value }
							// hideBg={ IsBG.value }
							// hideDialog={ false }

							face={ face.value }
							onFaceList={ (list) => {
								faceList.set(list);

								if (list.includes("Idle"))
									face.set("Idle");
								else {
									const listU = list.map(f => f.toUpperCase());
									for (const ft of Object.keys(FACETYPE)) {
										const index = listU.indexOf(ft);
										if (index >= 0) {
											face.set(list[index]);
											break;
										}
									}
								}
							} }
						/>
						: SkinVideoURL.length > 0
							? CanPlayWebM()
								? <video
									style={ ImageStyle }
									autoPlay muted loop
									src={ `${AssetsRoot}/webm/HD/${SkinVideoURL}.webm` }
								/>
								: <MergedVideo
									style={ ImageStyle }
									src={ `${AssetsRoot}/webm/HD.Legacy/${SkinVideoURL}.mp4` }
									type="video/mp4"
								/>
							: Display2DModel
								? <Pinch
									minScale={ 0.5 }
									maxScale={ 3 }
								>
									<U2DModelRenderer
										root={ `${AssetsRoot}/2dmodel/${IsGoogle.value ? "G" : "O"}/` }
										target={ !IsDamaged.value ? skin.metadata["2dmodel"]! : skin.metadata["2dmodel_dam"]! }

										scale={ 1.5 }
										textureExt={ imageExt }

										width={ FullUnitSize[0] }
										height={ FullUnitSize[1] }

										hideParts={ IsSimplified.value }
										hideBG={ IsBG.value }

										face={ face.value }
										onFaceList={ (list) => {
											const _list = [...list];
											if (!_list.includes("Idle"))
												_list.splice(0, 0, "Idle"); // insert into 0

											faceList.set(_list);
											face.set("Idle");
										} }
									/>
								</Pinch>
								: !props.collapsed // && !AvailableAnim
									? <Pinch
										minScale={ 0.5 }
										maxScale={ 3 }
									>
										<img
											style={ ImageStyle }
											src={ SkinImageURL }
										/>
									</Pinch>
									: <img
										style={ ImageStyle }
										src={ SkinImageURL }
									/>
					}
				</div>

				{ !(skin.isPro || skin.isDef) && skin.price
					? <div class={ style.Price }>
						<img src={ `${AssetsRoot}/tuna.png` } />
						{ skin.price }
					</div>
					: <></>
				}

				<>
					<div class={ style.SkinPropMarriage }>
						{ unit.marriageVoice ? <BootstrapTooltip
							placement="top"
							content={ <span class="word-keep"><Locale k="UNIT_VIEW_SKIN_MARRIAGE" /></span> }
						>
							<div class="position-relative alert">
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/marriage.png` } />
							</div>
						</BootstrapTooltip>
							: <div class={ `position-relative alert ${style.Invalid}` }>
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/marriage.png` } />
							</div>
						}
					</div>
					<div class={ style.SkinPropAnimated }>
						{ (skin.parts & (1 << SKIN_IN_PARTS.LOBBY_ANIMATION)) > 0
							? <BootstrapTooltip
								placement="top"
								content={ <span class="word-keep">
									<Locale k={ skin.stage ? "UNIT_VIEW_SKIN_L2D_PLUS" : "UNIT_VIEW_SKIN_L2D" } />
								</span> }
							>
								<div class="position-relative alert">
									<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/l2d${skin.stage ? "p" : ""}.png` } />
								</div>
							</BootstrapTooltip>
							: <div class={ `position-relative alert ${style.Invalid}` }>
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/l2d.png` } />
							</div>
						}
					</div>
					<div class={ style.SkinPropVoice }>
						{ (skin.parts & (1 << SKIN_IN_PARTS.VOICE)) > 0
							? <BootstrapTooltip
								placement="top"
								content={ <span class="word-keep">
									<Locale k={ skin.isDef ? "UNIT_VIEW_SKIN_DEFAULT" : "UNIT_VIEW_SKIN_VOICE" } />
								</span> }
							>
								<div class="position-relative alert">
									<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/voice.png` } />
								</div>
							</BootstrapTooltip>
							: <div class={ `position-relative alert ${style.Invalid}` }>
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/voice.png` } />
							</div>
						}
					</div>
					<div class={ style.SkinPropEffect }>
						{ (skin.parts & (1 << SKIN_IN_PARTS.SD_EFFECT)) > 0
							? <BootstrapTooltip
								placement="top"
								content={ <span class="word-keep">
									<Locale k={ skin.isDef ? "UNIT_VIEW_SKIN_DEFAULT" : "UNIT_VIEW_SKIN_EFFECT" } />
								</span> }
							>
								<div class="position-relative alert">
									<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/fx.png` } />
								</div>
							</BootstrapTooltip>
							: <div class={ `position-relative alert ${style.Invalid}` }>
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/fx.png` } />
							</div>
						}
					</div>
					<div class={ style.SkinPropMotion }>
						{ (skin.parts & (1 << SKIN_IN_PARTS.SD_ANIMATION)) > 0
							? <BootstrapTooltip
								placement="top"
								content={ <span class="word-keep">
									<Locale k={ skin.isDef ? "UNIT_VIEW_SKIN_DEFAULT" : "UNIT_VIEW_SKIN_MOTION" } />
								</span> }
							>
								<div class="position-relative alert">
									<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/sd.png` } />
								</div>
							</BootstrapTooltip>
							: <div class={ `position-relative alert ${style.Invalid}` }>
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/sd.png` } />
							</div>
						}
					</div>
					<div class={ style.SkinPropDamaged }>
						{ (skin.parts & (1 << SKIN_IN_PARTS.DAMAGE_IMAGE)) > 0
							? <BootstrapTooltip
								placement="top"
								content={ <span class="word-keep"><Locale k="UNIT_VIEW_SKIN_DAMAGED" /></span> }
							>
								<div class="position-relative alert">
									<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/damaged.png` } />
								</div>
							</BootstrapTooltip>
							:
							<div class={ `position-relative alert ${style.Invalid}` }>
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/damaged.png` } />
							</div>
						}
					</div>
					<div class={ style.SkinPropBG }>
						{ (skin.parts & (1 << SKIN_IN_PARTS.PROPS)) > 0
							? <BootstrapTooltip
								placement="top"
								content={ <span class="word-keep"><Locale k="UNIT_VIEW_SKIN_BG" /></span> }
							>
								<div class="position-relative alert">
									<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/object.png` } />
								</div>
							</BootstrapTooltip>
							:
							<div class={ `position-relative alert ${style.Invalid}` }>
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/object.png` } />
							</div>
						}
					</div>
				</>

				{ [
					skin.subset[SKIN_SUBSET_ENUM.D__]
						? <div
							class={ `${style.SkinToggle} ${style.Damaged}` }
							data-damaged={ IsDamaged.value ? 1 : 0 }
							onClick={ (): void => IsDamaged.set(!IsDamaged.value) }
						/>
						: <></>,
					AvailableS
						? <div
							class={ `${style.SkinToggle} ${style.Simplified}` }
							data-simplified={ IsSimplified.value ? 1 : 0 }
							onClick={ (): void => IsSimplified.set(!IsSimplified.value) }
						/>
						: <></>,
					AvailableBG
						? <div
							class={ `${style.SkinToggle} ${style.BG}` }
							data-bg={ IsBG.value ? 1 : 0 }
							onClick={ (): void => IsBG.set(!IsBG.value) }
						/>
						: <></>,
					skin.G
						? <div
							class={ `${style.SkinToggle} ${style.Platform}` }
							data-platform={ IsGoogle.value ? 1 : 0 }
							onClick={ (): void => IsGoogle.set(!IsGoogle.value) }
						/>
						: <></>,
					DisplaySpine
						? <div
							class={ `${style.SkinToggle} ${style.Touch}` }
							data-touch={ IsSpecialTouch.value ? 1 : 0 }
							onClick={ (): void => IsSpecialTouch.set(!IsSpecialTouch.value) }
						/>
						: <></>,
				] }

				{ (
					(skin.Spine && props.animate && !IsDamaged.value && !props.collapsed) ||
					Display2DModel
				) && faceList.value.length > 0
					? <div class={ `${style.FaceList} ${props.collapsed ? style.FaceListMargin : ""}` }>
						<select
							class={ `form-select form-select-sm ${style.FaceList}` }
							value={ face.value }
							onChange={ (e): void => {
								const value = (e.target as HTMLSelectElement).value;
								face.set(value);
							} }
						>
							{ faceList.value.map(f => {
								const ft = FACETYPE[f.toUpperCase()];
								return <option value={ f }>
									{ ft
										? <Locale k={ `FACE_TYPE_${ft}` } />
										: f.toUpperCase()
									}
								</option>;
							}) }
						</select>
						<Icon icon="emoji-smile-fill" />
					</div>
					: <></>
				}

				{ props.detailable
					? <>
						<div
							class={ style.Detail }
							onClick={ (e) => {
								e.preventDefault();
								setDetailView(true);
							} }
						/>

						<PopupBase
							display={ detailView }
							size="xl"
							header={ <>
								<Locale
									plain
									k={ skin.sid ? `UNIT_SKIN_${unit.uid}_${skin.sid}` : `UNIT_${unit.uid}` }
								/>
								{/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */ }
							</> }
							onHidden={ () => setDetailView(false) }
						>
							<div class="text-start mb-2">
								<div class="form-check d-inline-block form-switch">
									<label class="form-check-label">
										<input
											class="form-check-input"
											type="checkbox"
											disabled={ !AvailableAnim }
											checked={ IsAnimating.value }
											onClick={ (): void => IsAnimating.set(!IsAnimating.value) }
										/>
										<Locale k="UNIT_VIEW_SKIN_ANIMATION_SWITCH" />
									</label>
								</div>

								<span class="text-secondary px-2">|</span>

								<div class="form-check d-inline-block form-switch">
									<label class="form-check-label">
										<input
											class="form-check-input"
											type="checkbox"
											checked={ IsBlackBG.value }
											onClick={ (): void => IsBlackBG.set(!IsBlackBG.value) }
										/>
										<Locale k="UNIT_VIEW_SKIN_BLACKBG_SWITCH" />
									</label>
								</div>

								<span class="text-secondary px-2">|</span>

								<div class="form-check d-inline-block form-switch">
									<label class="form-check-label">
										<input
											class="form-check-input"
											type="checkbox"
											checked={ HideGroup.value }
											onClick={ (): void => HideGroup.set(!HideGroup.value) }
										/>
										<Locale k="UNIT_VIEW_SKIN_HIDEGROUP_SWITCH" />
									</label>
								</div>
							</div>

							{ detailView && <SkinView
								unit={ unit }
								skin={ skin }
								animate={ IsAnimating.value }
								black={ IsBlackBG.value }
								hideGroup={ HideGroup.value }
							/> }
						</PopupBase>
					</>
					: <></>
				}
			</div>
		</div>
	</div>;
};
export default SkinView;
