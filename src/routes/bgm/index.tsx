import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import throttle from "lodash.throttle";

import { BGMAlbum, BGMInfo, BGMInfo_Youtube } from "@/types/BGM";

import { AssetsRoot } from "@/libs/Const";
import { objState } from "@/libs/State";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { BuildClass } from "@/libs/Class";
import { parseVNode } from "@/libs/VNode";
import BGMAlbums from "@/libs/BGM";

import { LocaleGet } from "@/components/locale";
import IconChevronCompactLeft from "@/components/bootstrap-icon/icons/ChevronCompactLeft";
import IconChevronCompactRight from "@/components/bootstrap-icon/icons/ChevronCompactRight";
import IconX from "@/components/bootstrap-icon/icons/X";
import IconBoxArrowUpRight from "@/components/bootstrap-icon/icons/BoxArrowUpRight";
import IconPause from "@/components/bootstrap-icon/icons/Pause";
import IconPlayFill from "@/components/bootstrap-icon/icons/PlayFill";
import IconFastForwardFill from "@/components/bootstrap-icon/icons/FastForwardFill";
import IconList from "@/components/bootstrap-icon/icons/List";
import IconVolumeUp from "@/components/bootstrap-icon/icons/VolumeUp";
import YoutubePlayer from "@/components/YoutubePlayer";
import Marquee from "./components/Marquee";
import ShuffleText from "./components/ShuffleText";
import Slider from "./components/Slider";

import style from "./style.module.scss";

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

	const [albumsLoaded, setAlbumsLoaded] = useState(false);
	const [pageReady, setPageReady] = useState(false);

	const itemCount = objState(1);
	const itemRows = objState(2);
	const screenType = objState<PageType>(PageType.List);

	const listItemRef = useRef<Array<HTMLDivElement | null>>([]);
	const listCursor = objState(0); // 앨범 리스트 페이지

	// 마지막으로 선택되었던 아이템 여부
	// (View가 닫힐 때, 닫히는 애니메이션이 종료될 때 까지 보여주지 않기 위해 필요)
	const lastSelectedItem = objState<BGMAlbum | null>(null);
	const lastSelectedItemTitle = objState("");

	const selectedItem = objState<BGMAlbum | null>(null);
	const selectedDisplay = objState(false);
	const selectedImagePrepare = objState("");
	const [selectedImageAlt, setSelectedImageAlt] = useState<string | undefined>("");
	const selectedImageAnimDone = objState(false);
	const selectedImagePlaceholderRef = useRef<HTMLDivElement>(null);
	const selectedImageRef = useRef<HTMLDivElement>(null);

	const listOpen = objState(false);
	const autoPlay = objState(false);

	const playingAlbum = objState<BGMAlbum | null>(null);
	const playingMusic = objState<BGMInfo | null>(null);
	const playableMusic = objState(false);
	const playingVolume = objState(0.5);
	const playingTime = objState(-1);
	const playingTimeText = objState("--:-- / --:--");

	const lyricsRef = useRef<HTMLDivElement>(null);
	const lyricsItemRef = useRef<Array<HTMLDivElement | null>>([]);
	const playerRef = useRef<HTMLAudioElement>(null);
	const ytPlayerRef = useRef<YoutubePlayer>(null);
	const isPlaying = objState<boolean>(false);
	const currentLyrics = objState(-1);

	useEffect(() => {
		SetMeta(["description", "twitter:description"], "라스트오리진(LastOrigin)에 사용된 BGM 목록과 플레이어입니다.");
		SetMeta("keywords", ",BGM,OST", true);
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle("BGM");

		Promise.all( // preload albumarts
			BGMAlbums
				.map(r => [r.image, ...r.songs.map(s => s.image)])
				.flat()
				.filter(i => i)
				.map(i => new Promise<void>((resolve) => {
					const img = new Image();
					img.addEventListener("load", () => resolve());
					img.addEventListener("error", () => resolve());
					img.src = `${AssetsRoot}/bgm/${i}.jpg`;
				})),
		).then(() => setAlbumsLoaded(true));
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

		const perPageItems = col * rows;
		const maxPage = Math.floor((items.length - 1) / perPageItems);
		listCursor.set(v => {
			if (v > maxPage) return maxPage;
			return v;
		});
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

	useEffect(() => { // call queue after every dom updated
		const lst = [...DOMUpdateQueue];
		DOMUpdateQueue.splice(0, DOMUpdateQueue.length);
		lst.forEach(cb => cb());
	});

	useLayoutEffect(() => {
		playingTime.set(-1);

		if (!playingMusic.value) {
			playableMusic.set(false);
			currentLyrics.set(-1);
		} else {
			setSelectedImageAlt(playingMusic.value.image);
		}
	}, [playingMusic.value]);

	useLayoutEffect(() => {
		const t = playingTime.value;

		if (playingMusic.value && t >= 0) {
			playingTimeText.set(`${toTimeText(t)} / ${toTimeText(playingMusic.value.duration)}`);

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
		} else
			playingTimeText.set(`--:-- / --:--`);
	}, [playingTime.value]);

	useLayoutEffect(() => {
		if (playerRef.current)
			isPlaying.set(!playerRef.current.paused);
		else if (ytPlayerRef.current)
			isPlaying.set(!ytPlayerRef.current.paused);
		else
			isPlaying.set(false);
	}, [playerRef.current, ytPlayerRef.current]);

	useLayoutEffect(() => {
		if (lastSelectedItem.value) {
			const t = lastSelectedItem.value.title;
			if (t[0] === "@")
				lastSelectedItemTitle.set(LocaleGet(t.substring(1)));
			else
				lastSelectedItemTitle.set(t);
		} else
			lastSelectedItemTitle.set("");
	}, [lastSelectedItem.value]);

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

	function playNext (forceAutoPlay: boolean = false) {
		const album = selectedItem.value;
		if (!album) return;
		if (album.songs.length === 0) return;

		let idx = !playingMusic.value
			? -1
			: album.songs.findIndex(r => r.id === playingMusic.value!.id);
		idx++;
		if (idx >= album.songs.length) idx = 0;

		const song = album.songs[idx];
		if (song.id === playingMusic.value?.id) return;

		playingAlbum.set(selectedItem.value);
		playingMusic.set(song);

		if (forceAutoPlay || isPlaying.value)
			autoPlay.set(true);
	}
	function playPrev (forceAutoPlay: boolean = false) {
		const album = selectedItem.value;
		if (!album) return;
		if (album.songs.length === 0) return;

		let idx = !playingMusic.value
			? -1
			: album.songs.findIndex(r => r.id === playingMusic.value!.id);
		idx--;
		if (idx < 0) idx = album.songs.length - 1;

		const song = album.songs[idx];
		if (song.id === playingMusic.value?.id) return;

		playingAlbum.set(selectedItem.value);
		playingMusic.set(song);

		if (forceAutoPlay || isPlaying.value)
			autoPlay.set(true);
	}

	const items: BGMAlbum[] = BGMAlbums;
	const perPageItems = itemCount.value * itemRows.value;
	const maxPage = Math.floor((items.length - 1) / perPageItems);

	const isPlayingAlbum = playingAlbum.value && playingAlbum.value === selectedItem.value;

	return createPortal(<div
		class={ style.BGM }
		style={ { animationPlayState: albumsLoaded ? "running" : undefined } }
	>
		<div
			class={ style.Content }
			style={ {
				pointerEvents: pageReady ? undefined : "none",
				animationPlayState: albumsLoaded ? "running" : undefined,
			} }
			onAnimationEnd={ () => setPageReady(true) }
		>
			<div class={ BuildClass("p-4", style.SearchBox) }>
				{/* <input class="form-control" /> */ }
			</div>

			<div class={ style.AlbumList }>
				<a
					class={ BuildClass(style.PageLeft, listCursor.value === 0 && style.Disabled) }
					onClick={ e => {
						e.preventDefault();

						let page = listCursor.value - 1;
						if (page < 0) page = maxPage;
						listCursor.set(page);
					} }
				>
					<IconChevronCompactLeft />
				</a>
				<a
					class={ BuildClass(style.PageRight, listCursor.value === maxPage && style.Disabled) }
					onClick={ e => {
						e.preventDefault();

						let page = listCursor.value + 1;
						if (page > maxPage) page = 0;
						listCursor.set(page);
					} }
				>
					<IconChevronCompactRight />
				</a>

				{ items.slice(perPageItems * listCursor.value, perPageItems * (listCursor.value + 1))
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
										const w = window.innerWidth;
										const isDownMD = w < 720;

										const p = el2.offsetParent as HTMLImageElement;
										const [px, py] = (() => {
											if (isDownMD) return [0, 0];
											return [
												p.offsetLeft - p.clientWidth / 2,
												p.offsetTop - p.clientHeight / 2,
											];
										})();
										console.log(px, py);

										img.style.left = `${el2.offsetLeft + px}px`;
										img.style.top = `${el2.offsetTop + py}px`;
										img.style.width = `${el2.clientWidth}px`;
										img.style.height = `${el2.clientHeight}px`;

										await after(300);

										selectedImageAnimDone.set(true);
										listOpen.set(true);
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
					<button // 닫기 버튼
						class="text-light"
						onClick={ (e) => {
							e.preventDefault();

							playingMusic.set(null);
							isPlaying.set(false);
							currentLyrics.set(-1);
							playingTime.set(-1);

							const fidx = items.findIndex(r => r.id === selectedItem.value?.id); // full idx
							const idx = fidx % perPageItems;

							const pageIdx = Math.floor(fidx / perPageItems);
							if (listCursor.value !== pageIdx)
								listCursor.set(pageIdx);

							const el = listItemRef.current[idx];
							if (el) { // 되돌아가는 애니메이션
								selectedImageAnimDone.set(false);

								const target = selectedImageRef.current;
								const img = selectedImagePlaceholderRef.current;
								if (!el || !img || !target) return;

								// View 화면 앨범아트 위치
								const p = img.offsetParent as HTMLImageElement;

								const w = window.innerWidth;
								const isDownMD = w < 720;

								const [px, py] = (() => {
									if (isDownMD) return [0, 0];
									return [
										p.offsetLeft - p.clientWidth / 2,
										p.offsetTop - p.clientHeight / 2,
									];
								})();

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
						<IconX />
					</button>

					<div
						class={ BuildClass(style.SelectedImagePlaceholder, selectedImageAnimDone.value && style.Done) }
						ref={ selectedImagePlaceholderRef }
					>
						<img // 표시용 앨범아트 (absolute)
							src={ `${AssetsRoot}/bgm/${selectedImagePrepare.value}.jpg` }
						/>
						<img // 대체 앨범아트
							class={ BuildClass(style.Alt, playingMusic.value?.image && style.Display) }
							src={ `${AssetsRoot}/bgm/${selectedImageAlt}.jpg` }
						/>

						<div class={ style.LyricHeader }>
							{ isPlayingAlbum && playingMusic.value && playingMusic.value.headers
								? playingMusic.value.headers.map(h => <div class={ style.Header }>
									{ h.raw
										? parseVNode(h.text, [], {})
										: h.text
									}
								</div>)
								: <></>
							}
						</div>
					</div>

					<div class={ style.PlayerInfo }>
						<div class={ style.PlayTimeLine }>
							{ playingMusic.value && playingMusic.value.type !== "placeholder"
								? <button
									class={ style.Extern }
									onClick={ e => {
										e.preventDefault();

										const playing = playingMusic.value! as BGMInfo;
										if (playing.type === "placeholder") return;

										if (playing.type === "youtube") {
											const a = document.createElement("a");
											a.href = `https://www.youtube.com/watch?v=${playing.url}&autoplay=0`;
											a.target = "_blank";
											a.click();
										} else { // audio
											const a = document.createElement("a");
											a.href = `${AssetsRoot}/audio/bgm/${playing.filename}`;
											a.download = playing.filename;
											a.target = "_blank";
											a.click();
										}
									} }
								>
									{ playingMusic.value.type === "youtube"
										? <IconBoxArrowUpRight />
										: <svg width="1.35em" height="1.35em" viewBox="0 0 24 24">
											<path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
										</svg>
									}
								</button>
								: <></>
							}

							<div class={ style.PlayTimeText }>
								{ playingTimeText.value }
							</div>
						</div>

						<Slider
							class={ style.SeekSlider }
							min={ 0 }
							max={ playingMusic.value?.duration }
							value={ playingTime.value }
							disabled={ !playableMusic.value || !playingMusic.value || playingMusic.value.type === "placeholder" }

							onChange={ t => {
								if (playingMusic.value && playingMusic.value.type !== "placeholder") {
									if (playerRef.current)
										playerRef.current.currentTime = t;
									else if (ytPlayerRef.current)
										ytPlayerRef.current.Seek(t);

									playingTime.set(t);
								}
							} }
						/>

						<div class={ style.Controllers }>
							<button
								class={ style.PrevButton }
								onClick={ e => {
									e.preventDefault();
									playPrev();
								} }
							>
								<IconFastForwardFill />
							</button>

							<button
								class={ style.PlayButton }
								disabled={ !playableMusic.value }
								onClick={ (e) => {
									e.preventDefault();
									if (playerRef.current) {
										if (isPlaying.value)
											playerRef.current.pause();
										else
											playerRef.current.play();
									} else if (ytPlayerRef.current) {
										if (isPlaying.value)
											ytPlayerRef.current.pause();
										else
											ytPlayerRef.current.play();
									}
								} }
							>
								{ isPlaying.value
									? <IconPause />
									: <IconPlayFill />
								}
							</button>

							<button
								class={ style.NextButton }
								onClick={ e => {
									e.preventDefault();
									playNext();
								} }
							>
								<IconFastForwardFill />
							</button>

							<button
								class={ style.ListButton }
								onClick={ e => {
									e.preventDefault();
									listOpen.set(true);
								} }
							>
								<IconList />
							</button>
						</div>

						<div class={ style.Volume }>
							<IconVolumeUp />
							<Slider
								class={ style.VolumeSlider }
								min={ 0 }
								max={ 1 }
								value={ playingVolume.value }

								onChange={ vol => playingVolume.set(vol) }
							/>
						</div>
					</div>

					<div class={ style.ViewContent }>
						<div class={ style.Title }>
							<Marquee>
								<ShuffleText
									text={ lastSelectedItemTitle.value }
									gap={ 25 }
								/>
							</Marquee>
						</div>
						<div class={ BuildClass("pt-1", style.Author) }>
							<Marquee>
								<ShuffleText
									text={ lastSelectedItem.value?.author ?? "" }
									gap={ 25 }
								/>
							</Marquee>
						</div>

						<div class={ style.LyricsContainer }>
							<div class={ style.LyricHeader }>
								{ isPlayingAlbum && playingMusic.value && playingMusic.value.headers
									? playingMusic.value.headers.map(h => <div class={ style.Header }>
										{ h.raw
											? parseVNode(h.text, [], {})
											: h.text
										}
									</div>)
									: <></>
								}
							</div>

							<div class={ style.Lyrics } ref={ lyricsRef }>
								{ isPlayingAlbum && playingMusic.value && playingMusic.value.lyrics
									? playingMusic.value.lyrics.map((l, i) => {
										return <div
											class={ BuildClass(
												style.Lyric,
												l.color && style.Colored,
												Array.isArray(l.color) && style.ColoredCustom,
												currentLyrics.value === i && style.Current,
											) }
											style={ { "--color": Array.isArray(l.color) ? undefined : `var(--bgm-color-${l.color})` } }
											ref={ el => lyricsItemRef.current[i] = el }
										>
											{ Array.isArray(l.color) && l.color.map(c =>
												<i class={ style.Colors } style={ { "--color": `var(--bgm-color-${c})` } } />
											) }
											{ l.raw
												? parseVNode(l.text, [], {})
												: l.text
											}
										</div>;
									})
									: <></>
								}
							</div>
						</div>

						<div class={ style.Separator } />

						<div class={ BuildClass(style.MusicListContainer, listOpen.value && style.Open) }>
							<button
								class={ style.ListClose }
								onClick={ e => {
									e.preventDefault();
									listOpen.set(false);
								} }
							>
								<IconX />
							</button>

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

												if (isPlaying.value)
													autoPlay.set(true);
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
		</div>
		<div class={ style.Typo }>the radiant sounds</div>

		{ playingMusic.value && playingMusic.value.type !== "placeholder"
			? playingMusic.value.type === "audio"
				? <audio
					class={ style.Player }
					src={ `${AssetsRoot}/audio/bgm/${playingMusic.value.filename}` }
					preload="auto"
					volume={ playingVolume.value }
					onTimeUpdate={ (e) => {
						if (e.currentTarget.paused) return;

						const t = e.currentTarget.currentTime;
						playingTime.set(t);
					} }
					onPlay={ () => isPlaying.set(true) }
					onPause={ () => isPlaying.set(false) }
					onEnded={ () => {
						playNext(true);
						isPlaying.set(false);
					} }
					onEmptied={ () => isPlaying.set(false) }
					onLoadedMetadata={ (e) => {
						playableMusic.set(true);
						playingTime.set(0);

						if (autoPlay.value) {
							autoPlay.set(false);
							e.currentTarget.play();
						}
					} }
					ref={ playerRef }
				/>
				: <YoutubePlayer
					class={ style.Player }
					autoPlay={ false }
					vid={ playingMusic.value.url }
					volume={ playingVolume.value }
					cc={ false }

					onTimeUpdate={ (player, t) => {
						if (player.paused) return;

						playingTime.set(t);
					} }
					onPlay={ () => isPlaying.set(true) }
					onPause={ () => isPlaying.set(false) }
					onEnded={ () => {
						playNext(true);
						isPlaying.set(false);
					} }
					onReady={ (yt) => {
						playableMusic.set(true);
						playingTime.set(0);

						if (autoPlay.value) {
							autoPlay.set(false);
							yt.play();
						}
					} }
					ref={ ytPlayerRef }
				/>
			: <></>
		}
	</div >, appContainer);
};
export default BGM;
