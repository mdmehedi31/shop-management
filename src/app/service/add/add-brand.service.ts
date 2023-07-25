import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';



@Injectable({
  providedIn: 'root'
})
export class AddBrandService {

  constructor(private http: HttpClient) { }


 
  public addBrand(brand: any){

    let formData = new FormData();

    //console.log("brand name is : "+brand.brandName+", category entity is : "+brand.catNameId.catId);
    formData.append("brand", JSON.stringify(brand))
    formData.append("image",brand.attachmentEntity)

    //console.log("stringify object is : "+JSON.stringify(brand));
    console.log("from data object is : "+formData.getAll);
    return this.http.post(`${baseUrl}/brand/add-brand`,formData);
    
  }

  public brandList(){
    return this.http.get(`${baseUrl}/brand/get-all`)
  }

 
}
