import { Control } from './control';

type GroupTypes = "group" | "array-group";

export interface Group {
  type: GroupTypes;
  visibility: {};
  _options_: Object;
  controls: {};
  group?: any;
}
