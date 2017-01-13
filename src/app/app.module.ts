import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AdminLTENavTopComponent } from './shells/adminLTE/admin-lte-nav-top/admin-lte-nav-top.component';
import { AdminLTESidebarComponent } from './shells/adminLTE/admin-lte-sidebar/admin-lte-sidebar.component';
import { AdminLteUserAccountMenuComponent } from './shells/adminLTE/admin-lte-user-account-menu/admin-lte-user-account-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLTENavTopComponent,
    AdminLTESidebarComponent,
    AdminLteUserAccountMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
