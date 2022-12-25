import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { createPortal } from "preact/compat";
import throttle from "lodash.throttle";

import { BGMAlbum, BGMInfo } from "@/types/BGM";

import { AssetsRoot } from "@/libs/Const";
import { objState } from "@/libs/State";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { BuildClass } from "@/libs/Class";

import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import ShuffleText from "./components/ShuffleText";

import style from "./style.module.scss";
import BGMAlbums from "@/libs/BGM";

function after (time: number): Promise<void> {
	return new Promise<void>(resolve => {
		setTimeout(resolve, time);
	});
}

enum PageType {
	List = 1,
	Album = 2,
}

const DOMUpdateQueue: Array<() => void> = [];

const BGM: FunctionalComponent = () => {
	const appContainer = document.querySelector("#page > #app") || document.body;

	const itemCount = objState(1);
	const itemRows = objState(2);
	const screenType = objState<PageType>(PageType.List);

	const listItemRef = useRef<Array<HTMLDivElement | null>>([]);
	const listCursor = objState(0);

	const lastSelectedItem = objState<BGMAlbum | null>(null);
	// 마지막으로 선택되었던 아이템 여부
	// (View가 닫힐 때, 닫히는 애니메이션이 종료될 때 까지 보여주지 않기 위해 필요)

	const selectedItem = objState<BGMAlbum | null>(null);
	const selectedDisplay = objState(false);
	const selectedImagePrepare = objState("");
	const selectedImageAnimDone = objState(false);
	const selectedImagePlaceholderRef = useRef<HTMLImageElement>(null);
	const selectedImageRef = useRef<HTMLDivElement>(null);

	const playingAlbum = objState<BGMAlbum | null>(null);
	const playingMusic = objState<BGMInfo | null>(null);

	const playTimeTextRef = useRef<HTMLDivElement>(null);
	const playTimeProgressRef = useRef<HTMLDivElement>(null);
	const playTimeThumbRef = useRef<HTMLDivElement>(null);
	const lyricsRef = useRef<HTMLDivElement>(null);
	const lyricsItemRef = useRef<Array<HTMLDivElement | null>>([]);
	const playerRef = useRef<HTMLAudioElement>(null);
	const isPlaying = objState<boolean>(false);
	const currentLyrics = objState(-1);

	useEffect(() => {
		SetMeta(["description", "twitter:description"], "라스트오리진(LastOrigin)에 사용된 BGM 목록과 플레이어입니다.");
		SetMeta("keywords", ",BGM,OST", true);
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle("BGM");
	}, []);

	const updateItemCount = useCallback(throttle(() => {
		const w = window.innerWidth;
		const h = window.innerHeight;

		let col = 6;
		if (w < 576) col = 1;
		else if (w < 768) col = 2;
		else if (w < 992) col = 3;
		else if (w < 1200) col = 4;
		else if (w < 1400) col = 5;

		if (itemCount.value !== col)
			itemCount.set(col);

		let rows = 2;
		if (h < 720) rows = 1;

		if (itemRows.value !== rows)
			itemRows.set(rows);
	}, 100), []);
	useLayoutEffect(() => {
		window.addEventListener("resize", updateItemCount);

		updateItemCount();
		updateItemCount.flush();

		return () => window.removeEventListener("resize", updateItemCount);
	}, [updateItemCount]);

	useEffect(() => { // non-null memoization
		if (selectedItem.value)
			lastSelectedItem.set(selectedItem.value);
	}, [selectedItem.value]);

	useEffect(() => {
		const lst = [...DOMUpdateQueue];
		DOMUpdateQueue.splice(0, DOMUpdateQueue.length);
		lst.forEach(cb => cb());
	});

	useLayoutEffect(() => {
		if (!playingMusic.value) {
			if (playTimeTextRef.current)
				playTimeTextRef.current.innerText = "--:-- / --:--";
		}
	}, [playingMusic.value]);

	function toTimeText (duration: number): string {
		const d = Math.floor(duration);
		if (d < 0) return "--:--";
		if (d > 60) {
			const m = Math.floor(d / 60);
			const s = d % 60;

			return [
				m.toString().padStart(2, "0"),
				s.toString().padStart(2, "0"),
			].join(":");
		}
		return `00:${d.toString().padStart(2, "0")}`;
	}

	const items: BGMAlbum[] = BGMAlbums;
	const maxPage = Math.floor((items.length - 1) / (itemCount.value * itemRows.value));

	const isPlayingAlbum = playingAlbum.value && playingAlbum.value === selectedItem.value;

	return createPortal(<div class={ style.BGM }>
		<div class={ style.Content }>
			<div class={ BuildClass("p-4", style.SearchBox) }>
				<input class="form-control" />
			</div>

			<div class={ style.AlbumList }>
				<a class={ BuildClass(style.PageLeft, listCursor.value === 0 && style.Disabled) }>
					<Icon icon="chevron-compact-left" />
				</a>
				<a class={ BuildClass(style.PageRight, listCursor.value === maxPage && style.Disabled) }>
					<Icon icon="chevron-compact-right" />
				</a>

				{ items.slice(0, itemCount.value * itemRows.value)
					.map((c, i) => <div class={ style.Item }>
						<div
							class={ BuildClass(
								style.Album,
								(selectedItem.value?.id === c.id || (!selectedItem.value && lastSelectedItem.value?.id === c.id && selectedDisplay.value)) && style.Selected, // 선택되었거나 감추어지고 있는 도중인 앨범아트
								!selectedItem.value && selectedDisplay.value && style.Hiding,
							) }
							onMouseEnter={ () => {
								selectedImagePrepare.set(c.image);
							} }
							onClick={ (e) => {
								e.preventDefault();
								e.stopPropagation();

								{ // 앨범 뷰 초기 위치
									const el = e.currentTarget;
									const el2 = selectedImagePlaceholderRef.current;
									const img = selectedImageRef.current;
									if (!el || !el2 || !img) return;

									img.style.left = `${el.offsetLeft}px`;
									img.style.top = `${el.offsetTop}px`;

									DOMUpdateQueue.push(async () => {
										const p = el2.offsetParent as HTMLImageElement;
										const px = p.offsetLeft - p.clientWidth / 2;
										const py = p.offsetTop - p.clientHeight / 2;

										img.style.left = `${el2.offsetLeft + px}px`;
										img.style.top = `${el2.offsetTop + py}px`;
										img.style.width = `${el2.clientWidth}px`;
										img.style.height = `${el2.clientHeight}px`;

										await after(300);

										selectedImageAnimDone.set(true);
									}); // next update
								}

								screenType.set(PageType.Album);
								selectedItem.set(c);
								selectedDisplay.set(true);
								selectedImagePrepare.set(c.image);
							} }
							ref={ el => listItemRef.current[i] = el }
						>
							<img src={ `${AssetsRoot}/bgm/${c.image}.jpg` } />
						</div>
					</div>)
				}
			</div>

			<div // 앨범 뷰
				class={ BuildClass(style.AlbumView, screenType.value === PageType.Album && style.Active) }
			>
				<div // Animating 시 앨범아트 placeholder, Done
					class={ BuildClass(
						style.Album,
						!!selectedItem.value && style.Selected,
						selectedDisplay.value && style.Display,
						!selectedItem.value && selectedDisplay.value && style.Hiding,
						selectedImageAnimDone.value && style.Done,
					) }
					ref={ selectedImageRef }
				>
					<img src={ `${AssetsRoot}/bgm/${selectedImagePrepare.value}.jpg` } />
				</div>

				<div
					class={ BuildClass(style.ViewArea, !!selectedItem.value && style.Display) }
					onClick={ (e) => {
						e.preventDefault();
					} }
				>
					<button
						class="text-light"
						onClick={ (e) => {
							e.preventDefault();

							const idx = items.findIndex(r => r.id === selectedItem.value?.id);
							const el = listItemRef.current[idx];
							if (el) { // 되돌아가는 애니메이션
								selectedImageAnimDone.set(false);

								const target = selectedImageRef.current;
								const img = selectedImagePlaceholderRef.current;
								if (!el || !img || !target) return;

								// View 화면 앨범아트 위치
								const p = img.offsetParent as HTMLImageElement;
								const px = p.offsetLeft - p.clientWidth / 2;
								const py = p.offsetTop - p.clientHeight / 2;

								target.style.left = `${img.offsetLeft + px}px`;
								target.style.top = `${img.offsetTop + py}px`;
								target.style.width = `${img.clientWidth}px`;
								target.style.height = `${img.clientHeight}px`;

								DOMUpdateQueue.push(async () => {
									target.style.left = `${el.offsetLeft}px`;
									target.style.top = `${el.offsetTop}px`;
									target.style.width = "";
									target.style.height = "";

									await after(300);

									target.style.left = "";
									target.style.top = "";
									lastSelectedItem.set(null);
									selectedDisplay.set(false);
								}); // next update
							}

							screenType.set(PageType.List);
							selectedItem.set(null);
						} }
					>
						<Icon icon="x" />
					</button>

					<img // 표시용 앨범아트 (absolute)
						class={ BuildClass(selectedImageAnimDone.value && style.Done) }
						src={ `${AssetsRoot}/bgm/${selectedImagePrepare.value}.jpg` }
						ref={ selectedImagePlaceholderRef }
					/>
					<div class={ style.PlayerInfo }>
						<div class={ style.PlayTimeText } ref={ playTimeTextRef } />

						<div class={ style.PlayTime }>
							<div class={ style.Track }>
								{ playingMusic.value
									? <>
										<div
											class={ style.Progress }
											ref={ playTimeProgressRef }
										/>
										<div
											class={ style.Thumb }
											ref={ playTimeThumbRef }
										/>
									</> :
									<></>
								}
							</div>
						</div>

						<div class={ style.Controllers }>
							<button class={ style.PrevButton }>
								<Icon icon="fast-forward-fill" />
							</button>

							<button
								class={ style.PlayButton }
								onClick={ (e) => {
									e.preventDefault();
									if (playerRef.current) {
										if (isPlaying.value)
											playerRef.current.pause();
										else
											playerRef.current.play();
									}
								} }
							>
								{ isPlaying.value
									? <Icon icon="pause" />
									: <Icon icon="play-fill" />
								}
							</button>

							<button class={ style.NextButton }>
								<Icon icon="fast-forward-fill" />
							</button>
						</div>
					</div>

					<div class={ style.ViewContent }>
						<div class={ style.Title }>
							<ShuffleText
								text={ lastSelectedItem.value?.title ?? "" }
								gap={ 25 }
							/>
						</div>
						<div class={ BuildClass("pt-2", style.Author) }>
							<ShuffleText
								text={ lastSelectedItem.value?.author ?? "" }
								gap={ 25 }
							/>
						</div>
						<div class={ style.LyricsContainer }>
							<div class={ style.Lyrics } ref={ lyricsRef }>
								{ isPlayingAlbum && playingMusic.value && playingMusic.value.lyrics
									? playingMusic.value.lyrics.map((l, i) => {
										return <div
											class={ BuildClass(style.Lyric, currentLyrics.value === i && style.Current) }
											ref={ el => lyricsItemRef.current[i] = el }
										>
											{ l.text }
										</div>;
									})
									: <></>
								}
							</div>
						</div>
						<div class={ style.MusicList }>
							{ selectedItem.value
								? selectedItem.value.songs.map(song => {
									return <div
										class={ BuildClass(
											style.ListItem,
											!!playingMusic.value && playingMusic.value.id === song.id && style.Playing,
										) }
										onClick={ (e) => {
											e.preventDefault();
											playingAlbum.set(selectedItem.value);
											playingMusic.set(song);
										} }
									>
										<ShuffleText
											text={ song.title }
											gap={ 25 }
										/>
									</div>;
								})
								: <></>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class={ style.Typo }>the radiant sounds</div>

		<audio
			class={ style.Player }
			src={ `${AssetsRoot}/bgm/Track12_Moment_Muse.wav` }
			preload="auto"
			volume={ 0.5 }
			onTimeUpdate={ (e) => {
				const t = e.currentTarget.currentTime;

				if (playingMusic.value) {
					if (playTimeTextRef.current) {
						playTimeTextRef.current.innerText =
							`${toTimeText(t)} / ${toTimeText(playingMusic.value.duration)}`;
					}

					if (playTimeProgressRef.current) {
						playTimeProgressRef.current.style.width =
							`${t / playingMusic.value.duration * 100}%`;

					}

					if (playTimeThumbRef.current) {
						playTimeThumbRef.current.style.left =
							`${t / playingMusic.value.duration * 100}%`;
					}

					const lyrics = playingMusic.value.lyrics;
					if (lyrics) {
						let lyricsIndex = -1;
						for (let i = 0; i < lyrics.length; i++) {
							const l = lyrics[i];

							if (t >= l.time)
								lyricsIndex = i;
							else
								break;
						}

						if (currentLyrics.value !== lyricsIndex) {
							currentLyrics.set(lyricsIndex);

							const el = lyricsItemRef.current[lyricsIndex];
							if (lyricsRef.current && el) {
								const h = lyricsRef.current.clientHeight;
								lyricsRef.current.scrollTo({
									behavior: "smooth",
									top: el.offsetTop - h / 2 + el.clientHeight,
								});
								// padding top : h/2

							}
						}
					}
				}
			} }
			onPlay={ () => isPlaying.set(true) }
			onPause={ () => isPlaying.set(false) }
			onEnded={ () => isPlaying.set(false) }
			ref={ playerRef }
		/>
	</div>, appContainer);

	// const BGMList = [
	// 	"Title", "Lobby",
	// 	"Talk_01", "Talk_02", "Talk_03", "Talk_04", "Talk_05", "Talk_06", "Talk_07",
	// 	"Thrill_01",
	// 	"Battle_01", "Battle_01b", "Battle_02", "Battle_03", "Battle_04", "Battle_05",
	// 	"Battle_Boss_01", "Battle_Boss_02", "Battle_Boss_03", "Battle_Boss_03b",
	// 	"IronPrince",
	// 	"Marriage_01", "Marriage_02",
	// 	"Summer_01", "Summer_02",
	// 	"Christmas_01", "Christmas_02",
	// 	"Forest_of_Elves",
	// 	"Valentine",
	// 	"Mystic", "Noire_01", "Noire_02",
	// 	"Sanctum",
	// 	"LoverLover", "HeartbeatOME", "Starlight", "SongForYou", "WithYou_01", "WithYou_02",
	// 	"Moment",
	// 	"MemoryofTime", "ArkofMemory_01", "ArkofMemory_02",
	// ];
	const BGMList = [];

	return <div class="bgm">
		<div class="card">
			<div class="card-header">
				<Locale k="BGM_LIST" />
			</div>
			<div class="card-body">
				<table class={ `table table-bordered table-striped table-bgm ${style["table-bgm"]}` }>
					<thead>
						<tr>
							<th class="bg-dark text-light">
								<Locale k="BGM_NAME" />
							</th>
							<th class="bg-dark text-light">
								<Locale k="BGM_DESC" />
							</th>
							<th class="bg-dark text-light">
								<Locale k="BGM_PLAYER" />
							</th>
						</tr>
					</thead>
					<tbody>
						{ BGMList.map(id => <tr >
							<th>{ id }</th>
							<td><Locale k={ `BGM_DESC_${id}` } /></td>
							<td class={ `player-cell ${style["player-cell"]}` }>
								<audio src={ `${AssetsRoot}/audio/bgm/${id}.mp3` } type="audio/mp3" controls loop preload="none" />
							</td>
						</tr>) }
					</tbody>
				</table>
			</div>
		</div>
	</div>;
};
export default BGM;
