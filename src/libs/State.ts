import { Dispatch, StateUpdater, useState } from "preact/hooks";

export interface ObjectState<T> {
	readonly value: T;
	set: Dispatch<StateUpdater<T>>;
}
type Updater<T> = (prevState: T) => T;

/**
 * @deprecated This method should not be used. Use `useState` instead.
 */
export function objStated<T> (state: [T, Dispatch<StateUpdater<T>>]): ObjectState<T> {
	const [value, updator] = state;
	return {
		value,
		set (value: T | Updater<T>): void {
			// DANGEROUS CODE
			if (typeof value === "function")
				(this.value as T) = (value as Updater<T>)(this.value);
			else
				(this.value as T) = value;
			updator(this.value);
		},
	};
}

/**
 * @deprecated This method should not be used. Use `useState` instead.
 */
export function objState<T> (value: T): ObjectState<T> {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return objStated(useState<T>(value));
}
