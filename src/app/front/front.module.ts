import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
// Theme
import { getTheme } from './../theme';
// Routing
import { FrontRoutingModule } from './front-routing.module';
// Component
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule.forRoot(),
    FrontRoutingModule,
    getTheme(),
  ],
  declarations: [LandingPageComponent]
})
export class FrontModule { }
