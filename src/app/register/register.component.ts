import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../password.validator';
import { PetService } from '../pet.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  userModal:User = new User();
  error1: string;  
   
  verify: any;
  
  onSubmit() {  
    console.log(this.userModal);
    this.save(); 
  } 
  

  save(){
    this.verify="inside save";
    this.userService.createUser(this.userModal)
    .subscribe(
      data => {
        console.log(data);
        if(data!=null){
        this.router.navigate(['success']);
        }
        else{
          this.error1 = "Username already exists";
          this.userModal = new User();
        }
      },
      error => this.error1 = "Username already exists"
    );  
  }

}
