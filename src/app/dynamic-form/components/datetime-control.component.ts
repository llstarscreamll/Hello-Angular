import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from './../models/control';
import { ControlConfig } from './../models/control-config';

@Component({
  selector: 'datetime-control',
  template: `
    <div
      class="form-group"
      [formGroup]="group"
      [class.has-success]="group.get(config.name).valid && group.get(config.name).touched"
      [class.has-error]="(!group.get(config.name).valid && group.get(config.name).touched) || (errors[config.name])"
      [ngClass]="[config.mainWrapperClass || '']">

      <label
        class="control-label"
        [attr.for]="config.name"
        [ngClass]="[config.labelClass || '']">
        {{ config.label }}
      </label>

      <div [ngClass]="[config.controlWrapperClass || '']">
        <input
          datetime
          class="form-control"
          type="text"
          [attr.disabled]="disabled === true ? true : null"
          [attr.id]="config.name"
          [attr.placeholder]="config.placeholder"
          [ngClass]="[config.controlClass || '']"
          [attr.name]="config.name"
          [value]="group.get(config.name).value"
          [formControlName]="config.name">
      </div>
    </div>
        `,
  styleUrls: [
    './datetime-control.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DatetimeControlComponent implements Control, OnInit {
  public config: ControlConfig;
  public group: FormGroup;
  public errors: Object = {};
  public disabled: boolean = true;
  
  public constructor() { }

  public ngOnInit() { }
}