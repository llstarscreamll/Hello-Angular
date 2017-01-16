import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLteControlSidebarComponent } from './_partials/admin-lte-control-sidebar/admin-lte-control-sidebar.component';
import { AdminLteFooterComponent } from './_partials/admin-lte-footer/admin-lte-footer.component';
import { AdminLteMainSidebarComponent } from './_partials/admin-lte-main-sidebar/admin-lte-main-sidebar.component';
import { AdminLteUserAccountMenuComponent } from './_partials/admin-lte-user-account-menu/admin-lte-user-account-menu.component';
import { AdminLteNavTopLayoutComponent } from './admin-lte-nav-top-layout/admin-lte-nav-top-layout.component';
import { AdminLteSidebarLayoutComponent } from './admin-lte-sidebar-layout/admin-lte-sidebar-layout.component';

export const COMPONENTS = [
  AdminLteFooterComponent,
  AdminLteMainSidebarComponent,
  AdminLteNavTopLayoutComponent,
  AdminLteSidebarLayoutComponent,
  AdminLteControlSidebarComponent,
  AdminLteUserAccountMenuComponent,
];

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AdminLTEShellModule { }
