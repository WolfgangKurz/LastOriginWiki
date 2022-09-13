import { BuffEffectInfo } from "./BuffEffect";

export interface EffectFilterListItemSingle extends BuffEffectInfo {
	selected: boolean;
}
export interface EffectFilterListItemPM extends BuffEffectInfo {
	pmType: 1 | -1;
	selected: boolean;
}
export type EffectFilterListType = Array<EffectFilterListItemSingle | EffectFilterListItemPM[]>;
