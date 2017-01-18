import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// Layouts
import { AdminLteNavTopLayoutComponent } from './layouts/nav-top-layout/nav-top-layout.component';
import { AdminLteSidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';

// Layouts Partials
import { AdminLteFooterComponent } from './layouts/_partials/footer/footer.component';
import { AdminLteMainSidebarComponent } from './layouts/_partials/main-sidebar/main-sidebar.component';
import { AdminLteControlSidebarComponent } from './layouts/_partials/control-sidebar/control-sidebar.component';
import { AdminLteUserAccountMenuComponent } from './layouts/_partials/user-account-menu/user-account-menu.component';

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
