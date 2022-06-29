/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';
import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2';
import BootstrapVue from 'bootstrap-vue';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import IconsPlugin from 'bootstrap-vue';
import BootstrapVueIcons from 'bootstrap-vue';
var token = localStorage.getItem('token');
if(token)
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.use(BootstrapVueIcons);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
