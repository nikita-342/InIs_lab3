import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  @Output() addToCart = new EventEmitter<{ name: string; quantity: number }>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getData();
  }

  onAddToCart(product: Product, quantity: number): void {
    this.addToCart.emit({ name: product.name, quantity });
  }
}
