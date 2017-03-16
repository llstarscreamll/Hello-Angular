import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentTypeRoutingModule } from './colombian-parameter-routing.module';
// ng2 Translate
import { TranslateService, TranslateModule } from 'ng2-translate';

import { CoreModule } from './../core/core.module';
// shell
import { InspiniaShellModule as Shell } from './../../shells/inspinia/inspinia.module';
// Containers
import { CONTAINERS } from './containers';
// Components
import { COMPONENTS } from './components';
// Language files
import { ES } from './translations/es';
// Effects
import { EFFECTS } from './effects';
// services
import { SERVICES } from './services';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    CoreModule,
    Shell,
    DocumentTypeRoutingModule,
    ...EFFECTS,
  ],
  declarations: [
    ...COMPONENTS,
	  ...CONTAINERS,
  ],
  providers: [
    ...SERVICES
  ]
})
export class ColombianParameterModule {
  
  public constructor(translate: TranslateService) {
    translate.setTranslation('es', ES, true);
  }

}
