import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainModule } from 'process';
import {MaincontentComponent} from '../admin/maincontent/maincontent.component';
import {SubmitappComponent} from '../admin/submitapp/submitapp.component';
const routes: Routes = [
  {
    path:'',
    component:MaincontentComponent
  },{
    path:'submit-app',
    component:SubmitappComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
