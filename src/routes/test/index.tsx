import { FunctionalComponent } from "preact";

import { FACETYPE } from "@/types/Enums";

import { objState } from "@/libs/State";
import { AssetsRoot } from "@/libs/Const";
import { isActive } from "@/libs/Functions";

import SpineRenderer from "@/components/spine-renderer";

import style from "./style.module.scss";

interface TestPageProps {
	uid?: string;
}

const TestPage: FunctionalComponent<TestPageProps> = ({ uid }) => {
	const collider = objState<boolean>(false);

	const hideParts = objState<boolean>(false);
	const hideBg = objState<boolean>(false);
	const hideDialogDeactive = objState<boolean>(false);

	const face = objState<string>("");
	const faces = objState<string[]>([]);

	return <div>
		{/* <button
			class={ `mx-1 btn btn-outline-success ${isActive(collider.value)}` }
			onClick={ (e) => {
				e.preventDefault();
				collider.set(!collider.value);
			} }
		>
			Display Collider Box
		</button>
		<button
			class={ `mx-1 btn btn-outline-danger ${isActive(hideParts.value)}` }
			onClick={ (e) => {
				e.preventDefault();
				hideParts.set(!hideParts.value);
			} }
		>
			Hide Parts
		</button>
		<button
			class={ `mx-1 btn btn-outline-danger ${isActive(hideBg.value)}` }
			onClick={ (e) => {
				e.preventDefault();
				hideBg.set(!hideBg.value);
			} }
		>
			Hide BG
		</button>
		<button
			class={ `mx-1 btn btn-outline-danger ${isActive(hideDialogDeactive.value)}` }
			onClick={ (e) => {
				e.preventDefault();
				hideDialogDeactive.set(!hideDialogDeactive.value);
			} }
		>
			Hide Dialog Deactive Parts
		</button> */}

		<button
			class="btn btn-substory dropdown-toggle"
			type="button"
			data-bs-toggle="dropdown"
			data-bs-auto-close="outside"
			aria-expanded="false"
		>
			{ face.value }
		</button>
		<ul class={ `dropdown-menu ${style.DropDown}` }>
			{ faces.value.map(f => <li>
				<a
					href="#"
					class={ `dropdown-item ${isActive(face.value === f)}` }
					onClick={ (e): void => {
						e.preventDefault();
						e.stopPropagation();
						face.set(f);
					} }
				>
					{ f }
				</a>
			</li>) }
		</ul>

		<div class={ style.TEST }>
			<SpineRenderer
				uid={ uid || "ST_Mercury_NS1" }
				google={false}
				specialTouch

				// collider={ collider.value }
				// hidePart={ hideParts.value }
				// hideBg={ hideBg.value }
				// hideDialog={ hideDialogDeactive.value }

				face={ face.value }
				onFaceList={ (list) => {
					faces.set(list);

					if (list.includes("Idle"))
						face.set("Idle");
					else {
						const listU = list.map(f => f.toUpperCase());
						for (const ft of Object.keys(FACETYPE)) {
							const index = listU.indexOf(ft);
							if (index >= 0) {
								face.set(list[index]);
								break;
							}
						}
					}
				} }
			/>
		</div>
	</div>;
};
export default TestPage;
