import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DefaultComponent } from './layout/default/default.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './authentification/login/login.component';
import { AuthServiceService } from './authentification/auth-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivateGuard } from './activate.guard';
import { RegistreComponent } from './component/registre/registre.component';
import { JwtinterceptorService } from './helpers/jwtinterceptor.service';
import { ListeEnfantComponent } from './component/liste-enfant/liste-enfant.component';
import { AddEnfantComponent } from './component/add-enfant/add-enfant.component';
import { EditEnfantComponent } from './component/edit-enfant/edit-enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DefaultComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegistreComponent,
    ListeEnfantComponent,
    AddEnfantComponent,
    EditEnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
 // providers: [AuthServiceService, ActivateGuard],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
