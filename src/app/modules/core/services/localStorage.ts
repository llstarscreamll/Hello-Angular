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
    public setUser(user: AuthUser) {
        this.setItem('token', user.token);
        this.setItem('user', user);
    }

    /**
     * Remove the user data from localStorage.
     */
    public removeUser() {
        this.removeItem('token');
        this.removeItem('user');
        return true;
    }

}
