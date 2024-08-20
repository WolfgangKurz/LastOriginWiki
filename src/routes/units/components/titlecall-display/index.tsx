import { cn } from "@/libs/Class";
import { UniqueID } from "@/libs/Functions";
import { AssetsRoot } from "@/libs/Const.1";
import { TitleCalls } from "@/libs/Const.2";

import Locale from "@/components/locale";

import style from "./style.module.scss";

interface TitleCallDisplayProps {
	unitId: string;
}
const TitleCallDisplay: FunctionalComponent<TitleCallDisplayProps> = (props) => {
	const collapseId = UniqueID("unit-dialogue-");

	return <div class="card mt-2 text-start">
		<div
			class="card-header"
			data-bs-toggle="collapse"
			data-bs-target={ `#${collapseId}` }
			aria-expanded="false"
			aria-controls={ collapseId }
			role="button"
		>
			<div>
				<strong>
					<Locale k="UNIT_DIALOGUE_TYPE_TITLECALL" />
				</strong>
			</div>
		</div>
		<div id={ collapseId } class="collapse">
			<div class="card-body d-flex flex-column align-items-center gap-3">

				{ Object.keys(TitleCalls[props.unitId]).map(key =>
					<div class={ cn(style.TitleCallDisplay, "row my-2 my-sm-0") }>
						<div class={ cn(style.TypeColumn, "bg-dark text-bg-dark col col-12 col-sm-2 border-top") }>
							{ key }
						</div>
						<div class={ cn(style.AudioColumn, "col col-12 col-sm-auto border") }>
							{ Object.values(TitleCalls[props.unitId][key]).map(name =>
								<audio
									src={ `${AssetsRoot}/audio/titlecall/${name}.mp3` }
									type="audio/mp3"
									controls
									preload="none"
									volume="0.5"
								/>
							) }
						</div>
					</div>
				) }
			</div>
		</div>
	</div>;
};
export default TitleCallDisplay;
