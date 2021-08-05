import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FunctionalComponent } from "preact";

interface SkillIconProps {
	icon: string;
	passive?: boolean;
}

const SkillIcon: FunctionalComponent<SkillIconProps> = (props) => {
	const imageExt = ImageExtension();

	return <img
		class="skill-icon"
		src={ `${AssetsRoot}/${imageExt}/skill/${props.icon}_${props.passive ? "passive" : "active"}.${imageExt}` }
	/>;
};
export default SkillIcon;
