import { FunctionComponent } from "preact";

import { objState } from "@/libs/State";
import { AssetsRoot } from "@/libs/Const";
import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";
import UnitFace from "@/components/unit-face";

import SkinView from "../../components/skin-view";
import UnitFace2 from "../../components/unit-face2";

import { SubpageProps } from "..";

import style from "../style.module.scss";

const SkinTab: FunctionComponent<SubpageProps> = ({ display, unit, skinIndex, SkinList }) => {
	const skin = SkinList[skinIndex.value];

	const ssid = skin && skin.sid
		? skin.sid >= 20
			? `S${skin.sid - 20}`
			: skin.sid?.toString()
		: "";

	const categories = skin.category.filter(x => x && x !== "ALL");

	const IsBlackBG = objState<boolean>(false);
	const HideGroup = objState<boolean>(false);

	return <div style={ { display: display ? "" : "none" } }>
		<div class={ `flex-nowrap ${style.SkinTabs}` }>
			<ul class="nav nav-tabs justify-content-start">
				{ SkinList.map((skin, index) => <li class="nav-item">
					<a
						href="#"
						class={ [
							"nav-link",
							isActive(skinIndex.value === index),
							skinIndex.value === index ? `rarity-${skin.isPro ? "SS" : unit.rarity}-force text-dark` : "text-dark",
						].join(" ") }
						onClick={ (e): void => {
							e.preventDefault();
							skinIndex.set(index);
						} }
					>
						<UnitFace uid={ unit.uid } skin={ skin.sid || 0 } size="64" />
						<br />

						<span>
							{ skin.sid === null
								? <Locale plain k={ `UNIT_${unit.uid}` } />
								: <Locale plain k={ `UNIT_SKIN_${unit.uid}_${skin.sid}` } /> }
						</span>

						<br />

						{ skin.isPro
							? index === skinIndex.value
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
									? <span class="badge bg-danger">
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

		{ skin.sid && !skin.isPro
			? <div class={ `card mb-2 mt-3 ${style.SkinNameDesc}` }>
				<div class="card-header">
					<Locale plain k={ `CONSUMABLE_Skin_${unit.uid}_${ssid}` } />
				</div>
				<div class="card-body">
					<Locale plain k={ `CONSUMABLE_DESC_Skin_${unit.uid}_${skin.sid}` } fallback="" />
				</div>
			</div>
			: <></>
		}
		<div class="row pt-3">
			<div class="col-12 col-lg-auto">
				<div class="p-2 d-inline-block d-lg-block">
					<UnitFace uid={ unit.uid } skin={ SkinList[skinIndex.value].sid || 0 } size="88" />
				</div>

				<div class="p-2 d-inline-block d-lg-block">
					<UnitFace
						uid={ unit.uid }
						skin={ SkinList[skinIndex.value].sid || 0 }
						sd
						size="88"
					/>
				</div>

				<div class="p-2">
					{ skin.artist || categories.length > 0
						? <div class="alert alert-primary py-2">
							{ categories.length > 0
								? <div class="mb-1">
									{ categories.map(x => <span class="badge bg-success me-1">
										<Locale plain k={ `SKIN_CATEGORY_${x}` } />
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
				</div>

				<ul class="list-group text-start">
					<li class="list-group-item">
						<div class="form-check form-switch">
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
					</li>
					<li class="list-group-item">
						<div class="form-check form-switch">
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
					</li>
				</ul>
			</div>
			<div class="col">
				{ SkinList[skinIndex.value]
					? <SkinView
						unit={ unit }
						skin={ SkinList[skinIndex.value] }
						black={ IsBlackBG.value }
						hideGroup={ HideGroup.value }
						animate
						collapsed
						detailable
					/>
					: <></> }

				<div class="p-2">
					{ SkinList[skinIndex.value].facelist.map(fid => <UnitFace2
						uid={ unit.uid }
						type={ fid }
						skin={ SkinList[skinIndex.value].sid || 0 }
						size="120"
					/>) }
				</div>
			</div>
		</div>
	</div>;
};
export default SkinTab;