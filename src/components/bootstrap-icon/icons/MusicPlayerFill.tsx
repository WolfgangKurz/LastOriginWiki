import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconMusicPlayerFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-music-player-fill") } { ...props }>
		
  <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>

	</IconBase>;

export default IconMusicPlayerFill;
