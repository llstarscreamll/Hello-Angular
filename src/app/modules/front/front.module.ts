import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// AdminLTE Shell
import { InspiniaShellModule as Shell } from './../../shells/inspinia/inspinia.module';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule.forRoot(),
    FrontRoutingModule,
    Shell,
  ],
  declarations: [FrontComponent, LandingPageComponent]
})
export class FrontModule { }
