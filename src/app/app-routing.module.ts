import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {RegistrationComponent} from './registration/registration.component';
import {VisicretaComponent} from './visicreta/visicreta.component';
import {CreateTaskCompletedCallback} from '@angular/compiler-cli/ngcc/src/execution/tasks/api';
import {CretaComponent} from './creta/creta.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [

  {path: '', component: MainPageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'visitcreta', component: VisicretaComponent},
  {path: 'creta', component: CretaComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
