/**
 * Created by chengbiao on 17/7/6.
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import Hello from '../components/Hello.vue';
import {Medicine} from '../model/Medicine';

@Component({
    components: {
        Hello,
    },
})
export default //noinspection JSUnusedGlobalSymbols
class Home extends Vue {

    // computed
    get medicineList(): Medicine[] {
        return this.$store.state.medicineList;
    }

}
