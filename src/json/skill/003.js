return {
	damage (...{ state, skill, unit, target, team, enemy }) {
		let dmg = unit.atk; // 기본 공격력

		if (skill.index === 1) { // 라이플 사격
			dmg *= skill.a1.p(1.2, 0.06); // 공격력 배율

			if (target.buf.immovable) // 이동 불가 상태
				dmg += dmg * skill.a1.p(30, 1.5);
		} else if (skill.index === 2) { // 발목 잡기
			dmg *= skill.a2.p(0.5, 0.025); // 공격력 배율

			// 2 라운드 지속
			target.buf.add("constantia_a2_sign", "", 2, "sign"); // 표식
			target.buf.add("constantia_a2_immovable", "", 2, "immovable"); // 이동 불가

			// 1 라운드 지속 (해당 라운드만)
			target.buf.add("constantia_a2_-spd", "", 1, "-spd", skill.a2.p(25, 1.25));
			target.buf.add("constantia_a2_-dr", "", 1, "-dr", skill.a2.p(10, 0.5));
		}
		return dmg;
	},
	wave (...{ state, skill, unit, target, team, enemy }) { // 전투 개시 시
		// 1 패시브
		unit.ap += skill.p1.n(4, 0.2);
	},
	attack (...{ state, skill, unit, target, team, enemy }) { // 공격 시
		team.map(x => {
			if (x.buf.constantia_p2_atk.stack === 0) // 사냥감 몰이(공격력)이 없는 경우
				x.buf.add("constantia_p2_atk", "사냥감 몰이", 3, "atk", skill.p2.p(10, 0.5));
			else
				x.buf.constantia_p2_atk.round = 3;

			if (x.buf.constantia_p2_acc.stack === 0) // 사냥감 몰이(공격력)이 없는 경우
				x.buf.add("constantia_p2_acc", "사냥감 몰이", 3, "acc", skill.p2.p(20, 1));
			else
				x.buf.constantia_p2_acc.round = 3;

			if (x.buf.constantia_p2_crit.stack === 0) // 사냥감 몰이(공격력)이 없는 경우
				x.buf.add("constantia_p2_crit", "사냥감 몰이", 3, "crit", skill.p2.p(5, 0.5));
			else
				x.buf.constantia_p2_crit.round = 3;
		});
	},
};
