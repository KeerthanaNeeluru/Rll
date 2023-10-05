import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.css']
})
export class ProductUserComponent {
  
 searchText:any; 
products : Product[] = [];
constructor(private userService: UserService,
  private shoppingcartServices:ShoppingcartService,
  private router:Router){}
ngOnInit():void{
  console.log("Inside UserDisplayComponent initialization");
    
  this.userService.getProduct().subscribe((res:Product[])=>{
    this.products = res;
    console.log(this.products.length);
    
    res.forEach(p => {
      console.log(p.productName);
      
    });

  });


}
addToCart(product: any): void {
  this.shoppingcartServices.addToCart(product);
}

// Calculate the total price of items in the cart
getTotalPrice(): number {
  const cartItems = this.shoppingcartServices.getCartItems();
  let total = 0;

  for (const item of cartItems) {
    total += item.product.price * item.quantity;
  }

  return total;
}

buyNow(product: any): void {
  // Create an order object with the selected product and quantity
  const order = {
    product: product,
    quantity: 1 // You can adjust the quantity as needed
  };
  const productPrice = product.price;

  this.router.navigate(['checkout-address'], {
    queryParams: {
      productPrice: productPrice
    }
  });

  // Send the order object to the server or perform any necessary actions for a direct purchase
  // For this example, we'll just log the order to the console
  console.log('Buy Now:', order);
}
}
