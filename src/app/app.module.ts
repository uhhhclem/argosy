import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    MatIconModule,
    MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {TopicListComponent} from './topic-list/topic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
