import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

// Shell Theme
import { InspiniaShellModule as Shell } from './../inspinia/inspinia.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    Shell,
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
