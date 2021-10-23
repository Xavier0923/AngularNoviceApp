import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-novice-app';

  searchText = "111"

  data: any[] = [];

  constructor(private http: HttpClient){
      http.get<any[]>('/api/articles.json').subscribe({
        next:(res) => {
          this.data = res;
        },
        error: (res) => {
          console.log(res);
        }
      })
  }

  deleteArticle(id: number){
    console.log("Delete Article ID : " + id);

  }


}
