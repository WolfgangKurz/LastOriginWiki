export interface SelectOption<T> {
	text: string | preact.VNode;
	value: T;
}
