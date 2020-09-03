import EquipDB from "@/json/equip.json";
import UnitUidDB from "@/json/unit-uid.json";
import UnitDB from "@/json/unit.json";
import UnitDialogueDB from "@/json/unit-dialogue.json";
import SkillDB from "@/json/unit-skill.json";
import StatsDB from "@/json/unit-stats.json";
import FacilityDB from "@/json/facility.json";
import ItemNamesDB from "@/json/item-names.json";
import MapDB from "@/json/map.json";

import {
	Equip, UnitType, UnitRole, Status,
	Trigger, TriggerTypeArray, TriggerType,
	Action, Unit, RawUnit, RawEquip, RawSkill,
	UnitStatsRaw, UnitUIDTable, RawUnitDialogue,
	RawFacilities, RawItemNames, Worlds,
} from "@/libs/Types";
import EntitySource from "@/libs/EntitySource";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

function parseLimit (limit: string | undefined) {
	if (!limit) return null;

	return limit
		.split(",")
		.map(x => x.toLowerCase())
		.map(x => {
			if (/^[0-9]+$/.test(x)) return parseInt(x, 10);
			return x;
		})
		.filter(x => x !== null) as Array<string | number> | null;
}

function parseTriggerParam (type: TriggerType, parts: string[], offset: number): [Array<string | number>, number] {
	const params: Array<string | number> = [];
	switch (type) {
		case "kill": break; // 적 유닛 처치시
		case "round": break; // 매 라운드 시작시
		case "scout": break; // 정찰시
		case "wave": break; // 전투 개시
		case "barrier": break; // 보호막 존재할 때

		case "pos": {
			const pos = parts[offset++];
			if (pos !== "back" && pos !== "mid" && pos !== "front")
				throw new Error(`"Pos" trigger's 1st parameter should be "back" or "mid" or "front", but found "${pos}".`);
			params.push(pos);
			break;
		}
		case "unit": {
			const unit = parts[offset++];
			if (/^[0-9]+$/.test(unit))
				params.push(parseInt(unit, 10));
			else if (unit !== "bio" && unit !== "ags") {
				throw new Error(
					"\"Unit\" trigger's 1st parameter should be " +
					"\"Dict no\" or \"bio\" or \"ags\" or \"light\" or \"air\" or \"heavy\" or " +
					`"attacker" or "defender" or "supporter" or "back" or "mid" or "front", but found "${unit}"`);
			} else
				params.push(unit);
		}
	}

	return [params, offset];
}

function parseActionIdentifier (part: string): [string, number] {
	if (part.includes("~")) {
		const parts = part.split("~");
		if (parts.length > 2)
			throw new Error(`Identifier should 0 or 1 repeat tokens, but ${parts.length} tokens found.`);

		if (!/^[0-9]$/.test(parts[0]))
			throw new Error(`Repeat part should numeric, but "${parts[0]}" found.`);

		return [parts[1], parseInt(parts[0], 10)];
	} else
		return [part, 0];
}

function validateAction (action: Action): number {
	const literal = /^-?[0-9]+\.?[0-9]*$/;
	const percent = /^-?[0-9]+\.?[0-9]*%$/;

	const body = ["light", "air", "heavy"];
	const elems = ["all", "fire", "chill", "thunder"];

	const params = action.params
		.map(x => x.endsWith("?") ? x.substr(0, x.length - 1) : x); // Remove unknown mark

	let addOffset = 0;
	switch (action.act) {
		case "acc":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("acc(Accuracy) action's 1st param should be \"Percent\" type.");
			} else if (params.length === 2) {
				if (!percent.test(params[0])) throw new Error("acc(Accuracy) action's 1st param should be \"Percent\" type.");
				if (!percent.test(params[1])) throw new Error("acc(Accuracy) action's 2nd param should be \"Percent\" type.");
			} else
				throw new Error("acc(Accuracy) action's parameters should 1 ~ 2.");
			break;
		case "ap":
			if (params.length === 1) {
				if (!literal.test(params[0]))
					throw new Error("ap(Action point) action's 1st param should be \"Literal\" type.");
			} else
				throw new Error("ap(Action point) action's parameters should 1.");
			break;
		case "armorpierce":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("armorpierce(Armor-piercing) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("armorpierce(Armor-piercing) action's parameters should 1.");
			break;
		case "atk":
			if (params.length === 1) {
				if (!literal.test(params[0]) && !percent.test(params[0]))
					throw new Error("atk(Attack damage) action's 1st param should be \"Literal\" type or \"Percent\" type.");
			} else
				throw new Error("atk(Attack damage) action's parameters should 1.");
			break;
		case "chance":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("atk(Attack damage) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("chance(Activation chance) action's parameters should 1.");
			break;
		case "counter":
			if (params.length === 2) {
				if (!percent.test(params[0])) throw new Error("counter(Counter) action's 1st param should be \"Percent\" type.");
				if (!percent.test(params[1])) throw new Error("counter(Counter) action's 2nd param should be \"Percent\" type.");
			} else
				throw new Error("counter(Counter) action's parameters should 1.");
			break;
		case "crit":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("crit(Critical chance) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("crit(Critical chance) action's parameters should 1.");
			break;
		case "def":
			if (params.length === 1) {
				if (!literal.test(params[0]) && !percent.test(params[0]))
					throw new Error("def(Defense) action's 1st param should be \"Literal\" type or \"Percent\" type.");
			} else
				throw new Error("def(Defense) action's parameters should 1.");
			break;
		case "dmg":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("dmg(Damage amplification) action's 1st param should be \"Percent\" type.");
			} else if (params.length === 2) {
				if (!body.includes(params[0])) throw new Error("dmg(Damage amplification) action's 1st param should be \"Body type\" type.");
				if (!percent.test(params[1])) throw new Error("dmg(Damage amplification) action's 2nd param should be \"Percent\" type.");
			} else
				throw new Error("dmg(Damage amplification) action's parameters should 1.");
			break;
		case "dp":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("dp(Defense penetration) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("dp(Defense penetration) action's parameters should 1.");
			break;
		case "dr":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("dr(Damage reduction) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("dr(Damage reduction) action's parameters should 1.");
			break;
		case "eva":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("eva(Evasion) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("eva(Evasion) action's parameters should 1.");
			break;
		case "exp":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("exp(Extra EXP) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("exp(Extra EXP) action's parameters should 1.");
			break;
		case "fdmg":
			if (params.length === 1) {
				if (!percent.test(params[0])) throw new Error("fdmg(Damage taken) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("fdmg(Damage taken) action's parameters should 1.");
			break;
		case "barrier":
			if (params.length === 1) {
				if (!literal.test(params[0])) throw new Error("barrier(Barrier) action's 1st param should be \"Literal\" type.");
			} else
				throw new Error("barrier(Barrier) action's parameters should 1.");
			break;
		case "hit":
			if (params.length === 1) {
				if (!literal.test(params[0])) throw new Error("hit(Get fixed damage) action's 1st param should be \"Literal\" type.");
			} else if (params.length === 2) {
				if (!literal.test(params[0])) throw new Error("hit(Get fixed damage) action's 1st param should be \"Literal\" type.");
				if (!elems.includes(params[1])) throw new Error("hit(Get fixed damage) action's 2nd param should be \"Elemental\" type.");
			} else
				throw new Error("hit(Get fixed damage) action's parameters should 1.");
			break;
		case "hp":
			if (params.length === 1) {
				if (!literal.test(params[0])) throw new Error("hp(HP) action's 1st param should be \"Literal\" type.");
			} else
				throw new Error("hp(HP) action's parameters should 1.");
			break;
		case "mindmg":
			if (params.length > 0)
				throw new Error("mindmg(Minimize damage) action's parameters should 0.");
			break;
		case "off":
			if (params.length === 0) {
				// TODO All
			} else if (params.length === 1) {
				// TODO (Effect)
			} else if (params.length === 2) {
				// TODO (Effect, Chance)
			} else
				throw new Error("off(Deactive effect) action's parameters should 0 ~ 2.");
			break;
		case "rand":
			{
				const [identifier, repeats] = parseActionIdentifier(params[0]);
				action.act = identifier;
				action.repeats = repeats;
				action.params = params.slice(1);
				validateAction(action);

				action.rand = true;
				addOffset += 1;
			}
			break;
		case "range":
			if (params.length === 1) {
				if (!literal.test(params[0])) throw new Error("range(Range) action's 1st param should be \"Literal\" type.");
			} else
				throw new Error("range(Range) action's parameters should 1.");
			break;
		case "resist":
			if (params.length === 1) {
				// if (!percent.test(params[0])) throw new Error(`resist(All type resist) action's 1st param should be "Percent" type.`);
			} else if (params.length === 2) {
				if (!elems.includes(params[0])) throw new Error("resist(Resist) action's 1st param should be \"Elemental\" type.");
				if (!percent.test(params[1])) throw new Error("resist(Resist) action's 2nd param should be \"Percent\" type.");
			} else
				throw new Error("resist(Resist) action's parameters should 1.");
			break;
		case "revive":
			if (params.length === 1) {
				if (!literal.test(params[0])) throw new Error("revive(Battle Continuation) action's 1st param should be \"Literal\" type.");
			} else
				throw new Error("revive(Battle Continuation) action's parameters should 1.");
			break;
		case "scout":
			if (params.length > 0)
				throw new Error("scout(Active scout) action's parameters should 0.");
			break;
		case "skill":
			if (params.length < 2) throw new Error("skill(Skill) action's parameters should more than 2.");
			else {
				if (!literal.test(params[0])) throw new Error("skill(Skill) action's 1st param should be \"Literal\" type.");

				const [identifier, repeats] = parseActionIdentifier(params[1]);

				const next: Action = {
					act: identifier,
					repeats: repeats,
					params: params.slice(2),
				};
				validateAction(next);
				action.next = next;

				action.params = [params[0]];
				addOffset += 1 + next.params.length;
			}
			break;
		case "spd":
			if (params.length === 1) {
				if (!literal.test(params[0]) && !percent.test(params[0]))
					throw new Error("spd(Speed, AP generation) action's 1st param should be \"Literal\" type or \"Percent\" type.");
			} else
				throw new Error("spd(Speed, AP generation) action's parameters should 1.");
			break;
		case "stun":
			if (params.length === 1) {
				if (!percent.test(params[0]))
					throw new Error("stun(Stun chance) action's 1st param should be \"Percent\" type.");
			} else
				throw new Error("stun(Stun chance) action's parameters should 1.");
			break;
	}

	return addOffset;
}

function parseStats (list: string): Status[] {
	return list
		.split(",")
		.map(x => {
			let offset = 0;
			const parts = x.toLowerCase().split(":");

			const ret: Status = {
				on: [],
				actions: [],
			};
			while (offset < parts.length) {
				const [identifier, repeats] = parseActionIdentifier(parts[offset]);

				switch (identifier) {
					case "on!":
					case "on":
						{
							if (!TriggerTypeArray.includes(parts[offset + 1]))
								throw new Error(`Invalid Trigger Type "${parts[offset + 1]}", from "${x}"`);

							const trigger: Trigger = {
								inv: identifier === "on!",
								type: parts[offset + 1] as TriggerType,
								params: [],
							};
							[trigger.params, offset] = parseTriggerParam(trigger.type, parts, offset + 2);

							ret.on.push(trigger);
						}
						break;

					case "acc":
					case "ap":
					case "armorpierce":
					case "atk":
					case "chance":
					case "counter":
					case "crit":
					case "def":
					case "dmg":
					case "dp":
					case "dr":
					case "eva":
					case "exp":
					case "fdmg":
					case "barrier":
					case "hit":
					case "hp":
					case "hp-atk":
					case "mindmg":
					case "off":
					case "protect":
					case "rand":
					case "range":
					case "resist":
					case "revive":
					case "scout":
					case "skill":
					case "spd":
					case "stun":
						{
							const action: Action = {
								act: identifier,
								repeats: repeats,
								params: parts.slice(offset + 1),
							};
							offset += validateAction(action);
							ret.actions.push(action);
							offset += 1 + action.params.length;
						}
						break;
					default:
						throw new Error(`Unknown identifier "${identifier}", from "${x}"`);
				}
			}

			return ret;
		});
}


function CompileEquip () {
	return (EquipDB as RawEquip[])
		.map(x => {
			const y: Equip = {
				name: x.name,
				limit: parseLimit(x.limit),
				source: x.source
					.map(y => y.map(z => new EntitySource(z))),
				upgrade: x.upgrade || null,
				stats: x.stats.map(_ => parseStats(_)),
			};
			return y;
		});
}
export const EquipData = CompileEquip();

function CompileUnit () {
	const units: {
		[key: number]: Unit;
	} = {};

	(UnitDB as RawUnit[])
		.forEach(x => {
			const y: Unit = {
				id: x.id,

				name: x.name,
				shortname: x.shortname,

				group: x.group,
				shortgroup: x.shortgroup,
				groupkey: x.groupkey,

				rarity: x.rarity,
				body: x.body === "Bioroid" ? "bio" : "ags",
				type: x.type.toLowerCase() as UnitType,
				role: x.role.toLowerCase() as UnitRole,

				promotions: x.promotions,
				craftable: x.craftable,
				marry: x.marry,

				resists: { ...x.resists },

				linkBonus: { ...x.linkBonus },

				equip: [
					x.equip[0],
					x.equip[1],
					x.equip[2],
					x.equip[3],
				],
				source: x.source
					.map(y => y.map(z => new EntitySource(z))),
			};
			units[x.id] = y;
		});
	return units;
}
export const UnitData = CompileUnit();

function CompileSkill () {
	const imgExt = ImageExtension();
	const table = JSON.parse(JSON.stringify(SkillDB)) as unknown as RawSkill;
	const keys = Object.keys(table);
	for (const key of keys) {
		const skills = table[key];

		const keys2 = Object.keys(skills);
		for (const key2 of keys2) {
			const skill = skills[key2];

			const type = key2.includes("active") ? "active" : "passive";

			skill.icon = `${AssetsRoot}/${imgExt}/skill/${skill.icon}_${type}.${imgExt}`;
		}
	}
	return table;
}
export const SkillData = CompileSkill();

export const UnitStatsData: {
	[key: number]: UnitStatsRaw;
} = StatsDB;

export const UnitUid: UnitUIDTable = UnitUidDB;

export const UnitDialogueData = UnitDialogueDB as RawUnitDialogue;

export const Facilities = FacilityDB as RawFacilities;

export const ItemNames = ItemNamesDB as RawItemNames;

export const MapData = MapDB as unknown as Worlds;
