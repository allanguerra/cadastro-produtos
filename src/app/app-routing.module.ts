import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/security/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/users/users.module').then(module => module.UsersModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./modules/products/products.module').then(module => module.ProductsModule),
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
