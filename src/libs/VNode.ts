import { VNode } from "vue";

/** `<!---->` 노드를 반환합니다. */
export function _e (): JSX.Element {
	return {
		isRootInsert: true,
		isStatic: false,
		isComment: true,
		text: "",
	};
}

export function slot (s: VNode[] | undefined): VNode[] | undefined {
	return s || undefined;
}
