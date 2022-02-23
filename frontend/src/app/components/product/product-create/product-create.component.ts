import { Product } from './../product.model';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

    product: Product = {
    name: '',
    price: 0.00,
    autor: '',
    ano: 0

  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(){
    this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Operação executada com sucesso!')
    this.router.navigate(['/products'])
    })
    
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }

}
