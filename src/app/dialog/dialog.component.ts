import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { MaterialserviceService } from '../materialservice.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ["BrandNew","SecondHand","Refurbished"];
  productForm !: FormGroup;
  actionBtn : string = "Save"

  constructor(private formBuilder : FormBuilder,
    private api : MaterialserviceService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogref:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['',Validators.required],
      category:['',Validators.required],
      freshness:['',Validators.required],
      price:['',Validators.required],
      comment:['',Validators.required],
      date:['',Validators.required]
    });
    // console.log(this.editData);
    
    if(this.editData){
      this.actionBtn="Update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
      this.productForm.controls['date'].setValue(this.editData.date);
    }
    
  }
  addProduct(){
    debugger
    if(!this.editData){
     if(this.productForm.valid){
       this.api.postProduct(this.productForm.value)
       .subscribe({
         next:(res)=>{
           alert("Product added successfully");
           this.productForm.reset();
           this.dialogref.close('save');
         },
         error:()=>{
           alert("Error while adding the product")
         }
       })
     }
    }else{
      this.updateProduct()
    }
 }
     updateProduct(){
       this.api.putProduct(this.productForm.value,this.editData.id)
       .subscribe({
         next:(res)=>{
           alert("Product updated Successfully");
           this.productForm.reset();
           this.dialogref.close('update');

         },
         error:()=>{
           alert("Error while updating the record!!");
         }
       })
     }
    }