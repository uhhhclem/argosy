import { Injectable } from '@angular/core';
import { UserService, User } from './user.service';

const p1: string = 'Duis iaculis elit at elementum ultricies. Sed sapien risus, tempor eget lectus eleifend, congue gravida odio. Sed quis diam cursus, fringilla dolor ut, cursus sem. Nulla sed vulputate nibh. Quisque ut tellus non augue congue ultrices sed accumsan neque. Quisque dignissim hendrerit commodo. Sed arcu urna, auctor sed lorem sit amet, auctor aliquam nisi. Proin sed ligula lacinia, gravida lacus eget, porttitor eros. Duis bibendum odio nibh, non maximus velit efficitur et. Cras orci eros, interdum id nulla id, auctor auctor mauris. Nullam ac est eleifend, vulputate ipsum eu, finibus augue. Quisque dignissim venenatis purus, quis mollis sapien efficitur ut. Nunc vehicula metus faucibus, semper lacus eget, condimentum dui. Nullam non imperdiet purus.';
const p2: string = 'Vitae iudico mei at, eu vel falli audiam, et sea nostrud iudicabit. Gloriatur efficiantur mea ei, mei ne odio ancillae. Eu assum adipisci mea, duo alii blandit menandri an, eum ad debet commune vivendum. Eam ea fugit munere postulant, fugit dicit soluta at vim, has ut ipsum laoreet. Et usu oporteat facilisis accommodare, erant possim ne vim. Purto impetus et eam. Eos novum eripuit honestatis ne, ut mel atqui munere.';
const p3: string = 'Sea te dicat saepe causae, ne simul mollis per. Eam sanctus labores deterruisset ea. Movet nonumy usu id, autem ceteros periculis ei vix, qui ei mazim soluta iriure. Sit lorem fugit assum cu, animal quaestio vis ad. In nisl consul quo, eleifend intellegat has ut.';

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

const POSTS: Post[] = [
    new Post(p1, new Date(2017, 3, 11), 0),
    new Post(p2, new Date(2017, 4, 11), 1),
    new Post(p3, new Date(2017, 5, 11), 0)
]

@Injectable()
export class PostService {

  constructor(private userService: UserService) { }

  getPosts(topicID: number): Post[] {
      for (let p of POSTS) {
          if (!p.createdBy) {
            p.createdBy = this.userService.getUser(p.createdByUserID);
          }
      }
      return POSTS;
  }
}

