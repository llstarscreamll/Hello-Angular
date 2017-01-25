import { reducer } from './auth';
import * as actions from './../actions/auth';

describe('Auth reducer', () => {

    it('should handle LOGIN action', () => {
        let actual = reducer(undefined, new actions.LoginAction({email: 'foo', password: 'bar'}));
        let expected = {
            loggedIn: false,
            loading: true, // only this changes
            user: null,
            errors: {},
            APImsg: ''
        };
        expect(actual).toEqual(expected);
    });

    it('should handle LOGIN_SUCCESS action', () => {
        let user = {
            id: 1,
            visitor_id: 1,
            social_id: 'social_id',
            token: 'auth-token',
            name: 'John Doe',
            nickname: 'john-doe',
            gender: 'm',
            email: 'john@doe.com',
            roles: {},
            birth: 1,
            confirmed: true,
            created_at: {},
            social_auth_provider: '',
            social_avatar: {},
        };
        let actual = reducer(undefined, new actions.LoginSuccessAction(user));
        let expected = {
            loggedIn: true,
            loading: false,
            user: user,
            errors: {},
            APImsg: ''
        };
        expect(actual).toEqual(expected);
    });

    it('should handle LOGOUT_SUCCESS action', () => {
        let actual = reducer(undefined, new actions.LogoutSuccessAction(null));
        let expected = {
            loggedIn: false,
            loading: false, // only this changes
            user: null,
            errors: {},
            APImsg: ''
        };
        expect(actual).toEqual(expected);
    });

    it('should handle TOGGLE_LOADING action', () => {
        let actual = reducer(undefined, new actions.ToggleLoadingAction(true));
        expect(actual.loading).toEqual(true);

        actual = reducer(undefined, new actions.ToggleLoadingAction(false));
        expect(actual.loading).toEqual(false);
    });

    it('should handle FLASH_ERROR action', () => {
        let APIerror = {
            debug: {},
            errors: { email: ['error'] },
            message: 'foo',
            status_code: 1
        };
        let actual = reducer(undefined, new actions.FlashErrors(APIerror));

        expect(actual.errors).toEqual(APIerror.errors);
        expect(actual.APImsg).toEqual(APIerror.message);
        expect(actual.loading).toEqual(false);
    });

});