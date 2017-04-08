import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';

import { reducer } from './../reducers';

export const IMPORTS = [
  TranslateModule.forRoot(),
  StoreModule.provideStore(reducer),
  RouterTestingModule,
  Ng2BootstrapModule.forRoot(),
  CollapseModule.forRoot(),
  AlertModule.forRoot(),
];
