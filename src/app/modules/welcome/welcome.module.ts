import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

// AdminLTE Shell
import { AdminLTEShellModule as Shell } from './../../shells/adminLTE/admin-lte.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    Shell,
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
