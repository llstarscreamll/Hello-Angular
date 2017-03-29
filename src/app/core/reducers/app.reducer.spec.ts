import { reducer } from './app.reducer';
import * as actions from './../actions/app.actions';

describe('App Reducers', () => {

  it('should return default state on GET_APP_DATA_SUCCESS action', () => {
    let actual = reducer(undefined, new actions.GetAppDataAction());
    let expected = {
      companyInfo: {
        fullname: 'WebApp',
        short_name: 'App',
        big_name: 'Web',
        small_name: 'App',
        cc_year: '2017',
        website: 'www.google.com'
      }
    };

    expect(actual).toEqual(expected);
  });

});
