import { FunctionalComponent } from "preact";
import Store from "@/store";

import { LocaleList } from "@/types/Locale";

import { AssetsRoot, ImageExtension, ImageExtensionList } from "@/libs/Const";
import { cn } from "@/libs/Class";
import { ChangeImage, isActive } from "@/libs/Functions";
import { ChangeLanguage, CurrentLocale } from "@/libs/Locale";

import IconTranslate from "@/components/bootstrap-icon/icons/Translate";
import IconImages from "@/components/bootstrap-icon/icons/Images";

import style from "./style.module.scss";

const ConfigSelector: FunctionalComponent = () => {
	return <div class={ style.ConfigSelector }>
		<div>
			<IconTranslate />

			<div class={ style.Buttons }>
				{ LocaleList.map(locale => <button
					class={ cn(CurrentLocale.value === locale && style.Current) }
					onClick={ (): void => ChangeLanguage(locale) }
				>
					<img src={ `${AssetsRoot}/flags/${locale}.png` } alt={ locale } />
				</button>) }
			</div>
		</div>

		<div>
			<IconImages />

			<div class={ style.Buttons }>
				{ ImageExtensionList.map(ext => <button
					class={ cn(ImageExtension() === ext && style.Current) }
					onClick={ (): void => ChangeImage(ext) }
				>
					{ ext }
				</button>) }
			</div>
		</div>
	</div>;
};
export default ConfigSelector;