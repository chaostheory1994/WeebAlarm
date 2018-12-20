import { WeekDay } from "@angular/common";

const NextDayMap: Map<WeekDay, WeekDay> = new Map<WeekDay, WeekDay>();

NextDayMap.set(WeekDay.Monday, WeekDay.Tuesday);
NextDayMap.set(WeekDay.Tuesday, WeekDay.Wednesday);
NextDayMap.set(WeekDay.Wednesday, WeekDay.Thursday);
NextDayMap.set(WeekDay.Thursday, WeekDay.Friday);
NextDayMap.set(WeekDay.Friday, WeekDay.Saturday);
NextDayMap.set(WeekDay.Saturday, WeekDay.Sunday);
NextDayMap.set(WeekDay.Sunday, WeekDay.Monday);

export default NextDayMap;