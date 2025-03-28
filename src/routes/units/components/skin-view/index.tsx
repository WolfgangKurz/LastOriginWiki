import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";

import { FACETYPE, SKIN_IN_PARTS } from "@/types/Enums";
import { SKIN_ANIM_SUBSET_ENUM, SKIN_METADATA_FLAGS, SKIN_SUBSET_ENUM, Unit, UnitSkin } from "@/types/DB/Unit";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { useLocale } from "@/libs/Locale";
import { useImageExtension } from "@/libs/ImageExtension";
import { AssetsRoot, CanPlayWebM, IsDev } from "@/libs/Const";
import { cn } from "@/libs/Class";

import { render2DModel } from "./2DModelRenderer";

import Locale from "@/components/locale";
import PopupBase from "@/components/popup/base";
import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import MergedVideo from "@/components/merged-video";
import Pinch from "@/components/pinch";

import PixiView from "./PixiView";
import GammaViewer from "./GammaViewer";

import style from "./style.module.scss";

const Spinner: FunctionalComponent = () => {
	return <svg width="1em" height="1em" viewBox="0 0 24 24">
		<g>
			<circle cx="12" cy="2.5" r="1.5" fill="currentColor" opacity="0.14" />
			<circle cx="16.75" cy="3.77" r="1.5" fill="currentColor" opacity="0.29" />
			<circle cx="20.23" cy="7.25" r="1.5" fill="currentColor" opacity="0.43" />
			<circle cx="21.5" cy="12" r="1.5" fill="currentColor" opacity="0.57" />
			<circle cx="20.23" cy="16.75" r="1.5" fill="currentColor" opacity="0.71" />
			<circle cx="16.75" cy="20.23" r="1.5" fill="currentColor" opacity="0.86" />
			<circle cx="12" cy="21.5" r="1.5" fill="currentColor" />
			<animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" />
		</g>
	</svg>;
};

interface SkinItem extends UnitSkin {
	isDef: boolean;
	isPro: boolean;
}

interface SkinViewProps {
	skin: SkinItem;
	unit: Unit | FilterableUnit;
	black?: boolean;
	hideGroup?: boolean;
	collapsed?: boolean;
	animate?: boolean;
}

const SkinView: FunctionalComponent<SkinViewProps> = (props) => {
	const [loc] = useLocale();
	const imageExt = useImageExtension();

	const unit = props.unit;
	const skin = props.skin;

	// const skinDirection = objState<"" | "horz" | "vert">("");

	const FullUnitEl = useRef<HTMLDivElement>(null);

	const [inPlusDownload, setInPlusDownload] = useState(false);

	const [face, setFace] = useState("");
	const [facePrefix, setFacePrefix] = useState("");
	const [faceList, setFaceList] = useState<string[]>([]);

	const [isCensored, setIsCensored] = useState(false);
	const [isDamaged, setIsDamaged] = useState(false);
	const [hideParts, setHideParts] = useState(false);
	const [hideBG, setHideBG] = useState(false);

	const [gammaPartAvailable, setGammaPartAvailable] = useState(false);
	const [gammaBGAvailable, setGammaBGAvailable] = useState(false);

	const [displayTouchCollider, setDisplayTouchCollider] = useState(false);

	const [cameraBoundaryAvailable, setCameraBoundaryAvailable] = useState(false);
	const [downloadPlusCameraBoundary, setDownloadPlusCameraBoundary] = useState(true);
	const downloadPlusAble = useMemo(
		() => !(skin.metadata.flags & (SKIN_METADATA_FLAGS.SPINE | SKIN_METADATA_FLAGS.GAMMA)) && !isDamaged,
		[skin.metadata.flags, isDamaged],
	);

	// const Aspect = props.collapsed ? style["ratio-2x5"] : "ratio-4x3";
	const Aspect = "ratio-2x4 ratio-lg-5x3";
	// const Aspect = "ratio-2x4";

	const SkinPostfix = useMemo(() => {
		const ret: string[] = [];
		if (isDamaged) ret.push("D");
		if (hideBG) ret.push("B");
		if (hideParts) ret.push("S");
		return (ret.length > 0 ? "_" : "") + ret.join("");
	}, [isDamaged, hideBG, hideParts]);
	const SkinImageURL = useMemo(() => {
		const skinId = skin.isDef ? 0 : skin.metadata.imageId;
		return [
			AssetsRoot,
			imageExt,
			"full",
			[
				unit.uid,
				"_",
				skinId,
				"_",
				skin.G && isCensored ? "G" : "O",
				SkinPostfix,
				".",
				imageExt,
			].join(""),
		].join("/");
	}, [unit.uid, skin, isCensored, SkinPostfix, imageExt]);
	const SkinImageDownloadFilename = useMemo(() => {
		const skinId = skin.isDef ? 0 : skin.metadata.imageId;
		return [
			AssetsRoot,
			"png/full",
			[
				unit.uid,
				"_",
				skinId,
				"_",
				skin.G && isCensored ? "G" : "O",
				SkinPostfix,
				".png",
			].join(""),
		].join("/");
	}, [unit.uid, skin, isCensored, SkinPostfix]);
	const SkinImageDownloadPlusFilename = useMemo(() => {
		const skinId = skin.isDef ? 0 : skin.metadata.imageId;
		return [
			unit.uid,
			"_",
			skinId,
			"_",
			skin.G && isCensored ? "G" : "O",
			SkinPostfix,
			"_",
			face,
			".png",
		].join("");
	}, [unit.uid, skin, face, isCensored, SkinPostfix]);

	const SkinVideoPostfix = useMemo(() => {
		let flag: SKIN_ANIM_SUBSET_ENUM = 0;
		const ret: string[] = [];
		if (hideBG) {
			flag |= SKIN_ANIM_SUBSET_ENUM.B_;
			ret.push("B");
		}
		if (hideParts) {
			flag |= SKIN_ANIM_SUBSET_ENUM._S;
			ret.push("S");
		}
		return [
			flag,
			(ret.length > 0 ? "_" : "") + ret.join(""),
		];
	}, [hideBG, hideParts]);
	const modelVideoId = useMemo((): string => {
		if (!props.collapsed && !props.animate) return "";
		if (isDamaged) return "";

		if (!skin.anim[SkinVideoPostfix[0]]) return "";

		const skinId = skin.isDef ? 0 : skin.metadata.imageId;
		return `${unit.uid}_${skinId}_${skin.G && isCensored ? "G" : "O"}${SkinVideoPostfix[1]}`;
	}, [
		props.collapsed,
		props.animate,
		unit.uid,
		skin,
		isCensored,
		isDamaged,
		SkinVideoPostfix,
	]);

	useEffect(() => { // Reset gamma hiding available, reset face info
		setGammaPartAvailable(false);
		setGammaBGAvailable(false);

		setFace("");
		setFacePrefix("");
		setFaceList([]);
	}, [props.unit.uid, props.skin.sid]);

	useEffect(() => {
		if (!skin.G && isCensored) // not have google
			setIsCensored(false);
	}, [skin.G, isCensored]);

	// skin mod adjust
	useEffect(() => {
		if (isDamaged) {
			if (hideParts && hideBG && !skin.subset[SKIN_SUBSET_ENUM.DBS]) {
				if (skin.subset[SKIN_SUBSET_ENUM.DB_])
					setHideBG(false);
				else if (skin.subset[SKIN_SUBSET_ENUM.D_S])
					setHideParts(false);
				else {
					setHideBG(false);
					setHideParts(false);
				}
			} else if (hideParts && !hideBG && !skin.subset[SKIN_SUBSET_ENUM.D_S])
				setHideParts(false);
			else if (hideBG && !hideParts && !skin.subset[SKIN_SUBSET_ENUM.DB_])
				setHideBG(false);
			else if (!hideBG && !hideParts && skin.subset[SKIN_SUBSET_ENUM.D__]) {
				setHideBG(false);
				setHideParts(false);
			} else if (!hideBG && !hideParts && !skin.subset[SKIN_SUBSET_ENUM.D__])
				setIsDamaged(false);
		} else {
			if (hideParts && hideBG && !(skin.subset[SKIN_SUBSET_ENUM._BS] || (gammaPartAvailable && gammaBGAvailable))) {
				if (skin.subset[SKIN_SUBSET_ENUM._B_] || gammaBGAvailable)
					setHideBG(false);
				else if (skin.subset[SKIN_SUBSET_ENUM.__S] || gammaPartAvailable)
					setHideParts(false);
				else {
					setHideBG(false);
					setHideParts(false);
				}
			} else if (hideParts && !hideBG && !(skin.subset[SKIN_SUBSET_ENUM.__S] || gammaPartAvailable))
				setHideParts(false);
			else if (hideBG && !hideParts && !(skin.subset[SKIN_SUBSET_ENUM._B_] || gammaBGAvailable))
				setHideBG(false);
		}
	}, [
		skin.subset,
		isDamaged,
		hideParts,
		hideBG,
		gammaPartAvailable,
		gammaBGAvailable,
	]);

	const DisplayGamma = useMemo( // NOTE: No animated damaged yet
		() => !!props.animate && !!(skin.metadata.flags & SKIN_METADATA_FLAGS.GAMMA) && !isDamaged,
		[props.animate, skin.metadata.flags, isDamaged],
	);

	const AvailableS = useMemo(() => !isDamaged
		? skin.subset[SKIN_SUBSET_ENUM.__S] || (skin.subset[SKIN_SUBSET_ENUM._BS] && hideBG) || (DisplayGamma && gammaPartAvailable)
		: skin.subset[SKIN_SUBSET_ENUM.D_S] || (skin.subset[SKIN_SUBSET_ENUM.DBS] && hideBG),
		[skin.subset, isDamaged, hideBG, DisplayGamma, gammaPartAvailable],
	);

	const AvailableBG = useMemo(() => !isDamaged
		? skin.subset[SKIN_SUBSET_ENUM._B_] || (skin.subset[SKIN_SUBSET_ENUM._BS] && hideParts) || (DisplayGamma && gammaBGAvailable)
		: skin.subset[SKIN_SUBSET_ENUM.DB_] || (skin.subset[SKIN_SUBSET_ENUM.DBS] && hideParts),
		[skin.subset, isDamaged, hideParts, DisplayGamma, gammaBGAvailable],
	);

	const AvailableAnim = useMemo(() => {
		if (skin.Spine) return true;

		if (hideParts && hideBG)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.BS];
		else if (hideParts && !hideBG)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM._S];
		else if (!hideParts && hideBG)
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.B_];
		else
			return skin.anim[SKIN_ANIM_SUBSET_ENUM.__];
	}, [skin.Spine, skin.anim, hideParts, hideBG]);

	const modelId = `${unit.uid}_N${skin.isDef ? "" : `S${skin.metadata.imageId}`}`;

	const DisplayMixed = useMemo(
		() => (skin.metadata.flags === (SKIN_METADATA_FLAGS["2DMODEL"] | SKIN_METADATA_FLAGS.SPINE)) && !!props.animate && !isDamaged,
		[skin.metadata.flags, props.animate, isDamaged],
	);
	const DisplaySpine = useMemo(
		() => !!(skin.metadata.flags & SKIN_METADATA_FLAGS.SPINE) && skin.Spine && (!!props.animate || !!props.collapsed) && !isDamaged,
		[skin.metadata.flags, props.animate, props.collapsed, isDamaged],
	);
	const Display2DModel = useMemo(
		() => (isDamaged || !!(skin.metadata.flags & SKIN_METADATA_FLAGS["2DMODEL"])) && (
			(!isDamaged && !!skin.metadata["2dmodel"]) ||
			(isDamaged && !!skin.metadata["2dmodel_dam"])
		),
		[isDamaged, skin.metadata.flags, skin.metadata["2dmodel"], skin.metadata["2dmodel_dam"]],
	);
	const DisplayVideo = useMemo(() => {
		return !!props.animate && !!modelVideoId;
	}, [props.animate, modelVideoId]);

	function download2DModel (filename: string, cropByCameraBoundary: boolean = false) {
		if (inPlusDownload) return;
		setInPlusDownload(true);

		render2DModel(cropByCameraBoundary)
			.then(canvas => {
				if (!canvas) {
					alert(
						loc["UNIT_VIEW_SKIN_DOWNLOADPLUS_FAILED"] ||
						"Failed to create the image.\nPlease try again, or use the regular download option."
					);
					setInPlusDownload(false);
					return;
				}
				canvas.toBlob(blob => {
					const uri = URL.createObjectURL(blob!);

					if (IsDev) {
						window.open(uri);
					} else {
						const anchor = document.createElement("a");
						anchor.href = uri;
						anchor.target = "_blank";
						anchor.download = filename;
						anchor.click();
					}

					setInPlusDownload(false);
				}, "image/png", 100);
			});
	}

	return <div class={ cn(style.SkinView, inPlusDownload && style.InPlusDownload) }>
		<div class={ `ratio ${Aspect} ${style.SkinFull} ${props.collapsed ? style.Collapsed : ""}` }>
			<div>
				<div class={ `${style.FullBG} ${props.black ? style.Black : ""}` } />
				<div class={ `${style.FullGroup} ${props.hideGroup ? style.HideGroup : ""}` }>
					<div>
						<img src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` } />
					</div>
				</div>
				<div
					class={ cn(style.FullUnit, style.FullUnitMarginless) }
					ref={ FullUnitEl }
				>
					{ DisplayGamma && !!props.collapsed && !!props.animate
						? <GammaViewer
							key="skin-gamma-viewer"

							model={ `${isCensored ? "G" : "O"}/2dmodel_${modelId}` }
							displayTouchCollider={ displayTouchCollider }
							hidePart={ hideParts }
							hideBG={ hideBG }

							face={ facePrefix + face }
							onFaceList={ (list, prefix) => {
								setFaceList(list);
								setFacePrefix(prefix);

								if (list.includes("idle"))
									setFace("idle");
								else {
									const listU = list.map(f => f.toUpperCase());
									for (const ft of Object.keys(FACETYPE)) {
										const index = listU.indexOf(ft);
										if (index >= 0) {
											setFace(list[index]);
											break;
										}
									}
								}
							} }
							onPartAvailable={ v => setGammaPartAvailable(v) }
							onBGAvailable={ v => setGammaBGAvailable(v) }
						/>
						: (DisplayMixed || DisplaySpine || Display2DModel || DisplayVideo) && !!props.animate
							? <PixiView
								type={ DisplayMixed
									? "mixed"
									: DisplaySpine
										? "spine"
										: Display2DModel
											? "2dmodel"
											: modelVideoId
												? "video"
												: "none"
								}
								U2DModelMetadata={ skin.metadata }

								uid={ modelId }
								vid={ modelVideoId }
								google={ isCensored }
								damaged={ isDamaged }

								displayTouchCollider={ displayTouchCollider }
								hidePart={ hideParts }
								hideBG={ hideBG }

								face={ facePrefix + face }
								onFaceList={ (list, prefix) => {
									setFaceList(list);
									setFacePrefix(prefix);

									if (list.includes("Idle"))
										setFace("Idle");
									else {
										const listU = list.map(f => f.toUpperCase());
										for (const ft of Object.keys(FACETYPE)) {
											const index = listU.indexOf(ft);
											if (index >= 0) {
												setFace(list[index]);
												break;
											}
										}
									}
								} }

								onCameraBoundary={ v => setCameraBoundaryAvailable(v) }
							/>
							: DisplayVideo && modelVideoId.length > 0 && !!props.animate
								? CanPlayWebM()
									? <video
										autoPlay muted loop
										src={ `${AssetsRoot}/webm/HD/${modelVideoId}.webm` }
									/>
									: <MergedVideo
										src={ `${AssetsRoot}/webm/HD.Legacy/${modelVideoId}.mp4` }
										type="video/mp4"
									/>
								: <Pinch
									minScale={ 0.5 }
									maxScale={ 3 }
								>
									<img src={ SkinImageURL } />
								</Pinch>
					}
				</div>

				{ modelVideoId && !!props.animate
					? <a
						class={ `${style.SkinToggle} ${style.Download}` }
						href={ `${AssetsRoot}/webm/HD/${modelVideoId}.webm` } // download webm only
						download={ `${modelVideoId}.webm` }
						target="_blank"
					>
						<svg width="1em" height="1em" viewBox="0 0 24 24">
							<path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
						</svg>
					</a>
					: <>
						{ downloadPlusAble && cameraBoundaryAvailable && <BootstrapTooltip
							class={ `${style.SkinToggle} ${style.DownloadPlusCameraBoundary}` }
							tooltipClass={ style.DownloadTooltipContainer }
							placement="left"
							content={ <span class={ cn(style.DownloadTooltip, "word-keep") }>
								<Locale raw k="UNIT_VIEW_SKIN_DOWNLOADPLUS_CAMERABOUNDARY" />
							</span> }
						>
							<a
								class={ cn(
									style.DownloadContent,
									style.ToggleButton,
									downloadPlusCameraBoundary && style.Active,
								) }
								href="#"
								onClick={ e => {
									e.preventDefault();
									e.stopImmediatePropagation();
									setDownloadPlusCameraBoundary(v => !v);
								} }
							>
								{/* <Icons.Crop /> */ }
								<Icons.AspectRatioFill />
							</a>
						</BootstrapTooltip> }
						{ downloadPlusAble && <BootstrapTooltip
							class={ `${style.SkinToggle} ${style.DownloadPlus}` }
							tooltipClass={ style.DownloadTooltipContainer }
							placement="left"
							content={ <span class={ cn(style.DownloadTooltip, "word-keep") }>
								<Locale raw={ false } k="UNIT_VIEW_SKIN_DOWNLOADPLUS" />
							</span> }
						>
							<a
								class={ cn(style.DownloadContent, style.DownloadPlusContent) }
								href="#"
								onClick={ e => {
									e.preventDefault();
									e.stopImmediatePropagation();
									download2DModel(SkinImageDownloadPlusFilename, downloadPlusCameraBoundary);
								} }
							>
								<Spinner />
								<svg width="1em" height="1em" viewBox="0 0 24 24">
									<path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
									<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M 16 6 L 20 6 M 18 4 L 18 8" />
								</svg>
							</a>
						</BootstrapTooltip> }
						<BootstrapTooltip
							class={ `${style.SkinToggle} ${style.Download}` }
							tooltipClass={ style.DownloadTooltipContainer }
							placement="left"
							content={ <span class={ cn(style.DownloadTooltip, "word-keep") }>
								<Locale raw={ false } k="UNIT_VIEW_SKIN_DOWNLOAD" />
							</span> }
						>
							<a
								class={ style.DownloadContent }
								href={ SkinImageDownloadFilename }
								download={ SkinImageDownloadFilename.substring(SkinImageDownloadFilename.lastIndexOf("/") + 1) }
								target="_blank"
							>
								<svg width="1em" height="1em" viewBox="0 0 24 24">
									<path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
								</svg>
							</a>
						</BootstrapTooltip>
					</>
				}

				{ !(skin.isPro || skin.isDef) && skin.price
					? <div class={ style.Price }>
						<img src={ `${AssetsRoot}/tuna.png` } />
						{ skin.price }
					</div>
					: <></>
				}

				<div class={ style.SkinPropMarriage }>
					{ unit.marriageVoice
						? <BootstrapTooltip
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

				{ skin.subset[SKIN_SUBSET_ENUM.D__] && <div
					class={ `${style.SkinToggle} ${style.Damaged}` }
					data-damaged={ isDamaged ? 1 : 0 }
					onClick={ (): void => setIsDamaged(!isDamaged) }
				/> }
				{ AvailableS && <div
					class={ `${style.SkinToggle} ${style.Simplified}` }
					data-simplified={ hideParts ? 1 : 0 }
					onClick={ (): void => setHideParts(!hideParts) }
				/> }
				{ AvailableBG && <div
					class={ `${style.SkinToggle} ${style.BG}` }
					data-bg={ hideBG ? 1 : 0 }
					onClick={ (): void => setHideBG(!hideBG) }
				/> }
				{ skin.G && <div
					class={ `${style.SkinToggle} ${style.Platform}` }
					data-platform={ isCensored ? 1 : 0 }
					onClick={ (): void => setIsCensored(!isCensored) }
				/> }
				{ (DisplayMixed || DisplaySpine || DisplayGamma) && !!props.animate && <div
					class={ `${style.SkinToggle} ${style.Touch}` }
					data-touch={ displayTouchCollider ? 1 : 0 }
					onClick={ (): void => setDisplayTouchCollider(!displayTouchCollider) }
				/> }

				{ faceList.length > 0
					? <div class={ cn(style.FaceList, props.collapsed && style.FaceListMargin) }>
						<select
							class={ `form-select form-select-sm ${style.FaceList}` }
							value={ face }
							onChange={ (e): void => {
								const value = (e.target as HTMLSelectElement).value;
								setFace(value);
							} }
						>
							{ faceList.map(f => {
								const ft = FACETYPE[f.toUpperCase()];
								return <option value={ f }>
									{ ft
										? <Locale k={ `FACE_TYPE_${ft}` } />
										: f.toUpperCase()
									}
								</option>;
							}) }
						</select>
						<Icons.EmojiSmileFill />
					</div>
					: <div class={ cn(style.FaceList, style.NoFace) }>
						<Locale k="UNIT_VIEW_SKIN_FACE_EMPTY" />
					</div>
				}
			</div>
		</div>
	</div>;
};
export default SkinView;
