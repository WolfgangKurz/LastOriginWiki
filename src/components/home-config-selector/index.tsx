import { FunctionalComponent, h } from "preact";

import { ImageExtension, ImageExtensionList } from "@/libs/Const";
import { ChangeLanguage, CurrentLocale, LocaleList } from "@/libs/Locale";

import Icon from "../bootstrap-icon";
import { ChangeImage } from "@/libs/Functions";
// import { LangValidation, LocaleGet } from "@/libs/Locale";

const HomeConfigSelector: FunctionalComponent = () => (
	<div class="my-4">
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="server" class="me-1" />
			</div>
			<button class="btn btn-danger">KR</button>
			<button class="btn btn-outline-secondary" disabled>JP</button>
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
	</div>
);
export default HomeConfigSelector;
