import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MODULES } from './modules';

import { rootReducer } from './reducers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterStoreModule.connectRouter(),
    TranslateModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
    ...MODULES,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  public constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

}
