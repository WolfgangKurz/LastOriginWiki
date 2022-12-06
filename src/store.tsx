// preact signals based store

import { signal } from "@preact/signals";

const Store = {
	Units: {
		DisplayType: signal<"table" | "list" | "group" | "skin" | "time">("table"),

		Skins: {
			Tab: signal<"" | "artist" | "releaseDate">(""),

			Artist: {
				DisplayUnitRelease: signal(true),
				DisplaySkinRelease: signal(true),
			},
			ReleaseDate: {
				DisplayUnitRelease: signal(true),
				DisplaySkinRelease: signal(true),
			},
		},
	},
};
export default Store;
