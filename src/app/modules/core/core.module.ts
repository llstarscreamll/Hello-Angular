import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Shared components
import { PaginationComponent } from './components/pagination.component';

/**
 * Here we expose the shared components to another modules.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ]
})
export class CoreModule { }
