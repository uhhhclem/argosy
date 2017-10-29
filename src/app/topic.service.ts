import { Injectable } from '@angular/core';
import { UserService, User } from './user.service';

export class Topic {
  title: string;
  createdAt: Date;
  createdByUserID: number;
  createdBy: User;
  constructor(t: string, c: Date, u: number) { 
    this.title = t;
    this.createdAt = c;
    this.createdByUserID = u;
  }
  
}

const TOPICS: Topic[] = [
  new Topic("first test topic", new Date(2017, 1, 14), 0),
  new Topic("second test topic", new Date(2017, 1, 14), 1),
];

@Injectable()
export class TopicService {
    constructor(private userService: UserService) { }
    getTopics(confID: number): Topic[] { 
      for (let t of TOPICS) {
        if (!t.createdBy) {
          t.createdBy = this.userService.getUser(t.createdByUserID);
        }
      }
      return TOPICS; 
    } 
} 
