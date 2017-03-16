import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as _ from "lodash";

@Component({
  moduleId: module.id,
  selector: 'app-dynamic-form',
  templateUrl: './dynamicForm.component.html'
})
export class DynamicFormcomponent implements OnInit {

  /**
   * The parsed Form Model to generate the html form.
   */
  @Input() model: Object;

  /**
   * The Form Group controls.
   */
  @Input() controls: FormGroup;

  /**
   * The form data, like the based data options for dropdowns, checkboxes, etc.
   */
  @Input() data: Object = {};

  /**
   * The form external errors, from API for example.
   */
  @Input() errors: Object = {};

  /**
   * The visibility parameter to show or not the fields. It means that form model
   * fields with visibility = 'create' will be rendered.
   */
  @Input() visibility: string  = 'create';

  /**
   * Should be the fileds disabled?
   */
  @Input() disabled: boolean = false;

  /**
   * Option to display info about the model, controls and data attributes.
   */
  @Input() debug: boolean = false;

  constructor(private fb: FormBuilder) { }
  ngOnInit() { }

  /**
   * Gets the model keys array to iterate over.
   */
  getModelKeys() {
    return Object.keys(this.model);
  }

  /**
   * Toggles a value from an form control, used on checkboxes arrays.
   *
   * @param item 
   * @param value 
   */
  toggleArrayFieldValue(field: any, value: any) {
    let index = this.controls.get(field).value.indexOf(value);

    if (index > -1) {
      this.controls.get(field).value.splice(index, 1);
    } else {
      this.controls.get(field).value.push(value);
    }
  }
}