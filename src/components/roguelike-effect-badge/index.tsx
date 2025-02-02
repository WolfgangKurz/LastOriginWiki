import { FunctionalComponent } from "preact";
import { Link } from "preact-router";
import Decimal from "decimal.js";

import { BuffStatBuff } from "@/types/Buffs";
import { BuffEffect, BuffEffectValue } from "@/types/BuffEffect";
import { ROGUE_LIMIT_EFFECT_TYPE } from "@/types/Enums";
import RoguelikeLimitEffects from "@/types/DB/Roguelike.LimitEffects";

import { objState } from "@/libs/State";
import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import PopupBase from "@/components/popup/base";
import EquipIcon from "@/components/equip-icon";
import BuffList from "@/components/buff-list";

import "./style.scss";

interface RoguelikeEffectBadgeProps {
	effect: string;
}

const RoguelikeEffectBadge: FunctionalComponent<RoguelikeEffectBadgeProps> = (props) => {
	const display = objState<boolean>(false);

	return <Loader
		json={ [StaticDB.RoguelikeLimitEffects, StaticDB.RoguelikeBuffEffects] }
		loading={ <EquipIcon class="float-start me-2" image={ "none" } /> }
		content={ ((): preact.VNode => {
			const RoguelikeLimitEffectDB = GetJson<RoguelikeLimitEffects[]>(StaticDB.RoguelikeLimitEffects);
			const RoguelikeBuffEffectDB = GetJson<BuffStatBuff[]>(StaticDB.RoguelikeBuffEffects);

			const found = RoguelikeLimitEffectDB.find(x => x.key === props.effect);
			if (!found) return <></>;

			const literalValueType: ROGUE_LIMIT_EFFECT_TYPE[] = [
				ROGUE_LIMIT_EFFECT_TYPE.CELL_MOVE_HP_DOWN,
				ROGUE_LIMIT_EFFECT_TYPE.ROGUE_POINT_RATE_INC,
			];

			const effects: BuffStatBuff[] = found.type === ROGUE_LIMIT_EFFECT_TYPE.BUFF_SPC_KEY_GIVE
				? found.value.split("\n")
					.map(x => RoguelikeBuffEffectDB.find(y => y.key === x))
					.filter(x => x) as BuffStatBuff[]
				: [];

			function getBuffValue (value: BuffEffect): number {
				function nsignedValue (value: BuffEffectValue, level: number = 0): number {
					const p = typeof value.base === "string" && value.base.endsWith("%");

					const base_ = value.base.toString();
					const per_ = value.per.toString();

					const base = p
						? new Decimal(base_.substr(0, base_.length - 1)).toNumber()
						: new Decimal(base_).toNumber();
					const per = p
						? new Decimal(per_.substr(0, per_.length - 1)).toNumber()
						: new Decimal(per_).toNumber();
					const val = Decimal.mul(per, level)
						.add(base)
						.toNumber();
					return val;
				}

				const level = 0;
				const stat = value;
				if ("attack" in stat)
					return nsignedValue(stat.attack, level);
				else if ("defense" in stat)
					return nsignedValue(stat.defense, level);
				else if ("hp" in stat)
					return nsignedValue(stat.hp, level);
				else if ("accuracy" in stat)
					return nsignedValue(stat.accuracy, level);
				else if ("critical" in stat)
					return nsignedValue(stat.critical, level);
				else if ("evade" in stat)
					return nsignedValue(stat.evade, level);
				else if ("turnSpeed" in stat)
					return nsignedValue(stat.turnSpeed, level);
				else if ("max_hp" in stat)
					return nsignedValue(stat.max_hp, level);
				return 0;
			}

			return <div class="roguelike-item-badge p-2 text-dark">
				<div class={ "card bg-substory text-light" }>
					<div class="card-body">
						<EquipIcon class="float-start me-2" image={ found.img } />
						<div class="text-start">
							<Locale k={ props.effect } />
						</div>
						<div class="text-start">
							<small class="me-2">
								<Locale k="ROGUELIKE_LIMITEFFECT_GRADE" p={ [found.grade] } />
							</small>
							<Icons.InfoCircleFill class="float-end mt-1" />
						</div>
					</div>

					<Link href="#" class="stretched-link" onClick={ (e): void => {
						e.preventDefault();
						display.set(true);
					} } />
				</div>

				<PopupBase
					display={ display.value }
					contentClass="item-modal"
					bodyClass="pb-0"
					footerVariant="dark"
					footerText="white"
					footerClass="justify-content-start"
					header={ <div class="text-start">
						<Locale k={ found.key } />
						<div style="font-size: 60%">{ found.key }</div>
					</div> }
					footer={ effects.length > 0
						? <div class="flex-1">
							<BuffList list={ effects } />
						</div>
						: undefined
					}
					onHidden={ (): void => display.set(false) }
				>
					<div class="text-center mb-3">
						<EquipIcon image={ found.img } size="large" />
						<div class="mt-3 text-content">
							<Locale k={ `${found.key}_COND` } p={ [
								<strong class="text-primary">
									{ found.condValue }
								</strong>,
							] } />
							<hr class="my-1" />
							<Locale k={ `${found.key}_DESC` } p={ [
								<strong class="text-danger">
									{ literalValueType.includes(found.type)
										? Decimal.mul(found.value, 100).toNumber()
										: found.type === ROGUE_LIMIT_EFFECT_TYPE.BUFF_SPC_KEY_GIVE
											? getBuffValue(effects[0].buffs[0].value)
											: 0
									}
								</strong>,
							] } />
						</div>
					</div>
				</PopupBase>
			</div >;
		}) }
	/>;
};
export default RoguelikeEffectBadge;
