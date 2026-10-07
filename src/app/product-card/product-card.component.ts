import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() item!: Product;
  @Output() addToCart = new EventEmitter<number>();

  quantity = 1;
  readonly stars = [0, 1, 2, 3, 4];
  readonly minQuantity = 1;
  readonly maxQuantity = 99;

  get formattedRating(): string {
    return Number(this.item?.rating ?? 0).toFixed(1);
  }

  decrease(): void {
    if (this.quantity <= this.minQuantity) {
      return;
    }

    this.quantity -= 1;
  }

  increase(): void {
    if (this.quantity >= this.maxQuantity) {
      return;
    }

    this.quantity += 1;
  }

  onAdd(): void {
    this.addToCart.emit(this.quantity);
  }
}
