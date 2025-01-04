import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const.1";

import style from "./style.module.scss";

const Loading = {
	Data: (() => <div class={ style.DataLoading }>
		<picture>
			{/* <source srcset={ `${AssetsRoot}/ui/data_loading.avif` } type="image/avif" /> */ }
			<source srcset={ `${AssetsRoot}/ui/data_loading.webp` } type="image/webp" />
			<img class="m-2" src={ `${AssetsRoot}/ui/data_loading.gif` } />
		</picture>
		<br />
		<span class="text-secondary">Data loading</span>
	</div>) as FunctionalComponent,

	Page: (() => <div class={ style.PageLoading }>
		<picture>
			{/* <source srcset={ `${AssetsRoot}/ui/page_loading.avif` } type="image/avif" /> */ }
			<source srcset={ `${AssetsRoot}/ui/page_loading.webp` } type="image/webp" />
			<img class="m-2" src={ `${AssetsRoot}/ui/page_loading.gif` } />
		</picture>
		<br />
		<span class="text-secondary">Page loading</span>
	</div>) as FunctionalComponent,

	Error: (() => <div class={ style.ErrorLoading }>
		<span class="d-inline-block badge bg-danger">
			Failed to load data.<br />
			Please retry or report to developer.
		</span>
	</div>) as FunctionalComponent,
};

export default Loading;
