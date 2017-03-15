import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { TranslateService, TranslateModule } from 'ng2-translate';
// Shell
import { InspiniaShellModule as Shell } from './../../shells/inspinia/inspinia.module';
// Routing
import { AuthRoutingModule } from './auth-routing.module';
// Components
import { COMPONENTS } from './components';
// Services
import { AuthService } from './services/auth.service';
// Language files
import { ES } from './translations/es';
// Effects
import { AuthEffects } from './effects/auth';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    Shell,
    AuthRoutingModule,
    ReactiveFormsModule,
    EffectsModule.run(AuthEffects),
  ],
  declarations: [...COMPONENTS],
  providers: [AuthService]
})
export class AuthModule {

  public constructor(translate: TranslateService) {
    translate.setTranslation('es', ES, true);
  }

}
