import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseUrl = 'http://localhost:8080/api/pets';

  constructor(private http: HttpClient) { }

  createPet(pet:any, cid:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${cid}`,pet);
  }

  getPetsList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getPet(pid:number,cid:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${pid}/${cid}`);
  }

  getOwnedPets(cid: any):Observable<any>{
    return this.http.get(`${this.baseUrl}/owned/${cid}`);
  }

  getPetByName(name: string):Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }


}
