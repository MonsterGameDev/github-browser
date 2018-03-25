import { Component } from '@angular/core';
import { RepoService } from './repo-list/repo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  template: `<div>
              <nav class="navbar navbar-default">
                <div class="container-fluid">
                <a class='navbar-brand'>{{ pageTitle }}</a>
                <ul class="nav navbar-nav">
                  <li><a [routerLink]="['/home']">Home</a></li>
                  <li><a [routerLink]="['/repos']">Repos</a></li>
                </ul>
                </div>
                <router-outlet></router-outlet>
              </nav>
            </div>`,
  providers: [RepoService]
})
export class AppComponent {
  pageTitle = 'Github Browser';
}
