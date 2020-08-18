<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { UnitData, ItemNames } from "@/libs/DB";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { RawFacilityEntry } from "@/libs/Types";

import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import ItemIcon from "@/components/ItemIcon.vue";

@Component({
	components: {
		UnitBadge,
		RarityBadge,
		ItemIcon,
	},
})
export default class FacilityCard extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private id!: string;

	@Prop({
		type: Object,
		required: true,
	})
	private facility!: RawFacilityEntry;

	private level: number = 0;

	private get LevelList () {
		const list = [];
		for (let i = 1; i <= 25; i++) {
			list.push({
				value: i - 1,
				text: i.toString(),
			});
		}
		return list;
	}

	private FacilityImage (id: string): string {
		const ext = ImageExtension();
		const step = this.level < 9
			? 1
			: this.level < 14
				? 2
				: this.level < 19
					? 3
					: this.level < 24
						? 4
						: 5;

		return `${AssetsRoot}/${ext}/facility/${id}_${step}.${ext}`;
	}

	private TimeFormat (duration: number): string {
		if (duration >= 86400) {
			const d = Math.floor(duration / 86400);
			const h = Math.floor(duration / 3600) % 24;
			const m = Math.floor(duration / 60) % 60;
			const s = duration % 60;
			return `${d}일 ${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)}`;
		} else {
			const h = Math.floor(duration / 3600);
			const m = Math.floor(duration / 60) % 60;
			const s = duration % 60;
			return `${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)}`;
		}
	}

	private ResVariant (res: "Components" | "Nutritions" | "Power") {
		switch (res) {
			case "Components": return "warning";
			case "Nutritions": return "success";
			case "Power": return "primary";
		}
		return "";
	}

	private ResDisplay (res: "Components" | "Nutritions" | "Power") {
		switch (res) {
			case "Components": return "부품";
			case "Nutritions": return "영양";
			case "Power": return "전력";
		}
		return "";
	}

	private WorkerType (type: string) {
		return type.split(",")
			.map(x => {
				return x.split("+")
					.map(y => {
						switch (y) {
							case "Bioroid": return <b-badge variant="info">바이오로이드</b-badge>;
							case "AGS": return <b-badge variant="info">AGS</b-badge>;
							case "Attacker":
							case "Defender":
							case "Supporter":
								return <unit-badge role={y} />;
							default:
								if (/^[0-9]+$/.test(y))
									return <b-badge variant="secondary">{UnitData[parseInt(y, 10)].name}</b-badge>;
								else
									return y;
						}
					});
			});
	}

	private Results (result: string[][]) {
		type T = string | JSX.Element;
		type U = T | T[];
		type Dict<P> = { [key: string]: P };

		const UnitRole: Dict<string> = {
			Attacker: "공격기",
			Defender: "보호기",
			Supporter: "지원기",
		};

		const parseResult = (line: string): U => {
			const part = line.split(":");
			switch (part[0]) {
				case "BioroidR":
					return [<rarity-badge rarity={part[2]}>{part[2]} {UnitRole[part[1]]} 바이오로이드</rarity-badge>, <small> ({part[3]}%)</small>];
				case "Item":
					if (parseFloat(part[2]) === 100)
						return <b-badge variant="secondary">{ItemNames[part[1]].name} {part[3]}개</b-badge>;
					else
						return [<b-badge variant="secondary">{ItemNames[part[1]].name} {part[3]}개</b-badge>, <small> ({part[2]}%)</small>];

				case "ComponentsR":
					return <b-badge variant="warning">부품 회복량 +{part[1]}%</b-badge>;
				case "NutritionsR":
					return <b-badge variant="success">영양 회복량 +{part[1]}%</b-badge>;
				case "PowerR":
					return <b-badge variant="primary">전력 회복량 +{part[1]}%</b-badge>;

				case "BattleEXP":
					return <b-badge variant="warning">전투 경험치 +{part[1]}%</b-badge>;

				case "FacilityTime":
					return <b-badge variant="apocrypha">설비 부품 제작 시간 -{part[1]}%</b-badge>;

				case "EquipUpgradeBonus":
					return <b-badge variant="exchange">장비 강화 소모 자원 -{part[1]}%</b-badge>;
				case "EquipDisassembleBonus":
					return <b-badge variant="exchange">장비 분해 자원 +{part[1]}%</b-badge>;
			}
			return line;
		};

		const conds: Array<U | U[]> = [];
		result.forEach((x, i) => {
			if (i > 0) conds.push(<hr class="my-1" />);

			const list: U[] = [];
			x.forEach((y, j) => {
				if (j > 0) {
					list.push(
						<div>
							<small class="text-danger"><strong>OR</strong></small>
						</div>,
					);
				}
				list.push(parseResult(y));
			});
			conds.push(list);
		});

		return conds;
	}

	private render () {
		const facility = this.facility;
		const level = this.level;
		const entry = facility.list[level];

		const UpgradeTable = facility.list
			.filter((x, i) => i > 0)
			.map(x => {
				const Material = ((m) => {
					if (!m) return "";

					const GradeTable = {
						Normal: "일반",
						Advanced: "고급",
						Special: "특수",
					};
					const VariantTable = {
						Normal: "white",
						Advanced: "info",
						Special: "event-exchange",
					};
					const TypeTable = {
						Material: "자재 시설품",
						Resource: "자원 시설품",
						Bioroid: "바이오로이드 제작실 시설품",
						Cafeteria: "카페테리아 시설품",
						EXPCenter: "전투 분석실 시설품",
						Equipment: "장비 연구실 시설품",
						Facility: "설비 부품 제작지원실 시설품",
						Creation: "제작 핵심 부품 생산소 시설품",
					};
					const grade = GradeTable[m.grade];
					const variant = VariantTable[m.grade];
					const type = TypeTable[m.type];

					return <b-badge variant={variant}>{type} ({grade}) x{m.value}</b-badge>;
				})(x.upgradeRes.Material);
				return <b-tr>
					<b-td class="bg-dark text-white">
						{x.level - 1}
						<span class="text-secondary"> -&gt; </span>
						{x.level}
					</b-td>
					<b-td>
						<item-icon item="resin" />
						{x.upgradeRes.Resins}
					</b-td>
					<b-td>
						<item-icon item="paint" />
						{x.upgradeRes.Paint}
					</b-td>
					<b-td>
						<item-icon item="metal" />
						{x.upgradeRes.Metal}
					</b-td>
					<b-td>{Material}</b-td>
					<b-td>{this.TimeFormat(x.upgradeTime)}</b-td>
				</b-tr>;
			});
		const UpgradeTableMd = facility.list
			.filter((x, i) => i > 0)
			.map(x => {
				const Material = ((m) => {
					if (!m) return <span class="text-secondary">-</span>;

					const GradeTable = {
						Normal: "일반",
						Advanced: "고급",
						Special: "특수",
					};
					const VariantTable = {
						Normal: "white",
						Advanced: "info",
						Special: "event-exchange",
					};
					const TypeTable = {
						Material: "자재 시설품",
						Resource: "자원 시설품",
						Bioroid: "바이오로이드 제작실 시설품",
						Cafeteria: "카페테리아 시설품",
						EXPCenter: "전투 분석실 시설품",
						Equipment: "장비 연구실 시설품",
						Facility: "설비 부품 제작지원실 시설품",
						Creation: "제작 핵심 부품 생산소 시설품",
					};
					const grade = GradeTable[m.grade];
					const variant = VariantTable[m.grade];
					const type = TypeTable[m.type];

					return <b-badge variant={variant}>{type} ({grade}) x{m.value}</b-badge>;
				})(x.upgradeRes.Material);

				return [
					<b-tr>
						<b-td class="bg-dark text-white" colspan="6">
							{x.level - 1}
							<span class="text-secondary"> -&gt; </span>
							{x.level}
						</b-td>
					</b-tr>,
					<b-tr>
						<b-td class="bg-dark text-white border-left" colspan="2">합성수지</b-td>
						<b-td class="bg-dark text-white" colspan="2">도료</b-td>
						<b-td class="bg-dark text-white border-right" colspan="2">철재</b-td>
					</b-tr>,
					<b-tr>
						<b-td class="border-left" colspan="2">
							<item-icon item="resin" />
							{x.upgradeRes.Resins}
						</b-td>
						<b-td colspan="2">
							<item-icon item="paint" />
							{x.upgradeRes.Paint}
						</b-td>
						<b-td class="border-right" colspan="2">
							<item-icon item="metal" />
							{x.upgradeRes.Metal}
						</b-td>
					</b-tr>,
					<b-tr>
						<b-td class="bg-dark text-white border-left" colspan="3">시설품</b-td>
						<b-td class="bg-dark text-white border-right" colspan="3">소요시간</b-td>
					</b-tr>,
					<b-tr>
						<b-td class="border-left" colspan="3">{Material}</b-td>
						<b-td class="border-right" colspan="3">{this.TimeFormat(x.upgradeTime)}</b-td>
					</b-tr>,
					<b-tr>
						<b-td colspan="6" />
					</b-tr>,
				];
			});
		const levels = (() => {
			type T = string | JSX.Element;
			const list: T[] = [];
			entry.requireWorker.level
				.forEach((x, i) => {
					if (i > 0) list.push(" / ");
					list.push(<span>
						<small>Lv.</small>
						{x}
					</span>);
				});
			return list;
		})();

		return <b-card no-body class="facility-card">
			<b-card-header>{facility.name}</b-card-header>
			<b-card-body>
				<b-row>
					<b-col cols="12" md="4">
						<span class="facility-image">
							<img src={this.FacilityImage(this.id)} />
							<span class="facility-size" data-size={facility.size} />
						</span>

						<b-row class="align-items-center justify-content-center mt-2">
							<b-col cols="auto">시설 레벨 :</b-col>
							<b-col cols="4">
								<b-select options={this.LevelList} vModel={this.level} />
							</b-col>
						</b-row>
					</b-col>
					<b-col cols="12" md="8">
						<b-container class="facility-info-table mt-2">
							<b-row cols="2" cols-md="4" class="text-center">
								<b-col class="bg-dark text-white">설비 크기</b-col>
								<b-col>{facility.size}칸</b-col>
								<b-col class="bg-dark text-white">가동 시간</b-col>
								<b-col>
									{
										facility.duration === 0
											? <span class="text-secondary">상시 가동</span>
											: this.TimeFormat(facility.duration)
									}
								</b-col>

								<b-col class="bg-dark text-white">편성 조건</b-col>
								<b-col>
									{entry.requireWorker.count}명<br />
									{levels}
								</b-col>
								<b-col class="bg-dark text-white">필요 자원</b-col>
								<b-col>
									{
										entry.requireRes.length === 0
											? <span class="text-secondary">자원 소모 없음</span>
											: entry.requireRes
												.map((res, resIdx) =>
													<b-badge
														key={`facility-${this.id}-reqres-${resIdx}`}
														variant={this.ResVariant(res.type)}
													>{this.ResDisplay(res.type)} {res.value}</b-badge>,
												)
									}
								</b-col>

								<b-col class="bg-dark text-white">편성 제한</b-col>
								<b-col>
									{
										entry.requireWorker.type
											? this.WorkerType(entry.requireWorker.type)
											: <span class="text-secondary">제한 없음</span>
									}
								</b-col>
								<b-col class="bg-dark text-white">시설 능력</b-col>
								<b-col>{this.Results(entry.result)}</b-col>
							</b-row>
						</b-container>

						<b-button class="mt-3" variant="secondary" v-b-toggle={`facility-${this.id}-upgradetable`}>업그레이드 정보 접기/펼치기</b-button>
						<b-collapse id={`facility-${this.id}-upgradetable`}>
							<b-table-simple class="mt-1 d-none d-md-table">
								<b-tbody>
									<b-tr class="bg-dark text-white">
										<b-td>레벨</b-td>
										<b-td>합성수지</b-td>
										<b-td>도료</b-td>
										<b-td>철재</b-td>
										<b-td>시설품</b-td>
										<b-td>소요시간</b-td>
									</b-tr>
									{UpgradeTable}
								</b-tbody>
							</b-table-simple>
							<b-table-simple class="mt-1 d-md-none">
								<b-tbody>
									{UpgradeTableMd}
								</b-tbody>
							</b-table-simple>
						</b-collapse>
					</b-col>
				</b-row>
			</b-card-body>
		</b-card>;
	}
}
</script>

<style lang="scss">
.card.facility-card {
	span.facility-image {
		position: relative;
		display: inline-block;

		img {
			max-width: 100%;
			border-radius: 6px;
		}
		span.facility-size {
			position: absolute;
			display: inline-block;
			top: 5px;
			right: 5px;
			margin-left: 5px;
			margin-bottom: 3px;
			width: 56px;
			height: 17px;
			background-image: url($assetsRoot + "/facility-size-dots.png");
			background-size: 56px 51px;
			background-repeat: no-repeat;
			vertical-align: middle;

			&[data-size="2"] {
				background-position-y: -17px;
			}
			&[data-size="3"] {
				background-position-y: -34px;
			}
		}
	}
	.facility-info-table.container .col {
		margin-bottom: -1px;
		padding: 0.75rem;
		border: 1px solid #dee2e6;
	}
	.badge + .badge {
		margin-left: 4px;
	}
}
</style>
