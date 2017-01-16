import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../../core/reducers';
import * as layout from './../../../core/actions/layout';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './admin-lte-sidebar-layout.component.html',
  styleUrls: ['./admin-lte-sidebar-layout.component.css']
})
export class AdminLteSidebarLayoutComponent implements OnInit {

  @Input() openSidebar: boolean = true;
  @Input() openControlSidebar: boolean = false;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() { }

  /**
   * Expands or shrinks the sidebar.
   */
  public toggleNavigation() {
    this.openSidebar
      ? this.store.dispatch(new layout.CloseSidenavAction())
      : this.store.dispatch(new layout.OpenSidenavAction());
  }

  /**
   * Expands or shrinks the control sidebar.
   */
  public toggleControlSidebar() {
    this.openControlSidebar
      ? this.store.dispatch(new layout.CloseControlSidebarAction())
      : this.store.dispatch(new layout.OpenControlSidenavAction());
  }
}
