import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<Product> = [];

  constructor() {
    this.products.push(new Product(uuidv4(), 'Cerveja Baden Baden - IPA', 10, '12,99'));
    this.products.push(new Product(uuidv4(), 'Snack Doritos Queijo Nacho', 14, '14,49'));
    this.products.push(new Product(uuidv4(), 'Barra de Chocolate Nestle Duo', 38, '4,99'));
  }

  public registerProduct(product: Product): Product | String {
    if(product.id) {
      const storedProduct = this.getProductById(product.id);
      if(!(storedProduct instanceof String)) {
        return new String('O produto já está cadastrado!');
      }
    }

    product.id = uuidv4();
    this.products.push(product);

    return product;
  }

  public getProductById(id: string): Product | String {
    const storedProduct = this.products.filter((product: Product) => product.id === id);
    if(storedProduct.length <= 0) {
      return new String('Produto não encontrado!');
    }

    return storedProduct[0];
  }

  public getAllProducts(): Array<Product> {
    return this.products;
  }

  public updateProduct(id: string, product: Product): Product | String {

    const storedProduct = this.getProductById(id);

    if(storedProduct instanceof String) {
      return storedProduct;
    }

    const productIndex = this.products.indexOf(storedProduct);
    const updatedProduct = product;
    updatedProduct.id = id;

    this.products.splice(productIndex, 1, updatedProduct);
    return updatedProduct;
  }

  public deleteProduct(id: string): boolean | String {
    const product = this.products.filter((product: Product) => product.id === id)[0];
    if(!product) {
      return new String('Produto não encontrado!');
    }
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);

    return true;
  }
}
