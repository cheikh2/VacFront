import { Enfant } from './../../models/enfant';
import { Router } from '@angular/router';
import { EnfantService } from './../../services/enfant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-enfant',
  templateUrl: './liste-enfant.component.html',
  styleUrls: ['./liste-enfant.component.scss']
})
export class ListeEnfantComponent implements OnInit {
  enfants;
  enfant:Enfant[];
  constructor(private enfantService:EnfantService, private router:Router) { }

  ngOnInit() {

    if(!localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return; 
    }

    this.onEnfants();
  }

  onEnfants(){
    this.enfantService.getEnfants().subscribe(
      data=>{
        this.enfants=data["hydra:member"]
        },
        error=>{
          console.log(error);
        }
    )

  }
  editEnfant(enfant:Enfant): void{
    localStorage.removeItem("editEnfantId");
    localStorage.setItem("editEnfantId", enfant.id.toString());
    this.router.navigate(['edit-enfant']);
  };


}
