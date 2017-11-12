import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';

import {TopicService} from './topic.service';
import {UserService} from './user.service';
import {PostService} from './post.service';

import {AppComponent} from './app.component';
import {TopicListComponent} from './topic-list/topic-list.component';
import {PostComponent} from './post/post.component';
import {TopicComponent} from './topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    PostComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [
    TopicService,
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
