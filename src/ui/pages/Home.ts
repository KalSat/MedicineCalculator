/**
 * Created by chengbiao on 17/7/6.
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import {Medicine} from '../../data/entities/Medicine';

@Component({
    components: {},
})
export default class Home extends Vue {

    // computed
    get medicineList(): Medicine[] {
        return this.$store.state.medicineList;
    }

    get totalPrice(): number {
        let total = 0;
        const list: Medicine[] = this.medicineList;
        if (list != null) {
            for (const medicine of list) {
                total += medicine.price * medicine.count / 10;
            }
        }
        return total;
    }
}
