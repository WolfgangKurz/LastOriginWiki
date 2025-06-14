import { FunctionComponent } from "preact";
import { useLayoutEffect, useMemo, useState } from "preact/hooks";
import { Link } from "preact-router";

import { AssetsRoot } from "@/libs/Const.1";
import { SkillVideo, SkinBanners } from "@/libs/Const.2";
import { BuildClass, cn } from "@/libs/Class";
import { FormatDate, isActive, map } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";
import { useLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import RarityBadge from "@/components/rarity-badge";
import UnitFace from "@/components/unit-face";

import SkinView from "../../components/skin-view";
import UnitFace2 from "../../components/unit-face2";

import { SubpageProps } from "..";

import style from "./style.module.scss";
import { ArtistLinks } from "@/libs/Const.3";

const SkinTab: FunctionComponent<SubpageProps> = ({ display, unit, skinIndex, SkinList, onSkinIndexChange }) => {
	if (!display) return <></>;

	const [loc] = useLocale();

	const skin = useMemo<typeof SkinList[0] | undefined>(() => SkinList[skinIndex], [SkinList, skinIndex]);
	const ssid = useMemo(() => {
		return skin && skin.sid
			? Math.floor(skin.sid / 10) === 2
				? `S${skin.sid - 20}`
				: skin.sid.toString()
			: "";
	}, [skin, skin?.sid]);

	const categories = useMemo(() => skin ? skin.category.filter(x => x && x !== "ALL") : [], [skin]);
	const SkinKey = useMemo(() => `${unit.uid}_${skin?.sid || 0}`, [unit, skin]);

	const [shopPopupType, setShopPopupType] = useState<"O" | "G">("O");
	const [currentSkillVideo, setCurrentSkillVideo] = useState("");
	const [currentSkillVideoPlatform, setCurrentSkillVideoPlatform] = useState<"" | "O" | "G">("");

	const [IsBlackBG, setIsBlackBG] = useState<boolean>(false);
	const [HideGroup, setHideGroup] = useState<boolean>(false);
	const [EnableAnimation, setEnableAnimation] = useState<boolean>(true);

	function convertVideoName (sid: string): string {
		const offset = sid.indexOf(".Skill");
		if (offset >= 0) return sid.substring(offset + 6);
		return sid;
	}

	const SkinLink = useMemo((): string => {
		const loc = window.location;
		return `${loc.origin}/units/${unit.uid}/s${skin?.sid || 0}`;
	}, [skin?.sid]);

	const skillVideoKey = useMemo(() => `${unit.uid}_${skin && skin.sid || 0}`, [unit.uid, skin]);
	useLayoutEffect(() => {
		if ((skillVideoKey in SkillVideo) && !SkillVideo[skillVideoKey].includes(currentSkillVideo)) {
			if (SkillVideo[skillVideoKey][0] === true) {
				setCurrentSkillVideoPlatform("O");
				setCurrentSkillVideo(SkillVideo[skillVideoKey][1] as string);
			} else {
				setCurrentSkillVideoPlatform("");
				setCurrentSkillVideo(SkillVideo[skillVideoKey][0]);
			}
		}
	}, [skillVideoKey]);

	function compileArtist (artist: string): preact.ComponentChildren {
		return artist.split("\n")
			.map(a => {
				if (a.includes(":")) {
					const o = a.indexOf(":");
					const tag = a.substring(0, o);
					const body = a.substring(o + 1);
					return <Locale k={ `UNIT_VIEW_ILLUSTRATOR_TAG_${tag}` } p={ [body] } />;
				}

				const linked = ArtistLinks[a];
				if (linked) {
					return <div class={ style.ArtistLinks }>
						<div class={ style.ArtistName }>{ a }</div>
						<div class={ style.Links }>
							{ map(linked, (v, k) => <a href={ v! } target="_blank">
								<img class={ style.BrandIcon } src={ `${AssetsRoot}/ui/brand/${k.toLowerCase()}.png` } />
							</a>) }
						</div>
					</div>;
				}
				return <div class={ style.ArtistLinks }>
					<div class={ style.ArtistName }>{ a }</div>
				</div>;
			});
	}

	function ParseDesc (key: string): preact.VNode[] {
		const locKey = `CONSUMABLE_DESC_${key}`;
		const desc = loc[locKey] || "";

		if (desc.length === 0) return [];
		return ParseDescriptionText(
			desc.replace(/&([lg]t);/g, (_, p1) => p1 === "lt" ? "<" : ">")
		);
	}

	return <div style={ { display: display ? "" : "none" } }>
		<div class={ `flex-nowrap ${style.SkinTabs}` }>
			<ul class="nav nav-tabs justify-content-start">
				{ SkinList.map((skin, index) => <li class="nav-item">
					<a
						href="#"
						class={ [
							"nav-link",
							isActive(skinIndex === index),
							skinIndex === index
								? `rarity-${skin.isPro ? "SS" : unit.rarity}-force text-dark`
								: "text-dark",
						].join(" ") }
						onClick={ (e): void => {
							e.preventDefault();
							onSkinIndexChange(index);
						} }
					>
						<UnitFace uid={ unit.uid } skin={ skin.metadata.iconId ?? skin.metadata.imageId ?? 0 } size="64" />
						<br />

						<span>
							{ skin.sid === null
								? <Locale plain k={ `UNIT_${unit.uid}` } />
								: <Locale plain k={ `UNIT_SKIN_${unit.uid}_${skin.sid}` } /> }
						</span>

						<br />

						{ skin.isPro
							? index === skinIndex
								? <span class="badge bg-light text-dark me-1">
									<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
								</span>
								: <RarityBadge rarity="SS" class="me-1">
									<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
								</RarityBadge>
							: skin.sid === null
								? <span class="badge bg-success">
									<Locale k="UNIT_VIEW_SKIN_BADGE_DEFAULT" />
								</span>
								: !skin.price
									? skin.priceEx === "Exchange"
										? <span class="badge bg-substory">
											<Locale k="UNIT_VIEW_SKIN_BADGE_EXCHANGE" />
										</span>
										: <span class="badge bg-danger">
											<Locale k="UNIT_VIEW_SKIN_BADGE_NOTFORSALE" />
										</span>
									: <span class={ `badge bg-warning text-dark ${style.SkinPrice}` }>
										<img src={ `${AssetsRoot}/tuna.png` } />
										{ skin.price }
									</span>
						}
					</a>
				</li>) }
			</ul>
		</div>

		{ skin && skin.sid && !skin.isPro
			? <div class={ `card mt-3 ${style.SkinNameDesc}` }>
				<div class="card-header">
					<Locale plain k={ skin.metadata.consumableKey
						? `CONSUMABLE_${skin.metadata.consumableKey}`
						: `CONSUMABLE_Skin_${unit.uid}_${ssid}`
					} />
				</div>
				<div class="card-body">
					{ ParseDesc(skin.metadata.consumableKey || `Skin_${unit.uid}_${skin.sid}`) }
				</div>
			</div>
			: <></>
		}

		<div class="mt-2">
			<Link href={ SkinLink }>
				<small>{ SkinLink }</small>
			</Link>
		</div>

		<div class="row pt-3">
			<div class="col-12 col-lg-auto">
				<div class="row gx-0">
					<div class="col-auto me-2">
						<div class="pb-2">
							<UnitFace
								uid={ unit.uid }
								skin={ skin?.metadata.iconId ?? skin?.metadata.imageId ?? 0 }
								size="88"
								raw
							/>
						</div>
						<div class="pb-2">
							<UnitFace
								uid={ unit.uid }
								skin={ skin?.metadata.tbarId ?? skin?.metadata.imageId ?? 0 }
								sd
								size="88"
								raw
							/>
						</div>
					</div>

					<div class="col">
						{ categories.length > 0
							? <div class="alert alert-secondary py-2">
								<div class="mb-1">
									<Locale k="UNIT_SKIN_CATEGORY" />
								</div>
								{ categories.length > 0
									? <div class="mb-1">
										{ categories.map(x => <span class="badge bg-success me-1">
											<Locale plain k={ `SKIN_CATEGORY_${x}` } />
										</span>) }
									</div>
									: <></>
								}
							</div>
							: <></>
						}

						{ skin && skin.artist
							? <div class="alert alert-primary py-2">
								<div class="mb-1">
									<Locale k="UNIT_VIEW_ILLUSTRATOR" />
								</div>
								{ skin.artist === "???"
									? <BootstrapTooltip content={ <Locale k="UNIT_VIEW_ILLUSTRATOR_HIDDEN_TOOLTIP" /> }>
										<span class={ `badge ${style.IllustratorHidden}` }>
											<Locale k="UNIT_VIEW_ILLUSTRATOR_HIDDEN" />

											<Icons.QuestionCircleFill class="ms-1" />
										</span>
									</BootstrapTooltip>
									: compileArtist(skin.artist)
								}
							</div>
							: <></>
						}

						{ skin?.releaseDate
							? <div class="alert alert-warning text-dark py-2">
								<div class="mb-1">
									<Locale k="UNIT_VIEW_RELEASEDATE" />
								</div>
								<div class="mb-1">
									<span class="badge bg-warning text-dark">
										{ FormatDate(new Date(skin.releaseDate)) }
									</span>
								</div>
							</div>
							: <></>
						}
					</div>
				</div>

				<ul class="list-group text-start mb-2">
					<li class="list-group-item">
						<div class="form-check form-switch">
							<label class="form-check-label">
								<input
									class="form-check-input"
									type="checkbox"
									checked={ IsBlackBG }
									onClick={ (): void => setIsBlackBG(!IsBlackBG) }
								/>

								<Icons.PaintBucket class={ cn(style.SkinViewerOptionIcon, "me-1") } />
								<Locale k="UNIT_VIEW_SKIN_BLACKBG_SWITCH" />
							</label>
						</div>
					</li>
					<li class="list-group-item">
						<div class="form-check form-switch">
							<label class="form-check-label">
								<input
									class="form-check-input"
									type="checkbox"
									checked={ HideGroup }
									onClick={ (): void => setHideGroup(!HideGroup) }
								/>

								<Icons.Transparency class={ cn(style.SkinViewerOptionIcon, "me-1") } />
								<Locale k="UNIT_VIEW_SKIN_HIDEGROUP_SWITCH" />
							</label>
						</div>
					</li>
					<li class="list-group-item">
						<div class="form-check form-switch">
							<label class="form-check-label">
								<input
									class="form-check-input"
									type="checkbox"
									checked={ EnableAnimation }
									onClick={ (): void => setEnableAnimation(!EnableAnimation) }
								/>

								<Icons.PlayCircleFill class={ cn(style.SkinViewerOptionIcon, "me-1") } />
								<Locale k="UNIT_VIEW_SKIN_ANIMATION_SWITCH" />
							</label>
						</div>
					</li>
				</ul>

				<div id="___TEST" style={ { textAlign: "left", whiteSpace: "pre-wrap" } } />
			</div>
			<div class="col">
				{ skin
					? <SkinView
						unit={ unit }
						skin={ skin }
						black={ IsBlackBG }
						hideGroup={ HideGroup }
						animate={ EnableAnimation }
						collapsed
					/>
					: <></> }

				<div class="p-2">
					{ skin?.facelist.map(fid => <UnitFace2
						uid={ unit.uid }
						type={ fid }
						skin={ skin.metadata.imageId ?? 0 }
						size="120"
					/>) }
				</div>

				{ SkinBanners.includes(SkinKey) && <>
					<div class="d-flex align-items-start">
						<div class={ BuildClass("nav", "flex-column", "nav-tabs", style.VerticalTabs) }>
							<button
								class={ BuildClass("nav-link", isActive(shopPopupType === "O")) }
								onClick={ e => {
									e.preventDefault();
									setShopPopupType("O");
								} }
							>
								<span class={ style.OneStoreIcon } />
							</button>
							<button
								class={ BuildClass("nav-link", isActive(shopPopupType === "G")) }
								onClick={ e => {
									e.preventDefault();
									setShopPopupType("G");
								} }
							>
								<span class={ style.PlayStoreIcon } />
							</button>
						</div>
						<div class="tab-content">
							<img
								class={ style.SkinBanner }
								src={ `${AssetsRoot}/skin/${shopPopupType === "O" ? "banners" : "banners_G"}/${SkinKey}.jpg` }
							/>
						</div>
					</div>
				</> }

				{ (skillVideoKey in SkillVideo) && <>
					<div class="mt-2">
						<div class={ BuildClass("nav", "nav-tabs") }>
							{ SkillVideo[skillVideoKey][0] === true
								? (SkillVideo[skillVideoKey].slice(1) as string[])
									.flatMap(sid => [
										<button
											class={ BuildClass(
												"nav-link",
												"text-dark",
												isActive(
													currentSkillVideo === sid && currentSkillVideoPlatform === "O",
													"active",
													"opacity-75",
												)
											) }
											onClick={ e => {
												e.preventDefault();
												setCurrentSkillVideo(sid);
												setCurrentSkillVideoPlatform("O");
											} }
										>
											<span class={ BuildClass("align-bottom", "me-1", style.OneStoreIcon) } />
											Active { convertVideoName(sid) }
										</button>,
										<button
											class={ BuildClass(
												"nav-link",
												"text-dark",
												isActive(
													currentSkillVideo === sid && currentSkillVideoPlatform === "G",
													"active",
													"opacity-75",
												)
											) }
											onClick={ e => {
												e.preventDefault();
												setCurrentSkillVideo(sid);
												setCurrentSkillVideoPlatform("G");
											} }
										>
											<span class={ BuildClass("align-bottom", "me-1", style.PlayStoreIcon) } />
											Active { convertVideoName(sid) }
										</button>
									])
								: SkillVideo[skillVideoKey].map(sid => <button
									class={ BuildClass("nav-link", isActive(currentSkillVideo === sid)) }
									onClick={ e => {
										e.preventDefault();
										setCurrentSkillVideo(sid);
										setCurrentSkillVideoPlatform("");
									} }
								>
									Active { convertVideoName(sid) }
								</button>)
							}
						</div>
						<div class="tab-content">
							<video
								class="w-100"
								controls
								src={ [
									AssetsRoot,
									"videos",
									currentSkillVideo +
									(currentSkillVideoPlatform.length > 0 ? `.${currentSkillVideoPlatform}` : "") +
									".mp4"
								].join("/") }
							/>
						</div>
					</div>
				</> }
			</div>
		</div >
	</div >;
};
export default SkinTab;
