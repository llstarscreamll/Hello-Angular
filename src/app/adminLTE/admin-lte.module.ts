import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { LAYOUTS } from './layouts';
import { COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    Ng2BootstrapModule.forRoot(),
  ],
  providers: [],
  declarations: [...COMPONENTS, ...LAYOUTS],
  exports: [...COMPONENTS, ...LAYOUTS],
})
export class AdminLTEShellModule { }
