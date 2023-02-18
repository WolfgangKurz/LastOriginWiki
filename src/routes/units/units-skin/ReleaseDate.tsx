import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Store from "@/store";

import { UnitSkinEntity } from "@/types/DB/Unit";
import { UnitsListProps } from "..";

import { FormatDate, isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import UnitFace from "@/components/unit-face";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

import style from "./style.module.scss";

interface SkinData extends UnitSkinEntity {
	uid: string;
}

const ReleaseDate: FunctionalComponent<UnitsListProps> = (props) => {
	const displayUnitRelease = Store.Units.Skins.ReleaseDate.DisplayUnitRelease;
	const displaySkinRelease = Store.Units.Skins.ReleaseDate.DisplaySkinRelease;

	const skins = (() => {
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
		skins
			.map(s => {
				if (!displayUnitRelease.value && !s.releaseDate) return null!;
				if (!displaySkinRelease.value && s.releaseDate) return null!;

				const unit = list.find(u => u.uid === s.uid)!;
				return [s.releaseDate || unit.releaseDate, s] as [number, SkinData];
			})
			.filter(x => x)
			.sort((a, b) => a[0] - b[0])
			.forEach(s => {
				const d = FormatDate(s[0]);

				if (!(d in ret)) ret[d] = [];
				ret[d].push(s[1]);
			});

		return ret;
	})();

	function compileArtist (artist: string): preact.ComponentChildren {
		return artist.split("\n")
			.map(a => {
				if (a.includes(":")) {
					const o = a.indexOf(":");
					const tag = a.substring(0, o);
					const body = a.substring(o + 1);
					return <Locale k={ `UNIT_VIEW_ILLUSTRATOR_TAG_${tag}` } p={ [body] } />;
				} else {
					return <span class="badge bg-primary">{ a }</span>;
				}
			})
			.map(x => <div>{ x }</div>);
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
				<Icon class="me-1" icon="person-fill" />
				<Locale k="UNIT_VIEW_SKIN_RELEASEDATE_DISPLAY_UNIT" />
			</button>
			<button
				class={ `btn btn-outline-dark ${isActive(displaySkinRelease.value)}` }
				onClick={ e => {
					e.preventDefault();
					displaySkinRelease.value = !displaySkinRelease.value;
				} }
			>
				<Icon class="me-1" icon="tshirt" />
				<Locale k="UNIT_VIEW_SKIN_RELEASEDATE_DISPLAY_SKIN" />
			</button>
		</div>

		<div class={ style.ReleaseDateTimeline }>
			<VerticalTimeline
				animate={ false }
				lineColor="var(--bs-secondary)"
			>
				{ Object.keys(skins)
					.sort((a, b) => b.localeCompare(a))
					.map(date => {
						const _skins = skins[date];

						const unitList = _skins.filter(x => !x.sid);
						const skinList = _skins.filter(x => !!x.sid);

						return <VerticalTimelineElement
							style={ { margin: "1em 0" } }
							className={ style.TimelineElement }
							contentArrowStyle={ { borderRightColor: "var(--bs-gray-400)" } }
							contentStyle={ {
								padding: 0,
								background: "transparent",
								boxShadow: "none",
							} }
							dateClassName={ style.Date }
							date={ date }
							iconClassName={ style.Icon }
						>
							<div class={ style.Content }>
								{ unitList.map(skin => <div class="d-inline-block m-1">
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
											<div class="mb-1">
												{ compileArtist(skin.artist) }
											</div>
										</div> }
									>
										<Link href={ `/units/${skin.uid}/s${skin.sid || 0}` }>
											<UnitFace
												class={ skin.sid ? style.SkinFace : style.DefaultFace }
												uid={ skin.uid }
												skin={ skin.metadata.imageId }
												size={ 56 }
											/>
										</Link>
									</BootstrapTooltip>
								</div>) }
								{ unitList.length > 0 && skinList.length > 0 && <hr class="my-1" /> }
								{ skinList.map(skin => <div class="d-inline-block m-1">
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
											<div class="mb-1">
												{ compileArtist(skin.artist) }
											</div>
										</div> }
									>
										<Link href={ `/units/${skin.uid}/s${skin.sid || 0}` }>
											<UnitFace
												class={ skin.sid ? style.SkinFace : style.DefaultFace }
												uid={ skin.uid }
												skin={ skin.metadata.imageId }
												size={ 56 }
											/>
										</Link>
									</BootstrapTooltip>
								</div>) }
							</div>
						</VerticalTimelineElement>;
					}) }
			</VerticalTimeline>
		</div>
	</div >;
};
export default ReleaseDate;
