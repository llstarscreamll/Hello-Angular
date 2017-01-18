import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { AdminLteControlSidebarComponent } from './_partials/admin-lte-control-sidebar/admin-lte-control-sidebar.component';
import { AdminLteFooterComponent } from './_partials/admin-lte-footer/admin-lte-footer.component';
import { AdminLteMainSidebarComponent } from './_partials/admin-lte-main-sidebar/admin-lte-main-sidebar.component';
import { AdminLteUserAccountMenuComponent } from './_partials/admin-lte-user-account-menu/admin-lte-user-account-menu.component';
import { AdminLteNavTopLayoutComponent } from './admin-lte-nav-top-layout/admin-lte-nav-top-layout.component';
import { AdminLteSidebarLayoutComponent } from './admin-lte-sidebar-layout/admin-lte-sidebar-layout.component';

// Box Widget
import { BoxComponent } from './components/box/box.component';
import { BoxHeaderComponent } from './components/box-header/box-header.component';
import { BoxBodyComponent } from './components/box-body/box-body.component';
import { BoxFooterComponent } from './components/box-footer/box-footer.component';
import { BoxToolsComponent } from './components/box-tools/box-tools.component';

export const COMPONENTS = [
  AdminLteFooterComponent,
  AdminLteMainSidebarComponent,
  AdminLteNavTopLayoutComponent,
  AdminLteSidebarLayoutComponent,
  AdminLteControlSidebarComponent,
  AdminLteUserAccountMenuComponent,
  // Box Widget
  BoxComponent,
  BoxHeaderComponent,
  BoxBodyComponent,
  BoxFooterComponent,
  BoxToolsComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, DropdownModule.forRoot()],
  providers: [],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AdminLTEShellModule { }
