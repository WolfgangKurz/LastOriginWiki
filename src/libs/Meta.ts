import { AssetsRoot } from "@/libs/Const";

type MetaKeys = "title" | "description" | "keywords" |
	"twitter:card" | "twitter:site" | "twitter:title" | "twitter:description" | "twitter:image" |
	"og:title" | "og:type" | "og:url" | "og:image";

const meta: Partial<Record<MetaKeys, string>> = {};

const defaultMeta: Record<MetaKeys, string> = {
	title: "멸망 전의 전술 교본",
	description: "멸망 전의 전술 교본은 전투원과 장비, 설비, 적 및 세계 정보를 볼 수 있는 정보 사이트입니다.",
	keywords: "멸망 전의 전술 교본,라스트 오리진,멸망전의 전술교본,전술 교본,라스트오리진,멸망전의전술교본,전술교본,라스트 오리진",

	"twitter:card": "summary",
	"twitter:site": "@wolfgangkurzdev",
	"twitter:title": "멸망 전의 전술 교본",
	"twitter:description": "멸망 전의 전술 교본은 전투원과 장비, 설비, 적 및 세계 정보를 볼 수 있는 정보 사이트입니다.",
	"twitter:image": AssetsRoot + "/icon.png",

	"og:title": "멸망 전의 전술 교본",
	"og:type": "website",
	"og:url": (() => {
		const loc = window.location;
		return `${loc.protocol}//${loc.host}${loc.pathname}`;
	})(),
	"og:image": AssetsRoot + "/icon.png",
};

function updateMeta () {
	document.head.querySelectorAll("meta[data-meta]")
		.forEach(x => document.head.removeChild(x));

	(Object.keys(meta) as MetaKeys[])
		.forEach(x => {
			const value = meta[x];
			if (value === undefined) return;

			const tag: HTMLMetaElement = document.createElement("meta");
			tag.setAttribute("data-meta", "");

			if (x.startsWith("og:"))
				tag.setAttribute("property", x);
			else
				tag.name = x;

			tag.content = value;
			document.head.appendChild(tag);
		});
}

export function SetMeta (name: MetaKeys | MetaKeys[], value: string | null, appendToDefault: boolean = false) {
	if (Array.isArray(name)) {
		name.forEach(x => {
			const def = defaultMeta[x];
			meta[x] = value === null ? def : (appendToDefault ? def + value : value);
		});
	} else {
		const def = defaultMeta[name];
		meta[name] = value === null ? def : (appendToDefault ? def + value : value);
	}

	updateMeta();
}

(Object.keys(defaultMeta) as MetaKeys[])
	.forEach(x => (meta[x] = defaultMeta[x]));
updateMeta();
