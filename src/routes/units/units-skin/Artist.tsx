import { FunctionalComponent } from "preact";
import { useMemo } from "preact/hooks";
import { Link } from "preact-router";

import Store from "@/store";

import { UnitSkinEntity } from "@/types/DB/Unit";
import { UnitsListProps } from "..";

import { FormatNumber, isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import UnitFace from "@/components/unit-face";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

import style from "./style.module.scss";

interface SkinData extends UnitSkinEntity {
	uid: string;
}

const Artist: FunctionalComponent<UnitsListProps> = (props) => {
	const displayUnitRelease = Store.Units.Skins.Artist.DisplayUnitRelease;
	const displaySkinRelease = Store.Units.Skins.Artist.DisplaySkinRelease;

	const unitCount: Record<string, number> = {};
	const skinCount: Record<string, number> = {};
	const skins = useMemo(() => {
		const skins: SkinData[] = [];
		const list = props.list;

		list.forEach(_u => {
			const u = { ..._u.skins };
			const p = u.P;
			const ss = u.skins;
			delete u.skins;
			delete u.P;

			skins.push({ uid: _u.uid, ...u });
			if (ss) skins.push(...ss.map(s => ({ uid: _u.uid, ...s })));
			if (p) skins.push({ uid: _u.uid, ...p });
		});

		const ret: Record<string, SkinData[]> = {};
		skins.forEach(s => {
			(s.artist || "")
				.split("\n")
				.flatMap(a => a.split(","))
				.map(a => a.trim())
				.forEach(a => {
					let target = "";

					if (a.includes(":")) {
						const o = a.indexOf(":");
						const tag = a.substring(0, o);
						const body = a.substring(o + 1);

						if (tag === "CONTEST") return; // 공모전 원작자는 제외

						target = body;
					} else
						target = a;

					if ((displayUnitRelease.value && !s.sid) || (displaySkinRelease.value && s.sid)) {
						if (!(target in ret)) ret[target] = [];
						ret[target].push(s);
					}

					if (!s.sid) unitCount[target] = (unitCount[target] || 0) + 1;
					if (s.sid) skinCount[target] = (skinCount[target] || 0) + 1;
				});
		});

		return ret;
	}, [props.list, displayUnitRelease.value, displaySkinRelease.value]);

	function CompileArtist (artist: string): preact.VNode {
		const reg = /^(.+)\((.+)\)$/;
		if (!reg.test(artist)) return <>{ artist }</>;

		const m = reg.exec(artist)!;
		return <ruby>
			{ m[1] }<rp>(</rp><rt>{ m[2] }</rt><rp>)</rp>
		</ruby>;
	}

	return <div class="container mb-3">
		<div class="btn-group mb-3">
			<button
				class={ `btn btn-outline-dark ${isActive(displayUnitRelease.value)}` }
				onClick={ e => {
					e.preventDefault();
					displayUnitRelease.value = !displayUnitRelease.value;
				} }
			>
				<Icons.PersonFill class="me-1" />
				<Locale k="UNIT_VIEW_SKIN_RELEASEDATE_DISPLAY_UNIT" />
			</button>
			<button
				class={ `btn btn-outline-dark ${isActive(displaySkinRelease.value)}` }
				onClick={ e => {
					e.preventDefault();
					displaySkinRelease.value = !displaySkinRelease.value;
				} }
			>
				<Icons.Tshirt class="me-1" />
				<Locale k="UNIT_VIEW_SKIN_RELEASEDATE_DISPLAY_SKIN" />
			</button>
		</div>

		<div class={ style.ArtistGroup }>
			{ Object.keys(skins)
				.sort((a, b) => skins[b].length - skins[a].length)
				.map(artist => {
					const drawings = (skinCount[artist] || 0) + (unitCount[artist] || 0);

					return <>
						<div class={ `bg-dark text-light ${style.ArtistHeader}` }>
							<div class={ style.ArtistName }>
								{ CompileArtist(artist) }
							</div>
							<div class={ style.ArtistSkins }>
								{ FormatNumber(drawings) } drawings
							</div>
							<div class={ style.ArtistSkins } data-size={ unitCount[artist] }>
								{ FormatNumber(unitCount[artist] || 0) } units
							</div>
						</div>
						<div class={ `p-2 ${style.ArtistBody}` }>
							{ skins[artist].map(skin => <div>
								<BootstrapTooltip
									placement="top"
									content={ <div class={ style.SkinTooltip }>
										<Locale k={ `UNIT_${skin.uid}` } />
										<div class={ style.SkinTooltipName }>
											{ !skin.sid
												? <Locale k="SKIN_CATEGORY_" />
												: <Locale k={ `UNIT_SKIN_${skin.uid}_${skin.sid}` } plain />
											}
										</div>
									</div> }
								>
									<Link href={ `/units/${skin.uid}/s${skin.sid || 0}` }>
										<UnitFace
											class={ skin.sid ? style.SkinFace : style.DefaultFace }
											uid={ skin.uid }
											skin={ skin.metadata.iconId ?? skin.metadata.imageId }
											size={ 56 }
										/>
									</Link>
								</BootstrapTooltip>
							</div>) }
						</div>
					</>;
				})
			}
		</div>
		{ Object.keys(skins).length === 0
			? <div class="p-5 text-secondary text-center">...</div>
			: <></>
		}
	</div>;
};
export default Artist;
