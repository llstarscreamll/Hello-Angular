import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

// Theme
import { getTheme } from './../theme';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    getTheme(),
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
