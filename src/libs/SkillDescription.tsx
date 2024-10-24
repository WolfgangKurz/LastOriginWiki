import { FunctionalComponent } from "preact";

import { CurrentLocale } from "@/libs/Locale";

import SkillDescription, { SectionProps, SkillDescriptionValueData } from "@/components/skill-description";
import { GetLocaleTable } from "@/components/locale";

interface SkillDescriptionMetadata {
	lines: string[];
	sections: Record<string, FunctionalComponent<SectionProps>[]>;
	boxs: Array<[string, string]>;
}

type ValueTable = Record<string, SkillDescriptionValueData[]>;
type PrebuiltSectionType = (slot: string, values: Record<string, SkillDescriptionValueData[]>) => FunctionalComponent<SectionProps>[];

export interface ParamWithSlot {
	slot: string;
	index: number | undefined;
}

let PrebuiltSections: Record<string, PrebuiltSectionType> | undefined;
function InitPrebuiltSections (): void {
	if (PrebuiltSections) return;

	const section: Record<string, PrebuiltSectionType> = {};
	const locs = GetLocaleTable(CurrentLocale.value) || {};
	const keys = Object.keys(locs).filter(x => x.startsWith("UNIT_SKILL_SECTION_"));
	keys.forEach(k => {
		const kk = k.replace(/^UNIT_SKILL_SECTION_(.+)$/, "$1");
		const _p2 = locs[k]
			.replace(/^\n+/gs, "")
			.replace(/\n+$/gs, "")
			.split("\n");

		section[kk] = (slot: string, values: Record<string, SkillDescriptionValueData[]>): FunctionalComponent<SectionProps>[] => {
			return _p2.map(p => function SkillPrebuiltSection (props: SectionProps): preact.VNode {
				if (!p) {
					return _p2.length === 1
						? <span class="text-secondary">EMPTY</span>
						: <div style="padding:0.75em" />;
				}

				const pp = p.replace(/param="([^"]+)"/g, (p0, p1) => {
					const reg = /^\$([0-9]+)(:([PpNn]))?$/;
					if (reg.test(p1)) {
						const m = reg.exec(p1)!;
						const idx = parseInt(m[1], 10) - 1;
						const pn = m[3] ? m[3].toLowerCase() : "";

						if (!(idx in props.params)) return "base=\"0\" per=\"0\"";

						const val = props.params[idx];
						if (typeof val === "number")
							return `idx="${val}" ${pn ? `forcePN="${pn}"` : ""}`;
						else if (val === undefined)
							return pn ? `forcePN="${pn}"` : "";
						else
							return `idx="${val.index}" slot="${val.slot}" ${pn ? `forcePN="${pn}"` : ""}`;
					}

					return "base=\"0\" per=\"0\"";
				});

				return <SkillDescription
					text={ pp }
					level={ 9 }
					slot={ slot }
					values={ values }
					rates={ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }
					buffBonus={ false }
					favorBonus={ false }
					skillBonus={ 0 }
				/>;
			});
		};
	});

	PrebuiltSections = section;
}

export function GetSkillDescription (content: string, slot: string, values: ValueTable): SkillDescriptionMetadata {
	if (!PrebuiltSections)
		InitPrebuiltSections();

	const orig = content;
	const sections: Record<string, FunctionalComponent<SectionProps>[]> = {};
	const boxs: Array<[string, string]> = [];

	if (PrebuiltSections) {
		Object.keys(PrebuiltSections)
			.forEach(k => (sections[k] = PrebuiltSections![k](slot, values)));
	}

	const lines = orig
		.replace(/\$\$([A-Za-z0-9\-_]+)\$?~(.+)~\$\$(\1)\$?/gs, (p0, p1: string, p2: string) => {
			const _p2 = p2
				.replace(/^\n+/gs, "")
				.replace(/\n+$/gs, "")
				.split("\n");
			sections[p1] = _p2.map(p => function SkillSection (props: SectionProps): preact.VNode {
				if (!p) {
					return _p2.length === 1
						? <span class="text-secondary">EMPTY</span>
						: <div style="padding:0.75em" />;
				}

				const pp = p.replace(/param="([^"]+)"/g, (p0, p1) => {
					const reg = /^\$([0-9]+)(:([PpNn]))?$/;
					if (reg.test(p1)) {
						const m = reg.exec(p1)!;
						const idx = parseInt(m[1], 10) - 1;
						const pn = m[3] ? m[3].toLowerCase() : "";

						if (!(idx in props.params)) return "base=\"0\" per=\"0\"";

						const val = props.params[idx];
						if (typeof val === "number")
							return `idx="${val}" ${pn ? `forcePN="${pn}"` : ""}`;
						else if (val === undefined)
							return pn ? `forcePN="${pn}"` : "";
						else
							return `idx="${val.index}" slot="${val.slot}" ${pn ? `forcePN="${pn}"` : ""}`;
					}

					return "base=\"0\" per=\"0\"";
				});

				return <SkillDescription
					text={ pp }
					level={ 9 }
					rates={ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }
					slot={ slot }
					values={ values }
					buffBonus={ false }
					favorBonus={ false }
					skillBonus={ 0 }
				/>;
			});
			return "";
		})
		.replace(/\r?\n?<box(?: t="([^"]+)")?>(.*?)<\/box>\r?\n?/gis, (p0, p1: string, p2: string) => {
			const _content = p2.trim();

			boxs.push([_content, p1 || ""]);
			return `<BOX_${boxs.length} />`;
		})
		.replace(/^\n+/gs, "")
		.replace(/\n+$/gs, "")
		.split("\n");

	return { lines, sections, boxs };
}

export function parseParams (p: string): Array<number | undefined | ParamWithSlot> {
	return p.split(",").map(x => {
		if (x.includes("@")) {
			const s = x.split("@");
			if (s.length !== 2 || !/^F?[0-9]+$/.test(s[0]) || !(s[1] === "?" || /^[0-9]+$/.test(s[1]))) return 0;

			return {
				slot: s[0],
				index: s[1] === "?" ? undefined : parseInt(s[1], 10),
			};
		}

		if (x !== "?" && !/^-?[0-9]+$/.test(x)) return 0;
		return x === "?" ? undefined : parseInt(x, 10);
	});
}
