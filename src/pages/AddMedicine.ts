/**
 * Created by chengbiao on 17/7/6.
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import {ADD_MEDICINE} from '../main';

@Component
export default //noinspection JSUnusedGlobalSymbols
class AddMedicine extends Vue {

    // data
    private dataSource: string[] = [];
    private name: string = '';
    private count: number | null = null;
    private price: number | null = null;

    // method
    private back() {
        this.$router.back();
    }

    //noinspection JSUnusedLocalSymbols
    private commit() {
        if (this.count == null || this.price == null) {
            return;
        }

        this.price = parseFloat(this.price.toFixed(2));
        this.$store.commit(ADD_MEDICINE, {
            name: this.name as string,
            count: this.count as number,
            price: this.price as number,
        });
        this.$router.back();
    }

    //noinspection JSUnusedLocalSymbols
    private handleInput(val: string) {
        this.dataSource = [
            val,
            val + val,
            val + val + val,
        ];
    }

    //noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    private handleChange(val: string) {
        console.log(`you choose ${val}`);
    }
}
