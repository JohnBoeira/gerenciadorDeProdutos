import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarsComponent } from './stars.component';

@NgModule({
  declarations: [
    StarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarsComponent
  ]
})
export class SharedModule { }
