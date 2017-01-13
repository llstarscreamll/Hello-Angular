import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { AppComponent } from './app.component';

// AdminLTE Shell Components
import { AdminLteUserAccountMenuComponent } from './shells/adminLTE/_partials/admin-lte-user-account-menu/admin-lte-user-account-menu.component';
import { AdminLteFooterComponent } from './shells/adminLTE/_partials/admin-lte-footer/admin-lte-footer.component';
import { AdminLteNavTopLayoutComponent } from './shells/adminLTE/admin-lte-nav-top-layout/admin-lte-nav-top-layout.component';
import { AdminLteSidebarLayoutComponent } from './shells/adminLTE/admin-lte-sidebar-layout/admin-lte-sidebar-layout.component';
import { AdminLteControlSidebarComponent } from './shells/adminLTE/_partials/admin-lte-control-sidebar/admin-lte-control-sidebar.component';
import { AdminLteMainSidebarComponent } from './shells/adminLTE/_partials/admin-lte-main-sidebar/admin-lte-main-sidebar.component';

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
