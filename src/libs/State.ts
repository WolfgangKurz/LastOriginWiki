import { StateUpdater, useState } from "preact/hooks";

export interface ObjectState<T> {
	readonly value: T;
	set: StateUpdater<T>;
}

export function objStated<T> (state: [T, StateUpdater<T>]): ObjectState<T> {
	const [value, updator] = state;
	return {
		value,
		set: updator,
	};
}

export function objState<T> (value: T): ObjectState<T> {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [v, updator] = useState<T>(value);
	return {
		value: v,
		set: updator,
	};
}
