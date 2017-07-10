/**
 * Created by chengbiao on 17/7/6.
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import {ADD_MEDICINE} from '../main';

@Component
export default class AddMedicine extends Vue {

    // data
    private dataSource: string[] = [];
    private name: string = '';
    private count: number | null = null;
    private price: number | null = null;

    // method
    private back() {
        this.$router.back();
    }

    private commit() {
        const medicine: any = [];
        medicine.name = name;
        medicine.count = this.count;
        medicine.price = this.price;

        this.$store.commit(ADD_MEDICINE, {
            name: this.name,
            count: this.count,
            price: this.price,
        });
        this.$router.back();
    }

    private handleInput(val: string) {
        this.dataSource = [
            val,
            val + val,
            val + val + val,
        ];
    }

    private handleChange(val: string) {
        console.log(`you choose ${val}`);
    }
}
