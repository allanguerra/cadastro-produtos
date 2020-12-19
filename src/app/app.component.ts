import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/users/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  public ngOnInit() {
    this.redirectUser();
  }

  // PRIVATE METHODS

  private redirectUser(): void {
    if(!this.loginService.getLoggedUser()) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['produtos/novo']);
    }
  }
}
