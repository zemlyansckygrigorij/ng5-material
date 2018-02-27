import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material";


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  dateNow: Date;
  date: Date;
  constructor() {

  }
  ngOnInit(): void {

    setInterval(this.setTime(), 1000)

  }

  events: string[] = [];
 // @Input()  date = new  Date();

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {

    // this.events.push(`${type}: ${event.value}`);
    this.date = event.value;

    this.events.push(`${this.date.getHours()}:${this.date.getMinutes()}: ${this.date.getSeconds()}`);
  }

  setTime(){

    this.dateNow = new  Date();
  }
}
// steamwork.component
