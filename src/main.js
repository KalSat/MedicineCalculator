/**
 * Created by chengbiao on 17/6/19.
 */

import Vue from "vue";
import MuseUI from "muse-ui";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import AddMedicine from "./pages/AddMedicine.vue";
import "muse-ui/dist/muse-ui.css";
import "muse-ui/dist/theme-carbon.css";

Vue.use(MuseUI);
Vue.use(VueRouter);

new Vue({
    el: '#root',
    template: '<router-view/>',
    router: new VueRouter({
        routes: [{
            path: '/home',
            component: Home,
        }, {
            name: 'add-medicine',
            path: '/add-medicine',
            component: AddMedicine
        }, {
            path: '*',
            redirect: '/home'
        }]
    }),
});