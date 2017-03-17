import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

// Theme
import { ENV } from './../../environments/env';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ENV.THEME,
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
