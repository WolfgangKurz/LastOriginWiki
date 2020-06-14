import VueRouter from "vue-router";

import Home from "@/pages/Home.vue";
import Simulation from "@/pages/Simulation.vue";
import Units from "@/pages/Units.vue";
import Equips from "@/pages/Equips.vue";
import Changelog from "@/pages/Changelog.vue";

const Router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			component: Home,
		},

		{
			path: "/simulation",
			component: Simulation,
		},

		{
			path: "/changelog",
			component: Changelog,
		},

		{
			path: "/units/",
			component: Units,
		},
		{
			path: "/units/:id",
			component: Units,
		},

		{
			path: "/equips/",
			component: Equips,
		},
		{
			path: "/equips/:rarity/:id",
			component: Equips,
		},

		{
			path: "/changelog",
			component: Changelog,
		},
	],
});
export default Router;
