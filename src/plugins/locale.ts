import Vue from "vue";
import Locale from "@/components/Locale";
import { LocaleGet } from "@/libs/Locale";

Vue.component("Locale", Locale);
Vue.mixin({
	methods: {
		LocaleGet (tag: string) {
			return LocaleGet(tag);
		},
	},
});
