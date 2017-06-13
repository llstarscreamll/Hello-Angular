import { AuthUser } from './../../auth/models/authUser';
import { AccessToken } from './../../auth/interfaces/accessToken';

export class LocalStorageService {

  /**
   * Set item on localStorage.
   */
  public set(key: string, item: any) {
    return localStorage.setItem(key, JSON.stringify(item));
  }

  /**
   * Get item from localStorage.
   */
  public get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * Remove item from localStorage.
   */
  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Set user data on localStorage.
   */
  public setUser(user: AuthUser) {
    if (user) {
      //localStorage.setItem('token', user.token.token);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  /**
   * Get the user from local storage.
   */
  public getUser(): AuthUser {
    return Object.assign(new AuthUser, JSON.parse(localStorage.getItem('user')));
  }

  /**
   * Remove the user data from localStorage.
   */
  public removeUser(): boolean {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return true;
  }

  public setToken(tokenData: AccessToken) {
    this.set('token_data', tokenData);
    localStorage.setItem('token', tokenData.access_token);
    localStorage.setItem('token_type', tokenData.token_type);
  }

  /**
   * Get the auth token.
   */
  public getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * Clear all from local and session storage
   */
  public clear(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

}
