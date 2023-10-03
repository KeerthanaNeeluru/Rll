import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User';
  users:User[]=[];
  private url="https://localhost:7115/api/UserDetails"
  constructor(private userService: UserService){}
  
  ngOnInit():void{
    this.userService
    .getUsers()
    .subscribe((result:User[])=>{this.users=result;});
  }
}
