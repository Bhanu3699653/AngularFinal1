import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { SearchPetComponent } from './search-pet/search-pet.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { MypetComponent } from './mypet/mypet.component';
import { SuccessComponent } from './success/success.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePetComponent,
    PetListComponent,
    SearchPetComponent,
    LoginComponent,
    LogoutComponent,
    EditComponent,
    RegisterComponent,
    MypetComponent,
    SuccessComponent,
    PasswordPatternDirective,
    MatchPasswordDirective, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
