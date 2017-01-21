import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// ng2 Translate
import {TranslateModule, TranslateService} from 'ng2-translate';

// Shell
import { AdminLTEShellModule } from './shells/adminLTE/admin-lte.module';

// Modules
import { FrontModule } from './modules/front/front.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { AuthModule } from './modules/auth/auth.module';
import { LocalStorageService } from './modules/core/services/localStorage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { reducer as coreReducer } from './modules/core/reducers';

// angular2-JWT
import { AuthHttp, AuthConfig } from 'angular2-jwt';
// Setup for angular2-JWT
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
        tokenGetter: (() => localStorage.getItem('token')),
        globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.provideStore(coreReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterStoreModule.connectRouter(),
    TranslateModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminLTEShellModule,
    FrontModule,
    WelcomeModule,
    AuthModule
  ],
  providers: [
    LocalStorageService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
	  	translate.setDefaultLang('es');
	    translate.use('es');
	}
  
}
