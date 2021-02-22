import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MypetComponent } from './mypet/mypet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { RegisterComponent } from './register/register.component';
import { SearchPetComponent } from './search-pet/search-pet.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'add', component:CreatePetComponent},
  {path:'view',component:PetListComponent, canActivate:[AuthguardService]},
  {path:'find', component:SearchPetComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent, canActivate:[AuthguardService]},
  {path:'edit', component:EditComponent},
  {path:'mypet',component:MypetComponent},
  {path:'register',component:RegisterComponent},
  {path:'success',component:SuccessComponent},
  {path:'', redirectTo:'view', pathMatch:'full'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
