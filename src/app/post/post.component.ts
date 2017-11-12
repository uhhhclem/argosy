import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.service';
import { Post } from '../post.service';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'argosy-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  ngOnInit() {
  }

}
