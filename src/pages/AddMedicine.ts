/**
 * Created by chengbiao on 17/7/6.
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import {ADD_MEDICINE} from '../main';
import medicineTable from '../medicineTable.json';
import {Medicine} from '../model/Medicine';

@Component
export default //noinspection JSUnusedGlobalSymbols
class AddMedicine extends Vue {

    // data
    private name: string = '';
    private count: number | null = null;
    private price: number | null = null;
    private medicineList: Medicine[] = medicineTable;
    private medicineNameList: string[] = [];
    private medicinePriceList: number[] = [];

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
        this.medicineNameList.splice(0, this.medicineNameList.length);
        this.medicinePriceList.splice(0, this.medicinePriceList.length);

        for (const medicine of this.medicineList) {
            if (medicine.name.indexOf(val) !== -1) {
                this.medicineNameList.push(medicine.name);
                this.medicinePriceList.push(medicine.price);
            }
        }
    }

    //noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    private handleChange(val: string) {
        const index = this.medicineNameList.indexOf(val);
        this.price = this.medicinePriceList[index];
    }
}
