import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";

interface SkillNameProps {
	r: string;
}

const SkillName: FunctionalComponent<SkillNameProps> = (props) => {
	const k = props.r;

	const uk = `UNIT_SKILL_${k.replace(/^Skill_(.+)_N_(.+)$/, "$1_$2")}`;
	return <span class="badge bg-primary">
		<Locale
			plain
			k={ uk }
			fallback={ <Locale plain k={ k } /> }
		/>
	</span>;
};
export default SkillName;
