import Vue from "vue";
import Locale from "@/components/Locale";
import { LocaleGet } from "@/libs/Locale";

Vue.component("Locale", Locale);
Vue.mixin({
	methods: {
		LocaleGet (...tags: string[]) {
			for (const tag of tags) {
				const output = LocaleGet(tag);
				if (output !== tag) return output;
			}
			return tags[0];
		},
	},
});
