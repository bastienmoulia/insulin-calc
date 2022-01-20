import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const bloodSugarTarget = 120;

interface Meal {
  name: string;
  coef: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public coef: number;
  public carbohydrates: number;
  public bolus: number;
  public bloodSugar: number;
  public sensitivityIndex: number;
  public correction: number;
  public total: number;
  public meals: Meal[] = [];

  constructor(private storage: Storage) {
    this.meals = [
      { name: 'Petit dejeuner', coef: 1 },
      { name: 'Dejeuner', coef: 2 },
      { name: 'Gouter', coef: 3 },
      { name: 'Diner', coef: 4 },
    ];
  }

  async ngOnInit() {
    await this.storage.create();
    this.sensitivityIndex = await this.storage.get('sensitivityIndex');
  }

  calcBolus() {
    if (this.coef && this.carbohydrates) {
      this.bolus = this.carbohydrates * this.coef / 10;
    } else {
      this.bolus = undefined;
    }
    this.calcTotal();
  }

  async calcCorrection() {
    if (this.bloodSugar && this.sensitivityIndex) {
      await this.storage.set('sensitivityIndex', this.sensitivityIndex);
      if (this.bloodSugar > bloodSugarTarget) {
        this.correction = ((this.bloodSugar - bloodSugarTarget) / 100) / this.sensitivityIndex;
      } else {
        this.correction = 0;
      }
    } else {
      this.correction = undefined;
    }
    this.calcTotal();
  }

  calcTotal() {
    if (this.bolus) {
      this.total = this.bolus;
      if (this.correction) {
        this.total += this.correction;
      }
    } else {
      this.total = undefined;
    }
  }

  selectMeal(meal: Meal) {
    this.coef = meal.coef;
    this.calcBolus();
  }

  openSettings() {
    // TODO:
  }
}
