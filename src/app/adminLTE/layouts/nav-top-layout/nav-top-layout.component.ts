import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State as AuthState }  from './../../../auth/reducers/auth.reducer';
import { State as AppState } from './../../../core/reducers/app.reducer';
import * as fromRoot from './../../../reducers';

import { MainFooterComponent } from './../../components/footer/footer.component';

@Component({
  selector: 'app-nav-top-layout',
  templateUrl: './nav-top-layout.component.html',
  styleUrls: [
    './nav-top-layout.component.css',
    ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTopLayoutComponent implements OnInit {

  @ViewChild('header')
  public header: ElementRef;

  @ViewChild('wrapper')
  public wrapper: ElementRef;

  @ViewChild(MainFooterComponent)
  public footer: MainFooterComponent;

  public authState$: Observable<AuthState>;
  public appState$: Observable<AppState>;
  
  public collapseNavBar: boolean = true;
  public viewPortHeight: number = window.innerHeight;

  constructor(
    private store: Store<fromRoot.State>,
    private renderer: Renderer
    ) { }

  ngOnInit() {
    this.authState$ = this.store.select(fromRoot.getAuthState);
    this.appState$ = this.store.select(fromRoot.getAppState);

    // fix the height
    let height = window.innerHeight - (this.header.nativeElement.offsetHeight + 2);
    this.renderer.setElementStyle(this.wrapper.nativeElement, 'min-height', height + 'px');
  }

}
