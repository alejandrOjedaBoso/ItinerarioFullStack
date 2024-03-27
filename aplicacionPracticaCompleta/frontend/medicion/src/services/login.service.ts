import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
    private path: string ="localhost:3000/api/users/authenticate";

    constructor(private http: HttpClient) { }

    login(username: string, password: string){
        return this.http.post(this.path, {username: username, password: password});
    }
}