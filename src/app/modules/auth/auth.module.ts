import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// AdminLTE Shell
import { AdminLTEShellModule as Shell } from './../../shells/adminLTE/admin-lte.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// ng2 Translate
import { TranslateService, TranslateModule } from 'ng2-translate';

import { ES } from './translations/es';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Shell,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule {

  public constructor(translate: TranslateService) {
    translate.setTranslation('es', ES, true);
  }

}
