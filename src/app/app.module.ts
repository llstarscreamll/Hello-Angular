import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// AdminLTE Shell
import { AdminLTEShellModule as Shell } from './shells/adminLTE/admin-lte.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { reducer } from './core/reducers';

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot(),
    AppRoutingModule,
    Shell
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
