import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMonthlyCostService } from 'src/app/service/cost/add-monthly-cost.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-monthly-cost',
  templateUrl: './update-monthly-cost.component.html',
  styleUrls: ['./update-monthly-cost.component.css']
})
export class UpdateMonthlyCostComponent implements OnInit {


  constructor(private monthService: AddMonthlyCostService,
    private route: ActivatedRoute,
    private router: Router) {

  }


  mcId = 0;
  monthlyCost: any;


  monthName = ['January', 'February', 'March', 'April', 'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]




  ngOnInit(): void {

    this.mcId = this.route.snapshot.params['mcId'];

    this.monthService.getMonthlyCostById(this.mcId).subscribe(
      (data) => {
        this.monthlyCost = data;
        console.log("your data is " + this.monthlyCost);
        // Swal.fire('Success', 'get data successfully', 'success');
      },
      (error) => {
        console.log(error);
      }
    );
  }


  updateTotalMonthCost() {
    this.monthlyCost.totalCost = this.monthlyCost.internetPayment + this.monthlyCost.guardSalary +
                              this.monthlyCost.employeeSalary + this.monthlyCost.otherCost;
  }


  updateMonthlyCost() {


    this.monthService.updateMonthlyCost(this.monthlyCost).subscribe(
      (data)=>{

      
        Swal.fire('Success','Update Successfully','success').then((e)=>
        this.router.navigate(['/add-monthly-cost'])
        );

        this.monthlyCost.internetPayment=0,
        this.monthlyCost.guardSalary=0,
        this.monthlyCost.employeeSalary=0,
        this.monthlyCost.otherCost=0,
        this.monthlyCost.totalCost=0,
        this.monthlyCost.monthName='',
        this.monthlyCost.addingDate='',
        this.monthlyCost.addBy=''
      },
      (error)=>{
        Swal.fire('Error',error,'error');
      }
    
    )
  }

}
