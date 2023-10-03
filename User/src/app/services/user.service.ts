import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="https://localhost:7115/api/UserDetails"

  
  constructor(private http:HttpClient) { 
  }

  public  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
    
  }
  public  updateUser(user:User) : Observable<User[]>{
    return this.http.put<User[]>(this.url,user);
    
  }
  public  deleteUser(user:User) : Observable<User[]>{
    return this.http.delete<User[]>(`${this.url}/${user.id}`);
    
  }
  public  createUser(user:User) : Observable<User[]>{
    return this.http.post<User[]>(this.url,user);
    
  }

  private produrl="http://localhost:5276/api/ProductDetails"

  public getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.produrl);

  }

  public  updateProduct(prod:Product) : Observable<Product[]>{
    return this.http.put<Product[]>(this.produrl,prod);
    
  }
  public  deleteProduct(prod:Product) : Observable<Product[]>{
    return this.http.delete<Product[]>(`${this.produrl}/${prod.productId}`);
    
  }
  public  createProduct(prod:Product) : Observable<Product[]>{
    return this.http.post<Product[]>(this.produrl,prod);
    
  }
 
}
