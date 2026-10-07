import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  cartCount = 0;
  cartMessage = '';
  private messageTimer?: ReturnType<typeof setTimeout>;

  handleAddToCart(event: { name: string; quantity: number }): void {
    this.cartCount += event.quantity;
    const word = event.quantity === 1 ? 'товар' : event.quantity < 5 ? 'товара' : 'товаров';
    this.cartMessage = `${event.name}: +${event.quantity} ${word}`;

    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
    }

    this.messageTimer = setTimeout(() => {
      this.cartMessage = '';
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
    }
  }
}
