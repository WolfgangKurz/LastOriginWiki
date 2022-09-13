import { FunctionalComponent } from "preact";

import { LocaleGet } from "@/components/locale";

import "./style.scss";

interface ChangelogItemProps {
	title: string;
	date: string;

	site?: preact.VNode;
	bugfix?: preact.VNode;
	delete?: preact.VNode;
	new?: preact.VNode;
	skin?: preact.VNode;
	update?: preact.VNode;
	dialogue?: preact.VNode;
}

const ChangelogItem: FunctionalComponent<ChangelogItemProps> = (props) => {
	const tags = ["site", "bugfix", "delete", "new", "skin", "update", "dialogue"]
		.filter(x => props[x as keyof ChangelogItemProps]);

	function TagVariant (tag: string): string[] {
		switch (tag) {
			default:
			case "default":
				return ["", ""];
			case "site":
				return ["secondary", "bg-secondary"];
			case "bugfix":
				return ["danger", "bg-danger"];
			case "delete":
				return ["dark", "bg-dark"];
			case "new":
				return ["primary", "bg-primary"];
			case "skin":
				return ["substory", "bg-substory"];
			case "update":
				return ["warning", "bg-warning", "text-dark"];
			case "dialogue":
				return ["success", "bg-success"];
		}
	}
	const TagVariant2 = (tag: string): string => TagVariant(tag)
		.slice(1)
		.join(" ");

	function TagName (tag: string): string {
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

	return <div class="changelog-item">
		<h3>
			{ props.title }
			<small class="ps-3 float-end float-md-none text-secondary">{ props.date }</small>
		</h3>
		<div class="tags ms-2 pb-1">
			{ tags.map(x => <span class={ `badge ${TagVariant2(x)} me-1` }>{ TagName(x) }</span>) }
		</div>

		{ tags.map(x => <div class={ `mt-2 ms-1 sector-${x} sector-variant-${TagVariant(x)[0]}` }>
			<h5>
				<strong>{ TagName(x) }</strong>
			</h5>
			<ol>{ props[x as keyof ChangelogItemProps] }</ol>
		</div>) }
	</div>;
};
export default ChangelogItem;
