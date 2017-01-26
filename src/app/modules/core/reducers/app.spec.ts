import { reducer } from './app';
import * as actions from './../actions/app';
import { TEST_USER } from './../tests/util';

describe('App Reducers', () => {

  it('should return default state on GET_APP_DATA_SUCCESS action', () => {
    let actual = reducer(undefined, new actions.GetAppDataAction());
    let expected = {
      companyInfo: {
        name: 'WebApp',
        cc_year: '2017',
        website: 'www.google.com'
      }
    };

    expect(actual).toEqual(expected);
  });

});
