<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { StoryRaw } from "@/libs/Types";
import { MapData, StoryData, UnitUid } from "@/libs/DB";
import { AssetsRoot, WorldNames } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		UnitFace,
	},
})
export default class StoryViewer extends Vue {
	private readonly BaseURL = "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com/story/";

	private world: string = "";
	private area: string = "";
	private loc: string = "";
	private spec: string = "";

	private storyData: string[] = [];

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
			.filter(x => x.spec === spec);

		return ret.length ? ret[0] : null;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private loadStory () {
		this.storyData = [];

		const x = new Promise((resolve, reject) => {
			if (!this.Story) return reject(new Error("Story not set"));

			const xhr = new XMLHttpRequest();
			xhr.open("GET", this.BaseURL + `${this.world}-${this.area}-${this.loc}-${this.spec}.txt`);
			xhr.send();
			xhr.addEventListener("readystatechange", (e) => {
				if (xhr.readyState === 4 && xhr.status === 200) {
					this.storyData = xhr.responseText.split("\n\n");
					resolve();
				}
			});
		});
	}

	private get Parsed () {
		const ret: JSX.Element[] = [];

		const plain = (node: Node): string => {
			const ret: string[] = [];
			node.childNodes.forEach(x => {
				if (x.nodeType === Node.COMMENT_NODE)
					return;

				if (x.nodeType === Node.TEXT_NODE) ret.push((x as Text).wholeText);
				else ret.push(plain(x));
			});
			return ret.join(" ");
		};

		this.storyData.forEach(line => {
			const dom = new DOMParser();
			const parsed = dom.parseFromString(`<x>${line}</x>`, "text/xml");

			let teller = "";
			let tellerId = 0;
			const selects: Array<{
				text: string;
				to: string;
			}> = [];

			parsed.childNodes[0].childNodes.forEach(_node => {
				if (_node.nodeType === Node.COMMENT_NODE) return;

				if (_node.nodeType === Node.TEXT_NODE) {
					const node = _node as Text;

					if (node.textContent?.trim()) {
						ret.push(<div class="story-dialogue">
							<div class="story-dialogue-teller">
								<unit-face id={tellerId} size="60" />
								{teller}
							</div>
							<div class="story-dialogue-text">
								{
									node.textContent
										.split("\n")
										.filter(x => x)
										.map(x => <div>{
											x.split(/(\$player)|(\[\[[^\]]+\]\])/g)
												.filter(y => typeof y === "string")
												.map(y => {
													if (y === "$player")
														return <b-badge class="badge-text" variant="light">사령관</b-badge>;
													else if (y.startsWith("[["))
														return <span class="text-warning">{y.substring(2, y.length - 2)}</span>;
													else
														return y;
												})
										}</div>)
								}
							</div>
						</div>);
					}
				} else {
					const node = _node as Element;
					switch (node.nodeName) {
						case "title":
							ret.push(<h1 class="text-center">{plain(node)}</h1>);
							break;
						case "loc":
							ret.push(<h3 class="text-center">
								<b-badge variant="dark">{plain(node)}</b-badge>
							</h3>);
							break;
						case "teller":
							{
								teller = plain(node);

								const face = node.getAttribute("face");
								if (face) {
									const unit = Object.keys(UnitUid)
										.map(x => {
											const id = parseInt(x, 10);
											return { key: id, value: UnitUid[id] };
										})
										.find(x => x.value === face);

									if (!unit)
										tellerId = 0;
									else
										tellerId = unit.key;
								}
							}
							break;
						case "comment":
							ret.push(<b-alert class="mx-4 text-center" variant="success" show>{plain(node)}</b-alert>);
							break;
						case "scene":
							{
								const bg = node.getAttribute("bg");
								if (bg) {
									ret.push(<div class="story-scene text-center">
										<img src={`${AssetsRoot}/story/${bg}.jpg`} />
									</div>);
								}
							}
							break;
						case "select":
							{
								const content = plain(node);
								const to = node.getAttribute("to");
								if (!to) return;

								selects.push({ text: content, to });
							}
							break;
						case "flag":
							ret.push(<div class="text-right text-warning pr-4" id={node.id}>
								<b-icon-flag-fill class="mr-2" />선택지 도착점
							</div>);
							break;
					}
				}
			});

			if (selects.length > 0) {
				ret.push(<div class="text-center">
					{selects.map(x => <b-button
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

	private ScrollTo (id: string) {
		const target = this.$el.querySelector<HTMLDivElement>(`#${id}`);
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
