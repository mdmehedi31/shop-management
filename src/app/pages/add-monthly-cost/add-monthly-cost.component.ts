import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddMonthlyCostService } from 'src/app/service/cost/add-monthly-cost.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-monthly-cost',
  templateUrl: './add-monthly-cost.component.html',
  styleUrls: ['./add-monthly-cost.component.css']
})
export class AddMonthlyCostComponent implements OnInit{


  constructor(private monthlyCostService : AddMonthlyCostService,
    private snack: MatSnackBar){}


  public monthlyC = {
    mcId:0,
    internetPayment:0,
    guardSalary:0,
    employeeSalary:0,
    otherCost:0,
    monthName:'',
    totalCost:0,
    addBy:'',
    addingDate:new Date()
  }

  public monthlyCostList=[{
    mcId:0,
    internetPayment:0,
    guardSalary:0,
    employeeSalary:0,
    otherCost:0,
    monthName:'',
    totalCost:0,
    addBy:'',
    addingDate:''
  }]
  ngOnInit(): void {

    this.getMonthlyCostList();
  }


  monthName=['January','February','March','April','May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ]



  getMonthlyCostList(){

    this.monthlyCostService.getMonthlyCostList().subscribe(
      (data:any)=>{

        this.monthlyCostList=data;
        console.log(this.monthlyCostList)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  totalMonthCost(){
    this.monthlyC.totalCost=this.monthlyC.internetPayment+this.monthlyC.guardSalary+
                        this.monthlyC.employeeSalary+this.monthlyC.otherCost;
  }
  addMonthlyCost(){

   
    if(this.monthlyC.monthName.trim()=='' || this.monthlyC.monthName==null){
      
      this.snack.open('Monthe Name Required..','',{

        duration:3000,
      });

      return;
    }

    this.monthlyCostService.addMonthlyCost(this.monthlyC).subscribe(

      (data)=>{
        console.log(data);
      
        Swal.fire('Success','Save Successfully','success');
       // alert("save successfully");
       this.monthlyC.internetPayment=0,
       this.monthlyC.guardSalary=0,
       this.monthlyC.employeeSalary=0,
       this.monthlyC.otherCost=0,
       this.monthlyC.totalCost=0,
       this.monthlyC.monthName='',
       this.monthlyC.addBy='',
       this.monthlyC.addingDate=new Date();
       this.getMonthlyCostList();
        
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Got Error','error');
      }
    );
    
  }
}
