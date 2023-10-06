import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
 private billurl="https://localhost:7148/api/Billings"
  constructor(private http:HttpClient) {

   }
  public getBillings():Observable<bill[]>{
    return this.http.get<bill[]>(this.billurl);
  }
  public updateBillings(bill:bill):Observable<bill[]>{
    return this.http.put<bill[]>(this.billurl, bill);
  }
  public deleteBillings(bill:bill):Observable<bill[]>{
    return this.http.delete<bill[]>(`${this.billurl}/${bill.orderId}`);
  }

  public createBillings(bill:bill):Observable<bill[]>{
    return this.http.post<bill[]>(this.billurl, bill);
  }
}
