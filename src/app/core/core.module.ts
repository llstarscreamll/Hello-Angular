import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [LocalStorageService],
  bootstrap: []
})
export class CoreModule { }
