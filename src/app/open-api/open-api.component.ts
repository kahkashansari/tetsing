import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-api',
  templateUrl: './open-api.component.html',
  styleUrls: ['./open-api.component.css']
})
export class OpenApiComponent implements OnInit {
  displayedColumns: string[] = ['title', 'original_title', 'overview', 'backdrop_path', 'release_date'];
  dataSource: any;

  constructor(private http: HttpClient) {
    this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=1987ad78125732b4756cee8db2a44f8c&language=en-US').subscribe(
      (movies: any) => {
        for (let x = 0; x <= movies.results.length; x++) {
          this.dataSource = movies.results

        }

      },
      (er) => {
        console.log(er)
      }
    )

  }


  ngOnInit(): void {

  }

}
