import { BuffEffect, BuffEffectValue } from "@/libs/Buffs/BuffEffect";
import { EffectFilterListType } from "@/libs/Store";

export function isBuffEffectValid (stat: BuffEffect, list: EffectFilterListType): boolean {
	const found = list
		.find(z =>
			Array.isArray(z)
				? z[0].type.includes(stat.type)
				: z.type.includes(stat.type),
		);
	if (!found) return false;

	// 증감 값인 경우
	const p = isPositiveBuffEffectValue;
	if (Array.isArray(found)) {
		if ("attack" in stat) return p(stat.attack) ? found[0].selected : found[1].selected;
		if ("defense" in stat) return p(stat.defense) ? found[0].selected : found[1].selected;
		if ("hp" in stat) return p(stat.hp) ? found[0].selected : found[1].selected;
		if ("accuracy" in stat) return p(stat.accuracy) ? found[0].selected : found[1].selected;
		if ("critical" in stat) return p(stat.critical) ? found[0].selected : found[1].selected;
		if ("evade" in stat) return p(stat.evade) ? found[0].selected : found[1].selected;
		if ("turnSpeed" in stat) return p(stat.turnSpeed) ? found[0].selected : found[1].selected;
		if ("ap" in stat) return p(stat.ap) ? found[0].selected : found[1].selected;

		if ("resist" in stat) return p(stat.resist.value) ? found[0].selected : found[1].selected;
		if ("damage_multiply" in stat) return p(stat.damage_multiply.value) ? found[0].selected : found[1].selected;
		if ("damage_by_hp" in stat) return p(stat.damage_by_hp.damage) ? found[0].selected : found[1].selected;
		if ("damage_add" in stat) {
			if ("elem" in stat.damage_add)
				return p(stat.damage_add.damage) ? found[0].selected : found[1].selected;
			else
				return p(stat.damage_add) ? found[0].selected : found[1].selected;
		}
		if ("range" in stat) return p(stat.range) ? found[0].selected : found[1].selected;
		if ("penetration" in stat) return p(stat.penetration) ? found[0].selected : found[1].selected;
		if ("invokeChance" in stat) return p(stat.invokeChance) ? found[0].selected : found[1].selected;
		if ("exp" in stat) return p(stat.exp) ? found[0].selected : found[1].selected;

		return false;
	} else
		return found.selected;
}

export function isPositiveBuffEffectValue (v: BuffEffectValue) {
	if (typeof v.base === "number") return v.base >= 0;
	return !v.base.startsWith("-");
}

export function isPositiveBuffEffect (stat: BuffEffect): boolean {
	// 증감 값인 경우
	const p = isPositiveBuffEffectValue;

	if ("attack" in stat) return p(stat.attack);
	if ("defense" in stat) return p(stat.defense);
	if ("hp" in stat) return p(stat.hp);
	if ("accuracy" in stat) return p(stat.accuracy);
	if ("critical" in stat) return p(stat.critical);
	if ("evade" in stat) return p(stat.evade);
	if ("turnSpeed" in stat) return p(stat.turnSpeed);
	if ("ap" in stat) return p(stat.ap);

	if ("resist" in stat) return p(stat.resist.value);
	if ("damage_multiply" in stat) return p(stat.damage_multiply.value);
	if ("damage_by_hp" in stat) return p(stat.damage_by_hp.damage);
	if ("damage_add" in stat) {
		if ("elem" in stat.damage_add)
			return p(stat.damage_add.damage);
		else
			return p(stat.damage_add);
	}
	if ("range" in stat) return p(stat.range);
	if ("penetration" in stat) return p(stat.penetration);
	if ("invokeChance" in stat) return p(stat.invokeChance);
	if ("exp" in stat) return p(stat.exp);

	return true;
}
