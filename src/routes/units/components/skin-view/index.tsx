import { FunctionalComponent } from "preact";

import { SKIN_IN_PARTS } from "@/types/Enums";
import { SKIN_ANIM_SUBSET_ENUM, SKIN_SUBSET_ENUM, Unit, UnitSkin } from "@/types/DB/Unit";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Locale from "@/components/locale";
import { objState } from "@/libs/State";

import Icon from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

import style from "./style.module.scss";

interface SkinItem extends UnitSkin {
	isDef: boolean;
	isPro: boolean;
}

interface SkinViewProps {
	skin: SkinItem;
	unit: Unit;
	collapsed?: boolean;
	detailable?: boolean;
	animate?: boolean;
}

const SkinView: FunctionalComponent<SkinViewProps> = (props) => {
	const imageExt = ImageExtension();

	const unit = props.unit;
	const skin = props.skin;

	const IsDamaged = objState<boolean>(false);
	const IsSimplified = objState<boolean>(false);
	const IsBG = objState<boolean>(false);
	const IsGoogle = objState<boolean>(false);

	const IsAnimating = objState<boolean>(false);

	const Aspect = props.collapsed ? style["ratio-2x5"] : "ratio-4x3";

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

		return { "margin-left": `${base[target] || 0}%` };
	})();
	const SkinImageURL = ((): string => {
		const skinId = skin.isDef ? 0 : skin.sid;
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

		const skinId = skin.isDef ? 0 : skin.sid;
		return `${AssetsRoot}/webm/HD/${unit.uid}_${skinId}_${skin.G && IsGoogle.value ? "G" : "O"}${postfix}.webm`;
	})();

	if (!skin.G && IsGoogle.value)
		IsGoogle.set(false);

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
		if (IsSimplified.value && IsBG.value)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.BS];
		else if (IsSimplified.value && !IsBG.value)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM._S];
		else if (!IsSimplified.value && IsBG.value)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.B_];
		else
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.__];
	})();

	return <div class={ style.SkinView }>
		<div class={ `ratio ${Aspect} ${style.SkinFull} ${props.collapsed ? style.Collapsed : ""}` }>
			<div>
				<div class={ style.FullBG } />
				<div class={ style.FullGroup }>
					<div>
						<img src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` } />
					</div>
				</div>
				<div class={ style.FullUnit }>
					{ SkinVideoURL
						? <video style={ ImageStyle } src={ SkinVideoURL } autoPlay muted loop />
						: <img style={ ImageStyle } src={ SkinImageURL } />
					}
				</div>

				{ !(skin.isPro || skin.isDef) && skin.price
					? <div class={ style.Price }>
						<img src={ `${AssetsRoot}/tuna.png` } />
						{ skin.price }
					</div>
					: <></>
				}

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

				{ skin.subset[SKIN_SUBSET_ENUM.D__]
					? <div
						class={ `${style.SkinToggle} ${style.Damaged}` }
						data-damaged={ IsDamaged.value ? 1 : 0 }
						onClick={ (): void => IsDamaged.set(!IsDamaged.value) }
					/>
					: <></>
				}
				{ AvailableS
					? <div
						class={ `${style.SkinToggle} ${style.Simplified}` }
						data-simplified={ IsSimplified.value ? 1 : 0 }
						onClick={ (): void => IsSimplified.set(!IsSimplified.value) }
					/>
					: <></>
				}
				{ AvailableBG
					? <div
						class={ `${style.SkinToggle} ${style.BG}` }
						data-bg={ IsBG.value ? 1 : 0 }
						onClick={ (): void => IsBG.set(!IsBG.value) }
					/>
					: <></>
				}
				{ skin.G
					? <div
						class={ `${style.SkinToggle} ${style.Platform}` }
						data-platform={ IsGoogle.value ? 1 : 0 }
						onClick={ (): void => IsGoogle.set(!IsGoogle.value) }
					/>
					: <></>
				}

				{ props.detailable
					? <>
						<div class={ style.Detail } data-bs-toggle="modal" data-bs-target="#UnitSkinViewDetail" />
						<div class="modal fade" tabIndex={ -1 } id="UnitSkinViewDetail">
							<div class="modal-dialog modal-xl modal-dialog-centered">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title">
											<Locale plain k={ skin.sid ? `UNIT_SKIN_${unit.uid}_${skin.sid}` : `UNIT_${unit.uid}` } />
										</h5>
										{ AvailableAnim // (!IsGoogle.value && skin.AV) || (IsGoogle.value && skin.AVG) // TODO
											? <div class="text-end flex-1 me-3">
												<div class="form-check form-switch">
													<label class="form-check-label">
														<input
															class="form-check-input"
															type="checkbox"
															checked={ IsAnimating.value }
															onClick={ (): void => IsAnimating.set(!IsAnimating.value) }
														/>
														<Locale k="UNIT_VIEW_SKIN_ANIMATION_SWITCH" />
													</label>
												</div>
											</div>
											: <></>
										}
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
									</div>
									<div class="modal-body">
										<SkinView unit={ unit } skin={ skin } animate={ IsAnimating.value } />
									</div>
								</div>
							</div>
						</div>
					</>
					: <></>
				}
			</div>
		</div>
	</div>;
};
export default SkinView;
