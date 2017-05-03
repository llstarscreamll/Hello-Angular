import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
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

      <div [ngClass]="[config.controlWrapperClass || '']">
        <ng-select
          class="no-ng-validation-border {{ config.controlClass || '' }}"
          [allowClear]="true"
          [items]="items"
          [active]="getActive()"
          [placeholder]="config.placeholder || '---'"
          [disabled]="disabled === true ? true : false"
          [attr.id]="config.name"
          [ngClass]="validationClasses"
          [attr.name]="config.name"
          [attr.value]="group.get(config.name).value"
          (data)="changed($event)">
        </ng-select>
      </div>
    </div>
        `,
  styles: [`
    :host { display: block; }
    :host >>> ng-select { border: none !important; }
    :host >>> ng-select.ng-invalid > div { border-left: 5px solid #ca4440; }

    :host >>> ng-select.ng-valid.ng-dirty > div,
    :host >>> ng-select.ng-valid.ng-touched > div
    { border-left: 5px solid #149178; }
    `]
})
export class SelectControlComponent implements Control, OnInit {
  public config: ControlConfig;
  public group: FormGroup;
  public errors: Object = {};
  public disabled: boolean = true;
  public data: any = {};
  public items = [{ id: 'null', text: 'No data given...' }];
  public validationClasses: Object;

  public constructor() { }

  public ngOnInit() {
    this.items = this.getItems();

    if (this.group) {
      this.validationClasses = this.getValidationClasses();
    }
  }

  public getValidationClasses() {
    return {
        'ng-dirty': this.group.get(this.config.name).dirty,
        'ng-touched': this.group.get(this.config.name).touched,
        'ng-invalid': this.group.get(this.config.name).invalid,
        'ng-valid': this.group.get(this.config.name).valid,
      };
  }

  public getItems() {
    if (_.has(this.config, 'dynamicOptions')) {
      let index: string = _.get(this.config.dynamicOptions, 'data', '');

      let data = _.get(this.data, index, []);

      if (_.has(this.data, index) && data.length > 0) {
        return _.flatMap(data, (value) => { return { id: value.id, text: value.name } });
      }
    }

    return [{ id: 'null', text: 'No data given...' }];
  }

  public getActive() {
    return this.group.get(this.config.name).value
      ? this.items.filter(value => value.id === this.group.get(this.config.name).value)
      : null;
  }

  public changed(data: {id: string, text: string}) {
    this.group.get(this.config.name).setValue(data.id);

    this.group.get(this.config.name).markAsDirty();
    this.group.get(this.config.name).markAsTouched();

    this.validationClasses = this.getValidationClasses();
  }
}
