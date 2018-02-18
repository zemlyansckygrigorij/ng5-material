import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {User} from "./github/user";

@Injectable()
export class GithubServiceService {

  constructor(private http: Http) { }
  get(userName: string): Observable<any>{

    return this.http.get(
      `https://api.github.com/users/${userName}?client_id=e6f4bb49cec029d18567&client_secret=8caec15ad88c0e47284ab097e06705976f656925`
    // 'https://api.github.com/users/'+userName
    )
  .map((response)=>{
        return response.json() as User;
      })
      ;
  }

}
