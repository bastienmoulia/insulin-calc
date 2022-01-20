import { Component, OnInit } from '@angular/core';
import { StorageService } from '../core/storage/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(public storage: StorageService) {}

  ngOnInit() {}

  async bloodGlucoseUnitsChange() {
    await this.storage.set('bloodGlucoseUnits', this.storage.bloodGlucoseUnits);
  }

  async insulinUnitsAccuracyChange() {
    await this.storage.set(
      'insulinUnitsAccuracy',
      this.storage.insulinUnitsAccuracy
    );
  }

  addMeal() {
    this.storage.meals.push({ name: 'Repas', coef: 1 });
    this.saveMeals();
  }

  deleteMeal(index: number) {
    this.storage.meals.splice(index, 1);
    this.saveMeals();
  }

  async saveMeals() {
    await this.storage.set('meals', this.storage.meals);
  }
}
