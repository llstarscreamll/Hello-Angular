import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

// Theme
import { environment } from './../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    environment.theme,
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
