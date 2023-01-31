import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  
  private _token?: string;
  constructor() { }

  set token(token: string) {
    localStorage.setItem('wine-token', token);
    this._token = token;
  }

  get token() {
    if (localStorage.getItem('wine-token') !== null) {
      this._token = localStorage.getItem('wine-token')!;
    }    
    return this._token!;
  }

  isLoggedIn() {
    return this.token != null;
  }

}
