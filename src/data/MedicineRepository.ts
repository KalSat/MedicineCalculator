/**
 * Created by chengbiao on 17/8/8.
 */

import {Medicine} from './entities/Medicine';
import medicineTable from './medicineTable.json';

export default class MedicineRepository {

    public getMedicineList(): Medicine[] {
        return medicineTable as Medicine[];
    }

}
