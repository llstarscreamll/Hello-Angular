import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { SERVICES } from './services';

@NgModule({
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [...CONTAINERS],
  entryComponents: [...COMPONENTS,],
  providers: [...SERVICES],
})
export class DynamicFormModule { }
