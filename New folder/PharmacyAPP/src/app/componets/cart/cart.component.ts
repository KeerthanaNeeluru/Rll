import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { bill } from 'src/app/models/bill';
import { BillingService } from 'src/app/services/billing.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[];
  totalCost = this.cartService.getTotalCost();
  heretoEdit:any;
  bill:bill[]=[]
  constructor(private cartService: CartService,private billService: BillingService) {
    this.cartItems = this.cartService.getCartItems();
    this.totalCost = 0; 
  }
  
  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + (item.productPrice * (item.quantity || 1)), 0);
  }
  calculateTotalCost(): void {
    this.totalCost = this.cartService.getTotalCost();
  }
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }
  initNewBill(){
    this.heretoEdit=new bill();
  }

  updateBill(bill:bill[]){
    this.bill = bill;
  }
  editBill(bill:bill){
    this.heretoEdit=bill;
  }

  ngOnInit():void{
    console.log("Inside UserDisplayComponent initialization");
      
    this.billService.getBillings().subscribe((res:bill[])=>{
      this.bill = res;
      console.log(this.bill.length);
      
      res.forEach(p => {
        console.log(p.address);
        
      });
  
    });
  }
}
