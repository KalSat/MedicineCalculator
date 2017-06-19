/**
 * Created by chengbiao on 17/6/19.
 */

import Vue from "vue";
import MuseUI from "muse-ui";
import App from "./containers/App.vue";
import "muse-ui/dist/muse-ui.css";
import "muse-ui/dist/theme-carbon.css";

Vue.use(MuseUI)

new Vue({
    el: '#root',
    render: h => h(App)
});
