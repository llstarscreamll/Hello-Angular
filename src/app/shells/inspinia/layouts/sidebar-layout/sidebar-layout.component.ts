import {
  Component,
  Input,
  HostListener,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Renderer,
  ViewEncapsulation
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../../../modules/core/reducers';
import * as layout from './../../../../modules/core/actions/layout';
import { State as AppState } from './../../../../modules/core/reducers/app';
import { State as AuthState }  from './../../../../modules/auth/reducers/auth';

import { MainSidebarComponent } from './../../components/main-sidebar/main-sidebar.component';
import { FooterComponent } from './../../components/footer/footer.component';

import { smoothlyMenu } from '../../helpers';
declare let jQuery:any;

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: [
    './sidebar-layout.component.css',
    './../../styles.css',
    ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLayoutComponent implements OnInit {

  // store data used by layout
  public showSidenav$: Observable<boolean>;
  public showControlSidebar$: Observable<boolean>;
  public authState$: Observable<AuthState>;
  public appState$: Observable<AppState>;

  // the document dimensions
  public viewPortHeight: number = window.innerHeight;
  public viewPortWidth: number = window.innerWidth;

  // header, wrapper, footer and sidebar refs to get dimensions
  @ViewChild('header') header: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('contentWrapper') contentWrapper: ElementRef;
  @ViewChild(FooterComponent) footer: FooterComponent;
  @ViewChild(MainSidebarComponent) sidebar: MainSidebarComponent;

  // listen the resize event on window
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.viewPortWidth = event.target.innerWidth;
    this.viewPortHeight = event.target.innerHeight;
  }

  public constructor(private store: Store<fromRoot.State>, private renderer: Renderer) { }

  public ngOnInit() {
    this.appState$ = this.store.select(fromRoot.getAppState);
    this.authState$ = this.store.select(fromRoot.getAuthState);
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.showControlSidebar$ = this.store.select(fromRoot.getShowControlSidebar);

    // fix the height
    this.fixHeight();
  }

  /**
   * Fix the page height.
   */
  public fixHeight() {
    let sidebarHeight: number = this.sidebar.element.nativeElement.offsetHeight;
    let headerHeight: number = this.header.nativeElement.offsetHeight;
    let minHeight: number = this.viewPortHeight;

    // window height >= sidebar height?
    if (this.viewPortHeight >= sidebarHeight) {
      minHeight = this.viewPortHeight - (headerHeight);
      this.renderer.setElementStyle(this.contentWrapper.nativeElement, 'min-height', minHeight + 'px');
    } else {
      this.renderer.setElementStyle(this.contentWrapper.nativeElement, 'min-height', sidebarHeight + 'px');
    }
  }

  /**
   * Expands or shrinks the sidebar.
   */
  public toggleNavigation() {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();

    // this.header.nativeElement.getAttribute('is-sidebar-opened') === 'true'
    //   ? this.store.dispatch(new layout.CloseSidenavAction())
    //   : this.store.dispatch(new layout.OpenSidenavAction());
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
