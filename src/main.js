/**
 * Created by chengbiao on 17/6/19.
 */

import Vue from "vue";
import MuseUI from "muse-ui";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Home from "./pages/Home.vue";
import AddMedicine from "./pages/AddMedicine.vue";
import "muse-ui/dist/muse-ui.css";
import "muse-ui/dist/theme-carbon.css";
import "./baseStyle.css";

Vue.use(MuseUI);
Vue.use(VueRouter);
Vue.use(Vuex);

export const ADD_MEDICINE = 'addMedicine';
export const DELETE_MEDICINE = 'deleteMedicine';

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
    store: new Vuex.Store({
        store: {
            medicineList: [],
        },
        mutations: {
            [ADD_MEDICINE](state, payload) {
                let medicine;
                medicine.name = payload.name;
                medicine.num = payload.num;
                medicine.price = payload.price;
                state.medicineList.push(medicine);
            },
            [DELETE_MEDICINE](state, index) {
                state.medicineList.splice(index, 1);
            },
        },
    }),
});