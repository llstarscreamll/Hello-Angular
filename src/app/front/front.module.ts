import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// Theme
import { environment } from './../../environments/environment';
// Routing
import { FrontRoutingModule } from './front-routing.module';
// Component
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CoreSharedModule } from 'app/core/core.shared.module';

@NgModule({
  imports: [
    CoreSharedModule,
    FrontRoutingModule,
    environment.theme,
  ],
  declarations: [LandingPageComponent]
})
export class FrontModule { }
