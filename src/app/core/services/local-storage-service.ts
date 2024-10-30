import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  private authToken: string="authToken";
  constructor() {

  }

  createToken(token: string): void{
    localStorage.setItem(this.authToken, token);
  }
  getToken(){
    return localStorage.getItem(this.authToken)
  }
  destroyToken(){
    localStorage.removeItem(this.authToken);
  }
}
