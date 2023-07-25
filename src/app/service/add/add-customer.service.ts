import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {

  constructor(private http : HttpClient) { }



  public addCustomer(customer:any){

    return this.http.post(`${baseUrl}/add-customer/create`,customer);
  }
}
