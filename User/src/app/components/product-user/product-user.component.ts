import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.css']
})
export class ProductUserComponent {

 searchText:any; 
products : Product[] = [];
constructor(private userService: UserService){}
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
}
