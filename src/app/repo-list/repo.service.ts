import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RepoService {

   private _repoUrl = './../../assets/api/repos.json';
  // private _repoUrl = 'https://api.github.com/users/MonsterGameDev/repos';
  // private _repoUrl = 'https://api.github.com/users/peter/repos';

  constructor (private _http: HttpClient) {

  }

  getRepos(): Observable<any> {
    return this._http.get<any[]>(this._repoUrl)
      .do (data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  handleError(err: HttpErrorResponse): any {
    console.log(err.message);
    return Observable.throw(err.message);

  }
}
