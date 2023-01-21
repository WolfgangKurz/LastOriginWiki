import BG from "@/types/DB/BG";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { objState } from "@/libs/State";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";

import style from "./style.module.scss";

const BGPage: FunctionalComponent = () => {
	const ext = ImageExtension();

	const bgSelected = objState(0);

	return <div class="bg">
		<Loader json={ StaticDB.BG } content={ () => {
			const bgs = GetJson<BG[]>(StaticDB.BG);
			const selected = bgs[bgSelected.value];

			return <>
				<h1>BG</h1>

				<div class="row gx-0">
					<div class="col-12 d-lg-none">

						<div class="btn btn-group">
							<button
								class="btn btn-dark dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								data-bs-auto-close="outside"
								aria-expanded="false"
							>
								<img src={ `${AssetsRoot}/${ext}/bg/long/${selected.image}.${ext}` } />

								<div class={ style.BGName }>
									<Locale k={ selected.key } />
								</div>
							</button>
							<ul class={ `dropdown-menu ${style.DropDown}` }>
								{ bgs.map((bg, index) => <li>
									<a
										href="#"
										class={ [
											"dropdown-item",
											isActive(bgSelected.value === index),
										].join(" ") }
										onClick={ (e): void => {
											e.preventDefault();
											e.stopPropagation();
											bgSelected.set(index);
										} }
									>
										<img src={ `${AssetsRoot}/${ext}/bg/long/${bg.image}.${ext}` } />

										<div class={ style.BGName }>
											<Locale k={ bg.key } />
										</div>
									</a>
								</li>) }
							</ul>
						</div>
					</div>
					<div class="col-2 d-none d-lg-block position-relative">
						<div class={ `flex-nowrap ${style.BGTabs}` }>
							<ul class="nav nav-tabs justify-content-start">
								{ bgs.map((bg, index) => <li class="nav-item">
									<a
										href="#"
										class={ [
											"nav-link",
											isActive(bgSelected.value === index),
											bgSelected.value === index ? "bg-dark text-light" : "text-dark",
										].join(" ") }
										onClick={ (e): void => {
											e.preventDefault();
											bgSelected.set(index);
										} }
									>
										<img src={ `${AssetsRoot}/${ext}/bg/long/${bg.image}.${ext}` } />

										<div class={ style.BGName }>
											<Locale k={ bg.key } />
										</div>
									</a>
								</li>) }
							</ul>
						</div>
					</div>
					<div class="col-12 col-lg-10 p-4 bg-dark text-light">
						<div class={ style.BGView }>
							<div class="ratio ratio-16x9">
								<div>
									<img
										class={ style.BGImage }
										src={ `${AssetsRoot}/${ext}/bg/${selected.image}.${ext}` }
									/>
								</div>
							</div>

							<h3 class="mt-4 mb-2">
								<Locale k={ selected.key } />

								<span class={ `badge bg-warning text-dark ${style.BGPrice}` }>
									{ typeof selected.price === "number"
										? <>
											<img src={ `${AssetsRoot}/tuna.png` } />
											{ selected.price }
										</>
										: selected.price === "default"
											? <Locale k="BG_DEFAULT" />
											: <></>
									}
								</span>
							</h3>
							<p class={ `p-2 ${style.BGDesc}` }>
								<Locale k={ `${selected.key}_DESC` } />
							</p>

							{ "req" in selected
								? <div class="mt-5 text-start">
									<h5>
										<Locale k="BG_REQUIREMENT" />
									</h5>
									<h6 class="ms-3">
										<Locale k={ `BG_REQUIREMENT_JOIN_${selected.reqType === "&" ? "AND" : "OR"}` } />
									</h6>

									<div class="ms-3">
										{ selected.req.map(r => {
											return <span class="me-2 badge bg-warning text-dark">
												<Locale k={ `CONSUMABLE_${r}` } />
											</span>;
										}) }
									</div>
								</div>
								: <></>
							}
						</div>
					</div>
				</div>
			</>;
		} } />
	</div >;
};
export default BGPage;
