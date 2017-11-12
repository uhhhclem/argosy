import { Component, OnInit } from '@angular/core';
import { TopicService, Topic } from '../topic.service'; 
import { PostService, Post } from '../post.service';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'argosy-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService ) {
    this.posts = postService.getPosts(1);
  }

  ngOnInit() {
  }

}
