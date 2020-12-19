import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input()
  public product: Product;

  @Output()
  public update: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  public destroy: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit(): void {
  }

  public updateProduct(): void {
    this.update.emit(this.product);
  }

  public destroyProduct(): void {
    this.destroy.emit(this.product);
  }

}
