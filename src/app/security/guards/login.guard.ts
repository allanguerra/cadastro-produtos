import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../../modules/users/services/login/login.service';
import { User } from '../../modules/users/models/user.model';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const loggedUser: User = this.loginService.getLoggedUser();
    return !!loggedUser;
  }

}
