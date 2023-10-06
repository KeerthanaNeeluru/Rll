import { Component } from '@angular/core';
import { bill } from 'src/app/models/bill';
import { BillingService } from 'src/app/services/billing.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
bill:bill[]=[];
heretoEdit?:any;
constructor(private billService: BillingService){}
ngOnInit() :void {
 this.billService.getBillings().subscribe((res:bill[])=>{
  this.bill = res;
  res.forEach(p => {
    console.log(p.orderId);
    
  });
 });
}
updateBills(bills:bill[]){
  this.bill = bills;
}
initNewBill(){
  this.heretoEdit=new bill();
}
editBill(bills:bill){
  this.heretoEdit=bills;
}
}
