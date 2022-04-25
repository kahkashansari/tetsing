import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MaterialserviceService } from '../materialservice.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-angularmaterial-curd',
  templateUrl: './angularmaterial-curd.component.html',
  styleUrls: ['./angularmaterial-curd.component.css']
})
export class AngularmaterialCurdComponent implements OnInit {

  displayedColumns: string[] = ['productName', 'category', 'freshness', 'price', 'comment', 'date','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dailog:MatDialog, private api : MaterialserviceService,private http:HttpClient){

  }

  ngOnInit(): void {
    // this.getAllProducts();
    this.http.get('https://api.themoviedb.org/3/movie/20526/images?api_key=1987ad78125732b4756cee8db2a44f8c').subscribe(
      (_t)=>{
        console.log(_t)
       
      },
      (er)=>{
        console.log(er)
      }
    )
    
  }




  openDialog() {
    this.dailog.open(DialogComponent,{
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        this.getAllProducts();
      }
    })
  }

  getAllProducts(){
    this.api.getProduct().subscribe({
      next:(res)=>{
        // console.log(res);
        
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("error while fetchinmg the data")
      }
    })
  }
  editProduct(row:any){
    this.dailog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val=='update'){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(id:number){
    this.api.deletProduct(id).subscribe({
      next:(res)=>{
        alert("product deleted sucessfully");
        this.getAllProducts();
      },
      error:()=>{
        alert("error")
      }

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
