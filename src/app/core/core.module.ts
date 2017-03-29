import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { TranslateService, TranslateModule } from 'ng2-translate';

import { AppEffects } from './effects/app.effects';
import { AppService } from './services/app.service';
import { LocalStorageService } from './services/local-storage.service';

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
