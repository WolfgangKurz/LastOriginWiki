import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";

import style from "./style.module.scss";
import Icon from "@/components/bootstrap-icon";

interface ChangelogItemProps {
	tag?: string;
	title: string;
	date: string;

	site?: preact.VNode;
	knownissue?: preact.VNode;
	bugfix?: preact.VNode;
	delete?: preact.VNode;
	new?: preact.VNode;
	skin?: preact.VNode;
	update?: preact.VNode;
	dialogue?: preact.VNode;
}

const ChangelogItem: FunctionalComponent<ChangelogItemProps> = (props) => {
	const tags = ["site", "knownissue", "bugfix", "delete", "new", "update", "skin", "dialogue"]
		.filter(x => props[x as keyof ChangelogItemProps]);

	function TagVariant (tag: string): string[] {
		switch (tag) {
			default:
			case "default":
				return ["", ""];
			case "site":
				return ["secondary", "bg-secondary"];
			case "knownissue":
				return ["danger-dark", "bg-danger-dark"];
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
	const TagVariantList = (tag: string): string => TagVariant(tag)
		.slice(1)
		.join(" ");

	function TagName (tag: string): preact.VNode {
		switch (tag) {
			default:
			case "default":
				return <Locale k="CHANGELOG_CATEGORY_UNCATEGORIZED" />;
			case "site":
				return <Locale k="CHANGELOG_CATEGORY_SITE" />;
			case "knownissue":
				return <Locale k="CHANGELOG_CATEGORY_KNOWNISSUE" />;
			case "bugfix":
				return <Locale k="CHANGELOG_CATEGORY_BUGFIX" />;
			case "delete":
				return <Locale k="CHANGELOG_CATEGORY_DELETE" />;
			case "new":
				return <Locale k="CHANGELOG_CATEGORY_NEW" />;
			case "skin":
				return <Locale k="CHANGELOG_CATEGORY_SKIN" />;
			case "update":
				return <Locale k="CHANGELOG_CATEGORY_UPDATE" />;
			case "dialogue":
				return <Locale k="CHANGELOG_CATEGORY_QUOTE" />;
		}
	}

	return <div class={ style.ChangelogItem }>
		<h3>
			{ props.title }
			<small class="ps-3 float-end float-md-none text-secondary">{ props.date }</small>
			{ props.tag
				? <span class={ style.ReleaseTag }>
					<Icon class="me-1" icon="tag-fill" />
					{ props.tag }
				</span>
				: <></>
			}
		</h3>
		<div class={ `${style.Tags} ms-2 pb-1` }>
			{ tags.map(x => <span class={ `badge ${TagVariantList(x)} me-1` }>
				{ TagName(x) }
			</span>) }
		</div>

		{ tags.map(x => <div class={ `mt-2 ms-1 sector-${x} ${style[`SectorVariant-${TagVariant(x)[0]}`]}` }>
			<h5>
				<strong>
					{ TagName(x) }
				</strong>
			</h5>
			<ol>{ props[x as keyof ChangelogItemProps] }</ol>
		</div>) }
	</div>;
};
export default ChangelogItem;
