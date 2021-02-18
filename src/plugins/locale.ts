import Vue from "vue";
import Locale from "@/components/Locale";
import { LocaleGet } from "@/libs/Locale";

Vue.component("Locale", Locale);
Vue.mixin({
	methods: {
		LocaleGet (keys: string | string[], ...params: any[]) {
			return LocaleGet(keys, params);
		},
	},
});
