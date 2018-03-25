import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component/star.component'



@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
