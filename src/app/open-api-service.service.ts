import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OPenApiServiceService {

  constructor(private http:HttpClient) { }

  getApiData(){
    console.log(environment.apiKey);
    console.log(environment.apiURL);

    var path=`${environment.apiURL}/3/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    
    console.log(path);
  
    return this.http.get(path)
    
  }
}
