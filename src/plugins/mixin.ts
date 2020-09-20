import Vue from "vue";
import Component from "vue-class-component";

import { FormatNumber } from "@/libs/Functions";

@Component({})
class MixinComponent extends Vue {
	protected FormatNumber (num: number): string {
		return FormatNumber(num);
	}
}

Vue.mixin(MixinComponent);
