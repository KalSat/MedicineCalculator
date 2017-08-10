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

    public static findMedicineByName(name: string): Promise<Medicine[]> {
        const medicineList = DataStore.self.medicineRepo.getMedicineList();

        return new Promise<Medicine[]>((resolve, reject) => {
            if (name == null) {
                reject("illegal argument");
            }
            const resultList: Medicine[] = [];
            for (const medicine of medicineList) {
                if (medicine.name.includes(name)) {
                    resultList.push(medicine);
                }
            }
            resolve(resultList);
        })
    }

}
