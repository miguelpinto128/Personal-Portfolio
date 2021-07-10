import { Component, OnInit } from '@angular/core';
import { RepoModel } from 'src/app/repo-model.model';
import { RepoServiceService } from 'src/app/repo-service.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  repos: RepoModel[] = [];

  constructor(private repoService: RepoServiceService) { }

  ngOnInit(): void {
    this.repoService.getRepo(1).subscribe((resp) => {
      debugger;
      this.loadRepos(resp);
    });
  }

  loadRepos(repos: any) {
    this.repos = repos;
  }


}
