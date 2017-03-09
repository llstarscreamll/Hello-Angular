import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import * as appMessageActions from './../../../../modules/core/actions/appMessage';
import * as fromRoot from './../../../../modules/core/reducers';
import { AppMessage } from './../../../../modules/core/models/appMessage';

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
      <ul class="m-t-sm">
        <li *ngFor="let item of getErrorsArray(appMessage?.errors)">{{ item }}</li>
      </ul>
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
  public dismissTime: number = 20000;

  public constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() { this.setIconAndMsgStyle(); }

  public ngOnDestroy() {
    let endTime = new Date();
    let diffTime = (endTime.getTime() - this.appMessage.date.getTime()) / 1000;
    
    if (diffTime > 5 && this.appMessage.message !== "") {
      this.store.dispatch(new appMessageActions.Remove());
    }
  }

  public getErrorsArray(Obj: Object) {
    let array = [];

    _.forOwn(Obj, (value) => {
      array.push(value);
    });

    return array;
  }

  public setIconAndMsgStyle() {
    let iconStyle = '';

    switch (this.appMessage.type) {
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
