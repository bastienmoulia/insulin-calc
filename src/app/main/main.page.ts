import { Component, OnInit } from '@angular/core';

const bloodSugarTarget = 120;

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

  constructor() {
  }

  ngOnInit() {
  }

  openSettings() {
    console.log('open');
  }

  calcBolus() {
    if (this.coef && this.carbohydrates) {
      const bolus = this.carbohydrates * this.coef / 10;
      this.bolus = Math.round(bolus * 10) / 10;
    } else {
      this.bolus = undefined;
    }
    this.calcTotal();
  }

  calcCorrection() {
    if (this.bloodSugar && this.sensitivityIndex) {
      if (this.bloodSugar > bloodSugarTarget) {
        const correction = ((this.bloodSugar - bloodSugarTarget) / 100) / this.sensitivityIndex;
        this.correction = Math.round(correction * 10) / 10;
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
      if(this.correction) {
        this.total += this.correction;
      }
    } else {
      this.total = undefined;
    }
  }
}
