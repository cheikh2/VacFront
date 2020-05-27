import { EditEnfantComponent } from './component/edit-enfant/edit-enfant.component';
import { ListeEnfantComponent } from './component/liste-enfant/liste-enfant.component';
import { AddEnfantComponent } from './component/add-enfant/add-enfant.component';
import { DefaultComponent } from './layout/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './authentification/login/login.component';
import { ActivateGuard } from './activate.guard';



const routes: Routes = [
  {path:'', component:DefaultComponent,
children:[
  {path:'dashboard', component:DashboardComponent, canActivate: [ActivateGuard]},
  {path:'login', component:LoginComponent},
  {path:'liste-enfant', component:ListeEnfantComponent},
  {path:'add-enfant', component:AddEnfantComponent},
  {path:'edit-enfant', component:EditEnfantComponent}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
