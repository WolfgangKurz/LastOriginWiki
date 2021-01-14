import Vue from "vue";
import VueRouter from "vue-router";

import RouterLoading from "@/pages/Common/RouterLoading.vue";
import RouterTimeout from "@/pages/Common/RouterTimeout.vue";

function Lazyload (AsyncView: any) {
	const AsyncHandler = () => ({
		component: AsyncView,
		loading: RouterLoading,
		error: RouterTimeout,
		delay: 0,
		timeout: 30000,
	});

	return Promise.resolve(Vue.extend({
		functional: true,
		render (h, { data, children }) {
			return h(AsyncHandler, data, children);
		},
	}));
}

Vue.use(VueRouter);
const Router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "*",
			name: "404",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-common" */ "@/pages/Common/404.vue")),
		},

		{
			path: "/",
			name: "Home",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-home" */ "@/pages/Home.vue")),
		},

		{
			path: "/units",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-units" */ "@/pages/Units.vue")),
		},
		{
			path: "/units/:id",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-units" */ "@/pages/Units/View.vue")),
		},
		// {
		// 	path: "/units/stats/:stats",
		// 	component: () => Lazyload(import(/* webpackChunkName: "chunk-page-units" */ "@/pages/Units/View.vue")),
		// },

		{
			path: "/equips",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-equips" */ "@/pages/Equips.vue")),
		},
		{
			path: "/equips/:id",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-equips" */ "@/pages/Equips.vue")),
		},

		{
			path: "/enemy",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-enemy" */ "@/pages/Enemy.vue")),
		},
		{
			path: "/enemy/:id",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-enemy" */ "@/pages/Enemy.vue")),
		},

		{
			path: "/facilities",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-facilities" */ "@/pages/Facilities.vue")),
		},
		{
			path: "/facilities/:key",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-facilities" */ "@/pages/Facilities/FacilityView.vue")),
		},

		{
			path: "/worlds",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-worlds" */ "@/pages/Worlds.vue")),
		},
		{
			path: "/worlds/:world",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-worlds" */ "@/pages/Worlds/WorldAreaView.vue")),
		},
		{
			path: "/worlds/:world/:area",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-worlds" */ "@/pages/Worlds/WorldMapView")),
		},
		{
			path: "/worlds/:world/:area/:node",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-worlds" */ "@/pages/Worlds/WorldMapView")),
		},

		{
			path: "/story/:world/:area",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-story" */ "@/pages/Story.vue")),
		},
		{
			path: "/story/:world/:area/:loc/:spec",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-story" */ "@/pages/Story/StoryViewer.vue")),
		},

		{
			path: "/exchange",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-exchange" */ "@/pages/Exchange")),
		},

		{
			path: "/changelog",
			name: "Changelog",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-changelog" */ "@/pages/Changelog.vue")),
		},

		{
			path: "/exp",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-exp" */ "@/pages/EXP.vue")),
		},
		{
			path: "/bgm",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-bgm" */ "@/pages/BGM.vue")),
		},
		{
			path: "/eapi",
			component: () => Lazyload(import(/* webpackChunkName: "chunk-page-api" */ "@/pages/API.vue")),
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
