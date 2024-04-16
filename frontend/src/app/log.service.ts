import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpClient: HttpClient) { }

  getUser() {
    this.httpClient.get("/maclog/").subscribe(data => {
      var resStr1 = JSON.stringify(data);
      var resJSON1 = JSON.parse(resStr1);
     // console.log("iii" + resStr1);
      var macd = resStr1;
      return macd;
    })
  }

  setUser(ipmac) {
    localStorage.setItem("serverlog", JSON.stringify(ipmac))
  }

  delUser() {
    localStorage.removeItem("serverlog");
  }
}
