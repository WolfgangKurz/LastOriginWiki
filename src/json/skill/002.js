const PLASMA_GENERATOR_MAX = 3;
module.exports = {
	damage (...{ state, skill, unit, target, team, enemy }) {
		let dmg = unit.atk; // 기본 공격력

		if (skill.index === 1) { // 철충 파괴
			dmg *= skill.a1.p(1.6, 0.075); // 공격력 배율

			if (state.crit)
				dmg += dmg * skill.a1.p(15, 0.75); // 치명타 배율

			if (state.acc && unit.buf.labiata_a1.stack < PLASMA_GENERATOR_MAX) // <플라즈마 제네레이터> 중첩 추가
				unit.buf.add("labiata_a1", "플라즈마 제네레이터", 999, "atk", skill.a1.p(10, 0.5));
		} else if (skill.index === 2) { // 철충 대파괴
			dmg *= skill.a2.p(1.85, 0.125); // 공격력 배율

			if (unit.buf.labiata_a1.stack === PLASMA_GENERATOR_MAX)
				dmg += dmg * skill.a2.p(60, 3); // 치명타 배율

			unit.buf.sub("labiata_a1", 1); // <플라즈마 제네레이터> 중첩 감산
		}
		return dmg;
	},
	round (...{ state, skill, unit, target, team, enemy }) {
		// 1 패시브
		unit.buf.add("labiata_p1_speed", "강화 근력", 1, "speed", skill.p1.p(10, 0.5));
		unit.buf.add("labiata_p1_dr", "강화 근력", 1, "dr", skill.p1.p(20, 2));

		if (unit.buf.labiata_a1.stack === PLASMA_GENERATOR_MAX) { // <플라즈마 제네레이터> 중첩 최대
			unit.buf.add("labiata_p1x_speed", "초강화 근력", 1, "speed", skill.p1.p(5, 0.25));
			unit.buf.add("labiata_p1x_dr", "초강화 근력", 1, "dr", skill.p1.p(10, 1));
		}

		// 2 패시브
		unit.buf.add("labiata_p2_dp", "P.G 활성화", "dp", skill.p2.p(25, 2.5));
		if (unit.buf.labiata_a1.stack >= 2) { // <플라즈마 제네레이터> 중첩 2 이상
			unit.buf.add("labiata_p2x_dp", "P.G 출력 강화", 1, "dp", skill.p2.p(25, 2.5)); // 방어 관통 2배
			unit.buf.add("labiata_p2x_penentrate", "P.G 출력 강화", 1, "penetrate"); // 방어막/피해 감소 무시
		}

		// 3 패시브
		team.filter(x => x.body === "bio")
			.forEach(x => {
				x.buf.add("labiata_p3_atk", "든든한 큰언니", 1, "atk", skill.p3.p(15, 0.75));
				x.buf.add("labiata_p3_crit", "든든한 큰언니", 1, "crit", skill.p3.p(10, 0.5));
				x.buf.add("labiata_p3_acc", "든든한 큰언니", 1, "acc", skill.p3.p(25, 1.25));
			});
	},
};
