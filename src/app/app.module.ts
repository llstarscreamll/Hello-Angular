import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// AdminLTE Shell Components
import { AdminLteUserAccountMenuComponent } from './shells/adminLTE/_partials/admin-lte-user-account-menu/admin-lte-user-account-menu.component';
import { AdminLteFooterComponent } from './shells/adminLTE/_partials/admin-lte-footer/admin-lte-footer.component';
import { AdminLteNavTopLayoutComponent } from './shells/adminLTE/admin-lte-nav-top-layout/admin-lte-nav-top-layout.component';
import { AdminLteSidebarLayoutComponent } from './shells/adminLTE/admin-lte-sidebar-layout/admin-lte-sidebar-layout.component';
import { AdminLteControlSidebarComponent } from './shells/adminLTE/_partials/admin-lte-control-sidebar/admin-lte-control-sidebar.component';
import { AdminLteMainSidebarComponent } from './shells/adminLTE/_partials/admin-lte-main-sidebar/admin-lte-main-sidebar.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { reducer } from './core/reducers';

@NgModule({
  declarations: [
    AppComponent,
    AdminLteUserAccountMenuComponent,
    AdminLteFooterComponent,
    AdminLteNavTopLayoutComponent,
    AdminLteSidebarLayoutComponent,
    AdminLteControlSidebarComponent,
    AdminLteMainSidebarComponent
  ],
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
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
