import { AuthUser } from './../../auth/models/authUser';

export class LocalStorageService {

    /**
     * Set item on localStorage.
     */
    public setItem(key: string, item: any) {
        return localStorage.setItem(key, JSON.stringify(item));
    }

    /**
     * Get item from localStorage.
     */
    public getItem(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    /**
     * Remove item from localStorage.
     */
    public removeItem(key: string) {
        return localStorage.removeItem(key);
    }

    /**
     * Set user data on localStorage.
     */
    public setUser(user: AuthUser | null) {
        if (user) {
            //sessionStorage.setItem('token', user.token.token);
            sessionStorage.setItem('user', JSON.stringify(user));
        }
    }

    public getUser() {
        return JSON.parse(sessionStorage.getItem('user'));
    }

    public getToken() {
        let token = sessionStorage.getItem('token');
        return token ? token : '';
    }

    /**
     * Remove the user data from localStorage.
     */
    public removeUser() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        return true;
    }

    public removeAll() {
        localStorage.clear();
        sessionStorage.clear();
    }

}
