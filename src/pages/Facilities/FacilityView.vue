<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";
import UnitData from "@/libs/DB/Unit";
import FacilityData, { FacilityEntity, FacilityUpgradeRequiredMaterial, FactilityProduct } from "@/libs/DB/Facility";
import ConsumableData from "@/libs/DB/Consumable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import ItemIcon from "@/components/ItemIcon.vue";
import UnitCard from "@/pages/Units/UnitCard.vue";
import DropItem from "@/pages/Worlds/DropItem.vue";
import FacilityIcon from "./FacilityIcon.vue";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		UnitBadge,
		RarityBadge,
		ItemIcon,
		UnitCard,
		DropItem,
		FacilityIcon,
	},
})
export default class FacilityView extends Vue {
	private key: string = "";
	private level: number = 0;

	private get facility () {
		return FacilityData[this.key] || null;
	}

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

	private CombatantType (type: string) {
		return type.split(",")
			.map(x => {
				return x.split("+")
					.map(y => {
						switch (y) {
							case "Bioroid":
								return <b-badge class="mx-1" variant="info">바이오로이드</b-badge>;
							case "AGS":
								return <b-badge class="mx-1" variant="info">AGS</b-badge>;
							case "Attacker":
							case "Defender":
							case "Supporter": {
								const roleTable = {
									Attacker: ROLE_TYPE.ATTACKER,
									Defender: ROLE_TYPE.DEFENDER,
									Supporter: ROLE_TYPE.SUPPORTER,
								};
								return <unit-badge role={ roleTable[y] } />;
							}
							default:
								if (/^[0-9]+$/.test(y)) {
									const rarities: Record<ACTOR_GRADE, string> = {
										[ACTOR_GRADE.B]: "B",
										[ACTOR_GRADE.A]: "A",
										[ACTOR_GRADE.S]: "S",
										[ACTOR_GRADE.SS]: "SS",
									};
									const unit = UnitData.find(z => z.id === parseInt(y, 10));
									if (!unit) return <b-badge variant="secondary">???</b-badge>;

									const uid = `UNIT_${unit.uid}`;
									return [
										<a href={ `/units/${unit.id}` } onClick={ () => this.GoTo(`/units/${unit.id}`) } class="mx-1 d-inline-block">
											<rarity-badge id={ uid } rarity={ rarities[unit.rarity] }>{ unit.name } 🔗</rarity-badge>
										</a>,
										<b-tooltip target={ uid } placement="top" no-fade noninteractive custom-class="badge-tooltip">
											<unit-card unit={ unit } no-link />
										</b-tooltip>,
										<div class="preload-area">
											<unit-card unit={ unit } no-link />
										</div>,
									];
								} else
									return y;
						}
					});
			});
	}

	private Results (key: string, result: FactilityProduct[]) {
		type T = string | JSX.Element;
		type U = T | T[];
		type Dict<P> = { [key: string]: P; };

		const conds: Array<U | U[]> = [];
		result.forEach((x, i) => {
			if (i > 0) conds.push(<hr class="my-1" />);

			const list: U[] = [];
			if ("item" in x) {
				const item = ConsumableData.find(y => y.key === x.item) || { name: x.item };

				if (x.chance === 100)
					list.push(<drop-item item={ item } count={ x.count } />);
				else
					list.push(<drop-item item={ item } count={ x.count } chance={ x.chance } />);
			} else if ("type" in x) {
				switch (x.type) {
					case "facilityParts":
						list.push(<b-badge class="mx-1" variant="apocrypha">설비 부품 제작 시간 -{ x.bonus }%</b-badge>);
						break;
					case "nutrient":
						list.push(<b-badge class="mx-1" variant="success">영양 회복량 +{ x.bonus }%</b-badge>);
						break;
					case "metal":
						list.push(<b-badge class="mx-1" variant="warning">부품 회복량 +{ x.bonus }%</b-badge>);
						break;
					case "power":
						list.push(<b-badge class="mx-1" variant="primary">전력 회복량 +{ x.bonus }%</b-badge>);
						break;
					case "equipCost":
						list.push(<b-badge class="mx-1" variant="exchange">장비 강화 소모 자원 -{ x.bonus }%</b-badge>);
						break;
					case "equipDisassemble":
						list.push(<b-badge class="mx-1" variant="exchange">장비 분해 자원 +{ x.bonus }%</b-badge>);
						break;
					case "exp":
						list.push(<b-badge class="mx-1" variant="warning">전투 경험치 +{ x.bonus }%</b-badge>);
						break;
				}
			} else if ("grade" in x) {
				const UnitRole: Dict<string> = {
					Attacker: "공격기",
					Defender: "보호기",
					Supporter: "지원기",
					"": "???",
				};

				const target = key.startsWith("NukerMaking")
					? "Attacker"
					: key.startsWith("TankerMaking")
						? "Defender"
						: key.startsWith("SupporterMaking")
							? "Supporter"
							: "";
				list.push(
					<rarity-badge rarity={ x.grade }>{ x.grade } { UnitRole[target] } 바이오로이드</rarity-badge>,
					<small> ({ x.chance }%)</small>,
				);
			}
			conds.push(list);
		});

		return conds;
	}

	private render () {
		const facility = this.facility;
		if (!facility) return <div>...</div>;

		const level = this.level;
		const entry = facility.list[level];

		function getUpgradeRequired (m: FacilityUpgradeRequiredMaterial | null) {
			if (!m) return <small class="text-secondary">없음</small>;

			// const GradeTable = {
			// 	T1: "일반",
			// 	T2: "고급",
			// 	T3: "특수",
			// };
			const VariantTable = {
				T1: "white",
				T2: "info",
				T3: "event-exchange",
			};
			const TextVariantTable = {
				T1: "dark",
				T2: "light",
				T3: "light",
			};
			// const TypeTable = {
			// 	Matrial: "자재 시설품",
			// 	Resource: "자원 시설품",
			// 	PcMaking: "바이오로이드 제작실 시설품",
			// 	Cafe: "카페테리아 시설품",
			// 	Training: "전투 분석실 시설품",
			// 	Equip: "장비 연구실 시설품",
			// 	FacilityPartsMaking: "설비 부품 제작지원실 시설품",
			// 	StuffMaking: "제작 핵심 부품 생산소 시설품",
			// };
			// const grade = GradeTable[m.grade];
			const variant = VariantTable[m.grade];
			const text = TextVariantTable[m.grade];
			// const type = TypeTable[m.type];

			const item = ConsumableData.find(x => x.key === `${m.type}_Parts_${m.grade}`);
			return <drop-item item={ item } count={ m.value } variant={ variant } text={ text } />;
			// return <b-badge class="mx-1" variant={variant}>{type} ({grade}) x{m.value}</b-badge>;
		}

		const UpgradeTable = facility.list
			.filter((x, i) => i > 0)
			.map(x => {
				const Material = getUpgradeRequired(x.upgradeRequired.Material);
				return <b-tr>
					<b-td class="bg-dark text-white">
						{ x.level - 1 }
						<span class="text-secondary"> → </span>
						{ x.level }
					</b-td>
					<b-td>
						<item-icon item="UI_Icon_Consumable_Wood_Material" />
						{ x.upgradeRequired.Wood }
					</b-td>
					<b-td>
						<item-icon item="UI_Icon_Consumable_Stone_Material" />
						{ x.upgradeRequired.Stone }
					</b-td>
					<b-td>
						<item-icon item="UI_Icon_Consumable_Iron_Material" />
						{ x.upgradeRequired.Iron }
					</b-td>
					<b-td>{ Material }</b-td>
					<b-td>{ this.TimeFormat(x.upgradeTime) }</b-td>
				</b-tr>;
			});

		const UpgradeTableMd = facility.list
			.filter((x, i) => i > 0)
			.map(x => {
				const Material = getUpgradeRequired(x.upgradeRequired.Material);
				return [
					<b-tr>
						<b-td class="bg-dark text-white" colspan="6">
							{ x.level - 1 }
							<span class="text-secondary"> → </span>
							{ x.level }
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
							{ x.upgradeRequired.Wood }
						</b-td>
						<b-td colspan="2">
							<item-icon item="paint" />
							{ x.upgradeRequired.Stone }
						</b-td>
						<b-td class="border-right" colspan="2">
							<item-icon item="metal" />
							{ x.upgradeRequired.Iron }
						</b-td>
					</b-tr>,
					<b-tr>
						<b-td class="bg-dark text-white border-left" colspan="3">시설품</b-td>
						<b-td class="bg-dark text-white border-right" colspan="3">소요시간</b-td>
					</b-tr>,
					<b-tr>
						<b-td class="border-left" colspan="3">{ Material }</b-td>
						<b-td class="border-right" colspan="3">{ this.TimeFormat(x.upgradeTime) }</b-td>
					</b-tr>,
					<b-tr>
						<b-td colspan="6" />
					</b-tr>,
				];
			});

		return <div class="facility-view">
			<b-row>
				<b-col cols="auto">
					<b-button variant="dark" onClick={ () => this.GoTo("/facilities/") }>
						<b-icon-arrow-left class="mr-1" />
						설비 정보로
					</b-button>
				</b-col>
			</b-row>
			<hr />

			<b-card no-body >
				<b-card-header>{ facility.name }</b-card-header>
				<b-card-body>
					<facility-icon facility={ facility } level={ this.level + 1 } />

					<b-row class="align-items-center justify-content-center mt-2">
						<b-col cols="auto">시설 레벨 :</b-col>
						<b-col cols="4">
							<b-select options={ this.LevelList } vModel={ this.level } />
						</b-col>
					</b-row>

					<b-container class="facility-info-table mt-2">
						<b-row cols="2" cols-md="4" class="text-center">
							<b-col class="bg-dark text-white">설비 크기</b-col>
							<b-col>{ facility.size }칸</b-col>
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
								{ entry.requiredCombatant.count }명<br />
								<span>
									<small>Lv.</small>
									{ entry.requiredCombatant.level }
								</span>
							</b-col>
							<b-col class="bg-dark text-white">필요 자원</b-col>
							<b-col>
								{
									entry.cost.every(res => res === 0)
										? <span class="text-secondary">자원 소모 없음</span>
										: [
											<b-badge class="mx-1" key={ `facility-${this.key}-reqres-0` } variant="warning">
												부품 { entry.cost[0] }
											</b-badge>,
											<b-badge class="mx-1" key={ `facility-${this.key}-reqres-1` } variant="success">
												영양 { entry.cost[1] }
											</b-badge>,
											<b-badge class="mx-1" key={ `facility-${this.key}-reqres-2` } variant="primary">
												전력 { entry.cost[2] }
											</b-badge>,
										]
								}
							</b-col>

							<b-col class="bg-dark text-white">편성 제한</b-col>
							<b-col>
								{
									entry.requiredCombatant.type
										? this.CombatantType(entry.requiredCombatant.type)
										: <span class="text-secondary">제한 없음</span>
								}
							</b-col>
							<b-col class="bg-dark text-white">시설 능력</b-col>
							<b-col>{ this.Results(this.key, entry.produceItem) }</b-col>
						</b-row>
					</b-container>

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
							{ UpgradeTable }
						</b-tbody>
					</b-table-simple>
					<b-table-simple class="mt-1 d-md-none">
						<b-tbody>
							{ UpgradeTableMd }
						</b-tbody>
					</b-table-simple>
				</b-card-body>
			</b-card>
		</div>;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private checkParams () {
		const params = this.$route.params;

		if ("key" in params)
			this.key = params.key;
		else
			this.$router.replace("/facilities/");
	}

	private mounted () {
		this.checkParams();

		const facility = this.facility;
		if (!facility)
			UpdateTitle("설비정보", "???");
		else {
			SetMeta(["description", "twitter:description"], `${facility.name} 설비의 정보입니다. 소모 자원과 필요 전투원 정보, 생산품과 업그레이드 비용/시간을 확인할 수 있습니다.`);
			SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/${ImageExtension()}/facility/${facility.image}.${ImageExtension()}`);
			SetMeta("keywords", `,${facility.name}`, true);

			UpdateTitle("설비정보", facility.name);
		}
	}
}
</script>

<style lang="scss">
.facility-view {
	.facility-info-table.container .col {
		margin-bottom: -1px;
		padding: 0.75rem;
		border: 1px solid #dee2e6;
	}

	.preload-area {
		position: absolute;
		display: inline-block;
		left: 0;
		top: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		pointer-events: none;
		opacity: 0.000001;
	}
}
</style>
