import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Token} from "../interfaces/token.interface.js";

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
    private path: string ="http://localhost:3000/api/users/authenticate";

    constructor(private http: HttpClient) { }

    login(username: string, password: string):Observable<Token> {
        return this.http.post<Token>(this.path, {username: username, password: password})
    }
}