import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from './../../environments/environment';
import { DynamicFormModule } from './../dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule.forRoot(),
    ReactiveFormsModule,
    environment.theme,
    WelcomeRoutingModule,
    DynamicFormModule,
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
