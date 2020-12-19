import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/users/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLoggedUser: boolean = false

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.verifyLoggedUser();
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  // PRIVATE METHODS

  private verifyLoggedUser(): void {
    this.loginService.isLoggedUser.subscribe((isLogged: boolean) => {
      this.isLoggedUser = isLogged;
    })
  }

}
