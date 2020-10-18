import { DefaultProps } from "vue/types/options";

declare module "*.vue" {
	import Vue from "vue";
	export default Vue;
}

declare module "vue" {
	export interface RenderContext<Props = DefaultProps> {
		/**
		 * Text VNode를 생성합니다.
		 */
		_v (text: string): Vue.VNode;

		/**
		 * 빈 Comment VNode를 생성합니다.
		 */
		_e (): Vue.VNode;
	}
}
