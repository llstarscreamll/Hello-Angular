import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ng2 Translate
import { TranslateService, TranslateModule } from 'ng2-translate';

// ng2-bootstrap
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { AlertModule } from 'ng2-bootstrap/alert';

// Layouts
import { NavTopLayoutComponent } from './layouts/nav-top-layout/nav-top-layout.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';
import { MiddleBoxLayoutComponent } from './layouts/middle-box-layout/middle-box-layout.component';

// // Layouts Partials
import { FooterComponent } from './components/footer/footer.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
// import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';

// // User menu component
import { UserAccountMenuComponent } from './components/user-account-menu/user-account-menu.component';
// // Box Widget
import { BoxComponent } from './components/box/box.component';
import { BoxHeaderComponent } from './components/box-header/box-header.component';
import { BoxBodyComponent } from './components/box-body/box-body.component';
import { BoxFooterComponent } from './components/box-footer/box-footer.component';
import { BoxToolsComponent } from './components/box-tools/box-tools.component';
// Page Components
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageContentComponent } from './components/page-content/page-content.component';
// // Alerts Component
import { AlertsComponent } from './components/alerts/alerts.component';

export const COMPONENTS = [
  // Layouts
  NavTopLayoutComponent,
  SidebarLayoutComponent,
  MiddleBoxLayoutComponent,
//   // Partials
   FooterComponent,
   MainSidebarComponent,
   //ControlSidebarComponent,
   UserAccountMenuComponent,
   // Box Widget
   BoxComponent,
   BoxHeaderComponent,
   BoxBodyComponent,
   BoxFooterComponent,
   BoxToolsComponent,
   // Alerts Component
   AlertsComponent,
   // Page Components
  PageHeaderComponent,
  PageContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    DropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class InspiniaShellModule { }
