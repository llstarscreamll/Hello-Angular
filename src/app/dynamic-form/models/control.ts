import { FormGroup } from '@angular/forms';
import { ControlConfig } from './control-config';

export interface Control {
  config: ControlConfig;
  group: FormGroup;
  disabled: boolean;
  data?: {};
  errors?: {};
}
