import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {
  users:User[]=[];
  products:Product[]=[];
  constructor(private userService: UserService){}
  heretoEdit?:User;


  
  ngOnInit():void{
    console.log("Inside UserDisplayComponent initialization");
    
    this.userService.getUsers().subscribe((result:User[])=>{
      this.users = result;
      console.log(this.users.length);
      
      result.forEach(user => {
        console.log(user.userName);
        
      });
    });
    
  }

updateUserList(users:User[]){
  this.users = users;
}

  initNewUser(){
    this.heretoEdit=new User();
  }
  editUser(user:User){
    this.heretoEdit=user;
  }
}
//results =>{
  //console.log("Results : " + results);
//}