import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from './../models/control';
import { ControlConfig } from './../models/control-config';

@Component({
  selector: 'radio-control',
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

    <div *ngFor="let option of config.options" class="radio">
      <label>
        <input
          type="radio"
          name="trashed"
          formControlName="trashed"
          [value]="option.value"
          [attr.disabled]="disabled === true ? true : null"
          >
        {{ option.label }}
        </label>
    </div>
    </div>
        `,
  styles: [`:host { display: block; }`]
})
export class RadioControlComponent implements Control, OnInit {
  public config: ControlConfig;
  public group: FormGroup;
  public errors: Object = {};
  public disabled: boolean = true;

  public constructor() { }

  public ngOnInit() { }
}