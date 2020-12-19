import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../users/users.service';
import { Login } from '../../models/login.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedUser: Subject<boolean> = new Subject<boolean>();

  private loggedUser: User;

  constructor(
    private userService: UsersService
  ) { }

  public login(login: Login): boolean | String {
    const loggedUser: User | String = this.userService.getUserByEmail(login.email);

    if(loggedUser instanceof String) {
      return loggedUser;
    }

    if(!(loggedUser.password === login.password)) {
      return new String('E-mail ou senha inválidos');
    }

    this.setLoggedUser(true);
    this.loggedUser = loggedUser;
    return true;
  }

  public logout(): void {
    this.loggedUser = null;
    this.setLoggedUser(false);
  }

  public getLoggedUser(): User {
    return this.loggedUser;
  }

  // PRIVATE METHODS

  private setLoggedUser(isLogged: boolean): void {
    this.isLoggedUser.next(isLogged);
  }
}
