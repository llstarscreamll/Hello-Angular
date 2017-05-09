import { ValidatorFn } from '@angular/forms';

export interface ControlConfig {
  name: string;
  type: string;
  label: string;
  // other options
  id?: string;
  placeholder?: string;
  value?: any;
  options?: { id: string | number, text: string }[];
  dynamicOptions?: any;
  step?: number;
  min?: number;
  max?: number;
  multiple?: boolean;
  // classes
  mainWrapperClass?: string;
  labelClass?: string;
  controlWrapperClass?: string;
  controlClass?: string;
  break?: boolean;
  visibility?: any;
  // this should be removed when the FormModelParser have the refactor for the search stuff
  controls?: any;
}
