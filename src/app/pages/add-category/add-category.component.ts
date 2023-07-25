import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddCategoryService } from 'src/app/service/add-category.service';
import { __makeTemplateObject } from 'tslib';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


     constructor(private categoryService : AddCategoryService,
      private snack: MatSnackBar
      ){}

     public category={
      catId:0,
      categoryName:'',
      categoryDesc:'',
      addingDate: new Date()
     }

     
     

    // displayedColumns: string[]=['Category Name','Category Description','Adding Date']
     public categoryList=[{
      catId:0,
      categoryName:'',
      categoryDesc:'',
      addingDate:''
     }]

    ngOnInit():void{

      this.getCategoryList();
      
    }


    getCategoryList(){
      this.categoryService.getCategory().subscribe(
        (data : any)=>{
          this.categoryList=data;
          console.log("list is : "+this.categoryList)
          console.log("data list is : "+data);
        },
        (error)=>{
          console.log("your error is : "+error);
        }
      )
    }

    // /if(this.quiz.title.trim()=='' || this.quiz.title==null){
    //   this.snack.open('Title is required','',{
    //     duration: 3000,
    //   });
    //   return;/
   

    formSubmit(){
      if(this.category.categoryName.trim()=='' || this.category.categoryName==null){
         this.snack.open('Category Name is Required.','',{
          duration:3000,
         });
         return;
      }

      if(this.category.categoryDesc.trim()==''|| this.category.categoryDesc==null){
        this.snack.open('Category Description is Required.','',{
          duration:3000,
          verticalPosition:'top'
        });
        return;
      }

      // if(this.category.addingDate.trim()==''|| this.category.addingDate==null){
      //   this.snack.open('Date is Required..','',{
      //     duration:3000,
      //   });
      //   return;
      // }
     
      this.categoryService.addCategory(this.category).subscribe(
        (data)=>{
          //success
          console.log(data);
          this.category.categoryName="";
          this.category.categoryDesc="";
          this.getCategoryList();

          Swal.fire('Success','Category Added Successfully','success');
  
        },
        (error)=>{
            console.log(error);
            Swal.fire('Error','Got an Error','error');
        }
      );
    }


    deleteCategory(catId:any){

      Swal.fire({
        icon:'info',
        title:'are you sure?',
         confirmButtonText: 'Delete',
         showCancelButton: true
        }
        ).then((result)=>{
           if(result.isConfirmed){
            this.categoryService.deleteCategory(catId).subscribe(
              (data:any)=>{
                console.log('this is from data part..');
                this.categoryList=this.categoryList.
                filter((categoryService)=> categoryService.catId!=catId);
                Swal.fire('Success','Category Delete','success');
              },(error:any)=>{

                Swal.fire('Error!!','Deleting Error','error');
                console.log("Error is "+error);
                console.log(error)
                console.log("Category Id is : "+catId)
              }
            )
           }
        });
        
    }
}
