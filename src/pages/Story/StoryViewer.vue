<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { StoryRaw } from "@/libs/Types";
import { StoryData } from "@/libs/DB";

@Component({})
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

			parsed.childNodes[0].childNodes.forEach(node => {
				if (node.nodeType === Node.COMMENT_NODE)
					return;
				else if (node.nodeType === Node.TEXT_NODE) {
					if (node.textContent?.trim()) {
						if (teller) {
							ret.push(<div class="story-dialogue">
								{teller}:
								{node.textContent.split("\n").map(x => <div>{x}</div>)}
							</div>);
						} else {
							ret.push(<div class="story-dialogue">
								{node.textContent.split("\n").map(x => <div>{x}</div>)}
							</div>);
						}
					} else
						return;
				} else {
					switch (node.nodeName) {
						case "title":
							ret.push(<h2 class="text-center">{plain(node)}</h2>);
							break;
						case "loc":
							ret.push(<h4 class="text-center">
								<b-badge variant="dark">{plain(node)}</b-badge>
							</h4>);
							break;
						case "teller":
							teller = plain(node);
							break;
					}
				}
				ret.push(<hr />);
			});
		});

		return ret;
	}

	private mounted () {
		this.checkParams();
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

			{
				this.Story
					? [
						<b-alert variant="dark" show>
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
		</div >;
	}
}
</script>

<style lang="scss">
.story-viewer {
	.story-dialogue {
		padding: 0.25rem;
		background-color: #222;
		color: #fff;
	}
}
</style>
