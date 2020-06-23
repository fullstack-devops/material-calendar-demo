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
  singleOrMulti = 'multi'

  monthsAfterBefore = Array(11).fill(0).map((x, i) => i);
  monthsBefore = 0;
  monthsAfter = 0;

  calendarConfig: CalendarConfig = {
    panelBgColor: '#00677f', // 00677f 006105
    autoTextColor: true,
    textColor: '#fff',
    useHolidays: false,
    holidayColor: 'rgb(253, 173, 0)',
    holidayTextColor: 'rgb(253, 173, 0)',
    displayYear: true,
    firstDayOfWeekMonday: true,
    calendarWeek: true,
    todayColor: '#fff',
    panelWidth: '90%',
    switches: true,
  }

  ngOnInit() {
  }

  switchMode() {
    this.mode = (this.mode === 'monthly') ? 'annual' : 'monthly'
  }
}
