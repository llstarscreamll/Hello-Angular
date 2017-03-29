import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { State as appState } from './../../../core/reducers/app.reducer';

@Component({
  selector: '[app-main-footer]',
  template: `
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      <b>Version</b> 2.3.8
    </div>
    <!-- Default to the left -->
    <strong class="app-copy-right">
      Copyright &copy;{{ appState?.companyInfo.cc_year }} <a href="{{ appState?.companyInfo.website }}">{{ appState?.companyInfo.fullname }}</a>
    </strong>
    All rights reserved.
  `,
  styles: []
})
export class MainFooterComponent implements OnInit {

  @Input()
  public appState: appState;

  public constructor(public element: ElementRef) { }

  public ngOnInit() { }

}
