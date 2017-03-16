import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as appMessageActions from './../../../core/actions/appMessage';
import * as fromRoot from './../../../reducers';
import { AppMessage } from './../../../core/models/appMessage';

@Component({
  selector: 'app-alerts',
  template: `
    <alert *ngIf="appMessage?.message"
           [type]="appMessage?.type"
           dismissible="true"
           [dismissOnTimeout]="dismissTime"
           (onClosed)="ngOnDestroy()">
      <h4><i class="icon {{ icon }}"></i> {{ 'SHELL.alert-' + appMessage?.type | translate }}!</h4>
      {{ appMessage.message }}
    </alert>
  `,
  styles: []
})
export class AlertsComponent implements OnInit, OnDestroy {

  /**
   * TODO: find way to iterate over objects to display errors in this Component.
   */
  @Input() showErrors: boolean = true;
  @Input() appMessage: AppMessage;
  public icon: string = '';
  public dismissTime: number = 10000;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() { this.setIconAndMsgStyle(); }

  ngOnDestroy() {
    this.store.dispatch(new appMessageActions.Remove());
  }

  public setIconAndMsgStyle () {
    let iconStyle = '';

    switch(this.appMessage.type) {
      case 'success': {
        iconStyle = 'fa fa-check';
      }
      case 'warning': {
        iconStyle = 'fa fa-warning';
      }
      case 'info': {
        iconStyle = 'fa fa-info';
      }
      default: {
        iconStyle = 'fa fa-ban';
      }
    }

    return this.icon = iconStyle;
  }

}
