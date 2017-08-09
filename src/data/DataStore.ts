/**
 * Created by chengbiao on 17/8/8.
 */

import {Medicine} from './entities/Medicine';
import MedicineRepository from './MedicineRepository';

export default class DataStore {

    private static self: DataStore = new DataStore();

    private medicineRepo: MedicineRepository;

    // noinspection JSUnusedLocalSymbols
    private constructor() {
        this.medicineRepo = new MedicineRepository();
    }

    public static findMedicineByName(name: string): Medicine[] {
        const medicineList = DataStore.self.medicineRepo.getMedicineList();
        const resultList: Medicine[] = [];
        for (const medicine of medicineList) {
            if (medicine.name.includes(name)) {
                resultList.push(medicine);
            }
        }
        return resultList;
    }

}
