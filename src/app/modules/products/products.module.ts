import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRegisterComponent } from './components/products-register/products-register.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsRegisterComponent,
    ProductCardComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
