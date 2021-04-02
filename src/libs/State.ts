import { StateUpdater, useState } from "preact/hooks";

export interface ObjectState<T> {
	readonly value: T;
	set (value: T | ((prevState: T) => T)): void;
}

export function objStated<T> (state: [T, StateUpdater<T>]): ObjectState<T> {
	const [value, updator] = state;
	return {
		value,
		set (value: T): void {
			(this.value as T) = value;
			updator(value);
		},
	};
}

export function objState<T> (value: T): ObjectState<T> {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return objStated(useState<T>(value));
}
