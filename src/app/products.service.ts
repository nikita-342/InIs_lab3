import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Modern UI kit',
      description: 'Modern interface components for web ...',
      price: 29,
      imageUrl: 'assets/product-preview.svg',
      rating: 5.0,
      reviews: 127
    },
    {
      id: 2,
      name: 'Icon Pack Pro',
      description: '800+ outlined icons for apps and sites',
      price: 19,
      imageUrl: 'assets/product-icons.svg',
      rating: 4.9,
      reviews: 84
    },
    {
      id: 3,
      name: 'Landing Kit',
      description: 'Ready-made sections for product pages',
      price: 39,
      imageUrl: 'assets/product-landing.svg',
      rating: 4.8,
      reviews: 56
    },
    {
      id: 4,
      name: 'Mockup Bundle',
      description: 'Device and presentation mockups pack',
      price: 24,
      imageUrl: 'assets/product-mockups.svg',
      rating: 5.0,
      reviews: 203
    }
  ];

  getData(): Product[] {
    return this.products;
  }
}
