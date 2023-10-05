import { Component, ElementRef, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent {
  productPrice: number = 0;
  cartItems: { product: any, quantity: number }[] = [];
  total: number = 0;
  products:Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private shoppingCartService: ShoppingcartService // Inject the ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.productPrice = +params['productPrice'];
    });

    // Retrieve cart items from the shopping cart service
    this.cartItems = this.shoppingCartService.getCartItems();

    // Calculate the total using the shopping cart service
    this.total = this.calculateTotal();
  }

  calculateTotal(): number {
    let total = 0;

    for (const item of this.cartItems) {
      total += item.product.price * item.quantity;
    }

    return total;
  }
}
