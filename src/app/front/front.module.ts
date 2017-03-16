import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
// Theme
import { AdminLTEShellModule as Theme } from './../adminLTE/admin-lte.module';
// Routing
import { FrontRoutingModule } from './front-routing.module';
// Component
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule.forRoot(),
    FrontRoutingModule,
    Theme,
  ],
  declarations: [LandingPageComponent]
})
export class FrontModule { }
