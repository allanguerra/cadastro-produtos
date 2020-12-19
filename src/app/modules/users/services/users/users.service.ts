import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Array<User> = [];

  constructor() {
    this.users.push(new User('Allan Guerra', 'allan.guerra19@gmail.com', '1234'));
  }

  public registerUser(user: User): User | String {
    const registeredUser = this.users.filter((registered: User) => registered.email === user.email)[0];

    if(registeredUser) {
      return new String('Já existe usuário cadastrado com o e-mail informado!');
    }
    this.users.push(user);
    return user;
  }

  public getUserByEmail(email: string): User | String {
    const registeredUser = this.users.filter((registered: User) => registered.email === email);

    if(registeredUser.length <= 0) {
      return new String('Você ainda não esta registrado, faça seu registro para conseguir usar a aplicação!');
    }
    return registeredUser[0];
  }

}
