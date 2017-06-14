import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from 'environments/environment';
import { CoreSharedModule } from "app/core/core.shared.module";

@NgModule({
  imports: [
    CoreSharedModule,
    environment.theme,
    WelcomeRoutingModule,
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
