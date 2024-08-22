import { cn } from "@/libs/Class";
import { UniqueID } from "@/libs/Functions";
import { AssetsRoot } from "@/libs/Const.1";
import { TitleCalls } from "@/libs/Const.3";

import Locale from "@/components/locale";
import UnitFace from "@/components/unit-face";

import { VoiceItem } from "../unit-dialogue";

import style from "./style.module.scss";

interface TitleCallDisplayProps {
	unitId: string;
	voiceList: VoiceItem[];
}
const TitleCallDisplay: FunctionalComponent<TitleCallDisplayProps> = (props) => {
	const collapseId = UniqueID("unit-dialogue-");

	return <div class={ "card mt-2 text-start" }>
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
				<div class={ style.TitleCallDisplay }>
					{ Object.keys(TitleCalls[props.unitId]).map(sid =>
						<table class={ cn(style.Table, "table table-sm") }>
							<tr>
								<td
									class={ cn(style.SkinName, "bg-dark text-bg-dark") }
									rowspan={ Object.keys(TitleCalls[props.unitId][sid]).length }
								>
									<UnitFace
										class="me-2 bg-dark"
										uid={ props.unitId }
										skin={ props.voiceList.find(r => r.sid?.toString() == sid)?.metadata.imageId ?? 0 }
										size="56"
									/>

									{ sid === "0"
										? <Locale k={ `UNIT_${props.unitId}` } />
										: <Locale k={ `UNIT_SKIN_${props.unitId}_${sid}` } />
									}
								</td>

								{ Object.keys(TitleCalls[props.unitId][sid]).map(key => <>
									<td class={ cn(style.TypeColumn, "bg-dark text-bg-dark") }>
										{ key }
									</td>
									<td class={ style.AudioColumn }>
										{ Object.values(TitleCalls[props.unitId][sid][key]).map(name => <div>
											<audio
												src={ `${AssetsRoot}/audio/titlecall/${name}.mp3` }
												type="audio/mp3"
												controls
												preload="none"
												volume="0.5"
											/>
										</div>) }
									</td>
								</>) }
							</tr>
						</table>
					) }
				</div>
			</div>
		</div>
	</div>;
};
export default TitleCallDisplay;
