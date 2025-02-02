import { FunctionalComponent } from "preact";

import { cn } from "@/libs/Class";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";

import style from "./style.module.scss";
import Icons from "@/components/bootstrap-icon";

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

	function TagVariant (tag: string): string {
		switch (tag) {
			default:
			case "default":
				return "";
			case "site":
				return "secondary";
			case "knownissue":
				return "danger-dark";
			case "bugfix":
				return "danger";
			case "delete":
				return "dark";
			case "new":
				return "primary";
			case "skin":
				return "substory";
			case "update":
				return "warning";
			case "dialogue":
				return "success";
		}
	}

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
		<div class={ style.Title }>
			<Icons.DiamondFill />

			{ props.title }

			<span class={ style.Date }>{ props.date }</span>

			<div class={ style.Tags }>
				{ tags
					.map(x => [x, TagVariant(x)])
					.map(([x, y]) => <span class={ cn(style.Tag, `bg-${y}`, `text-bg-${y}`) }>
						{ TagName(x) }
					</span>)
				}
			</div>
		</div>

		{ tags
			.map(x => [x, TagVariant(x)])
			.map(([x, y]) => <div class={ cn(style.Sector, style[`SectorVariant-${y}`]) }>
				<div class={ style.Category }>{ TagName(x) }</div>
				<ol>{ props[x as keyof ChangelogItemProps] }</ol>
			</div>)
		}
	</div>;
};
export default ChangelogItem;
