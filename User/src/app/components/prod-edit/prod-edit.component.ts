import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent {

  @Input() products?:Product;
  @Output() productsChanged = new EventEmitter<Product[]>();
  constructor(private userService:UserService){}

  updateProduct(prod: Product){
    this.userService
    .updateProduct(prod)
    .subscribe((prods:Product[]) =>this.productsChanged.emit(prods));
  }
  deleteProduct(prod: Product){
    this.userService
    .deleteProduct(prod)
    .subscribe((prods:Product[]) =>this.productsChanged.emit(prods));
  }
  createProduct(prod: Product){
    this.userService
    .createProduct(prod)
    .subscribe((prods:Product[]) =>this.productsChanged.emit(prods));
  }

}
