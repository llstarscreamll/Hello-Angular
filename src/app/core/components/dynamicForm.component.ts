import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as _ from "lodash";

@Component({
  moduleId: module.id,
  selector: 'app-dynamic-form',
  templateUrl: './dynamicForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormcomponent implements OnInit {

  /**
   * The parsed Form Model to generate the html form.
   */
  @Input()
  public model: Object;

  /**
   * The Form Group controls.
   */
  @Input()
  public controls: FormGroup;

  /**
   * The form data, like the based data options for dropdowns, checkboxes, etc.
   */
  @Input()
  public data: Object = {};

  /**
   * The form external errors, from API for example.
   */
  @Input()
  public errors: Object = {};

  /**
   * The visibility parameter to show or not the fields. It means that form model
   * fields with visibility = 'create' will be rendered.
   */
  @Input()
  public visibility: string  = 'create';

  /**
   * Should be the fileds disabled?
   */
  @Input()
  public disabled: boolean = false;

  /**
   * Option to display info about the model, controls and data attributes.
   */
  @Input()
  public debug: boolean = false;

  public constructor(private fb: FormBuilder) { }
  ngOnInit() { }

  /**
   * Gets the model keys array to iterate over.
   */
  public getModelKeys() {
    return Object.keys(this.model ? this.model : {});
  }

  /**
   * Toggles a value from an form control, used on checkboxes arrays.
   *
   * @param item 
   * @param value 
   */
  public toggleArrayFieldValue(field: any, value: any) {
    let index = this.controls.get(field).value.indexOf(value);

    if (index > -1) {
      this.controls.get(field).value.splice(index, 1);
    } else {
      this.controls.get(field).value.push(value);
    }
  }
}