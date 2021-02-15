import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent} from './admin/home/home.component';
import {ChatlogsComponent} from './admin/chatlogs/chatlogs.component';
import {SubmitappComponent} from './admin/submitapp/submitapp.component';
import {AdminComponent} from '../app/admin/admin.component'
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'admin',
  component: AdminComponent,
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
