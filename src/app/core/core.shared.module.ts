import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { Ng2BootstrapModule } from "ngx-bootstrap";

import { ES } from './translations/es';
import { environment } from './../../environments/environment';
import { ValidationSharedModule } from "app/validation/validation.shared.module";
import { DynamicFormModule } from "app/dynamic-form/dynamic-form.module";
import { AuthSharedModule } from "app/auth/auth-shared.module";

export const DECLARATIONS = [];

export const IMPORTS = [
  CommonModule,
  RouterModule,
  HttpModule,
  TranslateModule,
  ReactiveFormsModule,
  Ng2BootstrapModule,
  DynamicFormModule,
  ValidationSharedModule,
  AuthSharedModule,
];

/**
 * Here we expose the shared components/modules to another feature modules.
 */
@NgModule({
  imports: [
    ...IMPORTS,
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...IMPORTS,
    ...DECLARATIONS,
  ]
})
export class CoreSharedModule {

  public constructor(translate: TranslateService) {
    translate.setTranslation('es', ES, true);
  }

}
