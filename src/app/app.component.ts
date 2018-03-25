import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h2>{{ pageTitle }}</h2>
              <div>My first component</div>
            </div>`
})
export class AppComponent {
  pageTitle = 'Github Browser';
}
