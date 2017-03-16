import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateService } from 'ng2-translate';

import { MODULES } from './modules';

// the main reducer
import { reducer } from './reducers';

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
    TranslateModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ...MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }
}
