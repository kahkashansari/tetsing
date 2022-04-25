import { Component, OnInit } from '@angular/core';
import { OPenApiServiceService } from '../open-api-service.service';

@Component({
  selector: 'app-api-movie',
  templateUrl: './api-movie.component.html',
  styleUrls: ['./api-movie.component.css']
})
export class ApiMovieComponent implements OnInit {

  constructor(private movies:OPenApiServiceService) { }

  public apiData:any;
  ngOnInit(): void {
    this.movies.getApiData().subscribe(
      (res:any)=>{
        console.log(res);
        console.log(res['results']);
        this.apiData=res['results']
        
        
    })
  }

}
