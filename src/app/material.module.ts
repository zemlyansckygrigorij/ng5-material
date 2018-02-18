import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [



    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatMenuModule

  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatMenuModule

  ],
})
export class MaterialModule { }
//  timepicker.component
