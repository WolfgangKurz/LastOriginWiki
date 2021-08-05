import { StateUpdater, useState } from "preact/hooks";

export interface ObjectState<T> {
	readonly value: T;
	set: StateUpdater<T>;
}
type Updater<T> = (prevState: T) => T;

export function objStated<T> (state: [T, StateUpdater<T>]): ObjectState<T> {
	const [value, updator] = state;
	return {
		value,
		set (value: T | Updater<T>): void {
			if (typeof value === "function")
				(this.value as T) = (value as Updater<T>)(this.value);
			else
				(this.value as T) = value;
			updator(this.value);
		},
	};
}

export function objState<T> (value: T): ObjectState<T> {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return objStated(useState<T>(value));
}
