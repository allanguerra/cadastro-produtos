import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/modules/users/services/login/login.service';
import { ProductsService } from 'src/app/modules/products/services/products/products.service';
import { Product } from 'src/app/modules/products/models/product.model';

@Component({
  selector: 'app-products-register',
  templateUrl: './products-register.component.html',
  styleUrls: ['./products-register.component.scss']
})
export class ProductsRegisterComponent implements OnInit {

  public readonly MASK = { mask: Number, scale: 2, thousandsSeparator: '.', padFractionalZeros: true, NormalizeZeros: true, radix: ',' };

  public productForm: FormGroup;
  public submitting: boolean = false;

  public action: string = '';
  public actionComplement: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.buildProductForm();
    this.setCurrentAction();
  }

  public validateInput(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  public submit(): void {
    this.submitting = true;
    const product: Product = this.productForm.value;
    let storedProduct: any;

    if(this.action === 'Novo') {
      storedProduct = this.productService.registerProduct(product);
    } else {
      const productId = this.route.snapshot.params.id;
      storedProduct = this.productService.updateProduct(productId, product);
    }

    if(storedProduct instanceof String) {
      alert(storedProduct);
    } else {
      this.router.navigate(['produtos/lista']);
    }

    this.submitting = false;
    this.productForm.reset();
  }

  // PRIVATE METHODS

  private buildProductForm(): void {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      quantity: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      value: [null, [Validators.required]]
    });
  }

  private setCurrentAction(): void {
    if (this.route.snapshot.url[0].path === 'novo') {
      this.action = 'Novo';
      this.actionComplement = 'Produto';
    } else {
      this.action = 'Editando';
      this.getProduct();
    }
  }

  private getProduct(): void {
    const productId = this.route.snapshot.params.id;
    const product: any = this.productService.getProductById(productId);
    if(product instanceof String) {
      alert(product);
      this.router.navigate(['produtos/lista']);
    }
    this.actionComplement = `| ${product.name}`;
    this.productForm.patchValue(product);
  }
}
