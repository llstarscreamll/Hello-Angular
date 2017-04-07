import { InputControlComponent } from './input-control.component';
import { GroupBasicComponent } from './group-basic.component';
import { CheckboxArrayControlComponent } from './checkbox-array-control.component';
import { RadioControlComponent } from './radio-control.component';

export const COMPONENTS = [
  InputControlComponent,
  GroupBasicComponent,
  CheckboxArrayControlComponent,
  RadioControlComponent
];

export const Controls = {
  'text': InputControlComponent,
  'number': InputControlComponent,
  'date': InputControlComponent,
  'datetime-local': InputControlComponent,
  'month': InputControlComponent,
  'week': InputControlComponent,
  'time': InputControlComponent,
  'checkbox-array': CheckboxArrayControlComponent,
  'radio': RadioControlComponent
};

export const Groups = {
  'group': GroupBasicComponent,
}
