import VueRouter from "vue-router";

import CommonPage404 from "@/pages/Common/404.vue";

import Home from "@/pages/Home.vue";
// import Simulator from "@/pages/Simulator.vue";

import Units from "@/pages/Units.vue";
import UnitView from "@/pages/Units/View.vue";

import Equips from "@/pages/Equips.vue";

import Facilities from "@/pages/Facilities.vue";

import Worlds from "@/pages/Worlds.vue";
import WorldAreaView from "@/pages/Worlds/WorldAreaView.vue";
import WorldMapView from "@/pages/Worlds/WorldMapView.vue";

import Changelog from "@/pages/Changelog.vue";

import APIPage from "@/pages/API.vue";

const Router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "*",
			component: CommonPage404,
		},

		{
			path: "/",
			component: Home,
		},
		/*
		{
			path: "/simulator",
			component: Simulator,
		},
		*/
		{
			path: "/changelog",
			component: Changelog,
		},

		{
			path: "/units",
			component: Units,
		},
		{
			path: "/units/:id",
			component: UnitView,
		},
		{
			path: "/units/stats/:stats",
			component: UnitView,
		},

		{
			path: "/equips",
			component: Equips,
		},
		{
			path: "/equips/:rarity/:id",
			component: Equips,
		},

		{
			path: "/facilities",
			component: Facilities,
		},

		{
			path: "/worlds",
			component: Worlds,
		},
		{
			path: "/worlds/:world",
			component: WorldAreaView,
		},
		{
			path: "/worlds/:world/:area",
			component: WorldMapView,
		},
		{
			path: "/worlds/:world/:area/:node",
			component: WorldMapView,
		},

		{
			path: "/changelog",
			component: Changelog,
		},

		{
			path: "/eapi",
			component: APIPage,
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
