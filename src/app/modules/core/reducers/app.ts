import { createSelector } from 'reselect';
import * as app from './../actions/app';
import { Company } from './../models/company';

export class State {
    companyInfo: Company;
}

const initialState: State = {
    companyInfo: {
        name: 'webApp',
        cc_year: Date().toString(),
        website: 'www.google.com'
    }
}

export function reducer(state = initialState, action: app.Actions): State {

    switch(action.type) {

        case(app.ActionTypes.GET_APP_DATA_SUCCESS): {
            return {
                companyInfo: action.payload
            };
        }

        default: {
            return state;
        }

    }

}