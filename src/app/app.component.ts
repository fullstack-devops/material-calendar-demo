import { Component, OnInit } from '@angular/core';
import { CalendarConfig, DayC } from 'material-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Material Calendar Demo';

  placeholder = false // boolean
  isLoading = true
  latestEvent = ""
  month=5
  year=2021

  monthsAfterBefore = Array(5).fill(0).map((x, i) => i);
  monthsBefore = 1;
  monthsAfter = 1;

  calendarConfig: CalendarConfig = {
    renderMode: 'monthly', // 'annual' | 'monthly'
    selectMode: 'click',  // 'click' | 'range'
    displayYear: true,
    firstDayOfWeekMonday: true,
    calendarWeek: true,
    switches: true,
    panelWidth: '300px'
  }

  dataSource: DayC[] = [
    {
      date: 1624312800000,
      backgroundColor: '#0167c7',
      toolTip: 'Test ToolTip',
      badgeMode: 'Icon',
      badgeInt: 5,
      badgeIcon: 'edit'
    },
    {
      date: 1624312800000,
      backgroundColor: 'rgb(6, 182, 0)',
      toolTip: 'Test ToolTip',
      badgeMode: 'Icon',
      badgeInt: 5,
      badgeIcon: 'edit'
    },
    {
      date: 1624658400000,
      backgroundColor: 'rgb(6, 182, 0)',
      toolTip: 'Test ToolTip 2',
      /* badgeMode: 'Icon',
      badgeInt: 5,
      badgeIcon: 'edit' */
    },
    {
      date: 1604199900000,
      backgroundColor: 'blue'
    }
  ]

  constructor() {
  }

  ngOnInit() {
    console.log(this.dataSource)
    this.isLoading = false
  }

  testMethod(event: any) {
    this.latestEvent = event;
    console.log(event)
  }
}
