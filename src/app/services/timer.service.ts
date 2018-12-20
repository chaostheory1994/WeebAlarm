import { interval, Observable } from "rxjs";
import { DateProvider } from "../common/date.provider";
import { Injectable } from "@angular/core";

@Injectable()
export class TimerService 
{
    private _interval: Observable<number>;
    private _alarmAt: Date;

    constructor(private _dateProvider: DateProvider){
        this._interval = interval(1000);
        this._interval.subscribe((value) => this.tick());
    }

    set AlarmAt(date: Date)
    {
        this._alarmAt = date;
    }

    get AlarmAt() : Date
    {
        return this._alarmAt;
    }

    tick(): void{
        if(this._alarmAt <= this._dateProvider.now)
            console.log('ALARM!!!');
    }
}