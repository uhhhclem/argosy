import { Component, OnInit } from '@angular/core';
import { User } from '../user.service';
import { MaterialModule } from '../material/material.module';

export class Post {
  createdAt: Date;
  createdByUserID: number;
  createdBy: User;
  content: string;
  constructor(c: string, ca: Date, u: number) { 
    this.content = c;
    this.createdAt = ca;
    this.createdByUserID = u;
  }
}

@Component({
  selector: 'argosy-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
