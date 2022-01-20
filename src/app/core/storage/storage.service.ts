import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Meal {
  name: string;
  coef: number;
}

const bloodGlucoseUnitsDefault = 'mgdl';
const insulinUnitsAccuracyDefault = '1';
const mealsDefault = [];

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public sensitivityIndex: number;
  public bloodGlucoseUnits: 'mgdl' | 'gl' = bloodGlucoseUnitsDefault;
  public insulinUnitsAccuracy: '0' | '1' | '2' = insulinUnitsAccuracyDefault;
  public meals: Meal[] = mealsDefault;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.sensitivityIndex = await this.storage.get('sensitivityIndex');

    this.storage.get('bloodGlucoseUnits').then((bloodGlucoseUnits) => {
      this.bloodGlucoseUnits = bloodGlucoseUnits || bloodGlucoseUnitsDefault;
    });
    this.storage.get('insulinUnitsAccuracy').then((insulinUnitsAccuracy) => {
      this.insulinUnitsAccuracy =
        insulinUnitsAccuracy || insulinUnitsAccuracyDefault;
    });
    this.storage.get('meals').then((meals) => {
      this.meals = meals || mealsDefault;
    });
  }

  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }
}
