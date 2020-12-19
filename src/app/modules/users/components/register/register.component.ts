import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/modules/users/services/users/users.service';
import { LoginService } from 'src/app/modules/users/services/login/login.service';
import { Login } from 'src/app/modules/users/models/login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submitting: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usersService: UsersService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  public goLogin(): void {
    this.router.navigate(['login']);
  }

  public validateInput(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  public submit(): void {
    this.submitting = true;

    const newUser = this.usersService.registerUser(this.registerForm.value);

    if(newUser instanceof String) {
      alert(newUser);
    } else {
      alert('Seu cadastro foi concluido com sucesso!');
      const loggedUser = this.loginService.login(new Login(newUser.email, newUser.password));
      if(loggedUser instanceof String) {
        alert(loggedUser);
      } else {
        this.router.navigate(['produtos/lista']);
      }
    }

    this.submitting = false;
    this.registerForm.reset();
  }

  // PRIVATE METHODS

  private buildRegisterForm(): void {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

}
