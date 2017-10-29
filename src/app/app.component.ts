import { Component } from '@angular/core';

import {TopicService} from './topic.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopicService, UserService]
})

export class AppComponent {
  title = 'app';
}
