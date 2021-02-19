import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  user: User = new User();

  error1: any;

  error2: any;

  checkLogin() {
    this.userService.checkUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('uid',data.uid);
          sessionStorage.setItem('uname',data.username);
          if(data == null){
            this.error1 = "invalid username or password";
            this.router.navigate(['login']);
          }else{
            this.router.navigate(['view']);
          }
        },
        error =>  this.error2 = error
      );
      if(this.error2==null){
        this.error1 = "invalid username and password";
      }
  }

  register() {
    this.router.navigate(['register']);
  }



}
