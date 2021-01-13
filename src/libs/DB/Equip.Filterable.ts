import Data from "@/json/equip-filterable";
import { FilterableEquip } from "@/libs/Types/Equip.Filterable";

import EntitySource from "@/libs/EntitySource";

export default (() => Data.map(x => ({
	...x,
	source: x.source.map(y => y.map(z => new EntitySource(z))),
}) as FilterableEquip))();
