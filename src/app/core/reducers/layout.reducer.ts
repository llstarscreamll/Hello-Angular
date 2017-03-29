import * as layout from '../actions/layout.actions';

export interface State {
  showSidenav: boolean;
  showControlSidebar: boolean;
}

const initialState: State = {
  showSidenav: true,
  showControlSidebar: false
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false,
        showControlSidebar: state.showControlSidebar
      };

    case layout.ActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true,
        showControlSidebar: state.showControlSidebar
      };
    
    case layout.ActionTypes.OPEN_CONTROL_SIDEBAR:
      return {
        showSidenav: state.showSidenav,
        showControlSidebar: true
      };
    
    case layout.ActionTypes.CLOSE_CONTROL_SIDEBAR:
      return {
        showSidenav: state.showSidenav,
        showControlSidebar: false
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getShowControlSidebar = (state: State) => state.showControlSidebar;
