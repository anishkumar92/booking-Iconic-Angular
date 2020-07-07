import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthernticated = false;
  private _userId = 'abc';

  get userIsAuthernticated() {
    return this._userIsAuthernticated;
  }

  get userId() {
    return this._userId;
  }

  constructor() {}

  login() {
    this._userIsAuthernticated = true;
  }

  logout() {
    this._userIsAuthernticated = false;
  }
}
