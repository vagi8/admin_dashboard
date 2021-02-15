import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ChatlogsComponent } from '../admin/chatlogs/chatlogs.component';
import { HomeComponent } from '../admin/home/home.component';
import { SubmitappComponent } from '../admin/submitapp/submitapp.component';
import { SidenavComponent } from '../admin/sidenav/sidenav.component';
import { HeaderComponent } from '../admin/header/header.component';
import { MaincontentComponent } from '../admin/maincontent/maincontent.component';

@NgModule({
  declarations: [
    AdminComponent,
    ChatlogsComponent,
    HomeComponent,
    SubmitappComponent,
    SidenavComponent,
    HeaderComponent,
    MaincontentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
