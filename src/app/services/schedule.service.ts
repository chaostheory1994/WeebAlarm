import { Injectable } from "@angular/core";
import { WeekDay, Time } from "@angular/common";
import { TimerService } from "./timer.service";
import { DateProvider } from "../common/date.provider";
import NextDayMap from "../constants/nextDayMap";

@Injectable()
export class ScheduleService
{
    private _schedule: Map<WeekDay, Date>;

    constructor(private _timerService: TimerService, private _dateProvider: DateProvider)
    {
        this.initializeSchedule();
        _timerService.AlarmAt
    }

    private initializeSchedule()
    {
        this._schedule.set(WeekDay.Monday, null);
        this._schedule.set(WeekDay.Tuesday, null);
        this._schedule.set(WeekDay.Wednesday, null);
        this._schedule.set(WeekDay.Thursday, null);
        this._schedule.set(WeekDay.Friday, null);
        this._schedule.set(WeekDay.Saturday, null);
        this._schedule.set(WeekDay.Sunday, null);
    }

    private getNextDay(day: WeekDay) : WeekDay
    {
        const now = this._dateProvider.now;

        let nextDay = NextDayMap.get(now.getDate());
        while(this._schedule.get(nextDay) === null ||  now.getDate() !== nextDay) nextDay = NextDayMap.get(nextDay);

        return nextDay;
    }

    private buildDateTime(date: Date, time: Date) : Date
    {
        const ret = new Date();
        ret.setDate(date.getDate());
        ret.setTime(time.getTime());
        return ret;
    }

    disableDay(day: WeekDay)
    {
        this._schedule[day] = null;
    }

    setDay(day: WeekDay, time: Date)
    {
        this._schedule.set(day, new Date(time));
    }

    getDay(day: WeekDay): Date 
    {
        return this._schedule.get(day);
    }
}