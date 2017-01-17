import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

// AdminLTE Shell
import { AdminLTEShellModule as Shell } from './../../shells/adminLTE/admin-lte.module';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    Shell,
  ],
  declarations: [FrontComponent, LandingPageComponent]
})
export class FrontModule { }
