import { Component, OnInit } from '@angular/core';

import { AddCategoryService } from 'src/app/service/add-category.service';
import { AddBrandService } from 'src/app/service/add/add-brand.service';
import { StockinService } from 'src/app/service/stockin.service';

@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./stockin.component.css']
})
export class StockinComponent implements OnInit {


  constructor(private category: AddCategoryService,
    private brandService: AddBrandService,
    private stockService: StockinService) {

  }
 

  public catList = [{
    catId:0,
    categoryName:'',
    categoryDesc:'',
    addingDate:''
  }]

  public brandList = [{
    brandId:0,
    brandName:''
  }]

  ngOnInit(): void {

    this.category.getCategory().subscribe(
      (data: any) => {

        console.log("list is that : "+data);
        this.catList = data;
        console.log("Category List is : "+this.catList)

      
      }
    )

    // this.brandService.brandList().subscribe(
    //   (data: any) => {
    //     this.brandList = data;
    //     console.log(this.brandList);
    //   }
    // )


    // if(this.catList!=null){
    // this.getBrandListByCategory(this.stock.categoryName.catId);
    // }


    //this.getBrandListByCategory(2);
    
  }

  public stock = {

    brandName:'',
    categoryName:'',
    productName:'',
    totalProduct: 0,
    unitPrice: 0.0,
    totalProductPrice: 0.0,
    productDescription: '',
    unitSellingPrice: 0.0,
    shopProductAmount: 0,
    shopShelfNo: '',
    shopShelfLevelNo: '',
    wearHouseProductAmount: 0,
    wearHouseShelfNo: '',
    wearHouseShelfLevelNo: '',
    stockInDate: Date,
    stockInBy: ''
  }


    productPrice(){

      this.stock.totalProductPrice=this.stock.totalProduct*this.stock.unitPrice;
      this.stock.wearHouseProductAmount=this.stock.totalProduct-this.stock.shopProductAmount;
  }




  
 getBrandByCategory(){

  this.stockService.getBrandByCategory(this.stock.categoryName).subscribe(
    (data:any)=>{

      this.brandList=data;
      console.log("brand Data load Successfully");
      console.log(data);
    },
    (error)=>{
      console.log("you get an error..");
      console.log(error);
    }
  )
 }



  stockIn() {

    this.stockService.addStock(this.stock).subscribe(
      (data) => {
        console.log(data)
        alert("save successfull..");
      },
      (error) => {
        console.log("You got an error..");
        console.log(error);
      })
  }

}
