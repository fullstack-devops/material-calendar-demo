import { Component, OnInit } from '@angular/core';
import { CalendarConfig } from 'material-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Material Calendar Demo';

  placeholder = false // boolean
  mode = 'monthly' // 'annual' | 'monthly'

  monthsAfterBefore = Array(11).fill(0).map((x, i) => i);
  monthsBefore = 0;
  monthsAfter = 0;

  calendarConfig: CalendarConfig = {
    panelBgColor: '#ffffff',
    autoTextColor: true,
    textColor: '#fff',
    useHolidays: false,
    holidayColor: 'rgb(253, 173, 0)',
    holidayTextColor: 'rgb(253, 173, 0)',
    displayYear: true,
    firstDayOfWeekMonday: true,
    calendarWeek: true,
    todayColor: '#000000',
    panelWidth: '90%',
    switches: true,
  }

  constructor() {
  }

  ngOnInit() {
  }

  testMethod(event: any) {
    console.log(event)
  }

  switchMode() {
    this.mode = (this.mode === 'monthly') ? 'annual' : 'monthly'
  }
}
