import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  private cartItems: { product: any, quantity: number }[] = [];

  constructor() { }

  addToCart(product: any): void {
    const existingItem = this.cartItems.find(item => item.product === product);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: any): void {
    const index = this.cartItems.findIndex(item => item.product === product);

    if (index !== -1) {
      const item = this.cartItems[index];
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }

  getCartItems(): { product: any, quantity: number }[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
