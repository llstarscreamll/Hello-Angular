import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { reducer as coreReducer } from './modules/core/reducers';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
	  	translate.setDefaultLang('es');
	    translate.use('es');
	}
  
}
