import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-search-pet',
  templateUrl: './search-pet.component.html',
  styleUrls: ['./search-pet.component.css']
})
export class SearchPetComponent implements OnInit {

  name: string;

  pets: Pet[];

  p: Number=1;
  count: Number = 3;

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void { 
    this.name = "";
  }

  submitted = false;
  searchPets(){
    this.pets = [];
    this.petService.getPetByName(this.name)
    .subscribe(
      data => {
        this.pets = data;
        console.log(this.pets);
        this.submitted = true;
      }
    );
  }

  onbutton(pet: Pet): void{
    console.log("into edit");
    localStorage.setItem("pid",pet.pid.toString());
    this.router.navigate(["edit"]);
  }
  

  onSubmit(){
    this.searchPets();
  }

}
