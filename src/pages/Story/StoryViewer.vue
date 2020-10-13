<script lang="tsx">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { StoryRaw } from "@/libs/Types";
import { StoryRowData } from "@/libs/Story";

import { MapData, StoryData, UnitData } from "@/libs/DB";
import { AssetsRoot, WorldNames } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		UnitFace,
	},
})
export default class StoryViewer extends Vue {
	private readonly BaseURL = AssetsRoot + "/story/";

	private world: string = "";
	private area: string = "";
	private loc: string = "";
	private spec: string = "";

	private storyData: StoryRowData[] = [];

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private checkParams () {
		const params = this.$route.params;

		if (!("world" in params)) {
			this.$router.replace("/worlds/");
			return;
		}
		if (!("area" in params)) {
			this.$router.replace("/worlds/" + params.world);
			return;
		}
		if (!("loc" in params) || !("spec" in params)) {
			this.$router.replace(`/story/${params.world}/${params.area}`);
			return;
		}

		if (!["OP", "ED"].includes(params.spec)) {
			this.$router.replace(`/story/${params.world}/${params.area}`);
			return;
		}

		this.world = params.world;
		this.area = params.area;
		this.loc = params.loc;
		this.spec = params.spec;

		this.loadStory();
	}

	private get Name () {
		return WorldNames[this.world] || this.world;
	}

	private get Area () {
		if (this.world in MapData && this.area in MapData[this.world])
			return MapData[this.world][this.area].title;
		return "???";
	}

	private get Story (): StoryRaw | null {
		const spec = this.spec === "OP" ? 1 : this.spec === "ED" ? 2 : 0;
		const ret = StoryData
			.filter(x => x.area === this.world)
			.filter(x => x.map.toString() === this.area)
			.filter(x => x.loc.toString() === this.loc)
			.filter(x => (x.spec & spec) > 0);

		return ret.length ? ret[0] : null;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private loadStory () {
		this.storyData = [];

		const x = new Promise((resolve, reject) => {
			if (!this.Story) return reject(new Error("Story not set"));

			const spec = this.spec === "OP" ? 1 : this.spec === "ED" ? 2 : 3;

			const xhr = new XMLHttpRequest();
			xhr.open("GET", this.BaseURL + `Script_${this.Story.filename}_${spec}.json`);
			xhr.send();
			xhr.addEventListener("readystatechange", (e) => {
				if (xhr.readyState === 4 && xhr.status === 200) {
					this.storyData = JSON.parse(xhr.responseText) as StoryRowData[];
					resolve();
				}
			});
		});
	}

	private get Parsed () {
		const ret: JSX.Element[] = [];

		const parseBuffer: string[] = [];
		const parseMode: string[] = [];
		let parseDepth = 0;
		let parsePhase = 0;
		let parseColor = "";

		function parseText (text: string): Array<JSX.Element | string> {
			const ret: Array<JSX.Element | string> = [];

			for (let i = 0; i < text.length; i++) {
				const c = text[i];

				switch (parsePhase) {
					case 0: // Idle
						if (c === "[") {
							if (parseBuffer.length > 0) {
								const text = parseBuffer.join("")
									.split(/(\{[0-9]+\})/g)
									.filter(x => typeof x === "string")
									.map(x => x === "{0}"
										? <b-badge class="badge-text" variant="light">사령관</b-badge>
										: x,
									);
								parseBuffer.splice(0, parseBuffer.length);

								if (parseColor)
									ret.push(<span style={{ color: "#" + parseColor }}>{text}</span>);
								else
									ret.push(...text);
							}

							parsePhase = 1;
						} else
							parseBuffer.push(c);
						break;
					case 1: // Tag Parsing
						if (c === "]") {
							const tag = parseBuffer.join("");
							parseBuffer.splice(0, parseBuffer.length);
							parsePhase = 0;

							if (tag === "-")
								parseColor = "";
							else if (parseMode[parseMode.length - 1] === "c")
								parseColor = tag;
							else if (tag[0] === "/") {
								const ctag = tag.substr(1);
								while (parseMode.pop() !== ctag);
							} else {
								parseMode.push(tag);
								parseDepth++;
							}
						} else
							parseBuffer.push(c);
						break;
				}
			}
			if (parseBuffer.length > 0) {
				const text = parseBuffer.join("")
					.split(/(\{[0-9]+\})/g)
					.filter(x => typeof x === "string")
					.map(x => x === "{0}"
						? <b-badge class="badge-text" variant="light">사령관</b-badge>
						: x,
					);
				parseBuffer.splice(0, parseBuffer.length);

				if (parseColor)
					ret.push(<span style={{ color: "#" + parseColor }}>{text}</span>);
				else
					ret.push(...text);
			}
			return ret;
		}

		const labels: Record<number, string[]> = {};
		this.storyData.forEach((row, rowIdx) => {
			if ("selection" in row) {
				row.selection.forEach((x, i) => {
					if (x.to === -1) x.to = rowIdx + 1;

					if (!(x.to in labels)) labels[x.to] = [];

					if (!labels[x.to].includes(x.text))
						labels[x.to].push(x.text);
				});
			}
		});

		this.storyData.forEach((row, rowIdx) => {
			if (rowIdx in labels) {
				ret.push(<div class="text-right text-warning pr-4" id={`script_${rowIdx}`}>
					<b-icon-flag-fill class="mr-2" />
					{labels[rowIdx].map(x => <b-badge variant="warning" class="mr-1">{x}</b-badge>)}
					선택 시
				</div>);
			}

			if ("title" in row) {
				ret.push(<h1 class="text-center">{row.title}</h1>);
				ret.push(<h3 class="text-center">{row.loc}</h3>);
			} else if ("text" in row) {
				const tellerElems = [];
				const teller = row.teller;
				if (teller) {
					if (typeof teller !== "string") {
						if ("face" in teller) {
							const unit = _(UnitData).find(x => x.uid === teller.face);

							tellerElems.push(<unit-face id={unit ? unit.id : 0} size="60" />);
						} else
							tellerElems.push(<img src={`${this.BaseURL}${teller.image}.png`} width="60" />);

						tellerElems.push(teller.name);
					} else {
						tellerElems.push(<unit-face id={0} size="60" />);
						tellerElems.push(teller);
					}
				}

				ret.push(<div class="story-dialogue">
					<div class="story-dialogue-teller">{tellerElems}</div>
					<div class="story-dialogue-text">{row.text.map(x => <div>{parseText(x)}</div>)}</div>
				</div>);
			} else if ("effect" in row)
				ret.push(<b-alert class="mx-4 text-center" variant="danger" show>{row.effect}</b-alert>);
			else if ("comment" in row)
				ret.push(<b-alert class="mx-4 text-center" variant="success" show>{row.comment}</b-alert>);
			else if ("bgm" in row) {
				ret.push(<b-alert class="mx-4 text-center" variant="warning" show>
					<div>BGM : {row.bgm} ♪</div>
					<audio src={`${AssetsRoot}/bgm/${row.bgm}.ogg`} type="audio/ogg" controls preload="auto" />
				</b-alert>);
			} else if ("bg" in row) {
				if (row.bg === "BG_Black")
					ret.push(<b-alert class="mx-4 text-center" variant="success" show>검은 화면</b-alert>);
				else if (row.bg === "#N/A" || row.bg === "None") {
					// Do noting
				} else {
					ret.push(<div class="story-scene text-center">
						<img src={`${AssetsRoot}/story/${row.bg}.jpg`} />
						<br />
						<small>{row.bg}</small>
					</div>);
				}
			} else if ("img" in row) {
				ret.push(<div class="story-scene text-center">
					<img src={`${AssetsRoot}/story/${row.img}.png`} />
				</div>);
			} else if ("selection" in row) {
				ret.push(<div class="text-center">
					{row.selection.map(x => <b-button
						class="mx-1"
						variant="warning"
						onClick={() => this.ScrollTo(x.to)}
					>{x.text}</b-button>)}
				</div>);
			}

			ret.push(<hr />);
		});

		return ret;
	}

	private ScrollTo (id: number) {
		const target = this.$el.querySelector<HTMLDivElement>(`#script_${id}`);
		if (!target) return;

		let y = 0;
		let root: Element | null = target;
		while (root && root instanceof HTMLElement && root.offsetParent !== root) {
			y += root.offsetTop;
			root = root.offsetParent;
		}

		window.scrollTo({ top: y });
	}

	private mounted () {
		this.checkParams();

		if (!this.Story)
			UpdateTitle(["이야기", this.Name, this.Area]);
		else
			UpdateTitle(["이야기", this.Name, this.Area, `[${this.Story.map}-${this.Story.loc}]`, this.Story.title]);
	}

	private render () {
		return <div class="story-viewer text-left">
			<b-row>
				<b-col cols="auto">
					<b-button variant="dark" onClick={() => this.GoTo(`/story/${this.world}/${this.area}`)}>
						<b-icon-arrow-left class="mr-1" />이야기 목록으로
					</b-button>
				</b-col>
			</b-row>
			<hr />

			<div class="story-box bg-dark text-light">
				{
					this.Story
						? [
							<b-alert class="mb-2" variant="light" show>
								<h4 class="m-0">
									<b-badge class="mr-3" variant="dark">{this.Story.map}-{this.Story.loc}</b-badge>
									{this.Story.title}
								</h4>
							</b-alert>,
							<hr />,
						]
						: []
				}

				{
					this.storyData.length > 0
						? this.Parsed
						: <h3 class="text-center">
							<b-icon-hourglass-split class="mr-2" />
							이야기 데이터를 불러오고 있습니다
						</h3>
				}
			</div>
		</div>;
	}
}
</script>

<style lang="scss">
.story-viewer {
	.story-box {
		padding: 0.5rem;

		hr {
			border-top-color: rgba($white, 0.1);
		}

		.story-dialogue {
			display: flex;
			flex-direction: row;
			padding: 0.25rem;

			> .story-dialogue-teller {
				display: flex;
				margin-right: 1rem;
				min-width: 100px;
				flex-direction: column;
				word-break: keep-all;
				align-items: center;

				word-spacing: 1px;
				font-weight: bold;
				font-size: 80%;

				> img {
					margin-right: 0.25rem;
				}
			}
			> .story-dialogue-text {
				flex: 1;
				word-break: keep-all;

				> div:not(:first-child) {
					margin-top: 0.5rem;
				}

				.badge.badge-text {
					font-size: 100%;
				}
			}
		}
		.story-scene > img {
			max-width: 100%;
		}
	}
}
</style>
