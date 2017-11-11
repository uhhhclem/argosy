import { NgModule } from '@angular/core';

import {
  MatListModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
})
export class MaterialModule {}