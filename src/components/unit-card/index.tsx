import { Fragment, FunctionalComponent, h } from "preact";
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

const Card: FunctionalComponent<UnitCardProps> = (props) => {
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
				return <Fragment>{ name }</Fragment>;

			return name
				.split(sname)
				.map(x => x.length === 0 ? <Fragment>{ sname }</Fragment> : <span class="text-secondary">{ x }</span>);
		}
		return <Locale k={ `UNIT_${unit.uid}` } />;
	})();

	const leftPromotions = (unit.promo || []).filter(x => x > rarity);

	return <div class="card unit-card position-relative my-1 bg-dark text-light">
		<img class="card-img-top" src={ UnitFaceUrl } alt="" />
		<div class="card-body">
			{ unit.id > 0
				? <div class="unit-role-icon">
					<img src={ `${AssetsRoot}/icons/CHA_${RoleIconId}${RarityDisplay[unit.rarity]}.png` } />
				</div>
				: <Fragment />
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
						: <Fragment />
					}

					{ leftPromotions
						? leftPromotions.map(pro => <RarityBadge class="ms-1" rarity={ pro }>
							<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ [RarityDisplay[pro]] } />
						</RarityBadge>)
						: <Fragment />
					}
				</div>
			</h4>
			{ !props.noLink
				? <Link class="stretched-link unit-stretched" href={ `/units/${unit.uid}` } />
				: <Fragment />
			}
		</div>
	</div>;
};

const Horizontal: FunctionalComponent<UnitCardProps> = (props) => {
	const rarity = props.rarity || ACTOR_GRADE.B;
	const isPromoted = (props.unit.promo || []).includes(rarity);
	const leftPromotions = (props.unit.promo || []).filter(x => x > rarity);

	return <div class={ `unit-card text-start clearfix ${props.class || ""}` } onClick={ props.onClick }>
		<UnitFace uid={ props.unit.uid } class="float-start" />

		<div class="unit-name">
			<Locale k={ `UNIT_${props.unit.uid}` } />
		</div>

		<div class="unit-flag">
			{ props.unit.body === ACTOR_BODY_TYPE.AGS
				? <span class="badge bg-info me-1">
					<Locale k="COMMON_UNIT_BODY_AGS" />
				</span>
				: <Fragment />
			}
			{ isPromoted
				? <span class="badge bg-danger me-1">
					<Locale k="UNIT_CARD_PROMOTION_AFTER" />
				</span>
				: <Fragment />
			}

			{ leftPromotions
				? <div class="float-end">
					{ leftPromotions.map(pro => <RarityBadge rarity={ pro } class="ms-1">
						<Locale k="UNIT_CARD_PROMOTION_BADGE" p={ [RarityDisplay[pro]] } />
					</RarityBadge>) }
				</div>
				: <Fragment />
			}
		</div>
	</div>;
};

const UnitCard = {
	Card,
	Horizontal,
};
export default UnitCard;