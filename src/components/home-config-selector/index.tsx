import { FunctionalComponent } from "preact";

import { ImageExtension, ImageExtensionList } from "@/libs/Const";
import { ChangeImage } from "@/libs/Functions";
import { ChangeLanguage, CurrentLocale, LocaleList } from "@/libs/Locale";
// import { LangValidation, LocaleGet } from "@/libs/Locale";
import { ChangeDB, CurrentDB, DBList, DBTypes } from "@/libs/DB";

import Icon from "../bootstrap-icon";

const HomeConfigSelector: FunctionalComponent = () => {
	const DBDisp: Record<DBTypes, string> = {
		korea: "KR",
		japan: "JP",
	};

	return <div class="my-4">
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="server" class="me-1" />
			</div>
			{ DBList.map(db => <button
				class={ `btn btn-${CurrentDB === db ? "danger" : "outline-danger"}` }
				onClick={ (): void => ChangeDB(db) }
			>
				{ DBDisp[db] }
			</button>) }
		</div>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="globe2" class="me-1" />
			</div>

			{ LocaleList.map(locale => <button
				class={ `btn btn-${CurrentLocale === locale ? "primary" : "outline-primary"}` }
				onClick={ (): void => ChangeLanguage(locale) }
			>
				{ locale }
			</button>) }
		</div>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="image" class="me-1" />
			</div>

			{ ImageExtensionList.map(ext => <button
				class={ `btn btn-${ImageExtension() === ext ? "success" : "outline-success"}` }
				onClick={ (): void => ChangeImage(ext) }
			>
				{ ext }
			</button>) }
		</div>
	</div>;
};
export default HomeConfigSelector;
