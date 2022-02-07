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

	const Dates: DateData[] = [
		{ value: 202202, text: "2022-02" },
		{ value: 202201, text: "2022-01" },
		{ value: 202112, text: "2021-12" },
		{ value: 202111, text: "2021-11" },
		{ value: 202110, text: "2021-10" },
		{ value: 202109, text: "2021-09" },
		{ value: 202108, text: "2021-08" },
		{ value: 202107, text: "2021-07" },
		{ value: 202106, text: "2021-06" },
		{ value: 202105, text: "2021-05" },
		{ value: 202104, text: "2021-04" },
		{ value: 202103, text: "2021-03" },
		{ value: 202102, text: "2021-02" },
		{ value: 202101, text: "2021-01" },
		{ value: 202012, text: "2020-12" },
		{ value: 202011, text: "2020-11" },
		{ value: 202010, text: "2020-10" },
		{ value: 202009, text: "2020-09" },
		{ value: 202008, text: "2020-08" },
		{ value: 202007, text: "2020-07" },
		{ value: 202006, text: "2020-06" },
		{ value: 202005, text: "2020-05" },
	];
	const currentDate = objState<number>(Dates[0].value);

	if (loading.value !== currentDate.value) {
		loading.set(currentDate.value);

		content.set(undefined);
		import(`./changelog/${currentDate.value}.tsx`)
			.then(x => content.set(x.default))
			.catch(() => content.set(<h5 class="text-secondary text-center m-4">Failed to load</h5>));
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
