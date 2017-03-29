import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from 'ng2-translate';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { AlertModule } from 'ng2-bootstrap/alert';

import { reducer } from './../reducers';

export const IMPORTS = [
  TranslateModule.forRoot(),
  StoreModule.provideStore(reducer),
  RouterTestingModule,
  DropdownModule.forRoot(),
  CollapseModule.forRoot(),
  AlertModule.forRoot(),
];
