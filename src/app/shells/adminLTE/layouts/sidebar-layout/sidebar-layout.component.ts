import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from './../../../../modules/core/reducers';
import * as layout from './../../../../modules/core/actions/layout';
import { State as AppState } from './../../../../modules/core/reducers/app';
import { State as AuthState }  from './../../../../modules/auth/reducers/auth';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLayoutComponent implements OnInit {

  @ViewChild('header') header: ElementRef;

  public showSidenav$: Observable<boolean>;
  public showControlSidebar$: Observable<boolean>;
  public authState$: Observable<AuthState>;
  public appState$: Observable<AppState>;

  private viewPortHeight: number = window.innerHeight;

  public constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() {
    this.appState$ = this.store.select(fromRoot.getAppState);
    this.authState$ = this.store.select(fromRoot.getAuthState);
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.showControlSidebar$ = this.store.select(fromRoot.getShowControlSidebar);
  }

  /**
   * Expands or shrinks the sidebar.
   */
  public toggleNavigation() {
    this.header.nativeElement.getAttribute('is-sidebar-opened') === 'true'
      ? this.store.dispatch(new layout.CloseSidenavAction())
      : this.store.dispatch(new layout.OpenSidenavAction());
  }

  /**
   * Expands or shrinks the control sidebar.
   */
  public toggleControlSidebar() {
    this.header.nativeElement.getAttribute('is-control-sidebar-opened') === 'true'
      ? this.store.dispatch(new layout.CloseControlSidebarAction())
      : this.store.dispatch(new layout.OpenControlSidenavAction());
  }

}
