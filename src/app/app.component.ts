import { Component } from '@angular/core';
import { RepoService } from './repo-list/repo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  template: `<div>
              <h2>{{ pageTitle }}</h2>
              <div>My first component</div>
              <gh-repo-list></gh-repo-list>
            </div>`,
  providers: [RepoService]
})
export class AppComponent {
  pageTitle = 'Github Browser';
}
