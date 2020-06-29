import VueRouter from "vue-router";

import Home from "@/pages/Home.vue";
import Simulator from "@/pages/Simulator.vue";

import Units from "@/pages/Units.vue";
import UnitView from "@/pages/Units/View.vue";

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
			path: "/simulator",
			component: Simulator,
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
			component: UnitView,
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

	scrollBehavior (to, from, savedPosition) {
		if (to.hash)
			return { selector: to.hash };
		else if (savedPosition)
			return savedPosition;
		else
			return { x: 0, y: 0 };
	},
});
export default Router;
