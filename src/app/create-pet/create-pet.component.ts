import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  pet: Pet = new Pet();
  submitted = false;
  cid: number;

  newPet(){
    this.submitted = false;
    this.pet = new Pet();
  }

  save(){
    let uid = sessionStorage.getItem('uid');
    this.cid = +uid;
    this.petService.createPet(this.pet,this.cid)
    .subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error)
    );
    this.pet = new Pet();
  }

  onSubmit(){
    this.save();
  }
}
