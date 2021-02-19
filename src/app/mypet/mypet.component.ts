import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-mypet',
  templateUrl: './mypet.component.html',
  styleUrls: ['./mypet.component.css']
})
export class MypetComponent implements OnInit {

  constructor(private petService: PetService, private router: Router) { }

  pets: Observable<Pet[]>;
  cid: number;

  p: Number = 1;
  count: Number = 5;
  
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    let userId = sessionStorage.getItem('uid');
    this.cid = +userId;
    this.pets = this.petService.getOwnedPets(this.cid);
  }

}
