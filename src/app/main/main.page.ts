import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, StorageService } from '../core/storage/storage.service';

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
  public correction: number;
  public total: number;

  constructor(public storage: StorageService, private router: Router) {}

  ngOnInit() {}

  calcBolus() {
    if (this.coef && this.carbohydrates) {
      this.bolus = (this.carbohydrates * this.coef) / 10;
    } else {
      this.bolus = undefined;
    }
    this.calcTotal();
  }

  async calcCorrection() {
    if (this.bloodSugar && this.storage.sensitivityIndex) {
      this.storage.set('sensitivityIndex', this.storage.sensitivityIndex);
      let bloodSugarTarget = 120;
      let ratio = 100;
      if (this.storage.bloodGlucoseUnits === 'gl') {
        bloodSugarTarget = bloodSugarTarget / 100;
        ratio = 1;
      }
      if (this.bloodSugar > bloodSugarTarget) {
        this.correction =
          (this.bloodSugar - bloodSugarTarget) /
          ratio /
          this.storage.sensitivityIndex;
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
    this.router.navigate(['/settings']);
  }
}
