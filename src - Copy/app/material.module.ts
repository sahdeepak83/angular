import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatFormFieldModule,MatProgressSpinnerModule, MatCardModule, MatNativeDateModule, MatSlider, MatSliderModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [],
  exports: [MatButtonModule, MatToolbarModule,MatInputModule,MatFormFieldModule,MatProgressSpinnerModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,MatSliderModule],
})
export class MaterialModule { }