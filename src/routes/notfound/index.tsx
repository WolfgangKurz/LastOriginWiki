import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";

import style from "./style.module.scss";

const Notfound: FunctionalComponent = () => (
	<div class={ style.notfound }>
		<h1>404</h1>
		<p>That page doesn&apos;t exist.</p>
		<Link href="/">
			<h4>Back to Home</h4>
		</Link>
	</div>
);

export default Notfound;
