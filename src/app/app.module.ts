import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';

import {AppComponent } from './app.component';
import {TopicListComponent} from './topic-list/topic-list.component';

import {TopicService} from './topic.service';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [
    TopicService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
