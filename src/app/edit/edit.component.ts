import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private petService: PetService, private router: Router) { }

  pet : Pet = new Pet();
  submitted = false;
  check : any;
  cid : number;


  ngOnInit(): void {
  }

  editPet(){
    let pid = localStorage.getItem("pid");
    let userid = sessionStorage.getItem('uid');
    this.cid = +userid;
    this.petService.getPet(+pid,this.cid)
    .subscribe(
      data => {
        this.submitted=true;
        this.pet = data;
      }
    );
  }

  okbutton(){
    this.router.navigate(['view']);
  }

  cancel(){
    this.router.navigate(['view']);
  }

}
