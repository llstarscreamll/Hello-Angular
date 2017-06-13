import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocalStorageService } from "app/core/services/local-storage.service";

export const DECLARATIONS = [
];

/**
 * Here we expose the shared components to another modules.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ],
  providers: [LocalStorageService]
})
export class CoreSharedModule { }
