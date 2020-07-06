import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthernticated = false;

  get userIsAuthernticated() {
    return this._userIsAuthernticated;
  }

  constructor() {}

  login() {
    this._userIsAuthernticated = true;
  }

  logout() {
    this._userIsAuthernticated = false;
  }
}
