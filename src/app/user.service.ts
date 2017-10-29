import { Injectable } from '@angular/core';

export class User {
  nickname: string;
  avatarPath: string;
}

const USERS: User[] = [
    {nickname: 'someguyontheinternet', avatarPath: ''},
    {nickname: 'anotherguy', avatarPath: ''}
];

@Injectable()
export class UserService {

  constructor() { }

  getUser(userID: number): User {
      return USERS[userID];
  } 
 
}
