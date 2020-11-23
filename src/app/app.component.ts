import { Component, OnInit } from '@angular/core';
import { CalendarConfig, DayC } from 'material-calendar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Material Calendar Demo';
  durationInSeconds = 5;
  isLoading = true

  placeholder = false // boolean
  singleOrMulti = 'multi'

  monthsAfterBefore = Array(11).fill(0).map((x, i) => i);
  monthsBefore = 0;
  monthsAfter = 0;

  
  calendarConfig: CalendarConfig = {
    renderMode: 'monthly', // 'annual' | 'monthly'
    selectMode: 'range',  // 'click' | 'range'
    displayYear: false,
    firstDayOfWeekMonday: true,
    calendarWeek: true,
    switches: true,
    panelWidth: '30%'
  }

  dataSource: DayC[] = [
    {
      date: 1604185200000,
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      toolTip: 'Test ToolTip',
      badgeMode: 'Icon',
      badgeInt: 5,
      badgeIcon: 'edit'
    },
    {
      date: 1604199900000,
      backgroundColor: 'blue'
    }
  ]

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isLoading = false
  }

  testMethod(event) {
    console.log(event)
  }
}
