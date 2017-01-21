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
     * Set user data on localStorage.
     */
    public setUser(user: AuthUser) {
        this.setItem('token', user.token);
        this.setItem('user', user);
    }

}
