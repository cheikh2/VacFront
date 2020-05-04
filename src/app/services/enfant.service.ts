import { Enfant } from './../models/enfant';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  enfant:Enfant;


  constructor(private http: HttpClient) { }

  getEnfants(){
    return this.http.get<Enfant[]>(`${environment.apiUrl}/api/enfants`);

  }

  getEnfantById(id: number) {
    return this.http.get<Enfant>(`${environment.apiUrl}/api/enfants/${id}`);
  }


  postEnfants(enfant:Enfant){
    return this.http.post<Enfant>(`${environment.apiUrl}/api/enfants`,enfant);
  }


  putEnfant(enfant:Enfant) {
    return this.http.put<Enfant>(`${environment.apiUrl}/api/enfants/${enfant.id}`, enfant);
  }
}