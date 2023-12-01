import { FunctionalComponent } from "preact";

import { objState } from "@/libs/State";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale from "@/components/locale";

interface DateData {
	value: number;
	text: string;
}

const Changelog: FunctionalComponent = () => {
	const loading = objState<number>(0);
	const content = objState<preact.VNode | undefined>(undefined);

	const Dates: DateData[] = (() => {
		const now = new Date();
		const nYear = now.getFullYear();
		const nMonth = now.getMonth() + 1;

		let year = 2020;
		let month = 5;
		const output: DateData[] = [];

		while (year < nYear || (year === nYear && month <= nMonth)) {
			output.push({
				value: year * 100 + month,
				text: `${year}-${month.toString().padStart(2, "0")}`,
			});

			month++;
			if (month > 12) {
				month = 1;
				year++;
			}
		}

		return output.reverse();
	})();
	const currentDate = objState<number>(Dates[0].value);

	if (loading.value !== currentDate.value) {
		loading.set(currentDate.value);

		const _year = Math.floor(currentDate.value / 100);

		content.set(undefined);
		import(`./changelog/${_year}/${currentDate.value}.tsx`)
			.then(x => content.set(x.default))
			.catch(() => content.set(<h5 class="text-secondary text-center m-4">No data</h5>));
	}

	SetMeta(["description", "twitter:description"], "멸망 전의 전술 교본 사이트의 변경 내역입니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle("Changelog");

	return <div class="changelog text-start">
		<h2>
			<Locale k="CHANGELOG_TITLE" />
		</h2>
		<p>
			<Locale k="CHANGELOG_DESCRIPTION" />
		</p>

		<select
			class="form-select form-select-sm"
			value={ currentDate.value }
			onChange={ (e): void => currentDate.set(parseInt((e.target as HTMLSelectElement).value, 10)) }
		>
			{ Dates.map(x => <option value={ x.value }>{ x.text }</option>) }
		</select>
		<hr />

		{ content.value }
	</div>;
};
export default Changelog;
