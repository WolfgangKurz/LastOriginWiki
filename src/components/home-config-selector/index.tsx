import { FunctionalComponent } from "preact";

import { AssetsRoot, ImageExtension, ImageExtensionList } from "@/libs/Const";
import { ChangeImage, isActive } from "@/libs/Functions";
import { ChangeLanguage, CurrentLocale, LocaleList } from "@/libs/Locale";
// import { LangValidation, LocaleGet } from "@/libs/Locale";
import { ChangeDB, CurrentDB, DBList, DBTypes } from "@/libs/DB";

import IconGlobe2 from "@/components/bootstrap-icon/icons/Globe2";
import IconImage from "@/components/bootstrap-icon/icons/Image";

import style from "./style.module.scss";

const HomeConfigSelector: FunctionalComponent = () => {
	const DBDisp: Record<DBTypes, string> = {
		korea: "KR",
		// japan: "JP",
	};

	return <div class={`${style.HomeConfigSelector} my-4`}>
		{/* <div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<IconServer class="me-1" />
			</div>
			{ DBList.map(db => <button
				class={ `btn btn-danger ${isActive(CurrentDB === db)}` }
				onClick={ (): void => ChangeDB(db) }
			>
				<img src={ `${AssetsRoot}/flags/${DBDisp[db]}.png` } alt={ DBDisp[db] || db } />
			</button>) }
		</div> */}
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<IconGlobe2 class="me-1" />
			</div>

			{ LocaleList.map(locale => <button
				class={ `btn btn-primary ${isActive(CurrentLocale === locale)}` }
				onClick={ (): void => ChangeLanguage(locale) }
			>
				<img src={ `${AssetsRoot}/flags/${locale}.png` } alt={ locale } />
			</button>) }
		</div>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<IconImage class="me-1" />
			</div>

			{ ImageExtensionList.map(ext => <button
				class={ `btn btn-success ${isActive(ImageExtension() === ext)}` }
				onClick={ (): void => ChangeImage(ext) }
			>
				{ ext }
			</button>) }
		</div>
	</div>;
};
export default HomeConfigSelector;
