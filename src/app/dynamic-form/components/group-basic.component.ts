import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Group } from './../models/group';
import { GroupConfig } from './../models/group-config';

@Component({
  selector: 'group-basic-control',
  template: `
      <label>{{ _options_.label }}</label>
      <div class="">
        <ng-container *ngFor="let field of getModelKeys()">
            <ng-container
                dynamicControl
                [group]="group"
                [config]="controls[field]"
                [errors]="errors"
                [disabled]="disabled"></ng-container>
        </ng-container>
      </div>
        `,
  styles: [`:host { display: block; }`]
})
export class GroupBasicComponent implements Group, OnInit {
  public config: GroupConfig;
  public disabled: boolean = false;

  public type;
  public visibility;
  public controls;
  public _options_;

  public group: FormGroup;
  public errors: Object = {};

  public constructor() { }

  public ngOnInit() { }

  public getModelKeys() {
    return Object.keys(this.controls ? this.controls : {});
  }
}