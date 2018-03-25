import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  template: `<div>
              <h2>{{ pageTitle }}</h2>
              <div>My first component</div>
              <gh-repo-list></gh-repo-list>
            </div>`
})
export class AppComponent {
  pageTitle = 'Github Browser';
}
