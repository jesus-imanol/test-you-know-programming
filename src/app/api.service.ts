import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  userId: number;
  id: number;
  body:string;
  title:string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(readonly http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(response =>
        response.map(user => ({
          ...user,
          body: user.body.toUpperCase()
        }))
      )
    )
  }
}
