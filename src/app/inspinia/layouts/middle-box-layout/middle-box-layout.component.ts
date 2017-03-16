import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../../core/reducers';
import { State as AppState } from './../../../core/reducers/app';

@Component({
  selector: 'app-middle-box-layout',
  template: `
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <div class="m-b text-center">
        <h1 class="logo-name logo-name-small">
          {{ (appState$ | async)?.companyInfo.big_name }}
        </h1>
        <small>{{ 'SHELL.Welcome to' | translate }} {{ (appState$ | async)?.companyInfo.fullname }}</small>
      </div>

      <div>
        <ng-content></ng-content>
      </div>

    </div>
  `,
  styleUrls: [
    './../../styles.css',
    './middle-box-layout.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MiddleBoxLayoutComponent implements OnInit {

  @HostBinding('class') classes: string = 'gray-bg';

  public appState$: Observable<AppState>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.appState$ = this.store.select(fromRoot.getAppState);
  }

}
