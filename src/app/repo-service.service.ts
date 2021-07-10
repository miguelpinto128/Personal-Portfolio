import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepoModel } from './repo-model.model';
import { map } from 'rxjs/operators';

// 'https://api.github.com/users/miguelpinto128/repos'

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {

  constructor(private http: HttpClient) { }

  getRepo(page: number): Observable<RepoModel[]> {
    let url = `https://api.github.com/users/miguelpinto128/repos?page=${page}`;
    return this.http.get(url).pipe(map((res) => {
      return this.convertRepo(res);
    })
    );
  }


  convertRepo(response: any): RepoModel[] {
    let repoResponse = response;
    let repos = [];

    let i = 0;
    for (i = 0; i < repoResponse.length; i++) {
      let id = repoResponse[i].id;
      let name = repoResponse[i].name;
      let description = repoResponse[i].description == null ? '' : repoResponse[i].description;
      let picture = 'https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png';
      let html_url = repoResponse[i].html_url;
      let created_at = repoResponse[i].created_at;
      let image = repoResponse[i].image;


      repos.push(new RepoModel(
        id,
        name,
        description,
        picture,
        html_url,
        created_at,
        image,
      )
      );
    }
    return repos;
  }


}
