import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getUser() {
    var user = localStorage.getItem("railUser");
    user = user == null ? null : JSON.parse(user);
    return user;
  }

  setUser(user) {
    localStorage.setItem("railUser", JSON.stringify(user));
  }

  delUser() {
    localStorage.removeItem("railUser");
  }
}
