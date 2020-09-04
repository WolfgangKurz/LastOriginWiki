import $ from "jquery";
import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/bootstrap-vue";

import { initWEBP } from "@/libs/Const";
import Checkbox from "@/components/Checkbox.vue";

// <b-container>, <b-row>, <b-col>:
// v-b-modal
// <b-card> <b-card-*>
import { BootstrapVue, LayoutPlugin, ModalPlugin, CardPlugin } from "bootstrap-vue";

import Router from "./Router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);

Vue.component("checkbox", Checkbox);

const router = Router;
initWEBP().then(() => new Vue({
	router,
	render: h => h(App),
}).$mount("#app"));
