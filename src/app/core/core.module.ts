import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { TranslateService, TranslateModule } from 'ng2-translate';

import { AppEffects } from './effects/app';
import { AppService } from './services/app';
import { LocalStorageService } from './services/localStorage';

import { ES } from './translations/es';

@NgModule({
    declarations: [],
    imports: [
        TranslateModule,
        EffectsModule.run(AppEffects),
    ],
    exports: [],
    providers: [ LocalStorageService, AppService ],
    bootstrap: []
})
export class CoreModule {
    public constructor(translate: TranslateService) {
        translate.setTranslation('es', ES, true);
    }
}
