import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StockinService {

  constructor(private http : HttpClient) { }

  //stock in

  public addStock(stockIn: any){

    return this.http.post(`${baseUrl}/stock-in/add-stock`,stockIn);
  }

// get Brand by cat id 
  public getBrand(catId:Object){
    return this.http.get(`${baseUrl}/brand/get-category-brand/${catId}`);
  }
  

  // Get Brand By Category Name;

  public getBrandByCategory(categoryName:any){
    return this.http.get(`${baseUrl}/brand/get-brand-by-category/${categoryName}`)
  }
}
