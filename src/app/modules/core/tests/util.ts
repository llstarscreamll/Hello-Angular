import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from 'ng2-translate';

import { AdminLTEShellModule as Shell } from './../../../shells/adminLTE/admin-lte.module';
import { reducer } from './../reducers';

export const IMPORTS = [
    Shell,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterTestingModule
];
