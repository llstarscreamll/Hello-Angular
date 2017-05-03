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
  // classes
  mainWrapperClass?: string;
  labelClass?: string;
  controlWrapperClass?: string;
  controlClass?: string;
  break?: boolean;
  visibility?: any;
}
