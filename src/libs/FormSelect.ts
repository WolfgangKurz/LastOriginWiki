export interface FormSelectItem<T> {
	text: string;
	value: T;
}
export interface FormSelectGroup<T> {
	label: string;
	options: FormSelectItem<T>[];
}
export type FormSelectDatum<T> = FormSelectItem<T> | FormSelectGroup<T>;
export type FormSelectData<T> = FormSelectDatum<T>[];

export function FormSelectFirst<T> (data: FormSelectData<T>): FormSelectItem<T> | undefined {
	if (data.length === 0) return undefined;

	let target = data[0];
	if ("label" in target) {
		if (target.options.length === 0) return undefined;
		target = target.options[0];
	}
	return target;
}
