import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {
  products:Product[]=[];
  heretoEdit?:Product;
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
updateProductList(prod:Product[]){
  this.products = prod;
}
initNewProduct(){
  this.heretoEdit=new Product();
}
editProduct(product:Product){
  this.heretoEdit=product;
}

}