import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as _ from "lodash";

@Component({
  moduleId: module.id,
  selector: 'app-dynamic-form',
  templateUrl: './dynamicForm.component.html'
})
export class DynamicFormcomponent implements OnInit {

  @Input() model: Object;
  @Input() controls: FormGroup;
  @Input() data: Object = {
    departments: [
      { id: 1, name: 'Boyacá', country_id: 1 },
      { id: 2, name: 'Casanare', country_id: 1 },
      { id: 10, name: 'Lima', country_id: 2 },
      { id: 20, name: 'Arequipa', country_id: 2 },
    ]
  };

  constructor(private fb: FormBuilder) { }
  ngOnInit() { }

  getModelKeys() {
    return Object.keys(this.model);
  }

  toggleArrayControlItemValue(item: any, value: any) {
    let index = this.controls.get(item).value.indexOf(value);

    if (index > -1) {
      this.controls.get(item).value.splice(index, 1);
    } else {
      this.controls.get(item).value.push(value);
    }
  }
}