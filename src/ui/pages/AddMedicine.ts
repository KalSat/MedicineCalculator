/**
 * Created by chengbiao on 17/7/6.
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import DataStore from '../../data/DataStore';
import {Medicine} from '../../data/entities/Medicine';
import {ADD_MEDICINE} from '../main';

@Component
export default class AddMedicine extends Vue {

    // data
    private name: string = '';
    private count: number | null = null;
    private price: number | null = null;
    private medicineNameList: string[] = [];
    private filteredMedicineList: Medicine[] = [];

    // method
    //noinspection JSUnusedLocalSymbols
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
        this.filteredMedicineList = DataStore.findMedicineByName(val);

        this.medicineNameList.splice(0, this.medicineNameList.length);
        for (const medicine of this.filteredMedicineList) {
            this.medicineNameList.push(medicine.name);
        }
    }

    //noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    private handleChange(val: string) {
        const index = this.medicineNameList.indexOf(val);
        this.price = this.filteredMedicineList[index].price;
    }
}
