import { Component, ComponentChild, RenderableProps } from "preact";

import { BuildClass } from "@/libs/Class";

enum PhaseType {
	/** 재생중이지 않은 상태 또는 Duration을 가져올 수 없는 상태 */
	None,

	/** Duration을 가져올 수 있게 된 상태 */
	Uninit,

	/** 재생중 */
	Playing,
}

interface YoutubePlayerCaptionTrack {
	languageCode: string;
}
interface ExYoutubePlayer {
	destroy (): void;
	destroy2?(): void;

	getPlayerState (): number;
	getDuration (): number;

	loadModule (module: string): void;
	unloadModule (module: string): void;

	getOption (group: "captions", key: "tracklist"): YoutubePlayerCaptionTrack[];
	getOption (group: "captions", key: "track"): YoutubePlayerCaptionTrack;
	getOption (group: string, key: string): any;

	setOption (group: string, key: string, value: string | number | YoutubePlayerCaptionTrack): void;

	getVolume (): void;
	setVolume (volume: number): void;
	mute (): void;
	unMute (): void;
	isMuted (): boolean;

	cueVideoById (vid: string): void;
	playVideo (): void;
	pauseVideo (): void;
	stopVideo (): void;
	clearVideo (): void;
	seekTo (seek: number, allowSeekAhead?: boolean): void;
}

interface YTPlayerProps {
	class?: string;

	cc?: boolean;
	ccSize?: number;

	vid: string;

	volume?: number; // 0.0 ~ 1.0

	timeToStart?: number;
	loadTimeout?: number;
	autoPlay?: boolean;

	onTimeUpdate?(yt: YoutubePlayer, time: number): void;
	onError?(yt: YoutubePlayer, err?: Error): void;
	onQualityUpdate?(yt: YoutubePlayer, quality: string): void;

	onPlay?(yt: YoutubePlayer): void;
	onPause?(yt: YoutubePlayer): void;
	onBuffering?(yt: YoutubePlayer): void;
	onEnded?(yt: YoutubePlayer): void;
	onReady?(yt: YoutubePlayer): void;
}
interface YTPlayerState {
	phase: PhaseType;
	buffered: boolean;
}

class YoutubePlayer extends Component<YTPlayerProps, YTPlayerState> {
	private player: ExYoutubePlayer | null = null;
	private loadTimeout: number = 0; // setTimeout id

	private ReadyHandler: ((player: any) => void) | null = null;
	private TimeUpdateHandler: ((t: number) => void) | null = null;
	private StateHandler: ((state: number) => void) | null = null;
	private ErrorHandler: ((error: Error) => void) | null = null;
	private QualityUpdateHandler: ((quality: string) => void) | null = null;

	public get paused (): boolean {
		if (!this.player) return false;
		return this.getState() !== "playing";
	}
	public get ended (): boolean {
		if (!this.player) return false;
		return this.getState() === "ended";
	}
	public get error (): undefined {
		return undefined;
	}
	public get duration (): number {
		if (!this.player) return NaN;
		return this.player.getDuration();
	}
	public get isLoaded (): boolean {
		if (!this.player) return false;
		return this.state.phase !== PhaseType.Uninit;
	}

	constructor (props: YTPlayerProps) {
		super(props);

		this.state = {
			phase: PhaseType.None,
			buffered: false,
		};

		this.ReadyHandler = (player: any) => {
			this.player = player;
			if (props.vid) this.Load(props.vid);
		};
		this.TimeUpdateHandler = (t: number) => {
			if (this.state.phase === PhaseType.Playing) { // 재생중일 때

				if (this.props.onTimeUpdate)
					this.props.onTimeUpdate(this, t);
			}
		};
		this.StateHandler = (state: number) => {
			if (!this.player) return;

			if (state === -1) { // Unplayed
				// 로드 됨
				this.setState({ phase: PhaseType.Uninit });

			} else if (state === 0) { // Ended
				if (this.state.phase === PhaseType.Uninit || this.state.phase === PhaseType.Playing) {
					if (this.props.onEnded)
						this.props.onEnded(this);
				}
			} else if (state === 1) { // Playing
				this.updateCC();

				if (this.loadTimeout > 0) {
					window.clearTimeout(this.loadTimeout);
					this.loadTimeout = 0;
				}

				if (this.state.phase === PhaseType.Uninit) {
					this.setState({ phase: PhaseType.Playing }); // 재생중으로 변경

					if (this.props.volume !== undefined)
						this.player.setVolume(this.props.volume * 100); // 혹시 모르니 다시
				}

				if (props.onPlay)
					props.onPlay(this);
			} else if (state === 2) { // Paused
				console.log("paused");
				if (props.onPause)
					props.onPause(this);

			} else if (state === 3) { // Buffering
				if (this.loadTimeout > 0) {
					window.clearTimeout(this.loadTimeout);
					this.loadTimeout = 0;
				}

				this.setState({ buffered: true });

				if (props.onBuffering)
					props.onBuffering(this);
			} else if (state === 5) { // Cued
				if (this.props.volume !== undefined)
					this.player.setVolume(this.props.volume * 100);

				if (this.props.timeToStart !== undefined)
					this.player.seekTo(this.props.timeToStart, true); // 이동

				this.loadTimeout = window.setTimeout(() => {
					if (this.props.onError)
						this.props.onError(this);
				}, this.props.loadTimeout ?? 10000);

				this.setState({ buffered: false });

				if (this.props.onReady)
					this.props.onReady(this);

				if (this.props.autoPlay)
					this.player.playVideo();
			}
		};
		this.ErrorHandler = (err: Error) => {
			if (this.props.onError)
				this.props.onError(this, err);
		};
		this.QualityUpdateHandler = (quality: string) => {
			if (this.props.onQualityUpdate)
				this.props.onQualityUpdate(this, quality);
		};
	}

	componentWillUnmount (): void {
		if (this.player) {
			if (this.player.destroy2) // 혹시 모르니
				this.player.destroy2();
			else
				this.player.destroy();
		}
	}

	componentDidUpdate (previousProps: Readonly<YTPlayerProps>, previousState: Readonly<YTPlayerState>, snapshot: any): void {
		if (this.player) {
			const player = this.player;

			if (previousProps.vid !== this.props.vid)
				this.Load(this.props.vid);

			if (previousProps.volume !== this.props.volume) {
				if (this.props.volume !== undefined)
					player.setVolume(this.props.volume * 100);
			}
		}
	}

	private getState () {
		if (!this.player) return "";

		const YOUTUBE_STATES: Record<number, "unstarted" | "ended" | "playing" | "paused" | "buffering" | "cued"> = {
			[-1]: "unstarted",
			0: "ended",
			1: "playing",
			2: "paused",
			3: "buffering",
			5: "cued",
		};
		return YOUTUBE_STATES[this.player.getPlayerState()];
	}

	private updateCC () {
		if (!this.player) return;

		const trackList = this.player.getOption("captions", "tracklist");
		const available = trackList && trackList.some((x: any) => x.languageCode === "ko");

		if ((this.props.cc ?? true) && available) {
			const curTrack = this.player.getOption("captions", "track");

			// 자막 기능 표시
			this.player.loadModule("captions");

			// 자막 크기
			this.player.setOption("captions", "fontSize", this.props.ccSize ?? 0);

			if (curTrack.languageCode !== "ko") // 현재 자막 언어가 ko 가 아니라면 변경
				this.player.setOption("captions", "track", { languageCode: "ko" });
		} else {
			// 자막 기능 제거
			this.player.unloadModule("captions");
		}
	}

	private Load (vid: string): void {
		if (!this.player) return;

		this.player.cueVideoById(vid);
	}

	public play (): void {
		if (!this.player) return;

		this.player.playVideo();
	}
	public pause (): void {
		if (!this.player) return;

		this.player.pauseVideo();
	}
	public Reset (): void {
		if (!this.player) return;

		this.player.stopVideo();
		this.player.clearVideo();
		this.setState({ phase: PhaseType.None });
	}
	public Seek (time: number): void {
		if (!this.player) return;

		const pauseAfter = this.getState() !== "playing";

		this.player.seekTo(time, true);
		if (pauseAfter) this.player.pauseVideo();
	}
	public Mute (): void {
		if (!this.player) return;
		this.player.mute();
	}
	public UnMute (): void {
		if (!this.player) return;
		this.player.unMute();
	}

	render (props: RenderableProps<YTPlayerProps> | undefined, state: Readonly<YTPlayerState>): ComponentChild {
		return <iframe
			class={ BuildClass("yt-player", props?.class) }
			style={ {
				display: state.phase >= PhaseType.Uninit ? undefined : "none",
			} }
			src="/youtube.html"
			onLoad={ (e) => {
				const f = e.currentTarget;
				(f.contentWindow! as any).EventDelegator = {
					Ready: (player: any) => {
						if (this.ReadyHandler)
							this.ReadyHandler(player);
					},
					TimeUpdate: (time: number) => {
						if (this.TimeUpdateHandler)
							this.TimeUpdateHandler(time);
					},
					State: (state: number) => {
						if (this.StateHandler)
							this.StateHandler(state);
					},
					Error: (error: Error) => {
						if (this.ErrorHandler)
							this.ErrorHandler(error);
					},
					QualityUpdate: (quality: string) => {
						if (this.QualityUpdateHandler)
							this.QualityUpdateHandler(quality);
					},
				};
				const init = (f.contentWindow! as any).Initialize;
				if (init) init();
			} }
		/>;
	}
}
export default YoutubePlayer;
