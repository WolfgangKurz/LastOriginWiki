import "./ChangelogItem.scss";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { slot } from "@/libs/VNode";
import { LocaleGet } from "@/libs/Locale";

@Component({})
export default class ChangelogItem extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private title!: string;

	@Prop({
		type: String,
		required: true,
	})
	private date!: string;

	private get tags (): string[] {
		return ["site", "bugfix", "delete", "new", "skin", "update", "dialogue"]
			.filter(x => x in this.$slots);
	}

	private TagVariant (tag: string) {
		switch (tag) {
			default:
			case "default":
				return "";
			case "site":
				return "secondary";
			case "bugfix":
				return "danger";
			case "delete":
				return "dark";
			case "new":
				return "primary";
			case "skin":
				return "info";
			case "update":
				return "warning";
			case "dialogue":
				return "success";
		}
	}

	private TagName (tag: string) {
		switch (tag) {
			default:
			case "default":
				return LocaleGet("CHANGELOG_CATEGORY_UNCATEGORIZED");
			case "site":
				return LocaleGet("CHANGELOG_CATEGORY_SITE");
			case "bugfix":
				return LocaleGet("CHANGELOG_CATEGORY_BUGFIX");
			case "delete":
				return LocaleGet("CHANGELOG_CATEGORY_DELETE");
			case "new":
				return LocaleGet("CHANGELOG_CATEGORY_NEW");
			case "skin":
				return LocaleGet("CHANGELOG_CATEGORY_SKIN");
			case "update":
				return LocaleGet("CHANGELOG_CATEGORY_UPDATE");
			case "dialogue":
				return LocaleGet("CHANGELOG_CATEGORY_QUOTE");
		}
	}

	public render () {
		return <div class="changelog-item">
			<h3 class="clearfix">
				{ this.title }
				<small class="pl-3 float-end float-md-none text-secondary">{ this.date }</small>
			</h3>
			<div class="tags ml-2 pb-1">
				{ this.tags.map(x => <b-badge class="mr-1" variant={ this.TagVariant(x) }>{ this.TagName(x) }</b-badge>) }
			</div>

			{ this.tags.map(x => <div class={ `mt-2 ml-1 sector-${x} sector-variant-${this.TagVariant(x)}` }>
				<h5>
					<strong>{ this.TagName(x) }</strong>
				</h5>
				<ol>{ slot(this.$slots[x]) }</ol>
			</div>) }
		</div>;
	}
}
