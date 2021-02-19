import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { User } from '../user';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private petService : PetService) { }

  ngOnInit(): void {
  }

  onClick(){
    
    this.router.navigate(['login']);
  }

}
