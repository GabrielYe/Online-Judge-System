import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private httpClient: HttpClient) { }

  //get the problem list;
  getProblems(): Observable<Problem[]> {
    this.httpClient.get('api/v1/problems')
      .toPromise()
      .then((res: any) => {
        this._problemSource.next(res);
      })
      .catch(this.handleError);

      return this._problemSource.asObservable();
  }

  //get a specific problem using problem id;
  getProblem(id: number): Promise<Problem> {
    return this.httpClient.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  //add new problems, using json as content type;
  addProblem(problem: Problem) {
    const option = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post('api/v1/problems/newProblem', problem, option)
      .toPromise()
      .then((res: any) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }
}
