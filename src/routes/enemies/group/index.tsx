import { FunctionalComponent } from "preact";
import { useMemo, useState } from "preact/hooks";

import EnemyGroup from "@/types/DB/EnemyGroup";

import { groupBy, isActive } from "@/libs/Functions";
import Loader, { GetJson, StaticDB, useDBData } from "@/libs/Loader";

import Locale from "@/components/locale";
import Loading from "@/components/loading";
import EnemyGroupCard from "../components/enemy-group-card";

interface EnemiesGroupProps {
	uid?: string;
}

const EnemiesGroup: FunctionalComponent<EnemiesGroupProps> = (props) => {
	const Categories = useMemo((): string[][] => {
		const ret: string[][] = [];

		ret.push(
			new Array(12)
				.fill(0)
				.map((_, i) => `World${i + 1}`),
		);
		ret.push(
			new Array(26)
				.fill(0)
				.map((_, i) => `Ev${i + 1}`),
		);
		ret.push([
			"SubStory",
			"Daily",
			"Challenge",
			"EW",
			"NEW",
			"Roguelike",
			"Others",
		]);
		return ret;
	}, []);

	const [category, setCategory] = useState<string>(Categories[0][0]);

	const EnemyGroupDB = useDBData<EnemyGroup>(StaticDB.EnemyGroup);
	if (!EnemyGroupDB) return <Loading.Data />;

	const groups = useMemo(
		() => Object.values(EnemyGroupDB)
			.filter(g => {
				const cat = category;
				const wid = cat.replace(/^World([0-9]+)$/, "0$1").substr(-2);
				const regs = [
					new RegExp(`^BATTLE_${wid}-[0-9]{2}(Ex|B|S|C)?-`),
					new RegExp(`^BATTLE_[0-9]{2}${cat === "Ev1" ? "Ev" : cat}-[0-9]{2}(Ex|B|S|C)?-`),
					/^BATTLE_CS-/,
					/^BATTLE_Daily-/,
					/^BATTLE_Cha-/,
					/^BATTLE_EW-/,
					/^BATTLE_NEW-/,
					/^BATTLE_Rog-/,

					new RegExp("^BATTLE_[0-9]{2}-[0-9]{2}(Ex|B|S|C)?-"),
					new RegExp("^BATTLE_[0-9]{2}Ev[0-9]*-[0-9]{2}(Ex|B|S|C)?-"),
				];

				if (cat.startsWith("World")) return regs[0].test(g.id);
				if (cat.startsWith("Ev")) return regs[1].test(g.id);
				if (cat === "SubStory") return regs[2].test(g.id);
				if (cat === "Daily") return regs[3].test(g.id);
				if (cat === "Challenge") return regs[4].test(g.id);
				if (cat === "EW") return regs[5].test(g.id);
				if (cat === "NEW") return regs[6].test(g.id);
				if (cat === "Roguelike") return regs[7].test(g.id);
				if (cat === "Others") return !regs.some(r => r.test(g.id));
				return false;
			}),
		[EnemyGroupDB, category],
	);
	const grouped = useMemo(() => Object.values(groupBy(groups, g => g.id.replace(/([^-]+-[^-]+)(-[^-]+)$/, "$1"))), [groups]);

	return <div class="mt-4">
		<div class="mb-3">
			{ Categories
				.map(cats => <>
					{ Object.values(groupBy(cats, (_, i) => Math.floor(i / 4)))
						.map(line => <div class="d-block btn-group mb-1">
							{ line.map(cat => <button
								class={ `btn btn-outline-primary ${isActive(category === cat)}` }
								onClick={ (e): void => {
									e.preventDefault();
									setCategory(cat);
								} }
							>
								<Locale
									k={ `ENEMY_GROUP_G_${cat.replace(/[0-9]+$/, "")}` }
									p={ [cat.replace(/^.+?([0-9]+)$/, "$1")] }
								/>
							</button>) }
						</div>) }
				</>)
				.gap(<hr class="my-2" />)
			}
		</div>

		<div class="mb-4">
			{ category.startsWith("World")
				? <h3>
					<Locale k={ `WORLD_WORLD_Story_${category.replace(/^World([0-9]+)$/, "$1")}` } />
				</h3>
				: <></>
			}
			{ category.startsWith("Ev")
				? <h3>
					<Locale k={ `WORLD_Ev${category.replace(/^Ev([0-9]+)$/, "$1")}` } />
				</h3>
				: <></>
			}
			<div class="text-secondary">
				<Locale k="ENEMY_GROUP_RESULTS" p={ [groups.length, grouped.length] } />
			</div>
		</div>

		{ grouped.map(groups => <div>
			{ groups.map(group => <EnemyGroupCard group={ group } />) }
		</div>).gap(<hr />) }
	</div>;
};
export default EnemiesGroup;
