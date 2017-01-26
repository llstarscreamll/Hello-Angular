import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// @ngrx
import { EffectsModule } from '@ngrx/effects';
// ng2 Translate
import { TranslateService, TranslateModule } from 'ng2-translate';
// AdminLTE Shell
import { AdminLTEShellModule as Shell } from './../../shells/adminLTE/admin-lte.module';
// Components
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
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
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  providers: [AuthService]
})
export class AuthModule {

  public constructor(translate: TranslateService) {
    translate.setTranslation('es', ES, true);
  }

}
