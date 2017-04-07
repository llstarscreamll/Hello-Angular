import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';

import { Control } from './../models/control';
import { ControlConfig } from './../models/control-config';

@Component({
  selector: 'input-control',
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

      <ng-container *ngFor="let option of config.options">
        <div class="checkbox">
          <label>
            <input
                type="checkbox"
                name="{{config.name}}"
                [checked]="group.get(config.name).value.indexOf(option.value) >= 0"
                [attr.disabled]="disabled === true ? true : null"
                [value]="option.value"
                (click)="toggleArrayFieldValue(config.name, $event.target.value)">
            {{ option.label }}
          </label>
        </div>
      </ng-container>
    </div>
        `,
  styles: [`:host { display: block; }`]
})
export class CheckboxArrayControlComponent implements Control, OnInit {
  public config: ControlConfig;
  public group: FormGroup;
  public errors: Object = {};
  public disabled: boolean = true;

  public constructor() { }

  public ngOnInit() { }

  public toggleArrayFieldValue(field: any, value: any) {
    let index = this.group.get(field).value.indexOf(value);
    let selectedOptions = _.set({}, field, _.cloneDeep(this.group.get(field).value));

    if (index > -1) {
      selectedOptions[field].splice(index, 1);
    } else {
      selectedOptions[field].push(value);
    }

    this.group.patchValue(selectedOptions);
    this.group.markAsDirty();
  }
}