import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
  selector: 'gh-repo-list',
  templateUrl: './repo-list.component.html'

})
export class RepoListComponent implements OnInit {
  pageTitle = 'Repo List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'Aske';

  repos: any[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  constructor(private _repoService: RepoService) {

  }

  ngOnInit(): void {
    this.repos = this._repoService.getRepos();
  }
}
