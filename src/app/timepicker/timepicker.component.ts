import {Component} from '@angular/core';

/**
 * @title Basic DateTime Picker
 */
@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class AppTimepicker {
  public selectedMoment = new Date();
}
