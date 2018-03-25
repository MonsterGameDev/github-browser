import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/';


import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component/star.component';
// import { RepoService } from './repo-list/repo.service';



@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
