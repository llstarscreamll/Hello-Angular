import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

// Theme
import { AdminLTEShellModule as Theme } from './../adminLTE/admin-lte.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    Theme,
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
