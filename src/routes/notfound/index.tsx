import { FunctionalComponent } from "preact";

import style from "./style.module.scss";

const Notfound: FunctionalComponent = () => (
	<div class={ style.notfound }>
		<h1>404</h1>
		<p>That page doesn&apos;t exist.</p>
		<a href="/">
			<h4>Back to Home</h4>
		</a>
	</div>
);

export default Notfound;
