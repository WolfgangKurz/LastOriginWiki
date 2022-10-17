import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { ACTOR_BODY_TYPE, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";

import { AssetsRoot, RarityDisplay } from "@/libs/Const";

import Locale, { LocaleGet } from "@/components/locale";
import UnitFace, { GetUnitFaceURL } from "@/components/unit-face";
import RarityBadge from "@/components/rarity-badge";

import "./style.scss";

interface UnitCardProps {
	class?: string;
	unit: FilterableUnit;
	noLink?: boolean;
	rarity?: ACTOR_GRADE;

	shortName?: boolean;

	onClick?: (e: Event) => void;
}

const Horizontal: FunctionalComponent<UnitCardProps> = (props) => {
	const rarity = props.rarity || ACTOR_GRADE.B;
	const isPromoted = (props.unit.promo || []).includes(rarity);

	const promotion = (props.unit.promo || [])
		.filter(x => x > rarity)
		.pop();

	return <div class={ `unit-card unit-card-h clearfix ${props.class || ""}` } onClick={ props.onClick }>
		<UnitFace uid={ props.unit.uid } class="float-md-start" />

		<div class="unit-name font-ibm">
			<Locale plain k={ `UNIT_${props.unit.uid}` } />
		</div>

		<div class="unit-flag">
			{ props.unit.body === ACTOR_BODY_TYPE.AGS
				? <span class="badge bg-info me-1">
					<Locale plain k="COMMON_UNIT_BODY_AGS" />
				</span>
				: <></>
			}
			{ isPromoted
				? <span class="badge bg-danger me-1">
					<Locale plain k="UNIT_CARD_PROMOTION_AFTER" />
				</span>
				: <></>
			}

			{ promotion
				? <div class="float-end">
					<RarityBadge class="ms-1" rarity={ promotion }>
						<Locale plain k="UNIT_CARD_PROMOTION_BADGE" p={ [RarityDisplay[promotion]] } />
					</RarityBadge>
				</div>
				: <></>
			}

			{ !props.noLink
				? <Link class="stretched-link unit-stretched" href={ `/units/${props.unit.uid}` } />
				: <></>
			}
		</div>
	</div>;
};

const UnitCard: FunctionalComponent<UnitCardProps> & {
	Horizontal: typeof Horizontal;
} = (props) => {
	const unit = props.unit;
	const rarity = props.rarity || ACTOR_GRADE.B;

	const RoleIconId = ({
		[ROLE_TYPE.ATTACKER]: "Sword",
		[ROLE_TYPE.DEFENDER]: "Shield",
		[ROLE_TYPE.SUPPORTER]: "Gear",
	})[unit.role];

	const IdDisplay = `00${unit.id}`.substr(-3);
	const UnitFaceUrl = GetUnitFaceURL(unit.uid);
	const unitName = ((): preact.VNode | preact.VNode[] => {
		if (props.shortName) {
			const name = LocaleGet(`UNIT_${unit.uid}`);
			const sname = LocaleGet(`UNIT_SHORT_${unit.uid}`);

			if (name === sname)
				return <>{ name }</>;

			return name
				.split(sname)
				.map(x => x.length === 0 ? <>{ sname }</> : <span class="text-secondary">{ x }</span>);
		}
		return <Locale plain k={ `UNIT_${unit.uid}` } />;
	})();

	const promotion = (unit.promo || [])
		.filter(x => x > rarity)
		.pop();

	return <div class={`card unit-card position-relative my-1 bg-dark text-light ${props.class || ""}`}>
		<img class="card-img-top" src={ UnitFaceUrl } alt="" />
		<div class="card-body">
			{ unit.id > 0
				? <div class="unit-role-icon">
					<img src={ `${AssetsRoot}/icons/CHA_${RoleIconId}${RarityDisplay[unit.rarity]}.png` } />
				</div>
				: <></>
			}

			<h4 class="card-title">
				<div class="unit-info">
					<RarityBadge rarity={ unit.rarity } />
					<span>
						<span class="d-inline-block">No. { IdDisplay }</span>
						<span class="d-inline-block">
							<i class="unit-type" data-type={ unit.type } />
						</span>
					</span>
				</div>
				{ unitName }

				<div class="unit-badges">
					{ unit.body === 1
						? <span class="badge bg-info ms-1"><Locale k="COMMON_UNIT_BODY_AGS" /></span>
						: <></>
					}

					{ promotion
						? <RarityBadge class="ms-1" rarity={ promotion }>
							<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ [RarityDisplay[promotion]] } />
						</RarityBadge>
						: <></>
					}
				</div>
			</h4>
			{ !props.noLink
				? <Link class="stretched-link unit-stretched" href={ `/units/${unit.uid}` } />
				: <></>
			}
		</div>
	</div>;
};
UnitCard.Horizontal = Horizontal;
export default UnitCard;
