import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dynamic-form-fields',
  template: `
    <div class="dynamic-search-form" [formGroup]="form">
      <ng-container *ngFor="let field of getModelKeys()">
      
      <ng-container [ngSwitch]="formModel[field]['type']">

        <ng-container *ngSwitchCase="'group'">
          <ng-container
            *ngIf="formModel[field]['visibility'][visibility]"
            dynamicGroup
            [group]="form.get(field)"
            [config]="formModel[field]"
            [errors]="errors"
            [disabled]="disabled"></ng-container>
        </ng-container>

        <ng-container *ngSwitchDefault>
          <ng-container
            *ngIf="formModel[field]['visibility'][visibility]"
            dynamicControl
            [group]="form"
            [config]="formModel[field]"
            [errors]="errors"
            [disabled]="disabled"></ng-container>
        </ng-container>

        <div *ngIf="formModel[field]['break'] && formModel[field]['visibility'][visibility]" class="clearfix"></div>

      </ng-container>

      </ng-container>
    </div>
        `,
  styles: [`:host { display: block; } .clearfix { border-bottom: 1px dashed #d3d3d3; margin-bottom: 15px; }`]
})
export class DynamicFormFieldsComponent implements OnInit {
  @Input()
  public form: FormGroup;

  @Input()
  public formModel: any;

  @Input()
  public formData: any;

  @Input()
  public errors: Object = {};

  @Input()
  public visibility: string = 'create';

  @Input()
  public disabled: boolean = false;

  @Input()
  public debug: boolean = false;

  public constructor(private fb: FormBuilder) { }

  public ngOnInit() { }

  public getModelKeys() {
    return Object.keys(this.formModel ? this.formModel : {});
  }
}
