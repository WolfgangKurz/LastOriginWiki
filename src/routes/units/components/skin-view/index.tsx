import { FunctionalComponent } from "preact";

import { Unit, UnitSkin } from "@/types/DB/Unit";

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
	const IsGoogle = objState<boolean>(false);

	const IsAnimating = objState<boolean>(false);

	const Aspect = props.collapsed ? style["ratio-2x5"] : "ratio-4x3";

	const ImageStyle = ((): Record<string, string> => {
		if (!props.collapsed) return {};

		const base = skin.offset;
		// const platform = IsGoogle.value ? "google" : "normal";
		const target = IsDamaged.value && IsSimplified.value
			? "x"
			: IsDamaged.value
				? "d"
				: IsSimplified.value
					? "s"
					: "n";

		return { "margin-left": `${base[target]}%` };
	})();
	const SkinImageURL = ((): string => {
		const skinId = skin.isDef ? 0 : skin.sid;
		const ext = imageExt;

		const postfix = ((): string => {
			const ret: string[] = [];
			if (IsDamaged.value) ret.push("D");
			if (IsSimplified.value) ret.push("S");
			return (ret.length > 0 ? "_" : "") + ret.join("");
		})();

		return `${AssetsRoot}/${ext}/full/${unit.uid}_${skinId}_${skin.G && IsGoogle.value ? "G" : "O"}${postfix}.${ext}`;
	})();
	const SkinVideoURL = ((): string => {
		if (!props.collapsed && !props.animate) return "";

		if ((!IsGoogle.value && !skin.AV) || (IsGoogle.value && !skin.AVG)) return "";
		if (IsDamaged.value || IsSimplified.value) return "";

		const skinId = skin.isDef ? 0 : skin.sid;

		const postfix = ((): string => {
			const ret: string[] = [];
			if (IsDamaged.value) ret.push("D");
			if (IsSimplified.value) ret.push("S");
			return (ret.length > 0 ? "_" : "") + ret.join("");
		})();

		return `${AssetsRoot}/webm/HD/${unit.uid}_${skinId}_${skin.G && IsGoogle.value ? "G" : "O"}${postfix}.webm`;
	})();

	const ssid = skin && skin.sid
		? skin.sid >= 20
			? `S${skin.sid - 20}`
			: skin.sid?.toString()
		: "";

	if (!skin.G && IsGoogle.value)
		IsGoogle.set(false);

	if (!skin.X && IsDamaged.value && IsSimplified.value) {
		if (skin.S)
			IsDamaged.set(false);
		else
			IsSimplified.set(false);
	} else if (!skin.D && IsDamaged.value && !IsSimplified.value)
		IsDamaged.set(false);
	else if (!skin.S && IsSimplified.value && !IsDamaged.value)
		IsSimplified.set(false);

	const categories = skin.category.filter(x => x && x !== "ALL");

	return <div class="unit-skin-view">
		<div class={ `ratio ${Aspect} unit-full ${props.collapsed ? "unit-full-collapsed" : ""}` }>
			<div>
				<div class="unit-full-bg" />
				<div class="unit-full-group">
					<div>
						<img src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` } />
					</div>
				</div>
				<div class="unit-full-unit">
					{ SkinVideoURL
						? <video style={ ImageStyle } src={ SkinVideoURL } autoPlay muted loop />
						: <img style={ ImageStyle } src={ SkinImageURL } />
					}
				</div>

				{ !(skin.isPro || skin.isDef) && skin.price
					? <div class="skin-price">
						<img src={ `${AssetsRoot}/tuna.png` } />
						{ skin.price }
					</div>
					: <></>
				}

				<div class="unit-skin-marry">
					{ unit.marriageVoice ? <BootstrapTooltip
						placement="top"
						content={ <span class="word-keep"><Locale k="UNIT_VIEW_SKIN_MARRIAGE" /></span> }
					>
						<div class="position-relative alert">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/marriage.png` } />
						</div>
					</BootstrapTooltip>
						: <div class="position-relative alert invalid">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/marriage.png` } />
						</div>
					}
				</div>
				<div class="unit-skin-animated">
					{ skin.A
						? <BootstrapTooltip
							placement="top"
							content={ <span class="word-keep">
								<Locale k={ skin.Stage ? "UNIT_VIEW_SKIN_L2D_PLUS" : "UNIT_VIEW_SKIN_L2D" } />
							</span> }
						>
							<div class="position-relative alert">
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/l2d${skin.Stage ? "p" : ""}.png` } />
							</div>
						</BootstrapTooltip>
						: <div class="position-relative alert invalid">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/l2d.png` } />
						</div>
					}
				</div>
				<div class="unit-skin-voice">
					{ skin.V
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
						: <div class="position-relative alert invalid">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/voice.png` } />
						</div>
					}
				</div>
				<div class="unit-skin-effect">
					{ skin.E
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
						: <div class="position-relative alert invalid">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/fx.png` } />
						</div>
					}
				</div>
				<div class="unit-skin-motion">
					{ skin.M
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
						: <div class="position-relative alert invalid">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/sd.png` } />
						</div>
					}
				</div>
				<div class="unit-skin-damaged">
					{ skin.D
						? <BootstrapTooltip
							placement="top"
							content={ <span class="word-keep"><Locale k="UNIT_VIEW_SKIN_DAMAGED" /></span> }
						>
							<div class="position-relative alert">
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/damaged.png` } />
							</div>
						</BootstrapTooltip>
						:
						<div class="position-relative alert invalid">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/damaged.png` } />
						</div>
					}
				</div>
				<div class="unit-skin-bg">
					{ skin.BG
						? <BootstrapTooltip
							placement="top"
							content={ <span class="word-keep"><Locale k="UNIT_VIEW_SKIN_BG" /></span> }
						>
							<div class="position-relative alert">
								<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/object.png` } />
							</div>
						</BootstrapTooltip>
						:
						<div class="position-relative alert invalid">
							<img class={ style.SkinAttrIcon } src={ `${AssetsRoot}/skin/object.png` } />
						</div>
					}
				</div>

				{ (!IsSimplified.value && skin.D) || (IsSimplified.value && skin.X)
					? <div class="skin-toggle skin-toggle-damaged"
						data-damaged={ IsDamaged.value ? 1 : 0 }
						onClick={ (): void => IsDamaged.set(!IsDamaged.value) }
					/>
					: <></>
				}
				{ (!IsDamaged.value && skin.S) || (IsDamaged.value && skin.X)
					? <div class="skin-toggle skin-toggle-simplified"
						data-simplified={ IsSimplified.value ? 1 : 0 }
						onClick={ (): void => IsSimplified.set(!IsSimplified.value) }
					/>
					: <></>
				}
				{ skin.G
					? <div
						class="skin-toggle skin-toggle-platform"
						data-platform={ IsGoogle.value ? 1 : 0 }
						onClick={ (): void => IsGoogle.set(!IsGoogle.value) }
					/>
					: <></>
				}

				{ props.detailable
					? <>
						<div class="skin-detail" data-bs-toggle="modal" data-bs-target="#unit-skin-view-detail" />
						<div class="modal fade" tabIndex={ -1 } id="unit-skin-view-detail">
							<div class="modal-dialog modal-xl modal-dialog-centered">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title">
											<Locale plain k={ skin.sid ? `UNIT_SKIN_${unit.uid}_${skin.sid}` : `UNIT_${unit.uid}` } />
										</h5>
										{ (!IsGoogle.value && skin.AV) || (IsGoogle.value && skin.AVG)
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

		{ props.collapsed
			? <>
				{ skin.artist || categories.length > 0
					? <div class="alert alert-primary py-2">
						{ categories.length > 0
							? <div class="mb-1">
								{ categories.map(x => <span class="badge bg-success me-1">
									<Locale k={ `SKIN_CATEGORY_${x}` } />
								</span>) }
							</div>
							: <></>
						}

						{ skin.artist
							? <>
								<Locale k="UNIT_VIEW_ILLUSTRATOR" /> : { skin.artist }
							</>
							: <></>
						}
					</div>
					: <></>
				}
				{ skin.sid && !skin.isPro
					? <div class={ `card mb-2 skin-name-desc ${!skin.artist ? "mt-2" : ""}` }>
						<div class="card-header">
							<Locale k={ `CONSUMABLE_Skin_${unit.uid}_${ssid}` } plain />
						</div>
						<div class="card-body">
							<Locale k={ `CONSUMABLE_DESC_Skin_${unit.uid}_${skin.sid}` } plain />
						</div>
					</div>
					: <></>
				}
			</>
			: <></>
		}
	</div>;
};
export default SkinView;
