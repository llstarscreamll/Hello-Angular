// ng2 Translate
import {TranslateModule, TranslateService} from 'ng2-translate';

import { AppComponent } from './app.component';
import { AppEffects } from './modules/core/effects/app';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './modules/core/services/app';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyModule } from './modules/company/company.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
// Modules
import { FrontModule } from './modules/front/front.module';
import { HttpModule } from '@angular/http';
// Separated files for core module, TODO: wrap everything from core module on NgModule Class
import { LocalStorageService } from './modules/core/services/localStorage';
import { NgModule } from '@angular/core';
import { PayrollModule } from './modules/payroll/payroll.module';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { reducer } from './modules/core/reducers';

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
    FrontModule,
    WelcomeModule,
    AuthModule,
    PayrollModule,
    CompanyModule,
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
