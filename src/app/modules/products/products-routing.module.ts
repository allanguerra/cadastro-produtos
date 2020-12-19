import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRegisterComponent } from './components/products-register/products-register.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ProductsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'novo',
    component: ProductsRegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'editar/:id',
    component: ProductsRegisterComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'lista'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
