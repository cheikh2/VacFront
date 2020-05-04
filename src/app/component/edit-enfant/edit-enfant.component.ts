import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { EnfantService } from './../../services/enfant.service';
import { Enfant } from './../../models/enfant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-enfant',
  templateUrl: './edit-enfant.component.html',
  styleUrls: ['./edit-enfant.component.scss']
})
export class EditEnfantComponent implements OnInit {
  editForm: FormGroup;
  enfant;
  constructor(private enfantService:EnfantService, private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    let enfantId = localStorage.getItem("editEnfantId");
    if(!enfantId) {
      alert("Invalid action.")
      this.router.navigate(['liste-enfant']);
      return;
  }
  this.editForm = this.formBuilder.group({
      id: [''],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      sexe: ['', Validators.required],
      prenommere: ['', Validators.required],
      nommere: ['', Validators.required],
      adress: ['', Validators.required],
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
    this.enfantService.getEnfantById(+enfantId)
      .subscribe(data => {
        this.enfant = data;
      });
}

onEditEnfant() {
        this.enfantService.putEnfant(this.editForm.value)
        .subscribe(
          data => {
              alert('Enfant updated successfully.');
              this.router.navigate(['liste-enfant']);
          },
          error=>{
              console.log(error);
            });

}
}

