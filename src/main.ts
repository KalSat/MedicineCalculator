/**
 * Created by chengbiao on 17/6/19.
 */

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-carbon.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import './baseStyle.css';
import {Medicine} from './model/Medicine';
import AddMedicine from './pages/AddMedicine.vue';
import Home from './pages/Home.vue';

Vue.use(MuseUI);
Vue.use(VueRouter);
Vue.use(Vuex);

export const ADD_MEDICINE = 'addMedicine';
export const DELETE_MEDICINE = 'deleteMedicine';

// tslint:disable-next-line no-unused-expression
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
            component: AddMedicine,
        }, {
            path: '*',
            redirect: '/home',
        }],
    }),
    store: new Vuex.Store({
        state: {
            medicineList: [] as Medicine[],
        },
        mutations: {
            [ADD_MEDICINE](state: any, payload: Medicine) {
                state.medicineList.push(payload);
            },
            [DELETE_MEDICINE](state: any, index: number) {
                state.medicineList.splice(index, 1);
            },
        },
    }),
});
