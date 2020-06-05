import $ from "jquery";
import Vue from "vue";
import "./plugins/bootstrap-vue";

import App from "./App.vue";
import { initWEBP } from "@/Const";
import Checkbox from "@/components/Checkbox.vue";

// <b-container>, <b-row>, <b-col>:
// v-b-modal
// <b-card> <b-card-*>
import { BootstrapVue, LayoutPlugin, ModalPlugin, CardPlugin } from "bootstrap-vue";

$("<div>").prop("id", "app")
	.appendTo($("body"));

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);

Vue.component("checkbox", Checkbox);

initWEBP().then(() => {
	new Vue({
		render: h => h(App),
	}).$mount("#app");
});
