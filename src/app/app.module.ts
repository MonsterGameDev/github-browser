import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component/star.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
// import { RepoService } from './repo-list/repo.service';



@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    StarComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'repos', component: RepoListComponent},
      {path: 'welcome', component: HomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  // providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
