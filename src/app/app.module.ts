import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AdminLTEShellModule } from './shells/adminLTE/admin-lte.module';
import { FrontModule } from './modules/front/front.module';
import { WelcomeModule } from './modules/welcome/welcome.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { reducer } from './core/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminLTEShellModule,
    FrontModule,
    WelcomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
