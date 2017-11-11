import { NgModule } from '@angular/core';

import {
  MatListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatListModule,
    MatIconModule
  ],
})
export class MaterialModule {}