import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms'
import { maincomponent } from './maincomponent.modal';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {

  formvalue !: FormGroup;
  emolyeeModelobj :maincomponent = new maincomponent();
  employeeDta ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;

  constructor(private formbuilder:FormBuilder,
    private apiservice : ApiserviceService ) { }

  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      // id:[''],
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      email:['', [Validators.required]],
      mobile:['', [Validators.required]],
      salary:['', [Validators.required]]
    })
    this.getAllEmployee();
  }

  clickAddEmployee(){
    this.formvalue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails(){
    this.emolyeeModelobj.firstName = this.formvalue.value.firstName;
    this.emolyeeModelobj.lastName = this.formvalue.value.lastName;
    this.emolyeeModelobj.email = this.formvalue.value.email;
    this.emolyeeModelobj.mobile = this.formvalue.value.mobile;
    this.emolyeeModelobj.salary = this.formvalue.value.salary;

    this.apiservice.postemployee(this.emolyeeModelobj).subscribe(res=>{
    console.log(res);
      alert("employee added successfully")
      let ref = document.getElementById('close')
      ref?.click();
      this.formvalue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert('something went wrong')
    })

  }

  getAllEmployee(){
    this.apiservice.getemployee().subscribe(res=>{
      this.employeeDta=res;
    })
  }

  deleteAllemployee(row:any){
    this.apiservice.deleteemployee(row.id).subscribe(res=>{
      alert("emplyee deleted");
      this.getAllEmployee();
    })
  }

  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.emolyeeModelobj.id = row.id;
    this.formvalue.controls['firstName'].setValue(row.firstName);
    this.formvalue.controls['lastName'].setValue(row.lastName);
    this.formvalue.controls['email'].setValue(row.email);
    this.formvalue.controls['mobile'].setValue(row.mobile);
    this.formvalue.controls['salary'].setValue(row.salary);
  }

  updatetEmployeeDetails(){
    this.emolyeeModelobj.firstName = this.formvalue.value.firstName;
    this.emolyeeModelobj.lastName = this.formvalue.value.lastName;
    this.emolyeeModelobj.email = this.formvalue.value.email;
    this.emolyeeModelobj.mobile = this.formvalue.value.mobile;
    this.emolyeeModelobj.salary = this.formvalue.value.salary;

    this.apiservice.updateemployee(this.emolyeeModelobj,this.emolyeeModelobj.id).subscribe(res=>{
      alert("updated sucessfully");
      let ref = document.getElementById('close')
      ref?.click();
      this.formvalue.reset();
      this.getAllEmployee();
    })
  }
}
