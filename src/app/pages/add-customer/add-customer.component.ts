import { Component, OnInit } from '@angular/core';
import { AddCustomerService } from 'src/app/service/add/add-customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {



  constructor(private customerService: AddCustomerService){}

  ngOnInit(): void {
  }

  public customer={

  shopName:'',
  ownerName:'',
  shopLocation:'',
  phoneNo1:'',
  phoneNo2:'',
  addingDate:'',
  addBy:''
  }


  addCustomer(){

    console.log(this.customer);
    this.customerService.addCustomer(this.customer).subscribe(

      
      (data)=>{
        console.log(data);
        alert("save successfull");
        this.customer.shopName="",
        this.customer.ownerName="",
        this.customer.shopLocation="",
        this.customer.phoneNo1="",
        this.customer.phoneNo2="",
        this.customer.addingDate="",
        this.customer.addBy=""
      },
      (error)=>{
        console.log(error);
      }
    );


  }
}
