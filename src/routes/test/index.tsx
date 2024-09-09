import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { StaticDB, useDBData } from "@/libs/Loader";
import { TitleCalls } from "@/libs/Const.3";

import style from "./style.module.scss";

interface TestPageProps {
	uid?: string;
}

const TestPage: FunctionalComponent<TestPageProps> = ({ uid }) => {
	const db = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!db) return <></>;

	return <>
		{ Object.keys(TitleCalls).filter(r => !db.find(v => v.uid === r)).map(v => <div>{ v }</div>) }
	</>;
};
export default TestPage;
