import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import { route } from "preact-router";

import { SKIN_SUBSET_ENUM, UnitSkinEntity } from "@/types/DB/Unit";
import { SKIN_IN_PARTS } from "@/types/Enums";
import { UnitsListProps } from "..";

import { AssetsRoot } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { useLocale } from "@/libs/Locale";
import { BuildClass } from "@/libs/Class";

import Locale from "@/components/locale";
import Badge from "@/components/Badge";
import UnitFace from "@/components/unit-face";
import RarityBadge from "@/components/rarity-badge";
import Button from "@/components/Button";
import SkinView from "../components/skin-view";

import Icons from "@/components/bootstrap-icon";

import style from "./style.module.scss";

interface SkinData extends UnitSkinEntity {
	uid: string;
}

const Advanced: FunctionalComponent<UnitsListProps> = (props) => {
	const [loc] = useLocale();

	const [filterPart, setFilterPart] = useState<Record<Exclude<SKIN_IN_PARTS, SKIN_IN_PARTS.NONE>, boolean | undefined>>({
		[SKIN_IN_PARTS.LOBBY_ANIMATION]: undefined, // l2d
		[SKIN_IN_PARTS.VOICE]: undefined, // voice
		[SKIN_IN_PARTS.SD_EFFECT]: undefined, // fx
		[SKIN_IN_PARTS.SD_ANIMATION]: undefined, // motion
		[SKIN_IN_PARTS.PROPS]: undefined, // bg
		[SKIN_IN_PARTS.DAMAGE_IMAGE]: undefined, // damaged
	});

	const skins = useMemo(() =>
		props.list
			.map(x => {
				const r: SkinData[] = [];

				const o: SkinData = {} as SkinData;
				Object.keys(x.skins).forEach(k => {
					if (k === "skins" || k === "P") return;
					o[k] = x.skins[k];
				});
				o.uid = x.uid;
				if (!o.releaseDate) o.releaseDate = x.releaseDate;

				r.push(o);
				if (x.skins.skins) r.push(...x.skins.skins.map(y => ({ ...y, uid: x.uid })));
				if (x.skins.P) r.push({ ...x.skins.P, uid: x.uid });
				return r;
			})
			.flat(),
		[props.list],
	);

	const categories = useMemo(() =>
		skins.flatMap(x => x.category)
			.unique()
			.filter(r => r !== "ALL")
			.sort((a, b) => {
				if (a === "ALL") return -3;
				if (b === "ALL") return 3;
				if (a === "") return -2;
				if (b === "") return 2;
				if (a === "None") return -1;
				if (b === "None") return 1;

				return (loc[`SKIN_CATEGORY_${a}`] || "")
					.localeCompare(loc[`SKIN_CATEGORY_${b}`] || "");
			}),
		[skins],
	);
	const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);

	const filtered = useMemo(() =>
		skins
			.filter(x => {
				// 카테고리 전체가 미일치
				if (x.category.every(c => !selectedCategories.includes(c)))
					return false;

				const pLobbyAnimation = (x.parts & (1 << SKIN_IN_PARTS.LOBBY_ANIMATION)) > 0;
				const pVoice = (x.parts & (1 << SKIN_IN_PARTS.VOICE)) > 0;
				const pSDAnim = (x.parts & (1 << SKIN_IN_PARTS.SD_ANIMATION)) > 0;
				const pFX = (x.parts & (1 << SKIN_IN_PARTS.SD_EFFECT)) > 0;
				const pDamaged = x.subset[SKIN_SUBSET_ENUM.Damaged] || (x.parts & (1 << SKIN_IN_PARTS.DAMAGE_IMAGE)) > 0;
				const pBG = x.subset[SKIN_SUBSET_ENUM.Background] || (x.parts & (1 << SKIN_IN_PARTS.PROPS)) > 0;

				// 미설정이 아니고 일치하지 않는다면 제외
				if (
					(filterPart[SKIN_IN_PARTS.LOBBY_ANIMATION] !== undefined && filterPart[SKIN_IN_PARTS.LOBBY_ANIMATION] !== pLobbyAnimation) ||
					(filterPart[SKIN_IN_PARTS.VOICE] !== undefined && filterPart[SKIN_IN_PARTS.VOICE] !== pVoice) ||
					(filterPart[SKIN_IN_PARTS.SD_ANIMATION] !== undefined && filterPart[SKIN_IN_PARTS.SD_ANIMATION] !== pSDAnim) ||
					(filterPart[SKIN_IN_PARTS.SD_EFFECT] !== undefined && filterPart[SKIN_IN_PARTS.SD_EFFECT] !== pFX) ||
					(filterPart[SKIN_IN_PARTS.DAMAGE_IMAGE] !== undefined && filterPart[SKIN_IN_PARTS.DAMAGE_IMAGE] !== pDamaged) ||
					(filterPart[SKIN_IN_PARTS.PROPS] !== undefined && filterPart[SKIN_IN_PARTS.PROPS] !== pBG)
				)
					return false;

				return true;
			})
			.sort((a, b) => b.releaseDate! - a.releaseDate!),
		[skins, selectedCategories, filterPart],
	);

	const [currentSkin, setCurrentSkin] = useState<SkinData | null>(null);
	const unit = useMemo(() => {
		if (currentSkin)
			return props.list.find(r => r.uid === currentSkin.uid) || null;
		return null;
	}, [props.list, currentSkin]);

	useEffect(() => {
		if (currentSkin && !filtered.includes(currentSkin))
			setCurrentSkin(null);
	}, [filtered, currentSkin]);

	const radioSet = useCallback((part: SKIN_IN_PARTS): preact.VNode =>
		<Button.Group>
			<Button
				outline
				variant="dark"
				active={ filterPart[part] === undefined }
				onClick={ () => setFilterPart(p => {
					const r = { ...p };
					r[part] = undefined;
					return r;
				}) }
			>
				<Icons.ThreeDots />
			</Button>
			<Button
				outline
				variant="dark"
				active={ filterPart[part] === true }
				onClick={ () => setFilterPart(p => {
					const r = { ...p };
					r[part] = true;
					return r;
				}) }
			>
				<Icons.Check />
			</Button>
			<Button
				outline
				variant="dark"
				active={ filterPart[part] === false }
				onClick={ () => setFilterPart(p => {
					const r = { ...p };
					r[part] = false;
					return r;
				}) }
			>
				<Icons.X />
			</Button>
		</Button.Group>,
		[filterPart],
	);

	return <>
		<div class={ style.SkinCategories }>
			<div class={ style.Header }>
				<Locale raw={ false } k="UNIT_SKIN_CATEGORY" />
			</div>

			<div class={ style.Action }>
				<Badge variant="success" onClick={ () => setSelectedCategories(categories) }>
					<Locale k="UNIT_SKIN_CATEGORY_SELECT_ALL" />
				</Badge>
				<Badge variant="danger" onClick={ () => setSelectedCategories([]) }>
					<Locale k="UNIT_SKIN_CATEGORY_DESELECT_ALL" />
				</Badge>
			</div>

			<div class={ style.Categories }>
				{ categories.map(c => <Badge
					class={ style.Category }
					variant={ selectedCategories.includes(c) ? "primary" : "secondary" }
					onClick={ () => {
						setSelectedCategories(sc => {
							if (sc.includes(c)) return sc.filter(r => r !== c);
							return [...sc, c];
						});
					} }
				>
					<Locale raw={ false } k={ `SKIN_CATEGORY_${c}` } />
				</Badge>) }
			</div>
		</div>

		<div class={ style.SkinFilters }>
			<div class={ style.Header }>
				<Locale raw={ false } k="UNIT_SKIN_FILTER" />
			</div>

			<div class={ style.Filters }>
				<div class={ style.Filter }>
					<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/l2d.png` } />
					<span><Locale k="UNIT_SKIN_FILTER_LOBBY_ANIMATION" /></span>
					{ radioSet(SKIN_IN_PARTS.LOBBY_ANIMATION) }
				</div>
				<div class={ style.Filter }>
					<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/voice.png` } />
					<span><Locale k="UNIT_SKIN_FILTER_VOICE" /></span>
					{ radioSet(SKIN_IN_PARTS.VOICE) }
				</div>
				<div class={ style.Filter }>
					<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/sd.png` } />
					<span><Locale k="UNIT_SKIN_FILTER_MOTION" /></span>
					{ radioSet(SKIN_IN_PARTS.SD_ANIMATION) }
				</div>
				<div class={ style.Filter }>
					<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/fx.png` } />
					<span><Locale k="UNIT_SKIN_FILTER_FX" /></span>
					{ radioSet(SKIN_IN_PARTS.SD_EFFECT) }
				</div>
				<div class={ style.Filter }>
					<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/damaged.png` } />
					<span><Locale k="UNIT_SKIN_FILTER_DAMAGED" /></span>
					{ radioSet(SKIN_IN_PARTS.DAMAGE_IMAGE) }
				</div>
				<div class={ style.Filter }>
					<img class={ style.FilterIcon } src={ `${AssetsRoot}/skin/object.png` } />
					<span><Locale k="UNIT_SKIN_FILTER_BG" /></span>
					{ radioSet(SKIN_IN_PARTS.PROPS) }
				</div>
			</div>
		</div>

		<div class={ style.SkinTabs }>
			<ul class="nav nav-tabs justify-content-start align-items-end">
				{ filtered.map(skin => <li class="nav-item" key={ `skin-${skin.uid}-${skin.sid}` }>
					<a
						href="#"
						class={ [
							"nav-link",
							isActive(currentSkin === skin),
							currentSkin === skin
								? `rarity-${skin.sid === 20 ? "SS" : "A"}-force text-dark`
								: "text-dark",
						].join(" ") }
						onClick={ (e): void => {
							e.preventDefault();
							if (currentSkin !== skin)
								setCurrentSkin(skin);
						} }
					>
						<UnitFace
							uid={ skin.uid }
							skin={ skin.metadata.iconId ?? skin.metadata.imageId ?? 0 }
							size="64"
						/>
						<br />

						<span>
							{ skin.sid === null
								? <Locale plain k={ `UNIT_${skin.uid}` } />
								: <>
									<div>
										<Badge class={ style.SkinUnitName } variant="dark">
											<Locale plain k={ `UNIT_${skin.uid}` } />
										</Badge>
									</div>
									<Locale plain k={ `UNIT_SKIN_${skin.uid}_${skin.sid}` } />
								</>
							}
						</span>

						<br />

						{ skin.sid === 20
							? currentSkin === skin
								? <Badge class={ style.SkinInfo } variant="light">
									<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
								</Badge>
								: <RarityBadge class={ style.SkinInfo } rarity="SS">
									<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ ["SS"] } />
								</RarityBadge>
							: skin.sid === null
								? <Badge class={ style.SkinInfo } variant="success">
									<Locale k="UNIT_VIEW_SKIN_BADGE_DEFAULT" />
								</Badge>
								: !skin.price
									? skin.priceEx === "Exchange"
										? <Badge class={ style.SkinInfo } variant="substory">
											<Locale k="UNIT_VIEW_SKIN_BADGE_EXCHANGE" />
										</Badge>
										: <Badge class={ style.SkinInfo } variant="danger">
											<Locale k="UNIT_VIEW_SKIN_BADGE_NOTFORSALE" />
										</Badge>
									: <Badge class={ BuildClass(style.SkinPrice, style.SkinInfo) } variant="warning">
										<img src={ `${AssetsRoot}/tuna.png` } />
										{ skin.price }
									</Badge>
						}
					</a>
				</li>) }
			</ul>
		</div>
		<div class={ style.SkinView }>
			{ currentSkin && unit
				? <>
					<SkinView
						unit={ unit }
						skin={ {
							...currentSkin,
							isDef: currentSkin.sid === 0,
							isPro: currentSkin.sid === 20,
						} }
						collapsed
						animate
					/>

					<div class={ style.SkinNavigator }>
						<Button variant="light" textVariant="dark" onClick={ () => route(`/units/${currentSkin.uid}/s${currentSkin.sid}`) }>
							<Locale raw={ false } k="UNIT_SKIN_NAVIGATE" />
						</Button>
					</div>
				</>
				: <div class={ style.SkinViewEmpty }>
					Select skin from above
				</div>
			}
		</div>
	</>;
};
export default Advanced;
