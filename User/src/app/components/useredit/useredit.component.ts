import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent {
@Input() user?:User;
@Output() userChanged = new EventEmitter<User[]>();

@Input() products?:Product;
@Output() productsChanged = new EventEmitter<Product[]>();
constructor(private userService:UserService){}
ngOnInit(): void {}
updateUser(user: User){
  this.userService
  .updateUser(user)
  .subscribe((users:User[]) =>this.userChanged.emit(users));
}
deleteUser(user: User){
  this.userService
  .deleteUser(user)
  .subscribe((users:User[]) =>this.userChanged.emit(users));
}
createUser(user: User){
  this.userService
  .createUser(user)
  .subscribe((users:User[]) =>this.userChanged.emit(users));
}

}
