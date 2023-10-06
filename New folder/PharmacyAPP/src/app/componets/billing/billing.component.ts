import { Component, EventEmitter, Input, Output } from '@angular/core';
import { bill } from 'src/app/models/bill';
import { BillingService } from 'src/app/services/billing.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  heretoEdit?:bill;
 bill:bill[]=[];
@Input() bills?: bill;
@Output() billadded=new EventEmitter<bill[]>();
constructor(private billingService:BillingService){}
updateProduct(bill: bill){
  this.billingService
  .updateBillings(bill)
  .subscribe((b:bill[]) =>this.billadded.emit(b));
}
deleteProduct(bill: bill){
  this.billingService
  .deleteBillings(bill)
  .subscribe((b:bill[]) =>this.billadded.emit(b));
}
createProduct(bill: bill){
  this.billingService
  .createBillings(bill)
  .subscribe((b:bill[]) =>this.billadded.emit(b));
}
editBill(bill:bill){
  this.heretoEdit=bill;
}


}
