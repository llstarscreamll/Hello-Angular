import * as app from './../actions/app';
import { Company } from './../models/company';

export class State {
    companyInfo: Company;
}

const initialState: State = {
    companyInfo: {
        name: 'WebApp',
        cc_year: '2017',
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