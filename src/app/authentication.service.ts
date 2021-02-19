import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uname: string;
  userId: number;

  constructor() { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('uname');
    let uid = sessionStorage.getItem('uid');
    this.uname = user;
    this.userId = +uid;
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('uname');
    sessionStorage.removeItem('uid');
  }

}
