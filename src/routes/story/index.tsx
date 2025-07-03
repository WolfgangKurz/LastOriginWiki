import { useEffect, useMemo, useState } from "preact/hooks";
import { Link, route } from "preact-router";
import Store from "@/store";

import StoryMap, { StoryMapSubstory } from "@/types/DB/StoryMap";
import { STAGE_SUB_TYPE } from "@/types/Enums";

import { useLocale } from "@/libs/Locale";
import { StaticDB, useDBData } from "@/libs/Loader";
import { AssetsRoot } from "@/libs/Const";
import { cn } from "@/libs/Class";
import { UpdateTitle } from "@/libs/Site";

import Locale from "@/components/locale";
import Button from "@/components/Button";
import PopupBase from "@/components/popup/base";
import PCIcon from "@/components/pc-icon";

import Icons from "@/components/bootstrap-icon";

import style from "./style.module.scss";

type StoryKeySourceType = string | number | [string | number, number | number[]];
type StoryKeyType = [string | number, number[]];

interface StoryProps {
	chapter?: string;
}

const Story: FunctionalComponent<StoryProps> = (props) => {
	const [loc] = useLocale();

	const [selectedKey, setSelectedKey] = useState<[string | number, number] | null>(null);

	UpdateTitle(loc["MENU_STORY"]);

	useEffect(() => {
		if (props.chapter) {
			const p = /^(.+)_([0-9]+)$/.exec(props.chapter);
			if (p) {
				setSelectedKey([
					/^[0-9]+$/.test(p[1])
						? parseInt(p[1], 10)
						: p[1],
					parseInt(p[2], 10),
				]);
			}
		} else if (selectedKey)
			setSelectedKey(null);
	}, [props.chapter]);

	const sKey = useMemo(() => selectedKey ? selectedKey[0] : null, [selectedKey]);
	const sSub = useMemo(() => selectedKey ? selectedKey[1] : null, [selectedKey]);

	const StoryMapDB = useDBData<StoryMap>(StaticDB.StoryMap);
	const StoryListSource: StoryKeySourceType[] = [
		"Ev25", // 제로베이스
		1, 2, 3, 4, 5, 6,
		"Ev1", "Ev2", "Ev3", "Ev4", "Ev5", "Ev6",
		7,
		"Ev7", "Ev8",
		8,
		"Ev9",
		"Ev17", // 분노의 늑대 송곳니
		"Ev10", "Ev11",
		"Ev22", // 당신의 쐐기에 진심을
		"Ev12", "Ev13",
		9,
		["Ev14", [1, 2]],
		"Ev15", "Ev16", "Ev18",
		10,
		"Ev19",
		11,
		"Ev20", "Ev21", "Ev23",
		12,
		"Ev24",
		"Ev31", // 대전란 ~끝없이 내리치는 자색의 번개~
		"Ev26", "Ev27", "Ev28", "Ev29", "Ev30",
		13,
		"Ev32",
	];
	const StoryList: Array<StoryKeyType | null> = useMemo(
		() => {
			const arr: StoryKeyType[] = StoryListSource.map(r => {
				if (Array.isArray(r)) {
					const s = r[1];
					if (Array.isArray(s)) return [r[0], s];
					return [r[0], [s]];
				}
				return [r, [0]];
			});

			if (StoryMapDB) {
				const unordered: StoryKeyType[] = Object.keys(StoryMapDB)
					.filter(k => !arr.some(r => r[0] == k))
					.map(k => [k, [0]]);

				if (unordered.length > 0) {
					return [
						...arr,
						null,
						...unordered,
					];
				}
			}
			return arr;
		},
		[StoryMapDB, StoryListSource],
	);

	function GetWorldIcon (k: number | string, s: number): string {
		if (typeof k === "number") {
			if (s === 0)
				return `Story_${k}`;
			else
				return `Story_${k}_${s}`;
		}
		return `${k}_${s || 1}`;
	}
	function GetWorldLocale (k: number | string, s: number): string {
		const reg = /(( [0-9]+부)|( Part [0-9]+)|( 第[0-9]+部)|(第.+幕))$/;
		const text = loc[`WORLD_WORLD_${k}_${s || 1}`] || `WORLD_WORLD_${k}_${s || 1}`;
		return text.replace(reg, "").trim();
	}

	const Maps = useMemo(() => {
		if (sKey !== null && sSub !== null && StoryMapDB) {
			if (sSub === 0)
				return Object.values(StoryMapDB[sKey])
					.map(c => c.list)
					.gap(null)
					.flat();
			else
				return StoryMapDB[sKey][sSub].list;
		}
		return [];
	}, [sKey, sSub, StoryMapDB]);
	const Substories = useMemo(() => {
		if (sKey !== null && sSub !== null && StoryMapDB) {
			if (sSub === 0)
				return Object.values(StoryMapDB[sKey])
					.reduce<StoryMapSubstory[]>((p, c) => p.concat(...c.substory), []);
			else
				return StoryMapDB[sKey][sSub].substory;
		}
		return [];
	}, [sKey, sSub, StoryMapDB]);

	function validArray<T> (arr: T[] | undefined | null, onValid: (arr: T[]) => preact.ComponentChildren, onInvalid: () => preact.ComponentChildren): preact.ComponentChildren {
		if (arr && arr.length > 0) return onValid(arr);
		return onInvalid();
	}

	function StoryTimeline (k: StoryKeyType): preact.VNode[] {
		return k[1].map(s => <div class={ style.StoryMapItem }>
			<Link
				class={ style.Box }
				href={ `/story/${k[0]}_${s}` }
			>
				<img src={ `${AssetsRoot}/world/icons/${GetWorldIcon(k[0], s)}.png` } />

				<div class={ style.StoryType }>
					{ typeof k[0] === "number"
						? <>
							<span class="badge bg-warning text-bg-warning mx-1">
								<Locale k="STORY_TYPE_MAINSTORY" />
							</span>

							<span class="badge bg-dark text-bg-dark mx-1">
								<Locale k="WORLDS_WORLD_TITLE" p={ [k[0]] } />
							</span>
						</>
						: <>
							<span class="badge bg-danger text-bg-danger mx-1">
								<Locale k="STORY_TYPE_EVENT" />
							</span>

							{ s !== 0 && <span class="badge bg-dark text-bg-dark mx-1">
								<Locale k="WORLDS_WORLD_TITLE" p={ [s] } />
							</span> }
						</>
					}
				</div>
				<div class={ style.StoryName }>
					{ GetWorldLocale(k[0], s) }
				</div>
			</Link>
		</div>);
	}

	const StoryListA = useMemo((): StoryKeyType[] => {
		const idx = StoryList.indexOf(null);
		if (idx >= 0) return StoryList.slice(0, idx) as StoryKeyType[];
		return StoryList as StoryKeyType[];
	}, [StoryList]);
	const StoryListB = useMemo((): StoryKeyType[] => {
		const idx = StoryList.indexOf(null);
		if (idx >= 0) return StoryList.slice(idx + 1) as StoryKeyType[];
		return [];
	}, [StoryList]);

	return <div class={ style.Story }>
		<h2>
			<Locale k="STORY" />
		</h2>
		<div class="text-end">
			<Button
				variant="dark"
				onClick={ () => route("/worlds/Sub") }
			>
				<Locale k="STORY_GOTO_UNIT_SUBSTORY" />
			</Button>
		</div>

		<hr />

		<div class={ style.Timeline }>
			{ StoryListA.map(k => StoryTimeline(k!)) }
		</div>
		{ StoryListB.length > 0 && <>
			<hr />
			<div class={ style.Timeline }>
				{ StoryListB.map(k => StoryTimeline(k!)) }
			</div>
		</> }

		<PopupBase
			display={ !!selectedKey }
			onHidden={ () => route("/story") }
			size="lg"

			headerClass={ style.PopupHeader }
			header={ sKey !== null && sSub !== null
				? <>
					{ typeof sKey === "number"
						? <>
							<span class="badge bg-warning text-bg-warning mx-1">
								<Locale k="STORY_TYPE_MAINSTORY" />
							</span>

							<span class="badge bg-dark text-bg-dark mx-1">
								<Locale k="WORLDS_WORLD_TITLE" p={ [sKey] } />
							</span>
						</>
						: <>
							<span class="badge bg-danger text-bg-danger mx-1">
								<Locale k="STORY_TYPE_EVENT" />
							</span>

							{ sSub !== 0 && <span class="badge bg-dark text-bg-dark mx-1">
								<Locale k="WORLDS_WORLD_TITLE" p={ [sSub] } />
							</span> }
						</>
					}

					<span class="ps-2">
						{ GetWorldLocale(sKey, sSub) }
					</span>
				</>
				: undefined
			}
		>
			<div class="row row-cols-1 row-cols-lg-2">
				<div class="col">
					<h5 class="mb-3">
						<Locale k="STORY_TYPE_STORY" />
					</h5>

					<div class={ style.StoryItemList }>
						{ Maps.map(r => r === null
							? <hr class="my-4" />
							: <div class={ style.StoryItem }>
								<strong>
									<img
										class={ style.NodeIcon }
										src={ `${AssetsRoot}/world/mapicon_${r.type === STAGE_SUB_TYPE.STORY
											? 0 // temp
											: r.type}${r.type === STAGE_SUB_TYPE.STORY ? "s" : "n"}.png`
										}
									/>
									{ r.text }
								</strong>

								<i />

								<div>
									{ r.type === STAGE_SUB_TYPE.STORY
										? <button
											type="button"
											class="btn btn-sm btn-stat-hp"
											onClick={ e => {
												e.preventDefault();
												Store.Story.back.value = true;
												route(`/story/${r.key}/ED`);
											} }
										>
											<Icons.Book class="me-1" />
											Story
										</button>
										: <div class={ cn("btn-group", style.Buttons) }>
											{ "OP" in r.index
												? <button
													type="button"
													class="btn btn-sm btn-stat-hp"
													onClick={ e => {
														e.preventDefault();
														Store.Story.back.value = true;
														route(`/story/${r.key}/OP`);
													} }
												>
													<Icons.Book class="me-1" />
													OP
												</button>
												: <button
													type="button"
													class="btn btn-sm"
													disabled
												>
													<Icons.Book class="me-1" />
													OP
												</button>
											}

											{ validArray(
												Object.keys(r.index).filter(v => v.startsWith("mid-")),
												a => a.map(v => <button
													type="button"
													class="btn btn-sm btn-stat-hp"
													onClick={ e => {
														e.preventDefault();
														Store.Story.back.value = true;
														route(`/story/${r.key}/${v}`);
													} }
												>
													<Icons.Book class="me-1" />
													MID
												</button>),
												() => <button
													type="button"
													class="btn btn-sm"
													disabled
												>
													<Icons.Book class="me-1" />
													MID
												</button>,
											) }

											{ "ED" in r.index
												? <button
													type="button"
													class="btn btn-sm btn-stat-hp"
													onClick={ e => {
														e.preventDefault();
														Store.Story.back.value = true;
														route(`/story/${r.key}/ED`);
													} }
												>
													<Icons.Book class="me-1" />
													ED
												</button>
												: <button
													type="button"
													class="btn btn-sm"
													disabled
												>
													<Icons.Book class="me-1" />
													ED
												</button>
											}
										</div>
									}
								</div>

								<div class={ style.StoryTitle }>
									<Locale plain k={ `WORLD_MAP_${sKey}_${r.text}` } />
								</div>
							</div>)
						}
					</div>
				</div>

				<div class="col mt-5 mt-lg-0">
					<h5 class="mb-3">
						<Locale k="STORY_TYPE_SUBSTORY" />
					</h5>

					{ Substories.length === 0
						? <div class={ style.SubstoryEmpty }>
							<img src={ `${AssetsRoot}/ui/no_substory.png` } />
							<br />
							<Locale plain k="WORLDS_SUBSTORY_EMPTY" />
						</div>
						: <div class={ style.SubstoryItemList }>
							{ Substories.map(r => <div class={ style.StoryItem }>
								<strong>
									<PCIcon class={ style.SubstoryIcon } item={ r.icon } size={ 48 } />

									<Locale raw={ false } k={ r.char } />
								</strong>

								<div class={ style.SubstoryList }>
									{ r.list.map(s => <div class={ style.SubstoryItem }>
										<PCIcon class={ cn("me-2", style.SubstoryIcon) } item={ s.icon } size={ 32 } />

										<span>
											<Locale raw={ false } k={ s.key } />
										</span>

										<button
											type="button"
											class="btn btn-sm btn-stat-hp"
											onClick={ e => {
												e.preventDefault();
												Store.Story.back.value = true;
												route(`/story/${r.key}/${s.key}`);
											} }
										>
											<Icons.Book class="me-1" />
											Story
										</button>
									</div>) }
								</div>
							</div>) }
						</div>
					}
				</div>
			</div>
		</PopupBase>
	</div>;
};
export default Story;
