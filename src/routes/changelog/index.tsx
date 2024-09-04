import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale from "@/components/locale";
import Loading from "@/components/loading";

interface DateData {
	value: number;
	text: string;
}

const Changelog: FunctionalComponent = () => {
	const [loading, setLoading] = useState<number>(0);
	const [content, setContent] = useState<preact.VNode | undefined>(undefined);

	const Dates: DateData[] = useMemo(() => {
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
	}, []);
	const [currentDate, setCurrentDate] = useState<number>(Dates[0].value);

	useEffect(() => {
		if (loading !== currentDate) {
			setLoading(currentDate);

			const _year = Math.floor(currentDate / 100);

			setContent(undefined);
			import(`./changelog/${_year}/${currentDate}.tsx`)
				.then(x => setContent(x.default))
				.catch(() => setContent(<h5 class="text-secondary text-center m-4">No data</h5>));
		}
	}, [loading, currentDate]);

	useEffect(() => {
		SetMeta(["description", "twitter:description"], "멸망 전의 전술 교본 사이트의 변경 내역입니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle("Changelog");
	}, []);

	return <div class="changelog text-start">
		<h2>
			<Locale k="CHANGELOG_TITLE" />
		</h2>
		<p>
			<Locale k="CHANGELOG_DESCRIPTION" />
		</p>

		<select
			class="form-select form-select-sm"
			value={ currentDate }
			onChange={ (e): void => setCurrentDate(parseInt((e.target as HTMLSelectElement).value, 10)) }
		>
			{ Dates.map(x => <option value={ x.value }>{ x.text }</option>) }
		</select>
		<hr />

		{ content || <Loading.Data /> }
	</div>;
};
export default Changelog;
