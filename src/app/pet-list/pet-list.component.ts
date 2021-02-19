import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Observable<Pet[]>;

  p: Number = 1;
  count: Number = 5;

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.pets = this.petService.getPetsList();
  }

  onbutton(pet: Pet): void{
    console.log("into edit");
    localStorage.setItem("pid",pet.pid.toString());
    this.router.navigate(["edit"]);
  }

}
