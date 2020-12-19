import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product.model';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Array<Product> = [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public addProduct(): void {
    this.router.navigate(['produtos/novo']);
  }

  public update(product: Product): void {
    this.router.navigate(['produtos/editar', product.id]);
  }

  public destroy(product: Product): void {
    if(confirm('Excluir este produto?')) {
      this.productsService.deleteProduct(product.id);
      this.getProducts();
    }
  }

  // PRIVATE METHODS

  private getProducts(): void {
    const storedProducts = this.productsService.getAllProducts();
    if(storedProducts instanceof String) {
      alert(storedProducts)
    } else {
      this.products = storedProducts;
    }
  }

}
