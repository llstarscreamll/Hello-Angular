import { ValidatorFn } from '@angular/forms';

export interface ControlConfig {
  name: string;
  type: string;
  label: string;
  // other options
  placeholder?: string;
  value?: any;
  options?: string[];
  step?: number;
  min?: number;
  max?: number;
  // classes
  mainWrapperClass?: string;
  labelClass?: string;
  controlWrapperClass?: string;
  controlClass?: string;
}
