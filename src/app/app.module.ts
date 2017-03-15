import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
// ng2 Translate
import {TranslateModule, TranslateService} from 'ng2-translate';

// Modules
import { FrontModule } from './modules/front/front.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { PayrollModule } from './modules/payroll/payroll.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { ColombianParameterModule } from './modules/colombian-parameter/colombian-parameter.module';
// Separated files for core module, TODO: wrap everything from core module on NgModule Class
import { AppEffects } from './modules/core/effects/app';
import { AppService } from './modules/core/services/app';
import { LocalStorageService } from './modules/core/services/localStorage';
// the main reducer
import { reducer } from './modules/core/reducers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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
    ColombianParameterModule,
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
