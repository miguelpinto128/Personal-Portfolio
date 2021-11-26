import { Component, OnInit } from '@angular/core';
import { RepoModel } from 'src/app/repo-model.model';
import {faArrowRight,faArrowLeft,} from '@fortawesome/free-solid-svg-icons';
import { RepoServiceService } from 'src/app/repo-service.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  repos: RepoModel[] = [];
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  p: number = 1;

  constructor(
    private repoService: RepoServiceService
    ) {}

  ngOnInit(): void {
    this.repoService.getRepo(1).subscribe((resp) => {
      this.loadRepos(resp);
    });
  }

  loadRepos(repos: any) {
    this.repos = repos;
  }


}
