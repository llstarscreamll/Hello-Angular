import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// ng2-boostrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// Shared components
import { DynamicFormcomponent } from './components/dynamicForm.component';

/**
 * Here we expose the shared components to another modules.
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule,
  ],
  declarations: [
    DynamicFormcomponent
  ],
  exports: [
    DynamicFormcomponent
  ],
  providers: []
})
export class CoreSharedModule { }
