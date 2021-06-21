import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import { ACTOR_GRADE } from "@/types/Enums";
import { BaseStatType } from "@/types/Stat";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { LinkBonusType, Unit } from "@/types/DB/Unit";
import { SimulatorSlotType } from "../../types/Slot";

import { objState } from "@/libs/State";
import { RarityDisplay } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { GetLinkBonus } from "@/libs/LinkBonus";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import StatIcon from "@/components/stat-icon";
import UnitSelectorPopup from "@/components/popup/unit-selector-popup";

import style from "./style.scss";

interface SimulatorUpgradeProps {
	slot: SimulatorSlotType;

	/**
	 * 더 이상 전투원 추가가 불가능한 경우
	 */
	limited?: boolean;

	using?: string[];

	onUpdateLevel?: (level: number) => void;
	onUpdateRarity?: (rarity: ACTOR_GRADE) => void;
	onUpdateLink?: (index: number, value: number) => void;
	onUpdateLinkBonus?: (bonus: LinkBonusType) => void;
	onUpdateStat?: (stat: BaseStatType, value: number) => void;
	onUpdateUnit?: (unit: string | null) => void;
}

const SimulatorUpgrade: FunctionalComponent<SimulatorUpgradeProps> = (props) => {
	const displayUnitPopup = objState<boolean>(false);

	const slot = props.slot;
	if (!slot) {
		return <>
			<UnitSelectorPopup
				display={ displayUnitPopup.value }
				noClear
				ban={ props.using }
				onHidden={ (): void => displayUnitPopup.set(false) }
				onSelect={ (uid): void => {
					if (props.onUpdateUnit)
						props.onUpdateUnit(uid);
				} }
			/>

			<div class="btn-group mb-2">
				<button
					class="btn btn-primary"
					disabled={ !slot && props.limited }
					onClick={ (): void => displayUnitPopup.set(true) }
				>
					<Locale k="SIMULATOR_UNIT_SELECT" />
				</button>
				<button
					class="btn btn-danger"
					onClick={ (): void => {
						if (props.onUpdateUnit)
							props.onUpdateUnit(null);
					} }
				>
					<Locale k="SIMULATOR_UNIT_CLEAR" />
				</button>
			</div>
		</>;
	}

	const uid = slot.uid;
	const stats: BaseStatType[] = ["ATK", "DEF", "HP", "ACC", "EVA", "CRI"];

	return <Loader json={ [StaticDB.FilterableUnit, `unit/${slot.uid}`] } content={ ((): preact.VNode => {
		const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
		const unit = FilterableUnit.find(x => x.uid === uid);
		if (!unit) return <></>;

		const unitInfo = GetJson<Unit>(`unit/${slot.uid}`);
		if (!unitInfo) return <></>;

		const UsedPoints = Object.values(slot.stats).reduce((p, c) => p + c, 0);
		const LeftPoints = (slot.level * 3) - UsedPoints;

		const LeftClass = LeftPoints > 0
			? "success"
			: LeftPoints < 0
				? "danger"
				: "primary";

		const rarities = [
			ACTOR_GRADE.B,
			ACTOR_GRADE.A,
			ACTOR_GRADE.S,
			ACTOR_GRADE.SS,
		];

		const disabled = [
			slot.level < 10,
			slot.level < 30,
			slot.level < 50,
			slot.level < 70,
			slot.level < 90,
		];

		const LinkCount = Decimal.div(slot.links.reduce((p, c) => p + c, 0), 100).toNumber();
		const LinkBonus = unitInfo.linkBonus
			.filter(x => x)
			.map(x => GetLinkBonus(x, LinkCount));
		const FullLinkBonus = unitInfo.fullLinkBonus
			.filter(x => x)
			.map(x => GetLinkBonus(x, 1));

		function reset (range: number): void {
			if (props.onUpdateLink) {
				for (let i = 0; i < range; i++)
					props.onUpdateLink(i, 100);

				for (let i = range; i < 5; i++)
					props.onUpdateLink(i, 0);
			}
		}

		return <>
			<UnitSelectorPopup
				display={ displayUnitPopup.value }
				noClear
				onHidden={ (): void => displayUnitPopup.set(false) }
				onSelect={ (uid): void => {
					if (props.onUpdateUnit)
						props.onUpdateUnit(uid);
				} }
			/>

			<div class="btn-group mb-2">
				<button
					class="btn btn-primary"
					disabled={ !slot && props.limited }
					onClick={ (): void => displayUnitPopup.set(true) }
				>
					<Locale k="SIMULATOR_UNIT_SELECT" />
				</button>
				<button
					class="btn btn-danger"
					onClick={ (): void => {
						if (props.onUpdateUnit)
							props.onUpdateUnit(null);
					} }
				>
					<Locale k="SIMULATOR_UNIT_CLEAR" />
				</button>
			</div>

			<div class="input-group">
				<button class="btn btn-sm btn-secondary" onClick={ (): void => {
					if (props.onUpdateLevel)
						props.onUpdateLevel(1);
				} }>
					<Icon icon="chevron-double-down" />
				</button>
				<div class="input-group-text">Lv.</div>
				<input
					class="form-control"
					value={ slot.level }
					onInput={ (e): void => {
						if (props.onUpdateLevel)
							props.onUpdateLevel(parseInt((e.target as HTMLInputElement).value, 10));
					} }
				/>
				<div class="input-group-text d-none d-sm-flex">
					<div class="btn-group">
						{ rarities.map(rarity => rarity >= unit.rarity && rarity < (unitInfo.stat.length + unit.rarity)
							? <button
								class={ `btn btn-sm btn-outline-dark ${isActive(slot.rarity === rarity)}` }
								onClick={ (): void => {
									if (props.onUpdateRarity)
										props.onUpdateRarity(rarity);
								} }
							>
								{ RarityDisplay[rarity] }
							</button>
							: <></>,
						) }
					</div>
				</div>
				<button class="btn btn-sm btn-secondary" onClick={ (): void => {
					if (props.onUpdateLevel)
						props.onUpdateLevel(100);
				} }>
					<Icon icon="chevron-double-up" />
				</button>
			</div>

			<div class="btn-group mt-1 d-block d-sm-none">
				{ rarities.map(rarity => rarity >= unit.rarity && rarity <= (unitInfo.stat.length + unit.rarity - 1)
					? <button
						class={ `btn btn-sm btn-outline-dark ${isActive(slot.rarity === rarity)}` }
						onClick={ (): void => {
							if (props.onUpdateRarity)
								props.onUpdateRarity(rarity);
						} }
					>
						{ RarityDisplay[rarity] }
					</button>
					: <></>,
				) }
			</div>

			<hr />

			<div class="mb-1">
				<div class="float-start">
					<strong>
						<Locale k="SIMULATOR_CORELINKS" />
					</strong>
				</div>
				<div class="float-end d-flex align-items-center">
					<span class="d-none d-sm-inline me-2">
						<Locale k="SIMULATOR_CORELINKS_QUICKSET" />
					</span>

					<div class="btn-group float-end">
						<button class="btn btn-sm btn-secondary" onClick={ (): void => reset(0) }>0</button>
						<button class="btn btn-sm btn-success" disabled={ disabled[0] } onClick={ (): void => reset(1) }>1</button>
						<button class="btn btn-sm btn-success" disabled={ disabled[1] } onClick={ (): void => reset(2) }>2</button>
						<button class="btn btn-sm btn-success" disabled={ disabled[2] } onClick={ (): void => reset(3) }>3</button>
						<button class="btn btn-sm btn-success" disabled={ disabled[3] } onClick={ (): void => reset(4) }>4</button>
						<button class="btn btn-sm btn-primary" disabled={ disabled[4] } onClick={ (): void => reset(5) }>5</button>
					</div>
				</div>
				<div class="clearfix" />
			</div>
			<div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 mb-3">
				{ slot.links.map((link, index) => <div class="col py-1 py-md-0">
					<select
						class="form-select form-select-sm"
						value={ link }
						onInput={ (e): void => {
							if (props.onUpdateLink)
								props.onUpdateLink(index, parseInt((e.target as HTMLSelectElement).value, 10));
						} }
					>
						{ [0, 10, 15, 20, 25, 30, 40, 45, 50, 60, 75, 100].map(x => <option value={ x }>{ x }%</option>) }
					</select>
				</div>) }
			</div>

			<div class="mb-1">
				<div class="float-start">
					<strong>
						<Locale k="UNIT_VIEW_LINKBONUS" />
					</strong>
				</div>
				<div class="clearfix" />
			</div>
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-2">
				{ LinkBonus.map((lb) => <div class="col py-md-0 py-1">
					<Locale k={ lb.Name } />
					<span class="d-inline-block ps-1">
						{ lb.Prefix }
						<b class="text-danger">{ lb.Value }</b>
						{ lb.Postfix }
					</span>
				</div>) }
			</div>

			{ LinkCount === 5
				? <table class="table table-bordered table-fixed table-striped text-start mt-3">
					<thead class="thead-dark">
						<tr>
							<th class="text-center"><Locale k="UNIT_VIEW_FULL_LINKBONUS" /></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Locale k="LINKBONUS_NONE" />
								<div class="form-check float-end">
									<input
										class="form-check-input"
										type="radio"
										checked={ slot.linkBonus === "" }
										onChange={ (): void => {
											if (props.onUpdateLinkBonus)
												props.onUpdateLinkBonus("");
										} }
									/>
								</div>
							</td>
						</tr>
						{ FullLinkBonus.map(fl => <tr>
							<td>
								<Locale k={ fl.Name } />
								<span class="d-inline-block ps-1">
									{ fl.Prefix }
									<b class="text-danger">{ fl.Value }</b>
									{ fl.Postfix }
								</span>

								<div class="form-check float-end">
									<input
										class="form-check-input"
										type="radio"
										checked={ slot.linkBonus === fl.Key }
										onChange={ (): void => {
											if (props.onUpdateLinkBonus)
												props.onUpdateLinkBonus(fl.Key);
										} }
									/>
								</div>
							</td>
						</tr>) }
					</tbody>
				</table>
				: <></>
			}

			<hr />

			<div class="mb-2">
				<div class="float-start">
					<strong>
						<Locale k="SIMULATOR_UPGRADE" />
					</strong>
				</div>
				<div class={ `float-end badge bg-${LeftClass}` }>
					<small class="pe-2">
						<Locale k="SIMULATOR_UPGRADE_LEFTPOINTS" />
					</small>
					<span class={ `badge pill bg-light text-${LeftClass}` }>{ LeftPoints }</span>
				</div>
				<div class="clearfix" />
			</div>

			<table class="table table-striped">
				<tbody>
					{ stats.map(stat => <tr class="my-2">
						<td class="align-middle text-start">
							<span class={ style["stat-label"] }>
								<StatIcon stat={ stat } />
								<strong>
									<Locale k={ `SIMULATOR_${stat}` } />
								</strong>
							</span>
						</td>
						<td>
							<small class="text-secondary">Lv.</small>
							<span class="stat-level">
								<input
									type="text"
									class={ `${style["stat-input"]} form-control form-control-sm` }
									min={ 0 }
									max={ 300 }
									value={ slot.stats[stat] }
									onInput={ (e): void => {
										if (props.onUpdateStat)
											props.onUpdateStat(stat, parseInt((e.target as HTMLInputElement).value, 10));
									} }
								/>
							</span>
						</td>
						<td class="align-middle d-none d-sm-table-cell px-4">
							<input
								type="range"
								class="progress-stat form-range"
								min={ 0 }
								max={ 300 }
								value={ slot.stats[stat] }
								onInput={ (e): void => {
									if (props.onUpdateStat)
										props.onUpdateStat(stat, parseInt((e.target as HTMLInputElement).value, 10));
								} }
							/>
						</td>
					</tr>) }
				</tbody>
			</table>
		</>;
	}) } />;
};
export default SimulatorUpgrade;
