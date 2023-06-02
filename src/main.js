import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import './assets/custom.scss';

import {router} from "@/router";
import {store} from "@/store";
import '@/plugins';
import {i18n} from "@/i18n";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
    i18n
}).$mount('#app')
