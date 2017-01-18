import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// Layouts
import { NavTopLayoutComponent } from './layouts/nav-top-layout/nav-top-layout.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';

// Layouts Partials
import { FooterComponent } from './layouts/_partials/footer/footer.component';
import { MainSidebarComponent } from './layouts/_partials/main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from './layouts/_partials/control-sidebar/control-sidebar.component';
import { UserAccountMenuComponent } from './layouts/_partials/user-account-menu/user-account-menu.component';

// Box Widget
import { BoxComponent } from './components/box/box.component';
import { BoxHeaderComponent } from './components/box-header/box-header.component';
import { BoxBodyComponent } from './components/box-body/box-body.component';
import { BoxFooterComponent } from './components/box-footer/box-footer.component';
import { BoxToolsComponent } from './components/box-tools/box-tools.component';

// Page Components
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageContentComponent } from './components/page-content/page-content.component';

export const COMPONENTS = [
  // Layouts
  NavTopLayoutComponent,
  SidebarLayoutComponent,
  // Partials
  FooterComponent,
  MainSidebarComponent,
  ControlSidebarComponent,
  UserAccountMenuComponent,
  // Box Widget
  BoxComponent,
  BoxHeaderComponent,
  BoxBodyComponent,
  BoxFooterComponent,
  BoxToolsComponent,
  // Page Components
  PageHeaderComponent,
  PageContentComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, DropdownModule.forRoot()],
  providers: [],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AdminLTEShellModule { }
