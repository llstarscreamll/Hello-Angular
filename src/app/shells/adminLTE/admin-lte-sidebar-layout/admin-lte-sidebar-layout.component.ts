import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-lte-sidebar-layout',
  templateUrl: './admin-lte-sidebar-layout.component.html',
  styleUrls: ['./admin-lte-sidebar-layout.component.css']
})
export class AdminLteSidebarLayoutComponent implements OnInit {

  public mainSidebarClass = {'sidebar-open': true, 'sidebar-collapse': false};
  public controlSidebarClass = {'control-sidebar-open': false};

  constructor() { }

  ngOnInit() {
  }

  toggleNavigation() {
    let state = !this.mainSidebarClass['sidebar-open'];
    this.mainSidebarClass = {'sidebar-open': state, 'sidebar-collapse': !state};
  }

  toggleControlSidebar() {
    let state = !this.controlSidebarClass['control-sidebar-open'];
    console.log(state);
    this.controlSidebarClass = {'control-sidebar-open': state};
  }

}
