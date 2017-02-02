import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// ng2 Translate
import {TranslateModule, TranslateService} from 'ng2-translate';

// Shell
import { AdminLTEShellModule } from './shells/adminLTE/admin-lte.module';

// Modules
import { FrontModule } from './modules/front/front.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { AuthModule } from './modules/auth/auth.module';
import { PayrollModule } from './modules/payroll/payroll.module';
import { CompanyModule } from './modules/company/company.module';

// Separated files for core module, TODO: wrap everything from core module on NgModule Class
import { LocalStorageService } from './modules/core/services/localStorage';
import { AppService } from './modules/core/services/app';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { reducer } from './modules/core/reducers';
import { AppEffects } from './modules/core/effects/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AppEffects),
    TranslateModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminLTEShellModule,
    FrontModule,
    WelcomeModule,
    AuthModule,
    PayrollModule,
    CompanyModule
  ],
  providers: [
    LocalStorageService, AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
	  	translate.setDefaultLang('es');
	    translate.use('es');
	}
  
}
