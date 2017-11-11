import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';

import {AppComponent } from './app.component';
import {TopicListComponent} from './topic-list/topic-list.component';

import {TopicService} from './topic.service';
import {UserService} from './user.service';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    PostComponent
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
