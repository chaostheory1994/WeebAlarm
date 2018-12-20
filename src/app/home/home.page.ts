import { Component } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { DateProvider } from '../common/date.provider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private _timerService: TimerService, private _dateProvider: DateProvider){}

  set alarmDate(date: Date){
    this._timerService.AlarmAt = new Date(date);
  }

  get alarmDate() : Date {
    return this._timerService.AlarmAt;
  }

  get currentDate() : Date {
    return this._dateProvider.now;
  }
}
