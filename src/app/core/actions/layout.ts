import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  OPEN_SIDENAV: type('[Layout] Open Sidenav'),
  CLOSE_SIDENAV: type('[Layout] Close Sidenav'),
  OPEN_CONTROL_SIDEBAR: type('[Layout] Open Control Sidebar'),
  CLOSE_CONTROL_SIDEBAR: type('[Layout] Close Control Sidebar')
};

// Actions for main sidebar
export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}

// Actions for control sidebar
export class OpenControlSidenavAction implements Action {
  type = ActionTypes.OPEN_CONTROL_SIDEBAR;
}

export class CloseControlSidebarAction implements Action {
  type = ActionTypes.CLOSE_CONTROL_SIDEBAR;
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | OpenControlSidenavAction
  | CloseControlSidebarAction;