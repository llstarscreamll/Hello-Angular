import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// ng2-boostrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';
// Shared components
import { PaginationComponent } from './components/pagination.component';
import { BasicSearchComponent } from './components/basicSearch.component';
import { DynamicFormcomponent } from './components/dynamicForm.component';

// Services
import { FormModelParser } from './services/formModelParser';

/**
 * Here we expose the shared components to another modules.
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
  ],
  declarations: [
    PaginationComponent,
    BasicSearchComponent,
    DynamicFormcomponent
  ],
  exports: [
    PaginationComponent,
    BasicSearchComponent,
    DynamicFormcomponent
  ],
  providers: [
    FormModelParser
  ]
})
export class CoreSharedModule { }
