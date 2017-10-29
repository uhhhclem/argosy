import { Component, OnInit } from '@angular/core';
import { TopicService, Topic } from '../topic.service'; 

@Component({
  selector: 'topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
  providers: [ TopicService ]
})
export class TopicListComponent implements OnInit {
  topics: Topic[];
  constructor(private topicService: TopicService) { 
    this.topics = topicService.getTopics(1);
  } 

  ngOnInit() { 
  }  
}
