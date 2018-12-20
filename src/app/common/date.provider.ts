import { Injectable } from "@angular/core";

@Injectable()
export class DateProvider {
    get now(): Date {
        return new Date();
    }
}