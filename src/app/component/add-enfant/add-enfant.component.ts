import { Enfant } from './../../models/enfant';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EnfantService } from './../../services/enfant.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-enfant',
  templateUrl: './add-enfant.component.html',
  styleUrls: ['./add-enfant.component.scss']
})
export class AddEnfantComponent implements OnInit {
  addForm:FormGroup;
  enfants;
  constructor(private enfantService:EnfantService, private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      sexe: ['', Validators.required],
      prenommere: ['', Validators.required],
      nommere: ['', Validators.required],
      adresse: ['', Validators.required],
      numetatcivil: ['', Validators.required],
      telmere: ['', Validators.required],
      datenaissance: ['', Validators.required],
      numordre: ['', Validators.required],
      nomchefquartier: ['', Validators.required],
      prenomchefquartier: ['', Validators.required],
      telchefquartier: ['', Validators.required],
      telbadiennegokh: ['', Validators.required],
      etatentree: ['', Validators.required],
      etatsortie: ['', Validators.required],
      motifsortie: ['', Validators.required],
      prenombadienegokh: ['', Validators.required],
      nombadienegokh: ['', Validators.required],

    });
  }

  onSaveEnfant(){
          this.enfantService.postEnfants(this.addForm.value)
          .subscribe(
        data=>{
          alert(JSON.stringify(data));
            localStorage.setItem("token",data.token);
            this.router.navigate(['liste-enfant']);
              },
             error=>{
              console.log(error);
            }
  )

}

}
