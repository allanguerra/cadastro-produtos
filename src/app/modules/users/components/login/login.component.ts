import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitting: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.buildLoginForm();
  }

  public goRegister(): void {
    this.router.navigate(['registrar']);
  }

  public validateInput(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  public submit(): void {
    this.submitting = true;
    const isLoggedUser = this.loginService.login(this.loginForm.value);
    if(isLoggedUser instanceof String) {
      alert(isLoggedUser);
    } else if(isLoggedUser) {
      this.router.navigate(['produtos/lista']);
    } else {
      alert('E-mail ou senha inválidos');
    }
    this.submitting = false;
    this.loginForm.reset();
  }

  // PRIVATE METHODS

  private buildLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

}
