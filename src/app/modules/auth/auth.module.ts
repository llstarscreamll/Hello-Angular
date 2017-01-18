import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// AdminLTE Shell
import { AdminLTEShellModule as Shell } from './../../shells/adminLTE/admin-lte.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    Shell,
    AuthRoutingModule
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule { }
