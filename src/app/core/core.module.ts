import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { LocalStorageService } from './services/local-storage.service';

import { ES } from './translations/es';

@NgModule({
    declarations: [],
    imports: [
        TranslateModule,
    ],
    exports: [],
    providers: [],
    bootstrap: []
})
export class CoreModule {
    public constructor(translate: TranslateService) {
        translate.setTranslation('es', ES, true);
    }
}
