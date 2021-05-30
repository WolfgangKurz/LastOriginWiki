import { FunctionalComponent } from "preact";
import { route } from "preact-router";

import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

const Enemies: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "적 목록 또는 적 그룹 목록으로 이동할 수 있습니다.");
	SetMeta(["twitter:image", "og:image"], null);

	UpdateTitle(LocaleGet("MENU_ENEMIES"));

	return <>
		<h1>
			<Locale k="MENU_ENEMIES" />
		</h1>

		<div class="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
			<div class="col">
				<div class="card enemies-menu-card text-center mt-4 bg-dark text-light">
					<div class="card-body">
						{/* <img src={ `${AssetsRoot}/world/icons/${props.wid}_${i + 1}.png` } /> */ }
						<div class="menu-name">
							<Locale k="ENEMIES_LIST" />
						</div>

						<div class="btn-group mt-2">
							<button class="btn btn-primary" onClick={ (): void => void (route("/enemies/list")) }>
								<Icon icon="list-ul" class="me-1" />
								<Locale k="ENEMIES_LIST" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card enemies-menu-card text-center mt-4 bg-dark text-light">
					<div class="card-body">
						{/* <img src={ `${AssetsRoot}/world/icons/${props.wid}_${i + 1}.png` } /> */ }
						<div class="menu-name">
							<Locale k="ENEMIES_GROUP_LIST" />
						</div>

						<div class="btn-group mt-2">
							<button class="btn btn-primary" onClick={ (): void => void (route("/enemies/group")) }>
								<Icon icon="archive-fill" class="me-1" />
								<Locale k="ENEMIES_GROUP_LIST" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
};
export default Enemies;
